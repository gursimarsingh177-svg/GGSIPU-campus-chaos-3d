import * as THREE from 'three';
import { CAMPUS_ROUTES, createRoadNetwork, createPavedArea } from './roads.js';
import { createAcademicBuilding, createCampusRotunda, createLearningResourceCentre } from './buildings.js';
import { createCampusLake } from './lake.js';

const CAMPUS_POLYGON = [
  [-127, 3], [-56, 128], [1, 119], [-12, 48], [15, 3], [35, -28],
  [58, -59], [87, -59], [87, -75], [101, -78], [170, -84],
  [171, -148], [153, -148], [124, -145], [56, -101], [-56, -41],
  [-56, -36], [-127, 3],
];
const BASEMENT_OPENING = { minX: 110, maxX: 164, minZ: -144, maxZ: -96 };
const PARKING_RAMP = { centerX: 140, startZ: -95, endZ: -124, halfWidth: 11 };
const BASEMENT_FLOOR_Y = -4.8;

function insideCampus(x, z) {
  let inside = false;
  for (let i = 0, j = CAMPUS_POLYGON.length - 1; i < CAMPUS_POLYGON.length; j = i++) {
    const [xi, zi] = CAMPUS_POLYGON[i];
    const [xj, zj] = CAMPUS_POLYGON[j];
    if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) inside = !inside;
  }
  return inside;
}

function canMove(fromX, fromZ, toX, toZ, radius = 0) {
  const worldLimitX = 280 - radius;
  const worldLimitZ = 340 - radius;
  if (Math.abs(toX) > worldLimitX || Math.abs(toZ) > worldLimitZ) return false;

  const startsInside = insideCampus(fromX, fromZ);
  const endsInside = insideCampus(toX, toZ);
  if (startsInside === endsInside) return true;

  const dx = toX - fromX;
  const dz = toZ - fromZ;
  const gateA = CAMPUS_POLYGON[1];
  const gateB = CAMPUS_POLYGON[2];
  const edgeX = gateB[0] - gateA[0];
  const edgeZ = gateB[1] - gateA[1];
  const denominator = dx * edgeZ - dz * edgeX;
  if (Math.abs(denominator) < 1e-8) return false;

  const offsetX = gateA[0] - fromX;
  const offsetZ = gateA[1] - fromZ;
  const movementFraction = (offsetX * edgeZ - offsetZ * edgeX) / denominator;
  const edgeFraction = (offsetX * dz - offsetZ * dx) / denominator;
  if (movementFraction < 0 || movementFraction > 1 || edgeFraction < 0 || edgeFraction > 1) return false;

  const crossingX = fromX + dx * movementFraction;
  const crossingZ = fromZ + dz * movementFraction;
  const gateCenterX = -27;
  const gateCenterZ = 123.4;
  return Math.hypot(crossingX - gateCenterX, crossingZ - gateCenterZ) < 11 - radius;
}

function distanceToSegment(x, z, ax, az, bx, bz) {
  const dx = bx - ax;
  const dz = bz - az;
  const lengthSquared = dx * dx + dz * dz;
  const t = lengthSquared === 0 ? 0 : THREE.MathUtils.clamp(((x - ax) * dx + (z - az) * dz) / lengthSquared, 0, 1);
  return Math.hypot(x - (ax + t * dx), z - (az + t * dz));
}

