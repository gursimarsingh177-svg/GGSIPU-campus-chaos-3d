import * as THREE from 'three';

const wallMat = new THREE.MeshStandardMaterial({ color: '#d4c9ad', roughness: 0.86 });
const whiteMat = new THREE.MeshStandardMaterial({ color: '#e8e4da', roughness: 0.84 });
const darkGlass = new THREE.MeshStandardMaterial({ color: '#466a73', roughness: 0.28, metalness: 0.14 });
const trimMat = new THREE.MeshStandardMaterial({ color: '#65736f', roughness: 0.76 });
const roofMat = new THREE.MeshStandardMaterial({ color: '#b7ad99', roughness: 0.92 });
const doorMat = new THREE.MeshStandardMaterial({ color: '#405452', roughness: 0.72 });
const stepsMat = new THREE.MeshStandardMaterial({ color: '#c4beb0', roughness: 0.9 });
const mullionMat = new THREE.MeshStandardMaterial({ color: '#789298', roughness: 0.52, metalness: 0.18 });
const portalMat = new THREE.MeshStandardMaterial({ color: '#b9b09e', roughness: 0.94 });
const canopyMat = new THREE.MeshStandardMaterial({ color: '#20292a', roughness: 0.72, metalness: 0.22 });
const atriumGlass = new THREE.MeshStandardMaterial({ color: '#27666a', roughness: 0.3, metalness: 0.2 });
const interiorFloorMat = new THREE.MeshStandardMaterial({ color: '#aaa28f', roughness: 0.92 });
const interiorAccentMat = new THREE.MeshStandardMaterial({ color: '#d2c49f', roughness: 0.86 });
const deskMat = new THREE.MeshStandardMaterial({ color: '#73563d', roughness: 0.78 });
const seatMat = new THREE.MeshStandardMaterial({ color: '#526b70', roughness: 0.82 });
const screenMat = new THREE.MeshStandardMaterial({ color: '#33494b', roughness: 0.34, metalness: 0.18 });
const plantMat = new THREE.MeshStandardMaterial({ color: '#54754f', roughness: 0.95 });
const automaticDoorGlass = new THREE.MeshStandardMaterial({
  color: '#80aeb1',
  roughness: 0.24,
  metalness: 0.12,
  transparent: true,
  opacity: 0.48,
});
const automaticDoorFrame = new THREE.MeshStandardMaterial({ color: '#667c7d', roughness: 0.42, metalness: 0.48 });
const automaticDoorSensor = new THREE.MeshStandardMaterial({ color: '#d8d1b5', roughness: 0.38, metalness: 0.2 });

function box(parent, material, width, height, depth, x, y, z) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material);
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function worldBounds(x, z, width, depth, rotation = 0) {
  const centerX = x;
  const centerZ = z;
  const halfWidth = width / 2;
  const halfDepth = depth / 2;
  const extentX = Math.abs(Math.cos(rotation)) * halfWidth + Math.abs(Math.sin(rotation)) * halfDepth;
  const extentZ = Math.abs(Math.sin(rotation)) * halfWidth + Math.abs(Math.cos(rotation)) * halfDepth;
  return {
    minX: centerX - extentX,
    maxX: centerX + extentX,
    minZ: centerZ - extentZ,
    maxZ: centerZ + extentZ,
  };
}

function localWorldBounds(x, z, localX, localZ, width, depth, rotation = 0) {
  const worldX = x + localX * Math.cos(rotation) + localZ * Math.sin(rotation);
  const worldZ = z - localX * Math.sin(rotation) + localZ * Math.cos(rotation);
  return worldBounds(worldX, worldZ, width, depth, rotation);
}

