import * as THREE from 'three';
import './style.css';
import { createCampus } from './world/campus.js';
import { createHighway } from './world/highway.js';
import { createCityscape } from './world/cityscape.js';
import { createMountains } from './world/mountains.js';
import { createLuxuryMansion } from './world/mansion.js';
import { MansionHelicopter } from './world/helicopter.js';
import { CampusLife } from './world/campusLife.js';
import { Player } from './player/player.js';
import { Controls } from './player/controls.js';
import { Missions } from './game/missions.js';
import { GameModes } from './game/gameModes.js';
import { AmbientSound } from './game/ambient.js';
import { HUD } from './ui/hud.js';
import { Menu } from './ui/menu.js';

const gameRoot = document.querySelector('#game');
const uiRoot = document.querySelector('#ui');
const scene = new THREE.Scene();
scene.background = new THREE.Color('#a9c8d0');
scene.fog = new THREE.Fog('#a9c8d0', 180, 390);

const camera = new THREE.PerspectiveCamera(62, window.innerWidth / window.innerHeight, 0.1, 900);
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
gameRoot.append(renderer.domElement);

scene.add(new THREE.HemisphereLight('#d7edf0', '#65614c', 2.1));
const sun = new THREE.DirectionalLight('#fff0d6', 3.2);
sun.position.set(-80, 120, 45);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -180;
sun.shadow.camera.right = 180;
sun.shadow.camera.top = 180;
sun.shadow.camera.bottom = -180;
sun.shadow.camera.near = 1;
sun.shadow.camera.far = 380;
scene.add(sun);

const campus = createCampus(scene);
const campusBuildingCollisionBoxes = campus.buildings.flatMap((building) => (
  building.collisionBoxes.map((bounds) => ({ ...bounds, campusBuilding: true }))
));
const highway = createHighway(scene, campus.polygon);
const mansion = createLuxuryMansion(scene, campus.polygon);
const cityscape = createCityscape(scene, campus.polygon, [{
  x: (mansion.bounds.minX + mansion.bounds.maxX) / 2,
  z: (mansion.bounds.minZ + mansion.bounds.maxZ) / 2,
  halfWidth: (mansion.bounds.maxX - mansion.bounds.minX) / 2 + 12,
  halfDepth: (mansion.bounds.maxZ - mansion.bounds.minZ) / 2 + 12,
}]);
createMountains(scene, campus.polygon, mansion.bounds);
const campusLife = new CampusLife(scene);
const helicopter = new MansionHelicopter(scene, mansion);
const player = new Player(scene, campus.spawn);
const ambient = new AmbientSound();
const hud = new HUD(uiRoot, campus, mansion);
hud.render();
const missions = new Missions((event) => {
  if (event.type === 'progress') {
    hud.updateProgress(event.progress);
    menu?.setProgress(event.progress);
  } else if (event.type === 'achievement') {
    hud.notify(`Achievement unlocked: ${event.name}`);
  } else if (event.type === 'error') {
    hud.notify(event.message);
  }
});
hud.updateProgress(missions.progress);
const modes = new GameModes(scene, campus, missions, hud);
let menu;
let controls;
let currentMode = 'explorer';
let night = false;
let raining = false;
let rain = null;

const startPositions = {
  explorer: campus.spawn,
  parkour: new THREE.Vector3(-14, 0, 18),
  race: new THREE.Vector3(-27, 0, 94),
  treasure: new THREE.Vector3(-40, 0, 53),
  robotics: new THREE.Vector3(31, 0, -68),
  basketball: new THREE.Vector3(100, 0, -90),
};

function setPlayerPosition(position) {
  player.position.copy(position);
  player.velocityY = 0;
  player.grounded = true;
  player.group.position.copy(position);
  player.group.rotation.y = Math.PI;
}

function pauseGame() {
  if (!controls.enabled) return;
  controls.setEnabled(false);
  hud.showPause({
    onContinue: () => {
      hud.closePause();
      controls.setEnabled(true);
    },
    onRestart: () => startMode(currentMode),
    onMenu: () => returnToMenu(),
    onTheme: () => toggleNight(),
    onVolume: (volume) => ambient.setVolume(volume),
  });
}

function toggleFortuner() {
  if (campusLife.isRidingMotorcycle) return;
  const result = campusLife.toggleDriving(player, scene);
  if (result === 'below-ground') {
    hud.notify('Drive back up the parking ramp before exiting the supercar.');
    return;
  }
  if (result === 'too-far') {
    hud.notify('Walk up beside your supercar at the main gate first.');
    return;
  }
  const driving = result === 'entered';
  controls.setVehicle(driving ? campusLife.personalFortuner : null);
  hud.setVehicleState({
    nearby: campusLife.isNearFortuner(player.position),
    driving,
    speed: campusLife.carSpeed,
    blocked: campusLife.driveBlocked,
  });
  hud.notify(driving ? 'You are in your supercar. WASD to drive; E to exit.' : 'You stepped out of your supercar.');
}