function createGround(scene) {
  const shape = new THREE.Shape();
  CAMPUS_POLYGON.forEach(([x, z], index) => {
    if (index === 0) shape.moveTo(x, -z);
    else shape.lineTo(x, -z);
  });
  const opening = new THREE.Path();
  opening.moveTo(BASEMENT_OPENING.minX, -BASEMENT_OPENING.maxZ);
  opening.lineTo(BASEMENT_OPENING.maxX, -BASEMENT_OPENING.maxZ);
  opening.lineTo(BASEMENT_OPENING.maxX, -BASEMENT_OPENING.minZ);
  opening.lineTo(BASEMENT_OPENING.minX, -BASEMENT_OPENING.minZ);
  opening.closePath();
  shape.holes.push(opening);
  const ground = new THREE.Mesh(
    new THREE.ShapeGeometry(shape),
    new THREE.MeshStandardMaterial({ color: '#788269', roughness: 1, side: THREE.DoubleSide }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.02;
  ground.receiveShadow = true;
  scene.add(ground);

  const baseMaterial = new THREE.MeshStandardMaterial({ color: '#746c5d', roughness: 1 });
  const addBaseSection = (width, depth, x, z) => {
    const base = new THREE.Mesh(new THREE.BoxGeometry(width, 1.2, depth), baseMaterial);
    base.position.set(x, -0.72, z);
    base.receiveShadow = true;
    scene.add(base);
  };
  addBaseSection(BASEMENT_OPENING.minX + 200, 360, (BASEMENT_OPENING.minX - 200) / 2, 0);
  addBaseSection(200 - BASEMENT_OPENING.maxX, 360, (200 + BASEMENT_OPENING.maxX) / 2, 0);
  addBaseSection(BASEMENT_OPENING.maxX - BASEMENT_OPENING.minX, 180 - BASEMENT_OPENING.maxZ,
    (BASEMENT_OPENING.minX + BASEMENT_OPENING.maxX) / 2, (180 + BASEMENT_OPENING.maxZ) / 2);
  addBaseSection(BASEMENT_OPENING.maxX - BASEMENT_OPENING.minX, BASEMENT_OPENING.minZ + 180,
    (BASEMENT_OPENING.minX + BASEMENT_OPENING.maxX) / 2, (BASEMENT_OPENING.minZ - 180) / 2);
}

function createUndergroundParking(scene) {
  const parking = new THREE.Group();
  parking.name = 'Learning Resource Centre · underground basement parking';

  const concrete = new THREE.MeshStandardMaterial({ color: '#8b8b80', roughness: 0.92, side: THREE.DoubleSide });
  const floorMaterial = new THREE.MeshStandardMaterial({ color: '#555b59', roughness: 0.96 });
  const stripeMaterial = new THREE.MeshStandardMaterial({ color: '#e5d6a8', roughness: 0.84 });
  const rampMaterial = new THREE.MeshStandardMaterial({ color: '#4d5351', roughness: 0.95, side: THREE.DoubleSide });
  const pillarMaterial = new THREE.MeshStandardMaterial({ color: '#d8d0bc', roughness: 0.9 });
  const parkingWidth = BASEMENT_OPENING.maxX - BASEMENT_OPENING.minX;
  const parkingDepth = BASEMENT_OPENING.maxZ - BASEMENT_OPENING.minZ;
  const parkingCenterX = (BASEMENT_OPENING.minX + BASEMENT_OPENING.maxX) / 2;
  const parkingCenterZ = (BASEMENT_OPENING.minZ + BASEMENT_OPENING.maxZ) / 2;
  const floorY = -4.8;
  const wallCenterY = -2.4;
  const wallHeight = 4.8;
  const wallThickness = 0.8;

  const floor = new THREE.Mesh(new THREE.BoxGeometry(parkingWidth, 0.35, parkingDepth), floorMaterial);
  floor.position.set(parkingCenterX, floorY, parkingCenterZ);
  floor.receiveShadow = true;
  parking.add(floor);

  const roofMaterial = new THREE.MeshStandardMaterial({ color: '#777a73', roughness: 0.94, side: THREE.DoubleSide });
  const addRoof = (width, depth, x, z) => {
    const roof = new THREE.Mesh(new THREE.BoxGeometry(width, 0.45, depth), roofMaterial);
    roof.position.set(x, -0.23, z);
    roof.receiveShadow = true;
    parking.add(roof);
  };
  addRoof(17, parkingDepth, 118.5, parkingCenterZ);
  addRoof(11, parkingDepth, 158.5, parkingCenterZ);
  addRoof(25, 20, 140, -134);

  const addWall = (width, height, depth, x, y, z) => {
    const wall = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), concrete);
    wall.position.set(x, y, z);
    wall.receiveShadow = true;
    parking.add(wall);
  };
  addWall(wallThickness, wallHeight, parkingDepth, BASEMENT_OPENING.minX, wallCenterY, parkingCenterZ);
  addWall(wallThickness, wallHeight, parkingDepth, BASEMENT_OPENING.maxX, wallCenterY, parkingCenterZ);
  addWall(parkingWidth, wallHeight, wallThickness, parkingCenterX, wallCenterY, BASEMENT_OPENING.minZ);
  addWall(18, wallHeight, wallThickness, 119, wallCenterY, BASEMENT_OPENING.maxZ);
  addWall(12, wallHeight, wallThickness, 158, wallCenterY, BASEMENT_OPENING.maxZ);

  const parkedCars = [[116.5, -137], [123.5, -137], [150, -137], [158.5, -137],
    [116.5, -130], [123.5, -130], [150, -130], [158.5, -130]];
  parkedCars.forEach(([x, z]) => {
    for (const side of [-1, 1]) {
      const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.025, 5.2), stripeMaterial);
      stripe.position.set(x + side * 3.25, floorY + 0.2, z);
      parking.add(stripe);
    }
  });

  for (const [x, z] of [[112, -108], [162, -108], [112, -140], [162, -140]]) {
    const pillar = new THREE.Mesh(new THREE.BoxGeometry(0.8, 4.3, 0.8), pillarMaterial);
    pillar.position.set(x, -2.55, z);
    pillar.castShadow = true;
    parking.add(pillar);
  }

  const carColors = ['#d9d4c7', '#496a72', '#b38b58', '#70816b', '#a8aca7', '#846968', '#577183'];
  parkedCars.forEach(([x, z], index) => {
    const car = new THREE.Group();
    car.name = `Basement parked car ${index + 1}`;
    const bodyMaterial = new THREE.MeshStandardMaterial({ color: carColors[index % carColors.length], roughness: 0.58, metalness: 0.08 });
    const body = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.9, 4.2), bodyMaterial);
    body.position.y = -4.0;
    body.castShadow = true;
    car.add(body);
    const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.75, 0.8, 2.1), bodyMaterial);
    cabin.position.set(0, -3.25, -0.15);
    car.add(cabin);
    const windows = new THREE.MeshStandardMaterial({ color: '#34494d', roughness: 0.35, metalness: 0.12 });
    const glass = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.48, 1.8), windows);
    glass.position.set(0, -3.3, -0.15);
    car.add(glass);
    car.position.set(x, 0, z);
    parking.add(car);
  });
  const obstacles = [
    ...parkedCars.map(([x, z], index) => ({
      name: `Basement parked car ${index + 1}`,
      minX: x - 1.5,
      maxX: x + 1.5,
      minZ: z - 2.4,
      maxZ: z + 2.4,
    })),
    ...[[112, -108], [162, -108], [112, -140], [162, -140]].map(([x, z], index) => ({
      name: `Basement pillar ${index + 1}`,
      minX: x - 0.6,
      maxX: x + 0.6,
      minZ: z - 0.6,
      maxZ: z + 0.6,
    })),
  ];

  const start = new THREE.Vector3(PARKING_RAMP.centerX, 0.12, PARKING_RAMP.startZ);
  const end = new THREE.Vector3(PARKING_RAMP.centerX, floorY + 0.22, PARKING_RAMP.endZ);
  const rampWidth = PARKING_RAMP.halfWidth * 2;
  const dx = end.x - start.x;
  const dz = end.z - start.z;
  const length = Math.hypot(dx, dz);
  const sideX = -dz / length;
  const sideZ = dx / length;
  const corner = (point, side) => new THREE.Vector3(
    point.x + sideX * rampWidth / 2 * side,
    point.y,
    point.z + sideZ * rampWidth / 2 * side,
  );
  const startLeft = corner(start, -1);
  const startRight = corner(start, 1);
  const endLeft = corner(end, -1);
  const endRight = corner(end, 1);
  const rampGeometry = new THREE.BufferGeometry();
  rampGeometry.setAttribute('position', new THREE.Float32BufferAttribute([
    startLeft.x, startLeft.y, startLeft.z,
    startRight.x, startRight.y, startRight.z,
    endLeft.x, endLeft.y, endLeft.z,
    endRight.x, endRight.y, endRight.z,
  ], 3));
  rampGeometry.setIndex([0, 2, 1, 1, 2, 3]);
  rampGeometry.computeVertexNormals();
  const ramp = new THREE.Mesh(rampGeometry, rampMaterial);
  ramp.name = 'Basement parking descending vehicle ramp';
  ramp.receiveShadow = true;
  parking.add(ramp);

  const canopyStart = start.clone();
  const canopyEnd = end.clone();
  canopyStart.y += 4.5;
  canopyEnd.y += 4.5;
  const canopyLeftStart = corner(canopyStart, -1.1);
  const canopyRightStart = corner(canopyStart, 1.1);
  const canopyLeftEnd = corner(canopyEnd, -1.1);
  const canopyRightEnd = corner(canopyEnd, 1.1);
  const canopyGeometry = new THREE.BufferGeometry();
  canopyGeometry.setAttribute('position', new THREE.Float32BufferAttribute([
    canopyLeftStart.x, canopyLeftStart.y, canopyLeftStart.z,
    canopyRightStart.x, canopyRightStart.y, canopyRightStart.z,
    canopyLeftEnd.x, canopyLeftEnd.y, canopyLeftEnd.z,
    canopyRightEnd.x, canopyRightEnd.y, canopyRightEnd.z,
  ], 3));
  canopyGeometry.setIndex([0, 2, 1, 1, 2, 3]);
  canopyGeometry.computeVertexNormals();
  const rampCanopy = new THREE.Mesh(canopyGeometry, roofMaterial);
  rampCanopy.name = 'Covered basement parking ramp';
  rampCanopy.receiveShadow = true;
  parking.add(rampCanopy);

  const wallMaterial = new THREE.MeshStandardMaterial({ color: '#a29b89', roughness: 0.9, side: THREE.DoubleSide });
  for (const side of [-1, 1]) {
    const lowerStart = corner(start, side * 1.04);
    const lowerEnd = corner(end, side * 1.04);
    const upperStart = lowerStart.clone();
    const upperEnd = lowerEnd.clone();
    upperStart.y += 1.65;
    upperEnd.y += 1.65;
    const wallGeometry = new THREE.BufferGeometry();
    wallGeometry.setAttribute('position', new THREE.Float32BufferAttribute([
      lowerStart.x, lowerStart.y, lowerStart.z,
      lowerEnd.x, lowerEnd.y, lowerEnd.z,
      upperStart.x, upperStart.y, upperStart.z,
      upperEnd.x, upperEnd.y, upperEnd.z,
    ], 3));
    wallGeometry.setIndex([0, 1, 2, 2, 1, 3]);
    wallGeometry.computeVertexNormals();
    parking.add(new THREE.Mesh(wallGeometry, wallMaterial));
  }

  const entranceSign = new THREE.Mesh(
    new THREE.BoxGeometry(24, 0.85, 0.5),
    new THREE.MeshStandardMaterial({ color: '#b99858', roughness: 0.42, metalness: 0.38 }),
  );
  entranceSign.position.set(PARKING_RAMP.centerX, 4, -101.4);
  parking.add(entranceSign);
  const labelCanvas = document.createElement('canvas');
  labelCanvas.width = 512;
  labelCanvas.height = 96;
  const labelContext = labelCanvas.getContext('2d');
  if (!labelContext) throw new Error('Unable to create the basement parking sign.');
  labelContext.fillStyle = '#294c4a';
  labelContext.fillRect(0, 0, labelCanvas.width, labelCanvas.height);
  labelContext.fillStyle = '#f2ead4';
  labelContext.font = 'bold 36px Arial';
  labelContext.textAlign = 'center';
  labelContext.textBaseline = 'middle';
  labelContext.fillText('BASEMENT PARKING', labelCanvas.width / 2, labelCanvas.height / 2);
  const labelTexture = new THREE.CanvasTexture(labelCanvas);
  labelTexture.colorSpace = THREE.SRGBColorSpace;
  const label = new THREE.Mesh(
    new THREE.PlaneGeometry(15, 1.45),
    new THREE.MeshStandardMaterial({ map: labelTexture, roughness: 0.72, side: THREE.DoubleSide }),
  );
  label.position.set(PARKING_RAMP.centerX, 4, -101.1);
  parking.add(label);

  scene.add(parking);
  return {
    ramp: PARKING_RAMP,
    bounds: BASEMENT_OPENING,
    floorY: BASEMENT_FLOOR_Y,
    obstacles,
  };
}