function addAutomaticGlassDoors(parent, { width, height, localY, localZ, worldX, worldZ }) {
  const doors = new THREE.Group();
  doors.name = 'Automatic sliding glass entrance doors';
  doors.position.z = localZ;
  const panelWidth = width * 0.32;
  const sidePanelWidth = (width - panelWidth * 2) / 2;
  const leaves = [];

  box(doors, automaticDoorFrame, 0.12, height + 0.12, 0.18, -width / 2, localY + height / 2, 0);
  box(doors, automaticDoorFrame, 0.12, height + 0.12, 0.18, width / 2, localY + height / 2, 0);
  box(doors, automaticDoorFrame, width + 0.12, 0.12, 0.2, 0, localY + height, 0);
  box(doors, automaticDoorFrame, 0.08, height - 0.12, 0.08, -width / 2 + sidePanelWidth / 2, localY + height / 2, 0);
  box(doors, automaticDoorFrame, 0.08, height - 0.12, 0.08, width / 2 - sidePanelWidth / 2, localY + height / 2, 0);
  for (const side of [-1, 1]) {
    box(doors, automaticDoorGlass, sidePanelWidth - 0.1, height - 0.16, 0.06,
      side * (panelWidth + sidePanelWidth) / 2, localY + height / 2, 0);
  }
  for (const side of [-1, 1]) {
    const leaf = new THREE.Group();
    leaf.position.set(side * panelWidth / 2, 0, 0);
    box(leaf, automaticDoorGlass, panelWidth - 0.08, height - 0.16, 0.08, 0, localY + height / 2, 0);
    box(leaf, automaticDoorFrame, 0.07, height - 0.08, 0.1, -panelWidth / 2 + 0.04, localY + height / 2, 0);
    box(leaf, automaticDoorFrame, 0.07, height - 0.08, 0.1, panelWidth / 2 - 0.04, localY + height / 2, 0);
    box(leaf, automaticDoorFrame, panelWidth - 0.08, 0.07, 0.1, 0, localY + height - 0.04, 0);
    doors.add(leaf);
    leaves.push({ leaf, side });
  }
  box(doors, automaticDoorSensor, 0.55, 0.1, 0.24, 0, localY + height + 0.18, 0);
  parent.add(doors);

  let openAmount = 0;
  let shouldOpen = false;
  return {
    update(dt, playerPosition, vehiclePosition) {
      const playerDistance = Math.hypot(playerPosition.x - worldX, playerPosition.z - worldZ);
      const vehicleDistance = vehiclePosition
        ? Math.hypot(vehiclePosition.x - worldX, vehiclePosition.z - worldZ)
        : Infinity;
      const nearEntrance = Math.min(playerDistance, vehicleDistance);
      if (nearEntrance < 12) shouldOpen = true;
      else if (nearEntrance > 16) shouldOpen = false;
      openAmount = THREE.MathUtils.damp(openAmount, shouldOpen ? 1 : 0, 8, dt);
      for (const { leaf, side } of leaves) {
        leaf.position.x = side * (panelWidth / 2 + openAmount * panelWidth);
      }
    },
  };
}

function addAcademicInterior(group, width, depth, featured) {
  const collisionBoxes = [];
  const floor = box(group, interiorFloorMat, width - 1.6, 0.12, depth - 1.6, 0, 0.06, 0);
  floor.name = 'Walkable college building interior floor';
  const board = box(group, screenMat, featured ? 8 : 6, 2.2, 0.16, 0, 2.7, -depth / 2 + 0.65);
  board.name = featured ? 'Robotics lab teaching display' : 'Classroom teaching board';
  const boardFrame = box(group, interiorAccentMat, featured ? 8.4 : 6.4, 0.16, 0.22, 0, 3.9, -depth / 2 + 0.65);
  boardFrame.name = 'College classroom display frame';

  const addDesk = (deskX, deskZ, label) => {
    const desk = new THREE.Group();
    desk.name = label;
    desk.position.set(deskX, 0, deskZ);
    group.add(desk);
    box(desk, deskMat, 2.7, 0.18, 1.25, 0, 1.05, 0);
    for (const legX of [-1.12, 1.12]) {
      for (const legZ of [-0.46, 0.46]) {
        box(desk, deskMat, 0.12, 1, 0.12, legX, 0.52, legZ);
      }
    }
    box(desk, seatMat, 1.05, 0.16, 0.95, 0, 0.58, 1.25);
    box(desk, deskMat, 1.05, 0.85, 0.12, 0, 0.98, 1.7);
    collisionBoxes.push(localWorldBounds(0, 0, deskX, deskZ + 0.35, 3.1, 2.9));
    if (featured) {
      box(desk, screenMat, 0.92, 0.62, 0.1, 0, 1.46, -0.34);
      box(desk, interiorAccentMat, 0.38, 0.08, 0.34, 0, 1.39, 0.34);
    } else {
      box(desk, interiorAccentMat, 0.82, 0.06, 0.56, 0, 1.18, -0.08);
    }
  };

  if (featured) {
    const reception = box(group, deskMat, 8.2, 1.25, 1.7, -13, 0.66, 4.4);
    reception.name = 'Robotics building reception desk';
    box(group, interiorAccentMat, 8.4, 0.12, 1.85, -13, 1.34, 4.4);
    collisionBoxes.push(localWorldBounds(0, 0, -13, 4.4, 8.5, 2));
    for (const deskZ of [-5, -10]) {
      for (const deskX of [-10, 0, 10]) {
        addDesk(deskX, deskZ, 'Robotics lab workstation');
      }
    }
  } else {
    const teacherDesk = box(group, deskMat, 5, 0.18, 1.5, 0, 1.02, -depth / 2 + 3.1);
    teacherDesk.name = 'Classroom teacher desk';
    box(group, interiorAccentMat, 5.2, 0.12, 1.7, 0, 1.17, -depth / 2 + 3.1);
    collisionBoxes.push(localWorldBounds(0, 0, 0, -depth / 2 + 3.1, 5.4, 1.9));
    const rowStart = -depth / 2 + 7;
    for (let row = 0; row < 2; row++) {
      for (const deskX of [-width * 0.27, width * 0.27]) {
        addDesk(deskX, rowStart + row * 4.2, 'Academic classroom desk');
      }
    }
  }

  for (const x of [-width / 2 + 1.6, width / 2 - 1.6]) {
    const planter = new THREE.Group();
    planter.name = 'College lobby planter';
    planter.position.set(x, 0, -depth / 2 + 2.3);
    group.add(planter);
    box(planter, interiorAccentMat, 1.1, 0.75, 1.1, 0, 0.38, 0);
    const foliage = new THREE.Mesh(new THREE.IcosahedronGeometry(0.82, 1), plantMat);
    foliage.position.y = 1.25;
    foliage.scale.set(0.85, 1.3, 0.85);
    foliage.castShadow = true;
    planter.add(foliage);
    collisionBoxes.push(localWorldBounds(0, 0, x, -depth / 2 + 2.3, 1.4, 1.4));
  }

  return collisionBoxes;
}

