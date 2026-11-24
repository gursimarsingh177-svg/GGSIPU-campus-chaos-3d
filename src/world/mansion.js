import * as THREE from 'three';

const boundaryStone = new THREE.MeshStandardMaterial({ color: '#c4b38f', roughness: 0.78 });
const paleStone = new THREE.MeshStandardMaterial({ color: '#e5ddcb', roughness: 0.78 });
const warmStone = new THREE.MeshStandardMaterial({ color: '#c3ad88', roughness: 0.88 });
const roofMaterial = new THREE.MeshStandardMaterial({ color: '#263638', roughness: 0.72 });
const glassMaterial = new THREE.MeshStandardMaterial({
  color: '#6f9fa4',
  roughness: 0.22,
  metalness: 0.16,
  transparent: true,
  opacity: 0.82,
});
const goldMaterial = new THREE.MeshStandardMaterial({ color: '#c5a35b', roughness: 0.36, metalness: 0.6 });
const trimMaterial = new THREE.MeshStandardMaterial({ color: '#f0e9d8', roughness: 0.62 });
const darkGlassMaterial = new THREE.MeshStandardMaterial({
  color: '#17383d',
  roughness: 0.24,
  metalness: 0.2,
  emissive: '#15343a',
  emissiveIntensity: 0.22,
});
const lampMaterial = new THREE.MeshStandardMaterial({
  color: '#f4d49a',
  emissive: '#ffc86b',
  emissiveIntensity: 1.15,
});
const drivewayMaterial = new THREE.MeshStandardMaterial({ color: '#4b5150', roughness: 0.88 });
const gardenMaterial = new THREE.MeshStandardMaterial({ color: '#59774e', roughness: 1 });
const lawnMaterial = new THREE.MeshStandardMaterial({ color: '#789164', roughness: 1 });
const poolDeckMaterial = new THREE.MeshStandardMaterial({ color: '#d3c7ac', roughness: 0.82 });
const poolBasinMaterial = new THREE.MeshStandardMaterial({ color: '#315f67', roughness: 0.48 });
const interiorWallMaterial = new THREE.MeshStandardMaterial({ color: '#e9e1d2', roughness: 0.9 });
const interiorFloorMaterial = new THREE.MeshStandardMaterial({ color: '#9a8061', roughness: 0.9 });
const rugMaterial = new THREE.MeshStandardMaterial({ color: '#6c3435', roughness: 0.96 });
const upholsteryMaterial = new THREE.MeshStandardMaterial({ color: '#526b68', roughness: 0.88 });
const woodMaterial = new THREE.MeshStandardMaterial({ color: '#674632', roughness: 0.78 });
const interiorMetalMaterial = new THREE.MeshStandardMaterial({ color: '#bb9856', roughness: 0.38, metalness: 0.55 });
const securityUniformMaterial = new THREE.MeshStandardMaterial({ color: '#263b50', roughness: 0.86 });
const securityCapMaterial = new THREE.MeshStandardMaterial({ color: '#1e3145', roughness: 0.84 });
const securitySkinMaterial = new THREE.MeshStandardMaterial({ color: '#bd8464', roughness: 0.92 });
const waterMaterial = new THREE.MeshPhysicalMaterial({
  color: '#428f9a',
  roughness: 0.2,
  metalness: 0.1,
  clearcoat: 0.8,
  clearcoatRoughness: 0.18,
});

function cleanPolygon(polygon) {
  const points = polygon.map(([x, z]) => new THREE.Vector2(x, z));
  if (points.length > 1 && points[0].distanceToSquared(points[points.length - 1]) < 0.001) points.pop();
  return points;
}

function polygonArea(points) {
  return points.reduce((area, point, index) => {
    const next = points[(index + 1) % points.length];
    return area + point.x * next.y - next.x * point.y;
  }, 0) / 2;
}

function outwardNormal(direction, clockwise) {
  return clockwise
    ? new THREE.Vector2(-direction.y, direction.x)
    : new THREE.Vector2(direction.y, -direction.x);
}

function offsetPolygon(points, distance) {
  const clockwise = polygonArea(points) < 0;
  return points.map((point, index) => {
    const previous = points[(index - 1 + points.length) % points.length];
    const next = points[(index + 1) % points.length];
    const previousDirection = point.clone().sub(previous).normalize();
    const nextDirection = next.clone().sub(point).normalize();
    const previousNormal = outwardNormal(previousDirection, clockwise);
    const nextNormal = outwardNormal(nextDirection, clockwise);
    const miter = previousNormal.clone().add(nextNormal).normalize();
    const distanceScale = Math.min(distance / Math.max(0.35, miter.dot(nextNormal)), distance * 2.2);
    return point.clone().addScaledVector(miter, distanceScale);
  });
}

function closestPathPoint(path, target) {
  const clockwise = polygonArea(path) < 0;
  let closest = null;
  let minimumDistance = Infinity;
  for (let index = 0; index < path.length; index++) {
    const start = path[index];
    const end = path[(index + 1) % path.length];
    const segment = end.clone().sub(start);
    const fraction = THREE.MathUtils.clamp(target.clone().sub(start).dot(segment) / segment.lengthSq(), 0, 1);
    const position = start.clone().addScaledVector(segment, fraction);
    const distance = position.distanceToSquared(target);
    if (distance < minimumDistance) {
      minimumDistance = distance;
      closest = { position, direction: segment.normalize() };
    }
  }
  return { ...closest, outward: outwardNormal(closest.direction, clockwise) };
}

