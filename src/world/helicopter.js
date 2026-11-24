import * as THREE from 'three';

const helicopterPaint = new THREE.MeshStandardMaterial({ color: '#315b58', roughness: 0.5, metalness: 0.18 });
const helicopterTrim = new THREE.MeshStandardMaterial({ color: '#d8bd79', roughness: 0.42, metalness: 0.44 });
const helicopterGlass = new THREE.MeshStandardMaterial({
  color: '#9ac6c8',
  roughness: 0.2,
  metalness: 0.18,
  transparent: true,
  opacity: 0.72,
});
const rotorMaterial = new THREE.MeshStandardMaterial({ color: '#313a3a', roughness: 0.55, metalness: 0.36 });
const HELICOPTER_SCALE = 1.8;
const HELIPAD_SURFACE_Y = 0.16;
const SKID_GROUND_CLEARANCE = 0.29;

function box(parent, material, size, position) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), material);
  mesh.position.set(...position);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function createHelicopter(scene, position) {
  const helicopter = new THREE.Group();
  helicopter.name = 'Mansion driveable helicopter';
  helicopter.position.copy(position);
  helicopter.scale.setScalar(HELICOPTER_SCALE);

  const body = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 12), helicopterPaint);
  body.scale.set(1.05, 0.82, 2.45);
  body.position.y = 1.15;
  body.castShadow = true;
  helicopter.add(body);

  const cabin = new THREE.Mesh(new THREE.SphereGeometry(1, 14, 10), helicopterGlass);
  cabin.scale.set(0.91, 0.7, 1.22);
  cabin.position.set(0, 1.42, 0.9);
  cabin.castShadow = true;
  helicopter.add(cabin);
  box(helicopter, helicopterPaint, [1.85, 0.16, 2.65], [0, 0.72, 0.3]);
  box(helicopter, helicopterTrim, [0.09, 1.04, 0.1], [0, 1.36, 1.72]);
  box(helicopter, helicopterTrim, [1.7, 0.08, 0.1], [0, 1.88, 0.35]);
  box(helicopter, helicopterPaint, [0.32, 0.34, 5.2], [0, 1.28, -3.48]);
  box(helicopter, helicopterPaint, [1.55, 0.16, 0.64], [0, 1.32, -5.86]);
  box(helicopter, helicopterTrim, [0.18, 0.12, 0.8], [0, 1.48, -5.86]);

  const tailRotor = new THREE.Group();
  tailRotor.position.set(0, 1.45, -5.92);
  helicopter.add(tailRotor);
  for (const rotation of [0, Math.PI / 2]) {
    const blade = box(tailRotor, rotorMaterial, [0.13, 1.1, 0.1], [0, 0, 0]);
    blade.rotation.z = rotation;
  }
  const tailHub = new THREE.Mesh(new THREE.SphereGeometry(0.18, 10, 8), helicopterTrim);
  tailRotor.add(tailHub);

  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 0.95, 10), helicopterTrim);
  mast.position.set(0, 2.12, -0.25);
  helicopter.add(mast);
  const rotor = new THREE.Group();
  rotor.name = 'Helicopter main rotor';
  rotor.position.set(0, 2.62, -0.25);
  helicopter.add(rotor);
  for (const rotation of [0, Math.PI / 2]) {
    const blade = box(rotor, rotorMaterial, [0.24, 0.1, 8.2], [0, 0, 0]);
    blade.rotation.y = rotation;
  }
  const rotorHub = new THREE.Mesh(new THREE.SphereGeometry(0.24, 12, 8), helicopterTrim);
  rotor.add(rotorHub);
  helicopter.userData.rotor = rotor;
  helicopter.userData.tailRotor = tailRotor;

  for (const side of [-1, 1]) {
    const skid = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 4.8, 8), rotorMaterial);
    skid.rotation.x = Math.PI / 2;
    skid.position.set(side * 0.92, 0.38, 0.05);
    helicopter.add(skid);
    for (const z of [-1.35, 1.25]) {
      const support = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.72, 8), helicopterTrim);
      support.position.set(side * 0.82, 0.7, z);
      helicopter.add(support);
    }
  }

  scene.add(helicopter);
  return helicopter;
}

export class MansionHelicopter {
  constructor(scene, mansion) {
    this.scene = scene;
    this.mansion = mansion;
    this.isPiloting = false;
    this.speed = 0;
    this.verticalSpeed = 0;
    this.landingAltitude = HELIPAD_SURFACE_Y - SKID_GROUND_CLEARANCE * HELICOPTER_SCALE;
    this.maxAltitude = this.landingAltitude + 140;

    const localPadPosition = new THREE.Vector3(0, 0, -47);
    mansion.group.add(this.createHelipad(localPadPosition));
    const helicopterPosition = mansion.group.localToWorld(new THREE.Vector3(0, 0.12, -47));
    helicopterPosition.y = this.landingAltitude;
    this.helicopter = createHelicopter(scene, helicopterPosition);
  }