function addCircularWall(group, worldX, worldZ, radius, height, thickness, centerY, material, entranceWidth, collisionBoxes) {
  const segmentCount = 40;
  const segmentLength = (2 * Math.PI * radius) / segmentCount;
  for (let index = 0; index < segmentCount; index++) {
    const angle = (index / segmentCount) * Math.PI * 2;
    const distanceFromEntrance = Math.atan2(Math.sin(angle), Math.cos(angle)) * radius;
    if (Math.abs(distanceFromEntrance) < entranceWidth / 2 + segmentLength * 0.15) continue;
    const centerX = Math.sin(angle) * radius;
    const centerZ = Math.cos(angle) * radius;
    const segment = box(group, material, segmentLength + 0.06, height, thickness, centerX, centerY, centerZ);
    segment.rotation.y = angle;
    collisionBoxes.push(worldBounds(worldX + centerX, worldZ + centerZ, segmentLength + 0.06, thickness, angle));
  }
}

function makeSign(parent, text, width, x, y, z) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 96;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#294c4a';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#f2ead4';
  ctx.font = 'bold 38px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 256, 48, 480);
  const texture = new THREE.CanvasTexture(canvas);
  const sign = new THREE.Mesh(
    new THREE.PlaneGeometry(width, width * 0.19),
    new THREE.MeshStandardMaterial({ map: texture, roughness: 0.7 }),
  );
  sign.position.set(x, y, z);
  parent.add(sign);
}