function box(parent, material, size, position, castShadow = true) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), material);
  mesh.position.set(...position);
  mesh.castShadow = castShadow;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function createInteriorTexture(kind) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 320;
  const context = canvas.getContext('2d');
  if (!context) throw new Error(`Unable to create the mansion ${kind} artwork.`);

  const sky = context.createLinearGradient(0, 0, 0, canvas.height);
  sky.addColorStop(0, kind === 'tv' ? '#83b8be' : '#d6a986');
  sky.addColorStop(1, kind === 'tv' ? '#e5c998' : '#f1d7ae');
  context.fillStyle = sky;
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = '#f6df9e';
  context.beginPath();
  context.arc(kind === 'tv' ? 350 : 145, 105, 42, 0, Math.PI * 2);
  context.fill();
  context.fillStyle = '#607b70';
  context.beginPath();
  context.moveTo(0, 230);
  context.lineTo(115, 115);
  context.lineTo(214, 225);
  context.lineTo(326, 132);
  context.lineTo(512, 242);
  context.lineTo(512, 320);
  context.lineTo(0, 320);
  context.closePath();
  context.fill();
  context.fillStyle = '#3e655c';
  context.beginPath();
  context.moveTo(0, 265);
  context.lineTo(160, 205);
  context.lineTo(284, 270);
  context.lineTo(410, 195);
  context.lineTo(512, 250);
  context.lineTo(512, 320);
  context.lineTo(0, 320);
  context.closePath();
  context.fill();
  context.fillStyle = '#d4b77a';
  context.fillRect(0, 277, canvas.width, 7);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function createCarpetTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const context = canvas.getContext('2d');
  if (!context) throw new Error('Unable to create the mansion room carpet.');
  context.fillStyle = '#71363a';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.strokeStyle = '#d1b16e';
  context.lineWidth = 12;
  context.strokeRect(18, 18, canvas.width - 36, canvas.height - 36);
  context.strokeStyle = '#e0c58b';
  context.lineWidth = 3;
  context.strokeRect(36, 36, canvas.width - 72, canvas.height - 72);
  context.fillStyle = '#d8b979';
  for (let y = 72; y < canvas.height - 56; y += 64) {
    for (let x = 72; x < canvas.width - 56; x += 64) {
      context.save();
      context.translate(x, y);
      context.rotate(Math.PI / 4);
      context.fillRect(-10, -10, 20, 20);
      context.restore();
      context.beginPath();
      context.arc(x, y, 4, 0, Math.PI * 2);
      context.fill();
    }
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function createSignTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 768;
  canvas.height = 192;
  const context = canvas.getContext('2d');
  if (!context) throw new Error('Unable to create the mansion entrance sign.');
  context.fillStyle = '#263536';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.strokeStyle = '#d1b76f';
  context.lineWidth = 9;
  context.strokeRect(7, 7, canvas.width - 14, canvas.height - 14);
  context.fillStyle = '#f4e8c9';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.font = 'bold 55px Georgia, serif';
  context.fillText('PRIVATE ESTATE', canvas.width / 2, canvas.height / 2);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function addMansionInteriors(group, width, depth) {
  const floor = box(group, interiorFloorMaterial, [width - 1.2, 0.12, depth - 1.2], [0, 0.06, 0], false);
  floor.name = 'Mansion walkable ground-floor interior';
  const carpetMaterial = new THREE.MeshStandardMaterial({
    map: createCarpetTexture(),
    roughness: 0.98,
  });
  const rug = box(group, carpetMaterial, [19, 0.035, 13], [0, 0.15, -4], false);
  rug.name = 'Mansion living-room rug';
  const foyerRunner = box(group, carpetMaterial, [3.8, 0.035, 10], [0, 0.15, 8], false);
  foyerRunner.name = 'Mansion entrance carpet runner';
  const diningRug = box(group, carpetMaterial, [11, 0.035, 9], [10, 0.15, 2], false);
  diningRug.name = 'Mansion dining-room carpet';
  const readingRug = box(group, carpetMaterial, [9, 0.035, 8], [-13, 0.15, 3], false);
  readingRug.name = 'Mansion reading-room carpet';

  const collisionParts = [];
  const guard = new THREE.Group();
  guard.name = 'Mansion interior security guard';
  guard.position.set(7, 0, 8);
  group.add(guard);
  box(guard, securityUniformMaterial, [0.92, 1.05, 0.52], [0, 1.55, 0]);
  box(guard, securityUniformMaterial, [1.12, 0.22, 0.58], [0, 1.05, 0]);
  for (const x of [-0.24, 0.24]) {
    box(guard, securityUniformMaterial, [0.34, 0.9, 0.42], [x, 0.48, 0.02]);
    box(guard, woodMaterial, [0.36, 0.16, 0.55], [x, 0.08, 0.07]);
  }
  for (const side of [-1, 1]) {
    const arm = box(guard, securityUniformMaterial, [0.34, 0.95, 0.38], [side * 0.68, 1.58, 0.02]);
    arm.rotation.z = side * -0.08;
    box(guard, securitySkinMaterial, [0.29, 0.28, 0.3], [side * 0.7, 1.08, 0.03]);
  }
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.39, 12, 10), securitySkinMaterial);
  head.position.set(0, 2.45, 0.04);
  head.castShadow = true;
  guard.add(head);
  box(guard, securityCapMaterial, [0.82, 0.2, 0.74], [0, 2.78, 0.03]);
  box(guard, securityCapMaterial, [0.94, 0.1, 0.38], [0, 2.68, 0.26]);
  box(guard, interiorMetalMaterial, [0.3, 0.34, 0.06], [0, 1.77, 0.3], false)
    .name = 'Mansion security guard badge';
  collisionParts.push({ localX: 7, localZ: 8, width: 1.2, depth: 1.2 });

  const artworkTexture = createInteriorTexture('painting');
  const paintingMaterial = new THREE.MeshStandardMaterial({ map: artworkTexture, roughness: 0.82 });
  for (const side of [-1, 1]) {
    const painting = new THREE.Group();
    painting.name = side < 0 ? 'Mansion landscape painting' : 'Mansion sunset painting';
    painting.position.set(side * (width / 2 - 0.95), 4.1, 1.8);
    painting.rotation.y = side < 0 ? Math.PI / 2 : -Math.PI / 2;
    group.add(painting);
    box(painting, interiorMetalMaterial, [0.24, 4.05, 5.9], [0, 0, 0], false);
    const canvas = new THREE.Mesh(new THREE.PlaneGeometry(5.35, 3.45), paintingMaterial);
    canvas.position.z = 0.15;
    painting.add(canvas);
  }

  const addFurniture = (name, x, z, furnitureWidth, furnitureDepth, pieces) => {
    const furniture = new THREE.Group();
    furniture.name = name;
    furniture.position.set(x, 0, z);
    group.add(furniture);
    pieces(furniture);
    collisionParts.push({ localX: x, localZ: z, width: furnitureWidth, depth: furnitureDepth });
  };

  const addSofa = (furniture, length) => {
    box(furniture, upholsteryMaterial, [length, 0.82, 2.2], [0, 0.62, 0]);
    box(furniture, upholsteryMaterial, [length, 1.25, 0.42], [0, 1.05, -0.86]);
    for (const x of [-length / 2 + 0.28, length / 2 - 0.28]) {
      box(furniture, upholsteryMaterial, [0.48, 0.94, 1.8], [x, 0.8, 0]);
    }
    for (let cushion = 0; cushion < 3; cushion++) {
      const x = -length / 2 + 1.15 + cushion * ((length - 2.3) / 2);
      box(furniture, paleStone, [0.95, 0.16, 0.82], [x, 1.1, -0.38], false);
    }
  };

  addFurniture('Mansion living-room sofa', -8, -8, 9.2, 2.8, (furniture) => addSofa(furniture, 9.2));
  addFurniture('Mansion lounge settee', 8, -8, 7.2, 2.8, (furniture) => {
    furniture.rotation.y = Math.PI;
    addSofa(furniture, 7.2);
  });
  addFurniture('Mansion coffee table', 0, -3.2, 5, 2.4, (furniture) => {
    box(furniture, woodMaterial, [5, 0.18, 2.4], [0, 0.86, 0]);
    for (const x of [-2, 2]) {
      box(furniture, interiorMetalMaterial, [0.16, 0.82, 0.16], [x, 0.42, 0]);
    }
    box(furniture, interiorMetalMaterial, [2.4, 0.06, 0.08], [0, 1.02, 0]);
  });
  addFurniture('Mansion dining table', 10, 2, 7, 4, (furniture) => {
    box(furniture, woodMaterial, [7, 0.24, 3.4], [0, 1.1, 0]);
    for (const x of [-2.7, 2.7]) {
      for (const z of [-1.65, 1.65]) {
        box(furniture, woodMaterial, [0.22, 1, 0.22], [x, 0.52, z]);
      }
    }
    for (const x of [-2.5, 0, 2.5]) {
      for (const z of [-2.8, 2.8]) {
        box(furniture, upholsteryMaterial, [1.35, 0.18, 1.15], [x, 0.62, z]);
        box(furniture, woodMaterial, [1.25, 1, 0.16], [x, 1.08, z + (z < 0 ? -0.48 : 0.48)]);
      }
    }
  });
  addFurniture('Mansion reading armchairs', -14, 2.5, 3.8, 6.8, (furniture) => {
    for (const z of [-1.8, 1.8]) {
      const chair = new THREE.Group();
      chair.position.z = z;
      chair.rotation.y = Math.PI / 2;
      furniture.add(chair);
      box(chair, upholsteryMaterial, [2.4, 0.78, 2.4], [0, 0.55, 0]);
      box(chair, upholsteryMaterial, [2.4, 1.15, 0.4], [0, 1.08, -0.98]);
      for (const x of [-1.02, 1.02]) {
        box(chair, upholsteryMaterial, [0.38, 0.92, 1.9], [x, 0.75, 0]);
      }
    }
  });
  addFurniture('Mansion media console', 0, -11.4, 11, 1.9, (furniture) => {
    box(furniture, woodMaterial, [11, 1.35, 1.5], [0, 0.72, 0]);
    box(furniture, interiorMetalMaterial, [11.2, 0.12, 1.65], [0, 1.43, 0]);
    for (const x of [-3.6, 0, 3.6]) {
      box(furniture, interiorMetalMaterial, [0.08, 0.72, 0.08], [x, 0.75, 0.78], false);
    }
  });
  const screenTexture = createInteriorTexture('tv');
  const screenFrame = box(group, roofMaterial, [10, 5.7, 0.42], [0, 4.65, -13.15]);
  screenFrame.name = 'Mansion wall-mounted television';
  const tvScreen = new THREE.Mesh(
    new THREE.PlaneGeometry(9.55, 5.25),
    new THREE.MeshStandardMaterial({
      map: screenTexture,
      emissive: '#a4d5cd',
      emissiveMap: screenTexture,
      emissiveIntensity: 0.32,
      roughness: 0.28,
    }),
  );
  tvScreen.position.set(0, 4.65, -12.91);
  tvScreen.name = 'Mansion television screen';
  group.add(tvScreen);
  addFurniture('Mansion living-room bookcase', 18.2, -3.1, 2.8, 8.5, (furniture) => {
    box(furniture, woodMaterial, [2.4, 6.2, 8], [0, 3.1, 0]);
    for (const shelfY of [1.35, 2.8, 4.25, 5.7]) {
      box(furniture, interiorMetalMaterial, [2.55, 0.12, 8.1], [0, shelfY, 0], false);
      for (let book = 0; book < 8; book++) {
        const colors = [upholsteryMaterial, rugMaterial, paleStone, gardenMaterial];
        const spine = box(furniture, colors[(book + Math.floor(shelfY)) % colors.length], [
          0.52,
          0.82 + (book % 3) * 0.13,
          0.62,
        ], [0, shelfY + 0.47, -3.35 + book * 0.95], false);
        spine.rotation.z = (book % 2 ? 1 : -1) * 0.035;
      }
    }
  });
  addFurniture('Mansion piano', -13.5, 10.1, 5.2, 3, (furniture) => {
    box(furniture, woodMaterial, [5.2, 2.2, 2.2], [0, 1.1, 0]);
    box(furniture, interiorMetalMaterial, [5, 0.12, 0.78], [0, 2.25, 0.76], false);
    for (let key = 0; key < 17; key++) {
      box(furniture, paleStone, [0.27, 0.08, 0.72], [-2.16 + key * 0.27, 2.36, 1.3], false);
      if (key < 16 && key % 7 !== 2 && key % 7 !== 6) {
        box(furniture, roofMaterial, [0.15, 0.1, 0.42], [-2.02 + key * 0.27, 2.44, 1.15], false);
      }
    }
    box(furniture, woodMaterial, [0.2, 2.2, 0.2], [-1.9, 1.1, 0.6]);
    box(furniture, woodMaterial, [0.2, 2.2, 0.2], [1.9, 1.1, 0.6]);
    box(furniture, upholsteryMaterial, [2.3, 0.28, 1], [0, 1.25, 2.4]);
    for (const x of [-0.9, 0.9]) {
      box(furniture, woodMaterial, [0.12, 1.15, 0.12], [x, 0.65, 2.4]);
    }
  });

  for (const [x, z] of [[-16, -10], [16, -10], [-16, 9], [16, 9]]) {
    const planter = new THREE.Group();
    planter.position.set(x, 0, z);
    group.add(planter);
    box(planter, warmStone, [1.3, 1.1, 1.3], [0, 0.55, 0]);
    const plant = new THREE.Mesh(new THREE.IcosahedronGeometry(0.9, 1), gardenMaterial);
    plant.position.set(0, 1.8, 0);
    plant.scale.set(0.8, 1.3, 0.8);
    plant.castShadow = true;
    planter.add(plant);
    collisionParts.push({ localX: x, localZ: z, width: 1.6, depth: 1.6 });
  }

  for (const x of [-8, 0, 8]) {
    const pendant = new THREE.Group();
    pendant.position.set(x, 7.9, -1.5);
    group.add(pendant);
    box(pendant, interiorMetalMaterial, [0.12, 1.2, 0.12], [0, 0.5, 0], false);
    const shade = new THREE.Mesh(new THREE.SphereGeometry(0.48, 12, 8), lampMaterial);
    shade.position.y = -0.15;
    pendant.add(shade);
    const light = new THREE.PointLight('#ffe2ad', 45, 28, 2);
    light.position.y = -0.7;
    pendant.add(light);
  }

  return collisionParts;
}