  createHelipad(position) {
    const pad = new THREE.Group();
    pad.name = 'Mansion garden helipad';
    const concrete = new THREE.MeshStandardMaterial({ color: '#555e5b', roughness: 0.9 });
    const paint = new THREE.MeshStandardMaterial({ color: '#f1ead3', roughness: 0.78 });
    const surface = new THREE.Mesh(new THREE.BoxGeometry(36, 0.16, 36), concrete);
    surface.position.y = 0.08;
    surface.receiveShadow = true;
    pad.add(surface);

    const ring = new THREE.Mesh(new THREE.TorusGeometry(12.5, 0.16, 8, 64), paint);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.18;
    pad.add(ring);
    for (const x of [-2.6, 2.6]) {
      const upright = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.08, 5.5), paint);
      upright.position.set(x, 0.19, 0);
      pad.add(upright);
    }
    const crossbar = new THREE.Mesh(new THREE.BoxGeometry(5.8, 0.08, 0.72), paint);
    crossbar.position.set(0, 0.19, 0);
    pad.add(crossbar);

    const beaconMaterial = new THREE.MeshStandardMaterial({
      color: '#f3d577',
      emissive: '#e1a941',
      emissiveIntensity: 0.65,
    });
    for (const x of [-15.5, 15.5]) {
      for (const z of [-15.5, 15.5]) {
        const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.34, 10, 8), beaconMaterial);
        beacon.position.set(x, 0.46, z);
        pad.add(beacon);
      }
    }
    pad.position.copy(position);
    return pad;
  }

  isNear(position) {
    return Math.hypot(position.x - this.helicopter.position.x, position.z - this.helicopter.position.z) < 7;
  }

  enter(player) {
    if (this.isPiloting || !this.isNear(player.position)) return false;
    player.enterVehicle(this.helicopter);
    player.group.position.set(0.18, 0.38, 0.72);
    player.group.scale.setScalar(0.3);
    this.isPiloting = true;
    this.speed = 0;
    this.verticalSpeed = 0;
    return true;
  }

  exit(player) {
    if (!this.isPiloting) return 'not-piloting';
    if (this.helicopter.position.y > this.landingAltitude + 0.25 || Math.abs(this.speed) > 1.2) return 'must-land';
    const exitPosition = new THREE.Vector3(2.4, 0, 0)
      .applyQuaternion(this.helicopter.quaternion)
      .add(this.helicopter.position);
    player.leaveVehicle(this.scene, exitPosition);
    this.isPiloting = false;
    this.speed = 0;
    this.verticalSpeed = 0;
    return 'exited';
  }

  forceLand(player) {
    if (!this.isPiloting) return;
    this.helicopter.position.y = this.landingAltitude;
    this.speed = 0;
    this.verticalSpeed = 0;
    this.exit(player);
  }

  update(dt, keys, player) {
    this.helicopter.userData.rotor.rotation.y += dt * (this.isPiloting ? 42 : 5);
    this.helicopter.userData.tailRotor.rotation.z += dt * (this.isPiloting ? 36 : 4);
    if (!this.isPiloting) return 0;

    const accelerating = keys.has('KeyW') || keys.has('ArrowUp');
    const reversing = keys.has('KeyS') || keys.has('ArrowDown');
    const steering = Number(keys.has('KeyD') || keys.has('ArrowRight'))
      - Number(keys.has('KeyA') || keys.has('ArrowLeft'));
    const climbing = keys.has('Space') || keys.has('KeyR');
    const descending = keys.has('ControlLeft') || keys.has('KeyF');
    const maxSpeed = keys.has('ShiftLeft') || keys.has('ShiftRight') ? 34 : 24;
    const desiredSpeed = Number(accelerating) * maxSpeed - Number(reversing) * 11;
    this.speed = THREE.MathUtils.damp(this.speed, desiredSpeed, 1.8, dt);
    this.helicopter.rotation.y += steering * dt * 1.25;

    const desiredVerticalSpeed = Number(climbing) * 10 - Number(descending) * 8;
    this.verticalSpeed = THREE.MathUtils.damp(this.verticalSpeed, desiredVerticalSpeed, 2.4, dt);
    const heading = this.helicopter.rotation.y;
    const nextX = this.helicopter.position.x + Math.sin(heading) * this.speed * dt;
    const nextZ = this.helicopter.position.z + Math.cos(heading) * this.speed * dt;
    this.helicopter.position.x = THREE.MathUtils.clamp(nextX, -270, 270);
    this.helicopter.position.z = THREE.MathUtils.clamp(nextZ, -330, 330);
    this.helicopter.position.y = THREE.MathUtils.clamp(
      this.helicopter.position.y + this.verticalSpeed * dt,
      this.landingAltitude,
      this.maxAltitude,
    );
    const forwardPitch = THREE.MathUtils.clamp((this.speed / maxSpeed) * 0.14, -0.14, 0.14);
    this.helicopter.rotation.x = THREE.MathUtils.damp(this.helicopter.rotation.x, forwardPitch, 3, dt);
    const turnBank = THREE.MathUtils.clamp(-steering * Math.min(Math.abs(this.speed) / maxSpeed, 1) * 0.16, -0.16, 0.16);
    this.helicopter.rotation.z = THREE.MathUtils.damp(this.helicopter.rotation.z, turnBank, 3, dt);
    player.position.copy(this.helicopter.position);
    return this.speed;
  }
}