function toggleMotorcycle() {
  if (campusLife.isDriving || helicopter.isPiloting) return;
  const result = campusLife.toggleMotorcycle(player, scene);
  if (result === 'too-far') {
    hud.notify('Walk up beside the Bullet motorcycle at the main gate first.');
    return;
  }
  const riding = result === 'entered';
  controls.setVehicle(riding ? campusLife.bulletElectra : null);
  if (riding) ambient.startMotorcycle();
  else ambient.stopMotorcycle();
  hud.notify(riding
    ? 'You are on the Bullet motorcycle. W/S accelerate or reverse; A/D steer; E to get off.'
    : 'You stepped off the motorcycle.');
}

function toggleHelicopter() {
  if (campusLife.isDriving || campusLife.isRidingMotorcycle) return;
  if (helicopter.isPiloting) {
    const result = helicopter.exit(player);
    if (result === 'must-land') {
      hud.notify('Land the helicopter and stop before exiting. Use Ctrl or F to descend.');
      return;
    }
    controls.setVehicle(null);
    hud.notify('You landed and stepped out of the helicopter.');
    return;
  }
  if (!helicopter.enter(player)) return;
  controls.setVehicle(helicopter.helicopter);
  hud.notify('Helicopter ready. W/S fly, A/D turn, Space/R rise, Ctrl/F descend; land to exit.');
}

function returnToMenu() {
  if (campusLife.isDriving) toggleFortuner();
  if (campusLife.isRidingMotorcycle) toggleMotorcycle();
  if (helicopter.isPiloting) {
    helicopter.forceLand(player);
    controls.setVehicle(null);
  }
  controls.setEnabled(false);
  modes.stop();
  hud.closePause();
  hud.show(false);
  menu.open();
}

async function startMode(mode) {
  if (campusLife.isDriving) toggleFortuner();
  if (campusLife.isRidingMotorcycle) toggleMotorcycle();
  if (helicopter.isPiloting) {
    helicopter.forceLand(player);
    controls.setVehicle(null);
  }
  currentMode = mode;
  setPlayerPosition(startPositions[mode] || campus.spawn);
  if (mode === 'basketball') player.group.rotation.y = Math.PI;
  modes.start(mode);
  hud.show(true);
  hud.closePause();
  controls.setEnabled(true);
  hud.setMapVisible(true);
  await ambient.start();
}

function toggleNight() {
  night = !night;
  const background = night ? '#111b2c' : '#a9c8d0';
  scene.background.set(background);
  scene.fog.color.set(background);
  scene.fog.near = night ? 100 : 180;
  scene.fog.far = night ? 280 : 390;
  sun.intensity = night ? 0.55 : 3.2;
  scene.children.find((child) => child.isHemisphereLight).intensity = night ? 0.82 : 2.1;
  hud.notify(night ? 'Night campus' : 'Day campus');
}

function toggleRain() {
  raining = !raining;
  if (raining) {
    const geometry = new THREE.BoxGeometry(0.035, 1.1, 0.035);
    const material = new THREE.MeshBasicMaterial({ color: '#b8d5e0', transparent: true, opacity: 0.55 });
    rain = new THREE.InstancedMesh(geometry, material, 340);
    rain.userData.drops = Array.from({ length: 340 }, () => ({
      x: (Math.random() - 0.5) * 70,
      y: Math.random() * 32,
      z: (Math.random() - 0.5) * 70,
    }));
    rain.castShadow = false;
    scene.add(rain);
  } else if (rain) {
    scene.remove(rain);
    rain.geometry.dispose();
    rain.material.dispose();
    rain = null;
  }
  hud.notify(raining ? 'Rain started' : 'Rain cleared');
}

controls = new Controls(camera, renderer, player, {
  interact: () => {
    if (helicopter.isPiloting || helicopter.isNear(player.position)) toggleHelicopter();
    else if (campusLife.isRidingMotorcycle || campusLife.isNearMotorcycle(player.position)) toggleMotorcycle();
    else if (campusLife.isDriving || campusLife.isNearFortuner(player.position)) toggleFortuner();
    else if (campusLife.interact(player)) hud.notify('Campus safety: keep to marked paths and follow staff directions.');
    else modes.interact(player);
  },
  pause: pauseGame,
  mapChanged: (visible) => hud.notify(visible ? 'Overhead campus map view' : 'Third-person map view'),
});