function addMansionBuilding(group, width, depth) {
  const wallHeight = 8.6;
  const wallDepth = 0.8;
  const wallZ = depth / 2 - wallDepth / 2;
  const entranceWidth = 5.8;
  const mainWall = new THREE.Group();
  mainWall.name = 'Mansion open, walkable ground-floor residence';
  group.add(mainWall);
  box(mainWall, paleStone, [wallDepth, wallHeight, depth], [-width / 2 + wallDepth / 2, wallHeight / 2, 0]);
  box(mainWall, paleStone, [wallDepth, wallHeight, depth], [width / 2 - wallDepth / 2, wallHeight / 2, 0]);
  box(mainWall, paleStone, [width - wallDepth * 2, wallHeight, wallDepth], [0, wallHeight / 2, -depth / 2 + wallDepth / 2]);
  const frontSegmentWidth = (width - entranceWidth) / 2;
  for (const side of [-1, 1]) {
    box(mainWall, paleStone, [frontSegmentWidth, wallHeight, wallDepth], [
      side * (entranceWidth / 2 + frontSegmentWidth / 2),
      wallHeight / 2,
      wallZ,
    ]);
  }
  const floor = box(group, interiorFloorMaterial, [width + 1.8, 0.12, depth + 1.8], [0, 0.06, 0], false);
  floor.name = 'Mansion stone ground-floor foundation';
  box(group, trimMaterial, [width + 1, 0.18, depth + 1], [0, 0.34, 0]);

  const upperWing = box(group, paleStone, [width * 0.76, 4.8, depth * 0.76], [0, 10.3, -0.4]);
  upperWing.name = 'Mansion upper floor';
  box(group, roofMaterial, [width + 1.8, 0.85, depth + 1.8], [0, 8.8, 0]);
  box(group, trimMaterial, [width + 0.9, 0.28, depth + 0.9], [0, 9.34, 0]);
  box(group, roofMaterial, [width * 0.83, 0.62, depth * 0.86], [0, 12.96, -0.4]);
  box(group, trimMaterial, [width * 0.84, 0.2, depth * 0.87], [0, 12.64, -0.4]);

  const frontZ = depth / 2 + 0.12;
  const windowPositions = [-14, -8, 8, 14];
  for (const [level, centerY, windowHeight] of [[0, 4.9, 2.65], [1, 10.75, 2.3]]) {
    for (const x of windowPositions) {
      const positionZ = level === 0 ? frontZ : depth * 0.38;
      const widthScale = level === 0 ? 2.8 : 2.55;
      const frameHeight = windowHeight + 0.42;
      box(group, trimMaterial, [widthScale + 0.54, frameHeight + 0.44, 0.2], [x, centerY, positionZ + 0.06], false);
      box(group, darkGlassMaterial, [widthScale, windowHeight, 0.12], [x, centerY, positionZ + 0.18], false);
      box(group, goldMaterial, [0.1, windowHeight, 0.08], [x, centerY, positionZ + 0.25], false);
      box(group, trimMaterial, [widthScale + 0.4, 0.2, 0.24], [x, centerY + frameHeight / 2, positionZ + 0.13], false);
      box(group, goldMaterial, [widthScale + 0.6, 0.18, 0.28], [x, centerY - frameHeight / 2, positionZ + 0.18], false);
    }
  }

  for (const x of [-width / 2 + 1.2, width / 2 - 1.2]) {
    box(group, warmStone, [1.5, 8.4, 0.38], [x, 4.25, frontZ + 0.08]);
    box(group, warmStone, [1.5, 4.5, 0.38], [x * 0.77, 10.4, depth * 0.38 + 0.08]);
  }

  const entryZ = frontZ + 0.28;
  box(group, warmStone, [1.1, 6.1, 1.25], [-3.35, 4.15, depth / 2 + 0.55]);
  box(group, warmStone, [1.1, 6.1, 1.25], [3.35, 4.15, depth / 2 + 0.55]);
  box(group, trimMaterial, [7.6, 0.65, 1.25], [0, 7.05, depth / 2 + 0.55]);
  box(group, goldMaterial, [0.14, 4.2, 0.1], [-2.72, 2.3, entryZ + 0.47], false);
  box(group, goldMaterial, [0.14, 4.2, 0.1], [2.72, 2.3, entryZ + 0.47], false);
  box(group, goldMaterial, [5.44, 0.14, 0.1], [0, 4.4, entryZ + 0.47], false);
  box(group, trimMaterial, [11.6, 0.48, 3.7], [0, 7.4, depth / 2 + 1.85]);
  for (const x of [-4.6, 4.6]) {
    box(group, paleStone, [0.65, 5.1, 0.75], [x, 3.95, depth / 2 + 2.9]);
    box(group, goldMaterial, [0.9, 0.24, 0.95], [x, 6.55, depth / 2 + 2.9]);
  }

  const pedimentShape = new THREE.Shape();
  pedimentShape.moveTo(-6.5, 0);
  pedimentShape.lineTo(0, 3.4);
  pedimentShape.lineTo(6.5, 0);
  pedimentShape.closePath();
  const pediment = new THREE.Mesh(new THREE.ShapeGeometry(pedimentShape), paleStone);
  pediment.position.set(0, 7.65, depth / 2 + 3.35);
  pediment.castShadow = true;
  group.add(pediment);
  box(group, trimMaterial, [13.4, 0.36, 0.5], [0, 7.7, depth / 2 + 3.4]);

  for (const x of [-7, 7]) {
    box(group, goldMaterial, [0.38, 1.15, 0.25], [x, 5.15, depth / 2 + 0.95], false);
    const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.25, 10, 8), lampMaterial);
    lamp.position.set(x, 5.95, depth / 2 + 0.95);
    group.add(lamp);
  }

  const carpetMaterial = new THREE.MeshStandardMaterial({
    map: createCarpetTexture(),
    roughness: 0.98,
  });
  const porchZ = depth / 2 + 4.45;
  box(group, paleStone, [11.2, 0.5, 6.4], [0, 0.28, porchZ]);
  box(group, carpetMaterial, [5.4, 0.035, 3.1], [0, 0.55, porchZ + 0.35], false);
  for (let step = 0; step < 5; step++) {
    const treadHeight = 0.48 - step * 0.1;
    const treadZ = porchZ + 6.4 / 2 + 0.54 + step * 1.02;
    const treadWidth = 10.4 - step * 0.35;
    box(group, step % 2 ? paleStone : warmStone,
      [treadWidth, treadHeight, 1.08],
      [0, treadHeight / 2, treadZ]);
    box(group, carpetMaterial, [2.5, 0.035, 0.78], [0, treadHeight + 0.02, treadZ], false)
      .name = `Mansion entrance stair carpet ${step + 1}`;
  }

  for (const side of [-1, 1]) {
    const balcony = box(group, roofMaterial, [11.8, 0.32, 3.3], [side * 8, 9.5, depth / 2 + 1.35]);
    balcony.castShadow = true;
    box(group, goldMaterial, [11.8, 0.8, 0.14], [side * 8, 10, depth / 2 + 2.92], false);
    for (let rail = 0; rail < 9; rail++) {
      box(
        group,
        goldMaterial,
        [0.09, 0.74, 0.09],
        [side * 8 - 5.5 + rail * 1.38, 9.98, depth / 2 + 2.92],
        false,
      );
    }
  }

  const wingWidth = 12;
  for (const side of [-1, 1]) {
    const wingCenterX = side * (width / 2 + wingWidth / 2 - 0.8);
    const wing = box(group, warmStone, [wingWidth, 5.4, 17], [wingCenterX, 2.7, -2.2]);
    wing.name = 'Mansion side wing';
    box(group, roofMaterial, [wingWidth + 0.9, 0.7, 17.8], [wingCenterX, 5.65, -2.2]);
    box(group, trimMaterial, [wingWidth + 1.1, 0.25, 18], [wingCenterX, 1.1, -2.2]);
    box(group, trimMaterial, [4.8, 3.1, 0.2], [wingCenterX, 3.15, 6.34]);
    box(group, darkGlassMaterial, [4.25, 2.55, 0.12], [wingCenterX, 3.15, 6.48], false);
    box(group, goldMaterial, [0.1, 2.55, 0.08], [wingCenterX, 3.15, 6.56], false);
  }

  for (const x of [-width * 0.32, 0, width * 0.32]) {
    const dormer = box(group, warmStone, [4.4, 1.1, 3.2], [x, 13.75, -depth * 0.1]);
    dormer.name = 'Mansion rooftop dormer';
    box(group, roofMaterial, [4.9, 0.4, 3.7], [x, 14.5, -depth * 0.1]);
    box(group, darkGlassMaterial, [2.1, 1.3, 0.14], [x, 13.85, depth * 0.32], false);
  }

  return addMansionInteriors(group, width, depth);
}