function addBoundary(scene) {
  const wallMat = new THREE.MeshStandardMaterial({ color: '#c5b89e', roughness: 0.92 });
  const group = new THREE.Group();
  for (let i = 0; i < CAMPUS_POLYGON.length - 1; i++) {
    const [x1, z1] = CAMPUS_POLYGON[i];
    const [x2, z2] = CAMPUS_POLYGON[i + 1];
    const length = Math.hypot(x2 - x1, z2 - z1);
    const angle = Math.atan2(x2 - x1, z2 - z1);
    const midpointX = (x1 + x2) / 2;
    const midpointZ = (z1 + z2) / 2;
    const southOpening = z1 > 65 && z2 > 65;
    if (southOpening) {
      const each = (length - 23) / 2;
      for (const side of [-1, 1]) {
        const wall = new THREE.Mesh(new THREE.BoxGeometry(0.8, 2.2, each), wallMat);
        wall.position.set(midpointX + Math.sin(angle) * side * (length / 4 + 5.75), 1.1, midpointZ + Math.cos(angle) * side * (length / 4 + 5.75));
        wall.rotation.y = angle;
        group.add(wall);
      }
    } else {
      const wall = new THREE.Mesh(new THREE.BoxGeometry(0.8, 2.2, length), wallMat);
      wall.position.set(midpointX, 1.1, midpointZ);
      wall.rotation.y = angle;
      group.add(wall);
    }
  }
  scene.add(group);

  const gate = new THREE.Group();
  gate.name = 'Automatic GGSIPU entrance gate';
  const gateCenterX = -27.5;
  const gateCenterZ = 123.4;
  const pillarMat = new THREE.MeshStandardMaterial({ color: '#e6dfce', roughness: 0.78 });
  const trimMat = new THREE.MeshStandardMaterial({ color: '#b99858', metalness: 0.42, roughness: 0.4 });
  const portal = new THREE.Group();
  portal.position.set(gateCenterX, 0, gateCenterZ);
  for (const x of [-13.5, 13.5]) {
    const pillar = new THREE.Mesh(new THREE.BoxGeometry(2.5, 8.6, 2.5), pillarMat);
    pillar.position.set(x, 4.3, 0);
    pillar.castShadow = true;
    pillar.receiveShadow = true;
    portal.add(pillar);
    const cap = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.4, 3.2), trimMat);
    cap.position.set(x, 8.65, 0);
    portal.add(cap);
  }
  const beam = new THREE.Mesh(new THREE.BoxGeometry(30, 2, 2.1), pillarMat);
  beam.position.set(0, 8.1, 0);
  beam.castShadow = true;
  portal.add(beam);

  const signCanvas = document.createElement('canvas');
  signCanvas.width = 2048;
  signCanvas.height = 256;
  const signContext = signCanvas.getContext('2d');
  if (!signContext) throw new Error('Unable to create the campus entrance sign.');
  signContext.fillStyle = '#173b3e';
  signContext.fillRect(0, 0, signCanvas.width, signCanvas.height);
  signContext.strokeStyle = '#d6bb79';
  signContext.lineWidth = 12;
  signContext.strokeRect(10, 10, signCanvas.width - 20, signCanvas.height - 20);
  signContext.fillStyle = '#f5e8c4';
  signContext.font = 'bold 100px Georgia, serif';
  signContext.textAlign = 'center';
  signContext.textBaseline = 'middle';
  signContext.fillText('GURU GOBIND SINGH UNIVERSITY', signCanvas.width / 2, signCanvas.height / 2);
  const signTexture = new THREE.CanvasTexture(signCanvas);
  signTexture.colorSpace = THREE.SRGBColorSpace;
  const signMaterial = new THREE.MeshStandardMaterial({ map: signTexture, roughness: 0.48, metalness: 0.08, side: THREE.DoubleSide });
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(25, 2.8), signMaterial);
  sign.position.set(0, 8.1, 1.12);
  portal.add(sign);
  const backSign = new THREE.Mesh(new THREE.PlaneGeometry(25, 2.8), signMaterial);
  backSign.position.set(0, 8.1, -1.12);
  backSign.rotation.y = Math.PI;
  portal.add(backSign);

  const panels = [];
  for (const side of [-1, 1]) {
    const panel = new THREE.Group();
    panel.position.set(side * 5.8, 0, -1.25);
    const leaf = new THREE.Mesh(new THREE.BoxGeometry(11.6, 3.2, 0.35), new THREE.MeshStandardMaterial({
      color: '#d8d5c9',
      roughness: 0.72,
      metalness: 0.16,
    }));
    leaf.position.y = 1.65;
    leaf.castShadow = true;
    panel.add(leaf);
    const accent = new THREE.Mesh(new THREE.BoxGeometry(11.5, 0.18, 0.4), trimMat);
    accent.position.y = 2.9;
    panel.add(accent);
    for (let bar = 0; bar < 10; bar++) {
      const vertical = new THREE.Mesh(new THREE.BoxGeometry(0.08, 2.9, 0.42), trimMat);
      vertical.position.set(-5.1 + bar * 1.13, 1.65, 0);
      panel.add(vertical);
    }
    portal.add(panel);
    panels.push({ panel, side });
  }
  gate.add(portal);
  scene.add(gate);

  let openAmount = 0;
  return {
    update(dt, playerPosition, carPosition) {
      const playerDistance = Math.hypot(playerPosition.x - gateCenterX, playerPosition.z - gateCenterZ);
      const carDistance = carPosition
        ? Math.hypot(carPosition.x - gateCenterX, carPosition.z - gateCenterZ)
        : Infinity;
      const shouldOpen = Math.min(playerDistance, carDistance) < 24;
      const target = shouldOpen ? 1 : 0;
      openAmount = THREE.MathUtils.damp(openAmount, target, 2.8, dt);
      for (const { panel, side } of panels) {
        panel.position.x = side * (5.8 + openAmount * 12.4);
      }
    },
  };
}

