import * as THREE from 'three';

const wallMaterials = [
  new THREE.MeshStandardMaterial({ color: '#b5b3aa', roughness: 0.88 }),
  new THREE.MeshStandardMaterial({ color: '#a9b5b8', roughness: 0.72, metalness: 0.12 }),
  new THREE.MeshStandardMaterial({ color: '#c4b8a2', roughness: 0.9 }),
  new THREE.MeshStandardMaterial({ color: '#919f9d', roughness: 0.76, metalness: 0.1 }),
];
const windowMaterials = [
  new THREE.MeshStandardMaterial({ color: '#456b76', roughness: 0.3, metalness: 0.25, emissive: '#10252b', emissiveIntensity: 0.18 }),
  new THREE.MeshStandardMaterial({ color: '#8a9994', roughness: 0.34, metalness: 0.18, emissive: '#302d20', emissiveIntensity: 0.12 }),
];
const trimMaterial = new THREE.MeshStandardMaterial({ color: '#d3c9b3', roughness: 0.72 });
const roofMaterial = new THREE.MeshStandardMaterial({ color: '#737d79', roughness: 0.86 });
const offsetDistance = 42;
const buildingSpacing = 24;

function cleanPolygon(polygon) {
  const points = polygon.map(([x, z]) => new THREE.Vector2(x, z));
  if (points.length > 1 && points[0].distanceToSquared(points[points.length - 1]) < 0.001) points.pop();
  return points;
}

function signedArea(points) {
  return points.reduce((area, point, index) => {
    const next = points[(index + 1) % points.length];
    return area + point.x * next.y - next.x * point.y;
  }, 0) / 2;
}

function offsetPolygon(points, distance) {
  const clockwise = signedArea(points) < 0;
  return points.map((point, index) => {
    const previous = points[(index - 1 + points.length) % points.length];
    const next = points[(index + 1) % points.length];
    const previousDirection = point.clone().sub(previous).normalize();
    const nextDirection = next.clone().sub(point).normalize();
    const normal = (direction) => clockwise
      ? new THREE.Vector2(-direction.y, direction.x)
      : new THREE.Vector2(direction.y, -direction.x);
    const previousNormal = normal(previousDirection);
    const nextNormal = normal(nextDirection);
    const miter = previousNormal.clone().add(nextNormal).normalize();
    const scale = Math.min(distance / Math.max(0.35, miter.dot(nextNormal)), distance * 2.2);
    return point.clone().addScaledVector(miter, scale);
  });
}

function getPathLength(points) {
  return points.reduce((length, point, index) => length + point.distanceTo(points[(index + 1) % points.length]), 0);
}

function samplePath(points, distance) {
  let remaining = distance % getPathLength(points);
  for (let index = 0; index < points.length; index++) {
    const start = points[index];
    const end = points[(index + 1) % points.length];
    const segmentLength = start.distanceTo(end);
    if (remaining <= segmentLength) {
      return {
        position: start.clone().lerp(end, remaining / segmentLength),
        direction: end.clone().sub(start).normalize(),
      };
    }
    remaining -= segmentLength;
  }
  return { position: points[0].clone(), direction: points[1].clone().sub(points[0]).normalize() };
}

function isNearEntrance(position) {
  return Math.hypot(position.x + 27.5, position.y - 123.4) < 28;
}