function addEstateGate(group, width, gateZ) {
  for (const x of [-width / 2, width / 2]) {
    box(group, boundaryStone, [1.2, 3.8, 1.2], [x, 1.9, gateZ]);
    box(group, goldMaterial, [1.5, 0.22, 1.5], [x, 3.85, gateZ]);
  }
  const leafMaterial = new THREE.MeshStandardMaterial({ color: '#333d3d', roughness: 0.5, metalness: 0.45 });
  const leafWidth = width / 2 - 1.2;
  for (const side of [-1, 1]) {
    const gateLeaf = new THREE.Group();
    gateLeaf.name = side < 0 ? 'Left mansion gate leaf, open' : 'Right mansion gate leaf, open';
    gateLeaf.position.set(side * width / 2, 0, gateZ);
    const leafCenterX = -side * leafWidth / 2;
    box(gateLeaf, leafMaterial, [leafWidth, 0.18, 0.22], [leafCenterX, 0.32, 0]);
    box(gateLeaf, leafMaterial, [leafWidth, 0.18, 0.22], [leafCenterX, 2.38, 0]);
    for (let bar = 0; bar <= 6; bar++) {
      box(
        gateLeaf,
        goldMaterial,
        [0.075, 2.15, 0.28],
        [leafCenterX - leafWidth / 2 + bar * leafWidth / 6, 1.35, 0],
        false,
      );
    }
    gateLeaf.rotation.y = -side * Math.PI / 2;
    group.add(gateLeaf);
  }
}