function addLandscaping(scene) {
  const grass = new THREE.MeshStandardMaterial({ color: '#638260', roughness: 1 });
  const trunk = new THREE.MeshStandardMaterial({ color: '#76553a', roughness: 1 });
  const canopy = new THREE.MeshStandardMaterial({ color: '#456c4b', roughness: 1 });
  const patches = [[-38, -15, 22, 20], [15, 12, 19, 18], [-36, 54, 28, 16], [6, -101, 28, 13]];
  const roads = CAMPUS_ROUTES.flatMap(({ points }) => points.slice(1).map((point, index) => [
    points[index][0], points[index][1], point[0], point[1],
  ]));
  for (const [x, z, width, depth] of patches) {
    const plot = new THREE.Mesh(new THREE.BoxGeometry(width, 0.16, depth), grass);
    plot.position.set(x, 0.04, z);
    plot.receiveShadow = true;
    scene.add(plot);
  }

  const treeData = [];
  for (let z = -112; z <= 55; z += 22) {
    for (let x = -94; x <= 100; x += 24) {
      const nearRoute = roads.some(([ax, az, bx, bz]) => distanceToSegment(x, z, ax, az, bx, bz) < 13);
      const nearBuilding = [[-52, 0, 20], [-75, 48, 23], [31, -50, 30], [120, -120, 17], [-55, 87, 22]].some(([bx, bz, r]) => Math.hypot(x - bx, z - bz) < r);
      if (!nearRoute && !nearBuilding && insideCampus(x, z)) treeData.push([x, z]);
    }
  }
  const trunkMesh = new THREE.InstancedMesh(new THREE.BoxGeometry(0.85, 3.2, 0.85), trunk, treeData.length);
  const canopyMesh = new THREE.InstancedMesh(new THREE.BoxGeometry(3.4, 3.1, 3.4), canopy, treeData.length);
  const matrix = new THREE.Matrix4();
  treeData.forEach(([x, z], index) => {
    matrix.makeTranslation(x, 1.65, z);
    trunkMesh.setMatrixAt(index, matrix);
    matrix.makeTranslation(x, 4.2, z);
    canopyMesh.setMatrixAt(index, matrix);
  });
  trunkMesh.castShadow = true;
  canopyMesh.castShadow = true;
  scene.add(trunkMesh, canopyMesh);
}

