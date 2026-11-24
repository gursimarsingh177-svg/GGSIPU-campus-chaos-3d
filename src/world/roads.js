import * as THREE from 'three';

export const CAMPUS_ROUTES = [
  { points: [[-24, 118], [-24, 22], [-24, -17]], width: 14 },
  { points: [[-80, 22], [-24, 22], [-5, 22]], width: 12 },
  { points: [[-80, 22], [-96, 12], [-101, 0], [-95, -14], [-82, -20], [-70, -24], [-58, -26], [-40, -24], [-27, -20], [-24, -17]], width: 11 },
  { points: [[-24, -17], [-15, -28], [-7, -45], [-6, -60], [-2, -69], [12, -75], [22, -82]], width: 11 },
  { points: [[22, -82], [3, -82], [-8, -84], [-13, -90]], width: 8.5 },
  { points: [[22, -82], [140, -82]], width: 18 },
  { points: [[31, -82], [31, -68]], width: 9 },
  { points: [[69, -101], [69, -60]], width: 11 },
  { points: [[140, -82], [140, -101], [128, -101], [128, -82]], width: 16 },
];

const ROAD_SURFACE_HEIGHT = 0.075;
const FOOTPATH_SURFACE_HEIGHT = ROAD_SURFACE_HEIGHT;
const asphalt = new THREE.MeshStandardMaterial({ color: '#343b3c', roughness: 0.96 });
const sidewalk = new THREE.MeshStandardMaterial({ color: '#b5b2a8', roughness: 0.92 });
const roadMarking = new THREE.MeshStandardMaterial({
  color: '#d8d1bd',
  roughness: 0.72,
  polygonOffset: true,
  polygonOffsetFactor: -1,
  polygonOffsetUnits: -1,
});
const CELL_SIZE = 0.16;
const SIDEWALK_WIDTH = 2.8;

function makeSurfaceTexture(kind) {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const context = canvas.getContext('2d');
  if (!context) throw new Error(`Unable to create the campus ${kind} texture.`);
  const image = context.createImageData(canvas.width, canvas.height);
  let seed = kind === 'asphalt' ? 71 : 173;
  for (let index = 0; index < image.data.length; index += 4) {
    seed = (seed * 16807) % 2147483647;
    const noise = (seed - 1) / 2147483646;
    const shade = kind === 'asphalt'
      ? 176 + Math.floor(noise * 66)
      : 198 + Math.floor(noise * 48);
    image.data[index] = shade;
    image.data[index + 1] = shade;
    image.data[index + 2] = shade;
    image.data[index + 3] = 255;
  }
  context.putImageData(image, 0, 0);
  context.globalAlpha = kind === 'asphalt' ? 0.08 : 0.1;
  context.strokeStyle = kind === 'asphalt' ? '#3d4545' : '#68675f';
  context.lineWidth = kind === 'asphalt' ? 2 : 1;
  for (let y = 16; y < 128; y += 32) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(128, y);
    context.stroke();
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(5, 5);
  texture.anisotropy = 8;
  return texture;
}

function pointInPolygon(x, z, polygon) {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [xi, zi] = polygon[i];
    const [xj, zj] = polygon[j];
    if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) inside = !inside;
  }
  return inside;
}

function distanceToPolygonEdge(x, z, polygon) {
  let nearest = Infinity;
  for (let index = 0; index < polygon.length; index++) {
    const [ax, az] = polygon[index];
    const [bx, bz] = polygon[(index + 1) % polygon.length];
    nearest = Math.min(nearest, distanceToSegment(x, z, ax, az, bx, bz));
  }
  return nearest;
}

function distanceToSegment(x, z, ax, az, bx, bz) {
  const dx = bx - ax;
  const dz = bz - az;
  const lengthSquared = dx * dx + dz * dz;
  const t = lengthSquared === 0
    ? 0
    : THREE.MathUtils.clamp(((x - ax) * dx + (z - az) * dz) / lengthSquared, 0, 1);
  return Math.hypot(x - (ax + t * dx), z - (az + t * dz));
}