function createGardenDetails(group, width, depth) {
  const hedgeGeometry = new THREE.BoxGeometry(1.5, 1.25, 1.5);
  const hedge = new THREE.InstancedMesh(hedgeGeometry, gardenMaterial, 32);
  const matrix = new THREE.Matrix4();
  const positions = [];
  for (let index = 0; index < 9; index++) {
    positions.push([-width / 2 - 7, -depth / 2 + index * depth / 8]);
    positions.push([width / 2 + 7, -depth / 2 + index * depth / 8]);
  }
  for (let index = 0; index < 7; index++) {
    positions.push([-width / 2 + index * width / 6, -depth / 2 - 7]);
    if (index !== 3) positions.push([-width / 2 + index * width / 6, depth / 2 + 7]);
  }
  positions.forEach(([x, z], index) => {
    const scale = 0.78 + (index % 3) * 0.12;
    matrix.compose(
      new THREE.Vector3(x, 0.65 * scale, z),
      new THREE.Quaternion(),
      new THREE.Vector3(scale, scale, scale),
    );
    hedge.setMatrixAt(index, matrix);
  });
  hedge.count = positions.length;
  hedge.instanceMatrix.needsUpdate = true;
  hedge.castShadow = true;
  group.add(hedge);

  const poolZ = -depth / 2 - 17.5;
  const deckLength = 27;
  const deckWidth = 17;
  box(group, poolDeckMaterial, [deckWidth, 0.12, deckLength], [0, 0.07, poolZ]);
  box(group, poolBasinMaterial, [12.4, 0.34, 21.4], [0, 0.27, poolZ]);
  const poolLength = 20;
  const poolWidth = 11;
  const water = new THREE.Mesh(new THREE.BoxGeometry(poolWidth, 0.1, poolLength), waterMaterial);
  water.position.set(0, 0.49, poolZ);
  water.receiveShadow = true;
  group.add(water);

  for (const x of [-poolWidth / 2 - 0.38, poolWidth / 2 + 0.38]) {
    box(group, paleStone, [0.55, 0.22, poolLength + 1.1], [x, 0.55, poolZ]);
  }
  for (const z of [-poolLength / 2 - 0.38, poolLength / 2 + 0.38]) {
    box(group, paleStone, [poolWidth + 1.1, 0.22, 0.55], [0, 0.55, poolZ + z]);
  }

  const path = box(group, poolDeckMaterial, [8, 0.1, 4], [0, 0.07, poolZ + deckLength / 2 + 2]);
  path.name = 'Mansion rear garden path to the swimming pool';
  const ladderMaterial = new THREE.MeshStandardMaterial({ color: '#d9e1d8', roughness: 0.32, metalness: 0.68 });
  for (const x of [-0.38, 0.38]) {
    const rail = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.35, 8), ladderMaterial);
    rail.position.set(x, 0.82, poolZ + poolLength / 2 - 0.55);
    rail.castShadow = true;
    group.add(rail);
  }
  for (let step = 0; step < 3; step++) {
    box(group, ladderMaterial, [0.82, 0.08, 0.14], [0, 0.5 - step * 0.22, poolZ + poolLength / 2 - 0.15 - step * 0.22], false);
  }
}