function createTower(scene, position, direction, index, random) {
  const width = 11 + random() * 4.5;
  const depth = 10 + random() * 4;
  const floors = 8 + Math.floor(random() * 7);
  const floorHeight = 2.5;
  const height = floors * floorHeight + 1;
  const rotation = Math.atan2(direction.x, direction.y);
  const building = new THREE.Group();
  building.name = `Exterior high-rise ${index + 1}`;
  building.position.set(position.x, 0, position.y);
  building.rotation.y = rotation;

  const body = new THREE.Mesh(
    new THREE.BoxGeometry(width, height, depth),
    wallMaterials[index % wallMaterials.length],
  );
  body.position.y = height / 2;
  body.castShadow = true;
  body.receiveShadow = true;
  building.add(body);

  const floorsGeometry = new THREE.BoxGeometry(width + 0.4, 0.28, depth + 0.4);
  const roofline = new THREE.Mesh(floorsGeometry, trimMaterial);
  roofline.position.y = height - 0.1;
  roofline.castShadow = true;
  building.add(roofline);
  const roofRoom = new THREE.Mesh(
    new THREE.BoxGeometry(width * 0.34, 1.8 + random() * 1.4, depth * 0.38),
    roofMaterial,
  );
  roofRoom.position.set(width * 0.17, height + 0.85, -depth * 0.12);
  roofRoom.castShadow = true;
  building.add(roofRoom);

  const frontWindows = [];
  const sideWindows = [];
  const columns = Math.max(3, Math.floor(width / 2.5));
  const sideColumns = Math.max(2, Math.floor(depth / 2.5));
  const windowWidth = 0.95;
  const windowHeight = 1.32;
  for (let floor = 0; floor < floors; floor++) {
    const y = 1.15 + floor * floorHeight;
    for (let column = 0; column < columns; column++) {
      const x = -width / 2 + ((column + 0.5) * width) / columns;
      frontWindows.push(new THREE.Matrix4().makeTranslation(x, y, depth / 2 + 0.035));
      frontWindows.push(new THREE.Matrix4().makeTranslation(x, y, -depth / 2 - 0.035).multiply(
        new THREE.Matrix4().makeRotationY(Math.PI),
      ));
    }
    for (let column = 0; column < sideColumns; column++) {
      const z = -depth / 2 + ((column + 0.5) * depth) / sideColumns;
      sideWindows.push(new THREE.Matrix4().makeTranslation(width / 2 + 0.035, y, z).multiply(
        new THREE.Matrix4().makeRotationY(Math.PI / 2),
      ));
      sideWindows.push(new THREE.Matrix4().makeTranslation(-width / 2 - 0.035, y, z).multiply(
        new THREE.Matrix4().makeRotationY(-Math.PI / 2),
      ));
    }
  }

  const frontWindowMesh = new THREE.InstancedMesh(
    new THREE.BoxGeometry(windowWidth, windowHeight, 0.07),
    windowMaterials[index % windowMaterials.length],
    frontWindows.length,
  );
  frontWindows.forEach((matrix, windowIndex) => frontWindowMesh.setMatrixAt(windowIndex, matrix));
  frontWindowMesh.instanceMatrix.needsUpdate = true;
  building.add(frontWindowMesh);

  const sideWindowMesh = new THREE.InstancedMesh(
    new THREE.BoxGeometry(windowWidth, windowHeight, 0.07),
    windowMaterials[(index + 1) % windowMaterials.length],
    sideWindows.length,
  );
  sideWindows.forEach((matrix, windowIndex) => sideWindowMesh.setMatrixAt(windowIndex, matrix));
  sideWindowMesh.instanceMatrix.needsUpdate = true;
  building.add(sideWindowMesh);

  scene.add(building);
  const halfWidth = width / 2 + 0.4;
  const halfDepth = depth / 2 + 0.4;
  const halfX = Math.abs(Math.cos(rotation)) * halfWidth + Math.abs(Math.sin(rotation)) * halfDepth;
  const halfZ = Math.abs(Math.sin(rotation)) * halfWidth + Math.abs(Math.cos(rotation)) * halfDepth;
  return {
    minX: position.x - halfX,
    maxX: position.x + halfX,
    minZ: position.y - halfZ,
    maxZ: position.y + halfZ,
  };
}

export function createCityscape(scene, campusPolygon, reservedLots = []) {
  const boundary = cleanPolygon(campusPolygon);
  const outerPath = offsetPolygon(boundary, offsetDistance);
  const totalLength = getPathLength(outerPath);
  let seed = 193;
  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
  const count = Math.floor(totalLength / buildingSpacing);
  const collisionBoxes = [];
  let placed = 0;
  for (let index = 0; index < count; index++) {
    const distance = (index + 0.5) * totalLength / count;
    const { position, direction } = samplePath(outerPath, distance);
    if (isNearEntrance(position)
      || reservedLots.some((lot) => Math.abs(position.x - lot.x) < lot.halfWidth && Math.abs(position.y - lot.z) < lot.halfDepth)) continue;
    collisionBoxes.push(createTower(scene, position, direction, placed, random));
    placed++;
  }

  return { collisionBoxes };
}