function buildSurfaceGeometries(campusPolygon, buildingBounds) {
  const segments = [];
  let minX = Infinity;
  let maxX = -Infinity;
  let minZ = Infinity;
  let maxZ = -Infinity;

  for (const route of CAMPUS_ROUTES) {
    for (let index = 0; index < route.points.length - 1; index++) {
      const [ax, az] = route.points[index];
      const [bx, bz] = route.points[index + 1];
      const halfWidth = route.width / 2;
      segments.push({ ax, az, bx, bz, halfWidth });
      minX = Math.min(minX, ax, bx);
      maxX = Math.max(maxX, ax, bx);
      minZ = Math.min(minZ, az, bz);
      maxZ = Math.max(maxZ, az, bz);
    }
  }

  const margin = Math.max(...CAMPUS_ROUTES.map((route) => route.width / 2)) + SIDEWALK_WIDTH;
  const startX = Math.floor((minX - margin) / CELL_SIZE) * CELL_SIZE;
  const endX = Math.ceil((maxX + margin) / CELL_SIZE) * CELL_SIZE;
  const startZ = Math.floor((minZ - margin) / CELL_SIZE) * CELL_SIZE;
  const endZ = Math.ceil((maxZ + margin) / CELL_SIZE) * CELL_SIZE;
  const roadPositions = [];
  const sidewalkPositions = [];
  const addQuad = (positions, x, z, y) => {
    positions.push(
      x, y, z,
      x, y, z + CELL_SIZE,
      x + CELL_SIZE, y, z,
      x + CELL_SIZE, y, z,
      x, y, z + CELL_SIZE,
      x + CELL_SIZE, y, z + CELL_SIZE,
    );
  };

  for (let z = startZ; z < endZ; z += CELL_SIZE) {
    for (let x = startX; x < endX; x += CELL_SIZE) {
      const centerX = x + CELL_SIZE / 2;
      const centerZ = z + CELL_SIZE / 2;
      if (!pointInPolygon(centerX, centerZ, campusPolygon)
        || distanceToPolygonEdge(centerX, centerZ, campusPolygon) < CELL_SIZE * 0.8) continue;

      const insideBuilding = buildingBounds.some((bounds) => (
        centerX >= bounds.minX - 0.8 && centerX <= bounds.maxX + 0.8
        && centerZ >= bounds.minZ - 0.8 && centerZ <= bounds.maxZ + 0.8
      ));
      if (insideBuilding) continue;

      let road = false;
      let edgeDistance = Infinity;

      for (const segment of segments) {
        const distance = distanceToSegment(centerX, centerZ, segment.ax, segment.az, segment.bx, segment.bz);
        if (distance <= segment.halfWidth) road = true;
        edgeDistance = Math.min(edgeDistance, distance - segment.halfWidth);
      }

      if (road) addQuad(roadPositions, x, z, ROAD_SURFACE_HEIGHT);
      else if (edgeDistance >= 0 && edgeDistance <= SIDEWALK_WIDTH) {
        addQuad(sidewalkPositions, x, z, FOOTPATH_SURFACE_HEIGHT);
      }
    }
  }

  const toGeometry = (positions) => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const uvs = [];
    for (let index = 0; index < positions.length; index += 3) {
      uvs.push(positions[index] / 8, positions[index + 2] / 8);
    }
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geometry.computeVertexNormals();
    geometry.computeBoundingSphere();
    return geometry;
  };
  return {
    road: toGeometry(roadPositions),
    sidewalk: toGeometry(sidewalkPositions),
  };
}

export function createRoadNetwork(scene, campusPolygon, buildingBounds = []) {
  const group = new THREE.Group();
  group.name = 'Campus roads and walks · connected approximate route network';

  const geometry = buildSurfaceGeometries(campusPolygon, buildingBounds);
  sidewalk.map = makeSurfaceTexture('sidewalk');
  asphalt.map = makeSurfaceTexture('asphalt');
  sidewalk.needsUpdate = true;
  asphalt.needsUpdate = true;
  const sidewalkMesh = new THREE.Mesh(geometry.sidewalk, sidewalk);
  sidewalkMesh.name = 'Connected sidewalk union';
  sidewalkMesh.receiveShadow = true;

  const roadMesh = new THREE.Mesh(geometry.road, asphalt);
  roadMesh.name = 'Connected asphalt union';
  roadMesh.receiveShadow = true;

  group.add(sidewalkMesh, roadMesh, createRoadMarkings());
  scene.add(group);
  return group;
}

function createRoadMarkings() {
  const markings = new THREE.Group();
  markings.name = 'Campus road center dashes';
  const junctionCrosswalks = [[-24, 22], [-24, -17], [22, -82], [69, -82]];
  for (const route of CAMPUS_ROUTES) {
    for (const [junctionX, junctionZ] of junctionCrosswalks) {
      const junctionIndex = route.points.findIndex(([x, z]) => x === junctionX && z === junctionZ);
      if (junctionIndex <= 0) continue;
      const [previousX, previousZ] = route.points[junctionIndex - 1];
      const dx = junctionX - previousX;
      const dz = junctionZ - previousZ;
      const length = Math.hypot(dx, dz);
      if (length < 8) continue;
      const directionX = dx / length;
      const directionZ = dz / length;
      const stripeCount = 6;
      const stripeWidth = Math.max(3, route.width * 0.72);
      for (let stripeIndex = 0; stripeIndex < stripeCount; stripeIndex++) {
        const distance = 2.4 + stripeIndex * 0.72;
        if (distance + stripeWidth / 2 >= length) break;
        const stripe = new THREE.Mesh(
          new THREE.BoxGeometry(stripeWidth, 0.025, 0.34),
          roadMarking,
        );
        stripe.position.set(
          junctionX - directionX * distance,
          ROAD_SURFACE_HEIGHT + 0.02,
          junctionZ - directionZ * distance,
        );
        stripe.rotation.y = Math.atan2(directionX, directionZ);
        markings.add(stripe);
      }
    }

    if (route.width < 9) continue;
    const dashLength = 1.5;
    const gapLength = 2.2;
    for (let segmentIndex = 0; segmentIndex < route.points.length - 1; segmentIndex++) {
      const [startX, startZ] = route.points[segmentIndex];
      const [endX, endZ] = route.points[segmentIndex + 1];
      const dx = endX - startX;
      const dz = endZ - startZ;
      const length = Math.hypot(dx, dz);
      const directionX = dx / length;
      const directionZ = dz / length;
      for (let distance = 1.4; distance + dashLength < length; distance += dashLength + gapLength) {
        const dash = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.025, dashLength), roadMarking);
        dash.position.set(
          startX + directionX * (distance + dashLength / 2),
          ROAD_SURFACE_HEIGHT + 0.018,
          startZ + directionZ * (distance + dashLength / 2),
        );
        dash.rotation.y = Math.atan2(directionX, directionZ);
        markings.add(dash);
      }
    }
  }
  return markings;
}

export function createPavedArea(scene, x, z, width, depth, color = '#b7b3a9') {
  const material = new THREE.MeshStandardMaterial({ color, roughness: 0.9 });
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, 0.14, depth), material);
  mesh.position.set(x, 0.02, z);
  mesh.receiveShadow = true;
  scene.add(mesh);
  return mesh;
}
