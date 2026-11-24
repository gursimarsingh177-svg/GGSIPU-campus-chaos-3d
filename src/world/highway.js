import * as THREE from 'three';

const ROAD_INNER_OFFSET = 5;
const ROAD_OUTER_OFFSET = 20;
const ROAD_CENTER_OFFSET = (ROAD_INNER_OFFSET + ROAD_OUTER_OFFSET) / 2;
const ROAD_Y = 0.095;
const laneOffsets = [6.8, 10.1, 14.9, 18.2];
const trafficMaterials = ['#d7ddd8', '#536c88', '#b95d48', '#bdad83', '#5a7770', '#282c2e']
  .map((color) => new THREE.MeshStandardMaterial({ color, roughness: 0.62, metalness: 0.08 }));
const trafficGlassMaterial = new THREE.MeshStandardMaterial({
  color: '#89adb5',
  roughness: 0.28,
  metalness: 0.08,
  transparent: true,
  opacity: 0.84,
});
const tireMaterial = new THREE.MeshStandardMaterial({ color: '#202426', roughness: 1 });
const alloyMaterial = new THREE.MeshStandardMaterial({ color: '#c9d0ce', roughness: 0.3, metalness: 0.82 });
const roadMaterial = new THREE.MeshStandardMaterial({ color: '#303738', roughness: 0.96, side: THREE.DoubleSide });
const grassMaterial = new THREE.MeshStandardMaterial({ color: '#66845c', roughness: 1, side: THREE.DoubleSide });
const outerGrassMaterial = new THREE.MeshStandardMaterial({ color: '#526f4c', roughness: 1, side: THREE.DoubleSide });
const laneMaterial = new THREE.MeshStandardMaterial({ color: '#ded8c4', roughness: 0.78 });
const medianMaterial = new THREE.MeshStandardMaterial({ color: '#e3b94f', roughness: 0.72 });
const poleMaterial = new THREE.MeshStandardMaterial({ color: '#3a4445', roughness: 0.72, metalness: 0.18 });
const signalHousingMaterial = new THREE.MeshStandardMaterial({ color: '#22292a', roughness: 0.64 });

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
    const denominator = Math.max(0.35, miter.dot(nextNormal));
    return point.clone().addScaledVector(miter, Math.min(distance / denominator, distance * 2.2));
  });
}