function createEstateBoundary(group, width, depth, gateZ) {
  const wallMaterial = new THREE.MeshStandardMaterial({ color: '#b3a17f', roughness: 0.84 });
  const railingMaterial = new THREE.MeshStandardMaterial({ color: '#344341', roughness: 0.52, metalness: 0.32 });
  const halfWidth = width / 2;
  const halfDepth = depth / 2;
  const gateWidth = 13;
  const wallHeight = 1.55;
  const railHeight = 1.35;
  const collisionBoxes = [];
  const addBoundarySegment = (length, centerX, centerZ, alongX) => {
    const wallSize = alongX ? [length, wallHeight, 0.7] : [0.7, wallHeight, length];
    const railSize = alongX ? [length, railHeight, 0.2] : [0.2, railHeight, length];
    const wallY = wallHeight / 2;
    const railY = wallHeight + railHeight / 2;
    const wall = box(group, wallMaterial, wallSize, [centerX, wallY, centerZ]);
    wall.name = 'Mansion stone perimeter wall';
    const rail = box(group, railingMaterial, railSize, [centerX, railY, centerZ], false);
    rail.name = 'Mansion decorative perimeter railing';
    const postSpacing = 8;
    const postCount = Math.floor(length / postSpacing);
    for (let index = 0; index <= postCount; index++) {
      const offset = -length / 2 + (length * index) / postCount;
      const postX = alongX ? centerX + offset : centerX;
      const postZ = alongX ? centerZ : centerZ + offset;
      box(group, boundaryStone, [0.9, 3.2, 0.9], [postX, 1.6, postZ]);
      box(group, goldMaterial, [1.05, 0.18, 1.05], [postX, 3.25, postZ], false);
    }
    collisionBoxes.push({
      localX: centerX,
      localZ: centerZ,
      width: alongX ? length : 0.9,
      depth: alongX ? 0.9 : length,
    });
  };

  addBoundarySegment(depth, -halfWidth, 0, false);
  addBoundarySegment(depth, halfWidth, 0, false);
  addBoundarySegment(width, 0, -halfDepth, true);
  const frontLength = (width - gateWidth) / 2;
  addBoundarySegment(frontLength, -(gateWidth + frontLength) / 2, halfDepth, true);
  addBoundarySegment(frontLength, (gateWidth + frontLength) / 2, halfDepth, true);

  const entrancePillar = (x) => {
    box(group, boundaryStone, [1.5, 4.2, 1.5], [x, 2.1, gateZ]);
    box(group, goldMaterial, [1.8, 0.25, 1.8], [x, 4.25, gateZ], false);
    const lantern = new THREE.Mesh(new THREE.SphereGeometry(0.28, 10, 8), lampMaterial);
    lantern.position.set(x, 4.65, gateZ);
    group.add(lantern);
  };
  entrancePillar(-gateWidth / 2);
  entrancePillar(gateWidth / 2);
  return collisionBoxes;
}