export function createAcademicBuilding(scene, spec) {
  const { name, x, z, width, depth, floors = 3, featured = false, rotation = 0 } = spec;
  const group = new THREE.Group();
  group.name = name;
  const collisionParts = [];
  const floorHeight = 3.2;
  const height = floors * floorHeight;
  const frontZ = depth / 2;
  const portalWidth = 8.8;
  const portalDepth = 5.8;
  const portalHeight = floorHeight * 3;
  const wallThickness = 0.8;
  const entranceWidth = featured ? portalWidth : 9;
  const addWall = (wallWidth, wallHeight, wallDepth, wallX, wallZ) => {
    box(group, wallMat, wallWidth, wallHeight, wallDepth, wallX, wallHeight / 2 + 0.22, wallZ);
    collisionParts.push({ x: wallX, z: wallZ, width: wallWidth, depth: wallDepth });
  };

  if (featured) {
    addWall(wallThickness, height, depth, -width / 2 + wallThickness / 2, 0);
    addWall(wallThickness, height, depth, width / 2 - wallThickness / 2, 0);
    addWall(width - wallThickness * 2, height, wallThickness, 0, -depth / 2 + wallThickness / 2);
    const frontSegmentWidth = (width - entranceWidth) / 2;
    for (const side of [-1, 1]) {
      addWall(
        frontSegmentWidth,
        height,
        wallThickness,
        side * (entranceWidth / 2 + frontSegmentWidth / 2),
        frontZ - wallThickness / 2,
      );
    }
    const wingWidth = (width - portalWidth) / 2;
    for (const side of [-1, 1]) {
      const wingX = side * (portalWidth / 2 + wingWidth / 2);
      box(group, wallMat, wingWidth, height, 0.65, wingX, height / 2 + 0.22, frontZ - 0.32);
      box(group, whiteMat, 0.5, height + 0.15, 0.85, side * (width / 2 - 0.35), height / 2 + 0.2, frontZ - 0.25);
      box(group, portalMat, 0.42, portalHeight, portalDepth, side * (portalWidth / 2), portalHeight / 2, frontZ - portalDepth / 2);
    }
    const upperFrontWallHeight = height - portalHeight;
    box(group, wallMat, portalWidth, upperFrontWallHeight, wallThickness, 0,
      portalHeight + upperFrontWallHeight / 2 + 0.22, frontZ - wallThickness / 2);
    box(group, portalMat, portalWidth + 0.8, 0.38, portalDepth + 0.8, 0, portalHeight + 0.02, frontZ - portalDepth / 2);
    box(group, stepsMat, 8.6, 0.12, 2.2, 0, 0.06, frontZ + 0.4);

    for (const side of [-1, 1]) {
      const wingX = side * (portalWidth / 2 + wingWidth / 2);
      const rows = Math.max(2, floors - 1);
      for (let floor = 0; floor < rows; floor++) {
        const y = 2.1 + floor * floorHeight;
        const bandWidth = wingWidth * 0.78;
        const paneCount = Math.max(2, Math.floor(bandWidth / 4));
        for (let pane = 0; pane < paneCount; pane++) {
          const paneWidth = bandWidth / paneCount - 0.16;
          const paneX = wingX - bandWidth / 2 + (pane + 0.5) * (bandWidth / paneCount);
          box(group, darkGlass, paneWidth, 1.42, 0.15, paneX, y, frontZ + 0.08);
          if (pane > 0) box(group, mullionMat, 0.1, 1.5, 0.2, paneX - paneWidth / 2 - 0.08, y, frontZ + 0.1);
        }
      }
    }

    const narrowStripX = -portalWidth / 2 - 0.9;
    for (let floor = 0; floor < 3; floor++) {
      box(group, darkGlass, 0.7, 2.25, 0.15, narrowStripX, 1.8 + floor * floorHeight, frontZ + 0.1);
    }
    for (let pane = 0; pane < 4; pane++) {
      const paneX = -width / 2 + 3 + pane * 3.4;
      box(group, darkGlass, 3.05, 1.2, 0.15, paneX, portalHeight + 1.8, frontZ + 0.1);
    }
    box(group, whiteMat, portalWidth + 2.2, 0.34, 1.45, 0, portalHeight + 0.42, frontZ + 0.42);

    const atriumWidth = 15;
    const atriumHeight = 5.1;
    const atriumDepth = 4;
    const atriumX = 3.4;
    const atriumY = height - 4.3;
    const atriumZ = frontZ + 1.8;
    box(group, atriumGlass, atriumWidth, atriumHeight, atriumDepth, atriumX, atriumY, atriumZ);
    for (let mullion = 0; mullion <= 5; mullion++) {
      const x = atriumX - atriumWidth / 2 + (atriumWidth / 5) * mullion;
      box(group, mullionMat, 0.12, atriumHeight + 0.12, 0.12, x, atriumY, atriumZ + atriumDepth / 2 + 0.08);
    }
    const supportHeight = atriumY - atriumHeight / 2 - 0.3;
    for (const x of [-width / 2 + 2, width / 2 - 2]) {
      box(group, whiteMat, 0.7, supportHeight, 0.75, x, supportHeight / 2 + 0.3, frontZ + 3.2);
    }

    const canopy = box(group, canopyMat, width + 5, 0.5, 12, 0, height - 0.55, frontZ + 4.2);
    canopy.rotation.x = 0.1;
    for (let beam = 0; beam < 9; beam++) {
      const x = -width / 2 + beam * (width / 8);
      box(group, canopyMat, 0.22, 0.3, 10.8, x, height - 0.95, frontZ + 4.2);
    }
  } else {
    addWall(wallThickness, height, depth, -width / 2 + wallThickness / 2, 0);
    addWall(wallThickness, height, depth, width / 2 - wallThickness / 2, 0);
    addWall(width - wallThickness * 2, height, wallThickness, 0, -depth / 2 + wallThickness / 2);
    const frontSegmentWidth = (width - entranceWidth) / 2;
    for (const side of [-1, 1]) {
      addWall(
        frontSegmentWidth,
        height,
        wallThickness,
        side * (entranceWidth / 2 + frontSegmentWidth / 2),
        frontZ - wallThickness / 2,
      );
    }
  }

  box(group, roofMat, width + 0.8, 0.48, depth + 0.8, 0, height + 0.46, 0);
  const facadeTrimWidth = (width + 0.5 - entranceWidth) / 2;
  for (const side of [-1, 1]) {
    box(group, trimMat, facadeTrimWidth, 0.3, 0.55, side * (entranceWidth / 2 + facadeTrimWidth / 2), 1.05, depth / 2 + 0.2);
  }
  box(group, whiteMat, width + 0.5, 0.3, 0.55, 0, height - 0.85, depth / 2 + 0.2);

  const columns = Math.max(4, Math.floor(width / 4.2));
  for (let floor = 0; floor < floors; floor++) {
    const y = 1.95 + floor * floorHeight;
    for (let column = 0; column < columns; column++) {
      const xPos = -width / 2 + (column + 0.5) * (width / columns);
      if (!featured && (floor > 0 || Math.abs(xPos) > entranceWidth / 2 + width / columns * 0.3)) {
        box(group, darkGlass, width / columns * 0.54, 1.35, 0.13, xPos, y, depth / 2 + 0.09);
      }
      box(group, darkGlass, width / columns * 0.54, 1.35, 0.13, xPos, y, -depth / 2 - 0.09);
    }
    const sideWindows = Math.max(2, Math.floor(depth / 4));
    for (let column = 0; column < sideWindows; column++) {
      const zPos = -depth / 2 + (column + 0.5) * (depth / sideWindows);
      box(group, darkGlass, 0.13, 1.35, depth / sideWindows * 0.52, width / 2 + 0.09, y, zPos);
      box(group, darkGlass, 0.13, 1.35, depth / sideWindows * 0.52, -width / 2 - 0.09, y, zPos);
    }
  }

  if (!featured) {
    box(group, trimMat, entranceWidth + 0.35, 0.2, 0.25, 0, 4.62, depth / 2 + 0.14);
    box(group, whiteMat, 6.4, 0.23, 1.5, 0, 4.78, depth / 2 + 0.72);
    box(group, stepsMat, 8.4, 0.12, 2.6, 0, 0.06, depth / 2 + 1);
  }

  collisionParts.push(...addAcademicInterior(group, width, depth, featured)
    .map(({ minX, maxX, minZ, maxZ }) => ({
      x: (minX + maxX) / 2,
      z: (minZ + maxZ) / 2,
      width: maxX - minX,
      depth: maxZ - minZ,
    })));
  const doorWidth = featured ? 8.4 : 8.6;
  const doorZ = featured ? frontZ - portalDepth + 0.2 : frontZ - wallThickness / 2;
  const automaticDoors = addAutomaticGlassDoors(group, {
    width: doorWidth,
    height: 4.5,
    localY: 0,
    localZ: doorZ,
    worldX: x + doorZ * Math.sin(rotation),
    worldZ: z + doorZ * Math.cos(rotation),
  });

  if (featured) {
    box(group, whiteMat, width + 2, 0.46, 1.1, 0, height + 0.84, 0);
    box(group, trimMat, 2.6, 4.2, 0.45, 0, height + 2.8, 0);
    makeSign(group, name.toUpperCase(), Math.min(width - 1, 24), 0, height + 1.05, depth / 2 + 0.82);
  } else {
    makeSign(group, name.toUpperCase(), Math.min(width - 1, 17), 0, height - 0.5, depth / 2 + 0.18);
  }

  group.position.set(x, 0, z);
  group.rotation.y = rotation;
  scene.add(group);
  const worldWidth = Math.abs(Math.cos(rotation)) * width + Math.abs(Math.sin(rotation)) * depth;
  const worldDepth = Math.abs(Math.sin(rotation)) * width + Math.abs(Math.cos(rotation)) * depth;
  return {
    name,
    bounds: { minX: x - worldWidth / 2 - 1.5, maxX: x + worldWidth / 2 + 1.5, minZ: z - worldDepth / 2 - 1.5, maxZ: z + worldDepth / 2 + 2.6 },
    collisionBoxes: collisionParts.map(({ x: localX, z: localZ, width: partWidth, depth: partDepth }) => (
      localWorldBounds(x, z, localX, localZ, partWidth, partDepth, rotation)
    )),
    entranceBounds: localWorldBounds(x, z, 0, doorZ, doorWidth + 1, 7, rotation),
    updateDoors: automaticDoors.update,
  };
}