function makeStripGeometry(inner, outer, y) {
  const positions = [];
  for (let index = 0; index < inner.length; index++) {
    const next = (index + 1) % inner.length;
    for (const point of [inner[index], outer[index], outer[next], inner[index], outer[next], inner[next]]) {
      positions.push(point.x, y, point.y);
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();
  return geometry;
}

function pathLength(points) {
  let length = 0;
  for (let index = 0; index < points.length; index++) {
    length += points[index].distanceTo(points[(index + 1) % points.length]);
  }
  return length;
}

function samplePath(points, distance) {
  const total = pathLength(points);
  let remaining = ((distance % total) + total) % total;
  for (let index = 0; index < points.length; index++) {
    const start = points[index];
    const end = points[(index + 1) % points.length];
    const length = start.distanceTo(end);
    if (remaining <= length) {
      const direction = end.clone().sub(start).normalize();
      return { position: start.clone().addScaledVector(direction, remaining), direction };
    }
    remaining -= length;
  }
  return { position: points[0].clone(), direction: points[1].clone().sub(points[0]).normalize() };
}

function closestPathDistance(points, target) {
  let distanceAlongPath = 0;
  let closestDistance = 0;
  let minimumSquaredDistance = Infinity;
  for (let index = 0; index < points.length; index++) {
    const start = points[index];
    const end = points[(index + 1) % points.length];
    const segment = end.clone().sub(start);
    const segmentLengthSquared = segment.lengthSq();
    const fraction = THREE.MathUtils.clamp(target.clone().sub(start).dot(segment) / segmentLengthSquared, 0, 1);
    const closestPoint = start.clone().addScaledVector(segment, fraction);
    const squaredDistance = closestPoint.distanceToSquared(target);
    if (squaredDistance < minimumSquaredDistance) {
      minimumSquaredDistance = squaredDistance;
      closestDistance = distanceAlongPath + Math.sqrt(segmentLengthSquared) * fraction;
    }
    distanceAlongPath += Math.sqrt(segmentLengthSquared);
  }
  return closestDistance;
}

function addDashedLine(group, path, offset, material, dashLength, gapLength) {
  const linePath = offsetPolygon(path, offset);
  const dashGeometry = new THREE.BoxGeometry(0.13, 0.025, dashLength);
  const total = pathLength(linePath);
  for (let distance = 0; distance < total; distance += dashLength + gapLength) {
    const { position, direction } = samplePath(linePath, distance + dashLength / 2);
    const dash = new THREE.Mesh(dashGeometry, material);
    dash.position.set(position.x, ROAD_Y + 0.025, position.y);
    dash.rotation.y = Math.atan2(direction.x, direction.y);
    group.add(dash);
  }
}

function createCar(colorIndex) {
  const car = new THREE.Group();
  car.name = `Highway traffic car ${colorIndex + 1}`;
  const body = new THREE.Mesh(new THREE.BoxGeometry(2.25, 0.8, 5.15), trafficMaterials[colorIndex % trafficMaterials.length]);
  body.position.y = 0.68;
  body.castShadow = true;
  car.add(body);
  const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.78, 0.86, 2.72), trafficGlassMaterial);
  cabin.position.set(0, 1.48, -0.12);
  car.add(cabin);
  const roof = new THREE.Mesh(new THREE.BoxGeometry(1.68, 0.14, 1.65), trafficMaterials[colorIndex % trafficMaterials.length]);
  roof.position.set(0, 1.94, -0.14);
  car.add(roof);
  const bumperMaterial = new THREE.MeshStandardMaterial({ color: '#34393a', roughness: 0.58, metalness: 0.25 });
  const frontBumper = new THREE.Mesh(new THREE.BoxGeometry(2.18, 0.24, 0.18), bumperMaterial);
  frontBumper.position.set(0, 0.47, 2.6);
  car.add(frontBumper);
  const rearBumper = frontBumper.clone();
  rearBumper.position.z = -2.6;
  car.add(rearBumper);
  const grille = new THREE.Mesh(new THREE.BoxGeometry(0.82, 0.32, 0.08), bumperMaterial);
  grille.position.set(0, 0.82, 2.63);
  car.add(grille);
  const headlightMaterial = new THREE.MeshStandardMaterial({ color: '#fff0bd', emissive: '#ab8d48', emissiveIntensity: 0.6 });
  const tailLightMaterial = new THREE.MeshStandardMaterial({ color: '#a93e35', emissive: '#4b0805', emissiveIntensity: 0.35 });
  for (const x of [-0.82, 0.82]) {
    const headlight = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.24, 0.09), headlightMaterial);
    headlight.position.set(x, 0.95, 2.62);
    car.add(headlight);
    const tailLight = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.35, 0.09), tailLightMaterial);
    tailLight.position.set(x, 0.9, -2.62);
    car.add(tailLight);
  }
  const wheelGeometry = new THREE.CylinderGeometry(0.46, 0.46, 0.3, 12);
  const alloyGeometry = new THREE.CylinderGeometry(0.27, 0.27, 0.34, 12);
  const alloyRingGeometry = new THREE.TorusGeometry(0.26, 0.045, 6, 12);
  for (const x of [-0.92, 0.92]) {
    for (const z of [-1.68, 1.68]) {
      const wheel = new THREE.Mesh(wheelGeometry, tireMaterial);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(x, 0.48, z);
      car.add(wheel);
      const alloy = new THREE.Mesh(alloyGeometry, alloyMaterial);
      alloy.rotation.z = Math.PI / 2;
      alloy.position.set(x * 1.12, 0.48, z);
      car.add(alloy);
      const ring = new THREE.Mesh(alloyRingGeometry, alloyMaterial);
      ring.rotation.y = Math.PI / 2;
      ring.position.set(x * 1.14, 0.48, z);
      car.add(ring);
      for (let spokeIndex = 0; spokeIndex < 5; spokeIndex++) {
        const angle = spokeIndex * Math.PI * 2 / 5;
        const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.34, 0.08), alloyMaterial);
        spoke.position.set(x * 1.15, 0.48 + Math.sin(angle) * 0.12, z + Math.cos(angle) * 0.12);
        spoke.rotation.x = angle;
        car.add(spoke);
      }
    }
  }
  car.scale.setScalar(1.16);
  return car;
}