hud.bindActions({
  map: () => controls.toggleMap(),
  view: () => {
    controls.toggleFirstPerson();
    hud.notify(controls.firstPerson ? 'First-person view' : 'Third-person view');
  },
  people: () => {
    campusLife.setPeopleVisible(!campusLife.people.visible);
    hud.setCampusLife({ peopleVisible: campusLife.people.visible, vehiclesVisible: campusLife.vehicles.visible });
    hud.notify(`Campus people ${campusLife.people.visible ? 'shown' : 'hidden'}`);
  },
  vehicles: () => {
    campusLife.setVehiclesVisible(!campusLife.vehicles.visible);
    hud.setCampusLife({ peopleVisible: campusLife.people.visible, vehiclesVisible: campusLife.vehicles.visible });
    hud.notify(`Campus vehicles ${campusLife.vehicles.visible ? 'shown' : 'hidden'}`);
  },
  vehicle: toggleFortuner,
  motorcycle: toggleMotorcycle,
  'motorcycle-sound': () => ambient.playMotorcycleSound(),
  helicopter: toggleHelicopter,
  campus: () => hud.toggleCampusInfo(),
  theme: toggleNight,
  rain: toggleRain,
  pause: pauseGame,
  virtualKey: (key, pressed) => controls.setVirtualKey(key, pressed),
  touch: (action) => {
    if (action === 'jump') player.jump();
  },
});

menu = new Menu(uiRoot, startMode);
menu.setProgress(missions.progress);
menu.open();

const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.04);
  const direction = controls.update(dt);
  campus.updateDoors(dt, player.position, campusLife.personalFortuner.position);
  const drivingSpeed = campusLife.updateDriving(
    dt,
    controls.keys,
    campus,
    [...campusBuildingCollisionBoxes, ...modes.collisionBoxes, ...cityscape.collisionBoxes, ...mansion.collisionBoxes, campus.lakeBounds],
    player,
  );
  const motorcycleSpeed = campusLife.updateMotorcycle(
    dt,
    controls.keys,
    campus,
    [...campusBuildingCollisionBoxes, ...modes.collisionBoxes, ...cityscape.collisionBoxes, ...mansion.collisionBoxes, campus.lakeBounds, campusLife.getPersonalCarBounds()],
    player,
  );
  ambient.setMotorcycleSpeed(motorcycleSpeed);
  const flyingSpeed = helicopter.update(dt, controls.keys, player);
  campus.lake.update(clock.elapsedTime);
  const movement = campusLife.isDriving || campusLife.isRidingMotorcycle || helicopter.isPiloting
    ? { moving: Math.abs(drivingSpeed || motorcycleSpeed || flyingSpeed) > 0.1, landed: false }
    : player.update(
      dt,
      direction,
      controls.keys.has('ShiftLeft') || controls.keys.has('ShiftRight'),
      campus,
      [...campusBuildingCollisionBoxes, ...modes.collisionBoxes, ...cityscape.collisionBoxes, ...mansion.collisionBoxes, campus.lakeBounds, campusLife.getPersonalCarBounds()],
    );
  modes.update(dt, player);
  highway.update(dt);
  campusLife.update(
    dt,
    player.position,
    campusLife.isDriving ? campusLife.personalFortuner.position : null,
  );
  campus.updateGate(
    dt,
    player.position,
    campusLife.isDriving ? campusLife.personalFortuner.position : null,
  );
  hud.setVehicleState({
    nearby: !campusLife.isDriving && campusLife.isNearFortuner(player.position),
    driving: campusLife.isDriving,
    speed: drivingSpeed,
    blocked: campusLife.driveBlocked,
  });
  hud.setMotorcycleState({
    nearby: !campusLife.isDriving && !helicopter.isPiloting
      && campusLife.isNearMotorcycle(player.position),
    riding: campusLife.isRidingMotorcycle,
    speed: motorcycleSpeed,
    blocked: campusLife.motorcycleBlocked,
  });
  hud.setHelicopterState({
    nearby: !helicopter.isPiloting && helicopter.isNear(player.position),
    piloting: helicopter.isPiloting,
    speed: flyingSpeed,
    altitude: helicopter.helicopter.position.y,
  });
  controls.update(dt);
  if (rain) {
    const matrix = new THREE.Matrix4();
    const drops = rain.userData.drops;
    drops.forEach((drop, index) => {
      drop.y -= 32 * dt;
      if (drop.y < 0) drop.y = 28 + Math.random() * 8;
      matrix.makeTranslation(player.position.x + drop.x, player.position.y + drop.y, player.position.z + drop.z);
      rain.setMatrixAt(index, matrix);
    });
    rain.instanceMatrix.needsUpdate = true;
  }
  if (controls.enabled) hud.updateMap(player.position, campusLife.personalFortuner.position, helicopter.helicopter.position);
  if (movement.landed) hud.notify('Landed');
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
});

window.addEventListener('beforeunload', () => {
  controls.setEnabled(false);
  hud.closePause();
  renderer.dispose();
});