function addCampusProps(scene) {
  const lampMat = new THREE.MeshStandardMaterial({ color: '#314345', roughness: 0.7 });
  const bulbMat = new THREE.MeshStandardMaterial({ color: '#f5d894', emissive: '#b2823d', emissiveIntensity: 0.35 });
  for (let z = -88; z <= 110; z += 26) {
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.2, 5.6, 6), lampMat);
    pole.position.set(-12, 2.8, z);
    const bulb = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.24, 0.45), bulbMat);
    bulb.position.set(-12, 5.65, z);
    scene.add(pole, bulb);
  }
  createPavedArea(scene, 31, -66, 16, 12, '#c2bfb5');
  const plantingMat = new THREE.MeshStandardMaterial({ color: '#58744f', roughness: 1 });
  const planterMat = new THREE.MeshStandardMaterial({ color: '#c4b9a2', roughness: 0.95 });
  for (const x of [19, 43]) {
    const planter = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.38, 5.2), planterMat);
    planter.position.set(x, 0.19, -66);
    const shrubs = new THREE.InstancedMesh(new THREE.BoxGeometry(0.9, 0.9, 0.9), plantingMat, 3);
    for (let index = 0; index < 3; index++) {
      const matrix = new THREE.Matrix4().makeTranslation(x, 0.78, -67.5 + index * 1.5);
      shrubs.setMatrixAt(index, matrix);
    }
    scene.add(planter, shrubs);
  }
}