function makeTreeMeshes(group, points, count, clockwise) {
  const trunkGeometry = new THREE.BoxGeometry(0.6, 3.4, 0.6);
  const canopyGeometry = new THREE.BoxGeometry(3.2, 3.0, 3.2);
  const trunkMaterial = new THREE.MeshStandardMaterial({ color: '#70543b', roughness: 1 });
  const canopyMaterial = new THREE.MeshStandardMaterial({ color: '#527b4e', roughness: 1 });
  const trunks = new THREE.InstancedMesh(trunkGeometry, trunkMaterial, count);
  const canopies = new THREE.InstancedMesh(canopyGeometry, canopyMaterial, count);
  const matrix = new THREE.Matrix4();
  const position = new THREE.Vector3();
  const objectScale = new THREE.Vector3();
  const length = pathLength(points);
  for (let index = 0; index < count; index++) {
    const fraction = (index + 0.35) / count;
    const { position: pathPosition, direction } = samplePath(points, length * fraction);
    const outward = outwardNormal(direction, clockwise);
    const distance = 12.8 + (index % 2) * 1.2;
    const scale = 0.85 + (index % 4) * 0.08;
    position.set(pathPosition.x + outward.x * distance, 1.75 * scale, pathPosition.y + outward.y * distance);
    objectScale.setScalar(scale);
    matrix.compose(position, new THREE.Quaternion(), objectScale);
    trunks.setMatrixAt(index, matrix);
    position.y = 4.8 * scale;
    matrix.compose(position, new THREE.Quaternion(), objectScale);
    canopies.setMatrixAt(index, matrix);
  }
  trunks.castShadow = true;
  canopies.castShadow = true;
  group.add(trunks, canopies);
}

function createTrafficSignal(scene, path, fraction, index, signalMaterials, animatedSignals, clockwise) {
  const length = pathLength(path);
  const { position, direction } = samplePath(path, length * fraction);
  const outward = outwardNormal(direction, clockwise);
  const group = new THREE.Group();
  group.position.set(position.x + outward.x * 9.2, 0, position.y + outward.y * 9.2);
  group.rotation.y = Math.atan2(direction.x, direction.y);
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.2, 6.8, 8), poleMaterial);
  pole.position.set(0, 3.4, 0);
  group.add(pole);
  const arm = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.16, 5.2), poleMaterial);
  arm.position.set(0, 6.45, 2.3);
  group.add(arm);

  for (const side of [-1, 1]) {
    const housing = new THREE.Mesh(new THREE.BoxGeometry(0.62, 1.9, 0.55), signalHousingMaterial);
    housing.position.set(side * 1.2, 5.6, 2.3);
    group.add(housing);
    const lenses = [];
    for (let light = 0; light < 3; light++) {
      const material = signalMaterials[light].clone();
      const lens = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 8), material);
      lens.position.set(side * 1.2, 6.15 - light * 0.55, 2.6);
      group.add(lens);
      lenses.push(lens);
    }
    animatedSignals.push({ lenses, index, side });
  }
  scene.add(group);
}