function addSideGardenTrees(group, buildingWidth) {
  const trunkMaterial = new THREE.MeshStandardMaterial({ color: '#765139', roughness: 0.95 });
  const foliageMaterials = [
    new THREE.MeshStandardMaterial({ color: '#426b47', roughness: 1 }),
    new THREE.MeshStandardMaterial({ color: '#567e4e', roughness: 1 }),
    new THREE.MeshStandardMaterial({ color: '#6f8d54', roughness: 1 }),
  ];
  const wingOuterEdge = buildingWidth / 2 + 11.2;
  const treeX = wingOuterEdge + 4.2;
  for (const side of [-1, 1]) {
    for (let index = 0; index < 4; index++) {
      const z = -30 + index * 12;
      const height = 5.5 + (index % 2) * 0.7;
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.48, height, 8), trunkMaterial);
      trunk.position.set(side * treeX, height / 2, z);
      trunk.castShadow = true;
      group.add(trunk);
      const canopy = new THREE.Group();
      canopy.position.set(side * treeX, height - 0.25, z);
      for (const [offset, scale, materialIndex] of [
        [[0, 0, 0], 1.1, index % foliageMaterials.length],
        [[-1.25, 0.25, 0.25], 0.78, (index + 1) % foliageMaterials.length],
        [[1.15, 0.35, -0.3], 0.82, (index + 2) % foliageMaterials.length],
      ]) {
        const crown = new THREE.Mesh(new THREE.IcosahedronGeometry(1.7, 0), foliageMaterials[materialIndex]);
        crown.position.set(...offset);
        crown.scale.set(scale, scale * 1.15, scale);
        crown.castShadow = true;
        canopy.add(crown);
      }
      group.add(canopy);
    }
  }
}