export function createLearningResourceCentre(scene, x, z) {
  const building = new THREE.Group();
  building.name = 'Learning Resource Centre · concentric dome';
  const stone = new THREE.MeshStandardMaterial({ color: '#d8d0bc', roughness: 0.84 });
  const lightStone = new THREE.MeshStandardMaterial({ color: '#eee8d8', roughness: 0.82 });
  const glass = new THREE.MeshStandardMaterial({ color: '#397176', roughness: 0.3, metalness: 0.14 });
  const domeMaterial = new THREE.MeshStandardMaterial({ color: '#b7b09c', roughness: 0.62, metalness: 0.12, side: THREE.DoubleSide });
  const gold = new THREE.MeshStandardMaterial({ color: '#b99858', roughness: 0.42, metalness: 0.42 });
  const drumHeight = 6.4;
  const drumRadius = 10.5;
  const domeRadius = 11.2;
  const domeBase = drumHeight;
  const collisionBoxes = [];

  const foundation = new THREE.Mesh(new THREE.CylinderGeometry(13.6, 14.2, 0.8, 48), stone);
  foundation.position.y = 0.4;
  foundation.receiveShadow = true;
  building.add(foundation);

  const lowerConcentricStep = new THREE.Mesh(new THREE.CylinderGeometry(12.7, 13.2, 0.55, 48), lightStone);
  lowerConcentricStep.position.y = 1.05;
  building.add(lowerConcentricStep);
  const upperConcentricStep = new THREE.Mesh(new THREE.CylinderGeometry(11.45, 12.05, 0.5, 48), gold);
  upperConcentricStep.position.y = 1.575;
  building.add(upperConcentricStep);

  const interiorFloor = new THREE.Mesh(new THREE.CylinderGeometry(10.2, 10.2, 0.12, 48), interiorFloorMat);
  interiorFloor.position.y = 1.88;
  interiorFloor.name = 'Walkable Learning Resource Centre reading hall floor';
  building.add(interiorFloor);
  addCircularWall(building, x, z, drumRadius, drumHeight - 1.9, 0.7, 3.95, stone, 9, collisionBoxes);

  for (let index = 0; index < 20; index++) {
    const angle = (index / 20) * Math.PI * 2;
    const distanceFromEntrance = Math.atan2(Math.sin(angle), Math.cos(angle)) * (drumRadius + 0.12);
    if (Math.abs(distanceFromEntrance) < 4.8) continue;
    const pane = new THREE.Mesh(new THREE.BoxGeometry(2.15, 2.05, 0.16), glass);
    pane.position.set(Math.sin(angle) * (drumRadius + 0.12), 4.05, Math.cos(angle) * (drumRadius + 0.12));
    pane.rotation.y = angle;
    pane.castShadow = true;
    building.add(pane);
  }

  const cornice = new THREE.Mesh(new THREE.TorusGeometry(10.95, 0.3, 10, 48), lightStone);
  cornice.rotation.x = Math.PI / 2;
  cornice.position.y = domeBase;
  building.add(cornice);

  const dome = new THREE.Mesh(
    new THREE.SphereGeometry(domeRadius, 48, 24, 0, Math.PI * 2, 0, Math.PI / 2),
    domeMaterial,
  );
  dome.position.y = domeBase;
  dome.castShadow = true;
  dome.receiveShadow = true;
  building.add(dome);

  for (let index = 0; index < 4; index++) {
    const theta = 0.42 + index * 0.31;
    const radius = domeRadius * Math.sin(theta);
    const band = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.11, 6, 48), gold);
    band.rotation.x = Math.PI / 2;
    band.position.y = domeBase + domeRadius * Math.cos(theta);
    building.add(band);
  }

  for (let index = 0; index < 16; index++) {
    const angle = (index / 16) * Math.PI * 2;
    const points = [];
    for (let step = 0; step <= 16; step++) {
      const theta = (step / 16) * Math.PI / 2;
      points.push(new THREE.Vector3(
        Math.sin(angle) * Math.sin(theta) * domeRadius,
        domeBase + Math.cos(theta) * domeRadius,
        Math.cos(angle) * Math.sin(theta) * domeRadius,
      ));
    }
    const rib = new THREE.Mesh(
      new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 24, 0.075, 5, false),
      lightStone,
    );
    building.add(rib);
  }

  const crown = new THREE.Mesh(new THREE.SphereGeometry(0.65, 16, 10), gold);
  crown.position.y = domeBase + domeRadius;
  building.add(crown);

  box(building, lightStone, 0.22, 4.7, 0.3, -4.65, 4.05, drumRadius + 0.05);
  box(building, lightStone, 0.22, 4.7, 0.3, 4.65, 4.05, drumRadius + 0.05);
  box(building, lightStone, 9.4, 0.22, 0.3, 0, 6.4, drumRadius + 0.05);
  box(building, lightStone, 8.4, 0.12, 2.6, 0, 1.8, drumRadius + 1.1);
  const doorZ = drumRadius - 0.4;
  const automaticDoors = addAutomaticGlassDoors(building, {
    width: 8.6,
    height: 4.5,
    localY: 1.75,
    localZ: doorZ,
    worldX: x,
    worldZ: z + doorZ,
  });

  const circulationDesk = box(building, deskMat, 5.4, 1.2, 1.5, 0, 2.55, -4.7);
  circulationDesk.name = 'Library circulation desk';
  collisionBoxes.push(worldBounds(x, z - 4.7, 5.7, 1.8));
  for (const side of [-1, 1]) {
    const shelf = box(building, deskMat, 1.4, 4.1, 7.2, side * 7.4, 3.95, -0.5);
    shelf.name = side < 0 ? 'Library west bookcase' : 'Library east bookcase';
    for (let level = 0; level < 4; level++) {
      box(building, interiorAccentMat, 1.52, 0.1, 7.25, side * 7.4, 2.25 + level * 0.92, -0.5, );
      for (let book = 0; book < 6; book++) {
        const spineMaterial = [doorMat, trimMat, seatMat][(level + book) % 3];
        box(building, spineMaterial, 0.52, 0.64, 0.7, side * 7.4, 2.62 + level * 0.92, -3.25 + book * 1.1);
      }
    }
    collisionBoxes.push(worldBounds(x + side * 7.4, z - 0.5, 1.8, 7.6));
  }
  for (const deskZ of [-6.5, 0.5]) {
    const table = box(building, deskMat, 5.8, 0.18, 2.3, 0, 1.95, deskZ);
    table.name = 'Library reading table';
    for (const side of [-1, 1]) {
      for (const chairX of [-2, 2]) {
        box(building, seatMat, 1.15, 0.18, 1.05, chairX, 1.25, deskZ + side * 1.8);
        box(building, deskMat, 1.15, 0.78, 0.12, chairX, 1.63, deskZ + side * 2.25);
      }
    }
    collisionBoxes.push(worldBounds(x, z + deskZ, 6.1, 2.6));
  }
  makeSign(building, 'LEARNING RESOURCE CENTRE', 15, 0, 5.85, drumRadius + 0.3);

  building.position.set(x, -1.75, z);
  scene.add(building);
  return {
    name: building.name,
    bounds: { minX: x - 14.5, maxX: x + 14.5, minZ: z - 14.5, maxZ: z + 14.5 },
    collisionBoxes,
    entranceBounds: worldBounds(x, z + doorZ, 9.6, 7),
    updateDoors: automaticDoors.update,
  };
}