export function createHighway(scene, campusPolygon) {
  const highway = new THREE.Group();
  highway.name = 'Four-lane perimeter highway outside campus boundary';
  const boundary = cleanPolygon(campusPolygon);
  const clockwise = polygonArea(boundary) < 0;
  const innerRoad = offsetPolygon(boundary, ROAD_INNER_OFFSET);
  const outerRoad = offsetPolygon(boundary, ROAD_OUTER_OFFSET);
  const centerPath = offsetPolygon(boundary, ROAD_CENTER_OFFSET);

  highway.add(new THREE.Mesh(makeStripGeometry(offsetPolygon(boundary, 1.4), innerRoad, 0.015), grassMaterial));
  highway.add(new THREE.Mesh(makeStripGeometry(outerRoad, offsetPolygon(boundary, 27), 0.012), outerGrassMaterial));
  const asphalt = new THREE.Mesh(makeStripGeometry(innerRoad, outerRoad, ROAD_Y), roadMaterial);
  asphalt.name = 'Four-lane highway asphalt';
  asphalt.receiveShadow = true;
  highway.add(asphalt);

  for (const divider of [-3.75, 3.75]) {
    addDashedLine(highway, centerPath, divider, laneMaterial, 3.2, 2.8);
  }
  for (const divider of [-0.3, 0.3]) {
    addDashedLine(highway, centerPath, divider, medianMaterial, 4.2, 0.5);
  }
  scene.add(highway);

  const trees = new THREE.Group();
  trees.name = 'Trees and green belt around the perimeter highway';
  const perimeterLength = pathLength(centerPath);
  makeTreeMeshes(trees, centerPath, Math.max(24, Math.floor(perimeterLength / 15)), clockwise);
  scene.add(trees);

  const signalMaterials = [
    new THREE.MeshStandardMaterial({ color: '#572b2b', emissive: '#120000', emissiveIntensity: 0.12 }),
    new THREE.MeshStandardMaterial({ color: '#66552a', emissive: '#110a00', emissiveIntensity: 0.12 }),
    new THREE.MeshStandardMaterial({ color: '#2b5634', emissive: '#001105', emissiveIntensity: 0.12 }),
  ];
  const animatedSignals = [];
  for (const [index, fraction] of [0.06, 0.29, 0.53, 0.78].entries()) {
    createTrafficSignal(scene, centerPath, fraction, index, signalMaterials, animatedSignals, clockwise);
  }

  const vehicles = [];
  const gateRoadPosition = new THREE.Vector2(-27.5, 123.4);
  for (let laneIndex = 0; laneIndex < laneOffsets.length; laneIndex++) {
    let path = offsetPolygon(boundary, laneOffsets[laneIndex]);
    if (laneIndex >= 2) path = [...path].reverse();
    const laneLength = pathLength(path);
    const nearGateDistance = closestPathDistance(path, gateRoadPosition);
    for (let carIndex = 0; carIndex < 3; carIndex++) {
      const car = createCar(carIndex + laneIndex * 3);
      car.position.y = ROAD_Y;
      scene.add(car);
      vehicles.push({
        car,
        path,
        distance: carIndex === 0
          ? nearGateDistance + (laneIndex % 2 === 0 ? 2 : -2)
          : laneLength * ((carIndex + 0.25 * laneIndex) / 3),
        speed: 8.5 + ((carIndex + laneIndex) % 3) * 1.3,
      });
    }
  }

  let elapsed = 0;
  return {
    update(dt) {
      elapsed += dt;
      for (const vehicle of vehicles) {
        vehicle.distance = (vehicle.distance + vehicle.speed * dt) % pathLength(vehicle.path);
        const { position, direction } = samplePath(vehicle.path, vehicle.distance);
        vehicle.car.position.set(position.x, ROAD_Y, position.y);
        vehicle.car.rotation.y = Math.atan2(direction.x, direction.y);
      }
      const phase = elapsed % 18;
      const activeColor = phase < 8 ? 2 : phase < 10 ? 1 : 0;
      for (const signal of animatedSignals) {
        const activeLens = signal.side === 1 ? activeColor : (activeColor === 2 ? 0 : 2);
        signal.lenses.forEach((lens, index) => {
          lens.material.emissiveIntensity = index === activeLens ? 2.3 : 0.12;
        });
      }
    },
  };
}