export function createCampus(scene) {
  createGround(scene);
  const basementParking = createUndergroundParking(scene);
  const gate = addBoundary(scene);
  addLandscaping(scene);
  addCampusProps(scene);
  const lake = createCampusLake(scene);
  const buildingSpecs = [
    { name: 'USAR · Automation & Robotics', x: 31, z: -50, width: 44, depth: 24, floors: 4, rotation: Math.PI, featured: true },
    { name: 'Academic Block', x: -75, z: 48, width: 30, depth: 18, floors: 4 },
    { name: 'Academic Block', x: -55, z: 87, width: 30, depth: 18, floors: 3 },
  ];
  const buildings = [
    createCampusRotunda(scene, -52, 0),
    createLearningResourceCentre(scene, 120, -120),
    ...buildingSpecs.map((spec) => createAcademicBuilding(scene, spec)),
  ];
  createRoadNetwork(scene, CAMPUS_POLYGON, [...buildings.map((building) => building.bounds), lake.bounds]);
  return {
    buildings,
    polygon: CAMPUS_POLYGON,
    lake,
    lakeBounds: lake.bounds,
    basementParking,
    updateDoors(dt, playerPosition, vehiclePosition) {
      buildings.forEach((building) => building.updateDoors(dt, playerPosition, vehiclePosition));
    },
    isBuildingEntrance(x, z) {
      return buildings.some(({ entranceBounds }) => (
        x >= entranceBounds.minX && x <= entranceBounds.maxX
        && z >= entranceBounds.minZ && z <= entranceBounds.maxZ
      ));
    },
    getDrivingSurface(x, z, currentY = 0, halfX = 0, halfZ = 0) {
      const { bounds, floorY, ramp } = basementParking;
      const inBasementOpening = x >= bounds.minX && x <= bounds.maxX
        && z >= bounds.minZ && z <= bounds.maxZ;
      if (!inBasementOpening) return currentY < -0.15 ? null : 0;

      if (z >= ramp.endZ && z <= ramp.startZ
        && Math.abs(x - ramp.centerX) <= ramp.halfWidth - halfX - 0.8) {
        const progress = (z - ramp.startZ) / (ramp.endZ - ramp.startZ);
        return THREE.MathUtils.lerp(0.12, floorY + 0.22, progress);
      }

      if (z < ramp.endZ && currentY < -1.2
        && x > bounds.minX + halfX + 1 && x < bounds.maxX - halfX - 1
        && z > bounds.minZ + halfZ + 1 && z < bounds.maxZ - halfZ - 1) {
        return floorY;
      }

      return null;
    },
    insideCampus,
    canMove,
    updateGate: gate.update,
    spawn: new THREE.Vector3(-27, 0, 111),
    parkourArea: new THREE.Vector3(-15, 0, 7),
    basketballHoop: new THREE.Vector3(80, 0, -103),
    roboticsArea: new THREE.Vector3(31, 0, -68),
  };
}