export function createCampusRotunda(scene, x, z) {
  const group = new THREE.Group();
  group.name = 'West campus circular landmark · approximate';

  const baseMat = new THREE.MeshStandardMaterial({ color: '#b7ac96', roughness: 0.9 });
  const wallMat = new THREE.MeshStandardMaterial({ color: '#d8d0bc', roughness: 0.86 });
  const glassMat = new THREE.MeshStandardMaterial({ color: '#496d72', roughness: 0.32, metalness: 0.12 });
  const roofMat = new THREE.MeshStandardMaterial({ color: '#9e9a8d', roughness: 0.84 });
  const roofRibMat = new THREE.MeshStandardMaterial({ color: '#879797', roughness: 0.76 });
  const radius = 13;
  const collisionBoxes = [];

  const base = new THREE.Mesh(new THREE.CylinderGeometry(radius + 0.8, radius + 0.8, 0.8, 32), baseMat);
  base.position.y = 0.4;
  base.receiveShadow = true;
  group.add(base);

  const interiorFloor = new THREE.Mesh(new THREE.CylinderGeometry(radius - 0.9, radius - 0.9, 0.12, 40), interiorFloorMat);
  interiorFloor.position.y = 0.86;
  interiorFloor.name = 'Walkable rotunda interior floor';
  group.add(interiorFloor);
  addCircularWall(group, x, z, radius, 10, 0.75, 5, wallMat, 8.8, collisionBoxes);

  for (const y of [3.3, 7.3]) {
    const segmentCount = 32;
    const segmentLength = (2 * Math.PI * radius) / segmentCount;
    for (let segmentIndex = 0; segmentIndex < segmentCount; segmentIndex++) {
      const angle = (segmentIndex / segmentCount) * Math.PI * 2;
      const distanceFromEntrance = Math.atan2(Math.sin(angle), Math.cos(angle)) * radius;
      if (Math.abs(distanceFromEntrance) < 6.4) continue;
      box(group, glassMat, segmentLength + 0.04, 1.45, 0.16,
        Math.sin(angle) * (radius + 0.12), y, Math.cos(angle) * (radius + 0.12))
        .rotation.y = angle;
    }
  }

  const roof = new THREE.Mesh(new THREE.CylinderGeometry(radius + 0.45, radius + 0.45, 0.7, 32), roofMat);
  roof.position.y = 11.15;
  roof.castShadow = true;
  group.add(roof);

  for (let rib = 0; rib < 32; rib++) {
    const angle = (rib / 32) * Math.PI * 2;
    const ribMesh = new THREE.Mesh(
      new THREE.BoxGeometry(radius * 0.96, 0.18, 0.18),
      roofRibMat,
    );
    ribMesh.position.set(Math.cos(angle) * radius * 0.48, 11.56, Math.sin(angle) * radius * 0.48);
    ribMesh.rotation.y = -angle;
    group.add(ribMesh);
  }

  const roofRing = new THREE.Mesh(new THREE.TorusGeometry(radius + 0.35, 0.38, 6, 32), baseMat);
  roofRing.rotation.x = Math.PI / 2;
  roofRing.position.y = 11.52;
  group.add(roofRing);

  const oculus = new THREE.Mesh(new THREE.CylinderGeometry(4.6, 4.6, 1.4, 24), glassMat);
  oculus.position.y = 12.15;
  group.add(oculus);
  const oculusCap = new THREE.Mesh(new THREE.CylinderGeometry(4.9, 4.9, 0.28, 24), roofMat);
  oculusCap.position.y = 12.98;
  group.add(oculusCap);

  box(group, baseMat, 0.2, 3.5, 0.3, -4.65, 2.4, radius - 0.1);
  box(group, baseMat, 0.2, 3.5, 0.3, 4.65, 2.4, radius - 0.1);
  box(group, baseMat, 9.4, 0.25, 0.3, 0, 4.1, radius - 0.1);
  const welcomeDesk = box(group, deskMat, 5, 1.1, 1.4, 0, 1.55, -4.5);
  welcomeDesk.name = 'Rotunda visitor reception desk';
  collisionBoxes.push(worldBounds(x, z - 4.5, 5.3, 1.7));
  for (const side of [-1, 1]) {
    const bench = box(group, seatMat, 5.6, 0.52, 1.2, side * 5.2, 1.3, -2);
    bench.name = 'Rotunda waiting bench';
    collisionBoxes.push(worldBounds(x + side * 5.2, z - 2, 5.8, 1.4));
  }
  for (const side of [-1, 1]) {
    const display = box(group, darkGlass, 0.18, 3.6, 5.2, side * 9.2, 3.1, -0.7);
    display.name = 'Rotunda interior display panel';
    collisionBoxes.push(worldBounds(x + side * 9.2, z - 0.7, 0.35, 5.4));
  }

  const entryCanopy = new THREE.Mesh(new THREE.BoxGeometry(9, 0.35, 3.6), roofMat);
  entryCanopy.position.set(0, 5.1, radius + 1.7);
  group.add(entryCanopy);
  box(group, baseMat, 8.4, 0.12, 2.8, 0, 0.86, radius + 1.1);

  const doorZ = radius - 0.4;
  const automaticDoors = addAutomaticGlassDoors(group, {
    width: 8.4,
    height: 4.5,
    localY: 0.8,
    localZ: doorZ,
    worldX: x,
    worldZ: z + doorZ,
  });

  group.position.set(x, -0.8, z);
  scene.add(group);
  return {
    name: group.name,
    bounds: { minX: x - radius - 1, maxX: x + radius + 1, minZ: z - radius - 1, maxZ: z + radius + 2 },
    collisionBoxes,
    entranceBounds: worldBounds(x, z + doorZ, 9.4, 7),
    updateDoors: automaticDoors.update,
  };
}