export function createLuxuryMansion(scene, campusPolygon) {
  const boundary = cleanPolygon(campusPolygon);
  const clockwise = polygonArea(boundary) < 0;
  const highwayCenterline = offsetPolygon(boundary, 12.5);
  const target = new THREE.Vector2(161, -150);
  const closest = closestPathPoint(highwayCenterline, target);
  const outward = closest.outward;
  const inward = outward.clone().negate();
  const highwayJoin = closest.position.clone().addScaledVector(outward, 7.8);
  const mansionCenter = closest.position.clone().addScaledVector(outward, 89);
  const buildingWidth = 42;
  const buildingDepth = 29;
  const estateWidth = 82;
  const estateDepth = 130;
  const houseForwardOffset = 16;
  const rotation = Math.atan2(inward.x, inward.y);
  const mansion = new THREE.Group();
  mansion.name = 'Luxury highway-side mansion estate';
  mansion.position.set(mansionCenter.x, 0, mansionCenter.y);
  mansion.rotation.y = rotation;

  const estateGround = box(
    mansion,
    lawnMaterial,
    [estateWidth - 2, 0.08, estateDepth - 2],
    [0, 0.015, 0],
    false,
  );
  estateGround.name = 'Mansion estate landscaped lawn ground';
  estateGround.receiveShadow = true;

  const apronZ = buildingDepth / 2 + 9;
  const gateZ = estateDepth / 2 - 2.5;
  const drivewayLength = gateZ - apronZ;
  const drivewayCenterZ = apronZ + drivewayLength / 2;
  const driveway = box(mansion, drivewayMaterial, [10, 0.14, drivewayLength + 1.2], [0, 0.07, drivewayCenterZ], false);
  driveway.name = 'Mansion private driveway connecting to highway';
  driveway.receiveShadow = true;
  const drivewayEdges = new THREE.MeshStandardMaterial({ color: '#d5c6a0', roughness: 0.75 });
  for (const x of [-5.25, 5.25]) {
    box(mansion, drivewayEdges, [0.18, 0.1, drivewayLength + 1.5], [x, 0.13, drivewayCenterZ], false);
  }
  const endCourt = box(mansion, drivewayMaterial, [17, 0.14, 12], [0, 0.07, apronZ + 1], false);
  endCourt.receiveShadow = true;
  endCourt.name = 'Mansion arrival courtyard';
  addEstateGate(mansion, 10, gateZ);
  const houseGroup = new THREE.Group();
  houseGroup.name = 'Mansion moved forward within estate';
  houseGroup.position.z = houseForwardOffset;
  mansion.add(houseGroup);
  const interiorCollisionParts = addMansionBuilding(houseGroup, buildingWidth, buildingDepth);
  createGardenDetails(houseGroup, buildingWidth, buildingDepth);
  addSideGardenTrees(houseGroup, buildingWidth);
  const boundaryCollisionBoxes = createEstateBoundary(mansion, estateWidth, estateDepth, gateZ);

  const signTexture = createSignTexture();
  const estateSign = new THREE.Mesh(
    new THREE.PlaneGeometry(5.2, 1.3),
    new THREE.MeshStandardMaterial({ map: signTexture, side: THREE.DoubleSide, roughness: 0.46 }),
  );
  estateSign.position.set(0, 3.15, gateZ + 0.08);
  mansion.add(estateSign);

  const drivewayWorldPosition = (localZ) => {
    const point = new THREE.Vector3(0, 0, localZ).applyAxisAngle(new THREE.Vector3(0, 1, 0), rotation);
    return new THREE.Vector2(mansionCenter.x + point.x, mansionCenter.y + point.z);
  };
  const drivewayEnd = drivewayWorldPosition(gateZ + 1.5);
  const connectionVector = drivewayEnd.clone().sub(highwayJoin);
  const connectionLength = connectionVector.length();
  const connectionCenter = highwayJoin.clone().add(drivewayEnd).multiplyScalar(0.5);
  const access = new THREE.Mesh(new THREE.BoxGeometry(10, 0.14, connectionLength + 0.8), drivewayMaterial);
  access.position.set(connectionCenter.x, 0.08, connectionCenter.y);
  access.rotation.y = Math.atan2(connectionVector.x, connectionVector.y);
  access.receiveShadow = true;
  access.name = 'Mansion highway access connector';
  scene.add(access);

  scene.add(mansion);
  const halfWidth = estateWidth / 2;
  const halfDepth = estateDepth / 2;
  const halfX = Math.abs(Math.cos(rotation)) * halfWidth + Math.abs(Math.sin(rotation)) * halfDepth;
  const halfZ = Math.abs(Math.sin(rotation)) * halfWidth + Math.abs(Math.cos(rotation)) * halfDepth;
  const bounds = {
    minX: mansionCenter.x - halfX,
    maxX: mansionCenter.x + halfX,
    minZ: mansionCenter.y - halfZ,
    maxZ: mansionCenter.y + halfZ,
  };
  const collisionBox = (localX, localZ, width, depth) => {
    const worldX = mansionCenter.x + localX * Math.cos(rotation) + localZ * Math.sin(rotation);
    const worldZ = mansionCenter.y - localX * Math.sin(rotation) + localZ * Math.cos(rotation);
    const halfWidth = width / 2;
    const halfDepth = depth / 2;
    const extentX = Math.abs(Math.cos(rotation)) * halfWidth + Math.abs(Math.sin(rotation)) * halfDepth;
    const extentZ = Math.abs(Math.sin(rotation)) * halfWidth + Math.abs(Math.cos(rotation)) * halfDepth;
    return {
      minX: worldX - extentX,
      maxX: worldX + extentX,
      minZ: worldZ - extentZ,
      maxZ: worldZ + extentZ,
    };
  };
  const wingWidth = 12;
  const wingCenterX = buildingWidth / 2 + wingWidth / 2 - 0.8;
  const mainWallDepth = 0.8;
  const entranceWidth = 5.8;
  const frontWallWidth = (buildingWidth - entranceWidth) / 2;
  const wallCollisionParts = [
    { localX: -buildingWidth / 2 + mainWallDepth / 2, localZ: houseForwardOffset, width: mainWallDepth, depth: buildingDepth },
    { localX: buildingWidth / 2 - mainWallDepth / 2, localZ: houseForwardOffset, width: mainWallDepth, depth: buildingDepth },
    { localX: 0, localZ: houseForwardOffset - buildingDepth / 2 + mainWallDepth / 2, width: buildingWidth - mainWallDepth * 2, depth: mainWallDepth },
    ...[-1, 1].map((side) => ({
      localX: side * (entranceWidth / 2 + frontWallWidth / 2),
      localZ: houseForwardOffset + buildingDepth / 2 - mainWallDepth / 2,
      width: frontWallWidth,
      depth: mainWallDepth,
    })),
  ];
  const furnitureCollisionBoxes = interiorCollisionParts.map(({ localX, localZ, width, depth }) => (
    collisionBox(localX, localZ + houseForwardOffset, width, depth)
  ));
  const collisionBoxes = [
    ...wallCollisionParts.map(({ localX, localZ, width, depth }) => collisionBox(localX, localZ, width, depth)),
    collisionBox(-wingCenterX, houseForwardOffset - 2.2, wingWidth, 17),
    collisionBox(wingCenterX, houseForwardOffset - 2.2, wingWidth, 17),
    ...furnitureCollisionBoxes,
    ...boundaryCollisionBoxes.map(({ localX, localZ, width, depth }) => collisionBox(localX, localZ, width, depth)),
  ];
  return {
    bounds,
    center: { x: mansionCenter.x, z: mansionCenter.y },
    collisionBoxes,
    driveway: access,
    group: mansion,
  };
}
