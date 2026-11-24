import * as THREE from 'three';

const mountainColors = ['#687d78', '#77877d', '#879084', '#5d726f'];

function createPeak(group, x, z, width, height, depth, color, rotation) {
  const geometry = new THREE.ConeGeometry(1, 1, 7, 3);
  const peak = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
    color,
    roughness: 1,
    flatShading: true,
  }));
  peak.scale.set(width, height, depth);
  peak.position.set(x, height / 2 - 2, z);
  peak.rotation.y = rotation;
  peak.castShadow = true;
  peak.receiveShadow = true;
  group.add(peak);

  const ridge = new THREE.Mesh(
    new THREE.ConeGeometry(width * 0.62, height * 0.67, 6, 2),
    new THREE.MeshStandardMaterial({
      color: mountainColors[Math.floor(Math.abs(x + z)) % mountainColors.length],
      roughness: 1,
      flatShading: true,
    }),
  );
  ridge.position.set(x + width * 0.46, height * 0.28, z - depth * 0.3);
  ridge.rotation.z = Math.PI * 0.08;
  ridge.rotation.y = rotation + Math.PI * 0.17;
  ridge.castShadow = true;
  group.add(ridge);
}

export function createMountains(scene, campusPolygon, clearBounds) {
  const group = new THREE.Group();
  group.name = 'Distant stylized mountain range behind the city';
  const perimeter = campusPolygon.reduce((bounds, [x, z]) => ({
    minX: Math.min(bounds.minX, x),
    maxX: Math.max(bounds.maxX, x),
    minZ: Math.min(bounds.minZ, z),
    maxZ: Math.max(bounds.maxZ, z),
  }), { minX: Infinity, maxX: -Infinity, minZ: Infinity, maxZ: -Infinity });

  const centers = [
    { x: perimeter.minX - 100, z: (perimeter.minZ + perimeter.maxZ) / 2, rotation: Math.PI / 2 },
    { x: perimeter.maxX + 100, z: (perimeter.minZ + perimeter.maxZ) / 2, rotation: -Math.PI / 2 },
    { x: (perimeter.minX + perimeter.maxX) / 2, z: perimeter.minZ - 100, rotation: 0 },
    { x: (perimeter.minX + perimeter.maxX) / 2, z: perimeter.maxZ + 100, rotation: Math.PI },
  ];

  for (const [side, center] of centers.entries()) {
    const horizontal = new THREE.Vector2(Math.cos(center.rotation), -Math.sin(center.rotation));
    const count = side < 2 ? 11 : 13;
    for (let index = 0; index < count; index++) {
      const position = -200 + (index / (count - 1)) * 400;
      const width = 25 + ((index * 17 + side * 11) % 29);
      const height = 28 + ((index * 23 + side * 13) % 52);
      const depth = 22 + ((index * 19 + side * 7) % 25);
      const offset = (index % 2) * 9;
      const x = center.x + horizontal.x * position;
      const z = center.z + horizontal.y * position;
      const ridgeWidth = width * 0.62;
      const ridgeX = x + width * 0.46;
      const ridgeZ = z + offset - depth * 0.3;
      const overlapsMansion = clearBounds
        && x - width <= clearBounds.maxX
        && x + width >= clearBounds.minX
        && z + offset - depth <= clearBounds.maxZ
        && z + offset + depth >= clearBounds.minZ
        || clearBounds
        && ridgeX - ridgeWidth <= clearBounds.maxX
        && ridgeX + ridgeWidth >= clearBounds.minX
        && ridgeZ - depth * 0.34 <= clearBounds.maxZ
        && ridgeZ + depth * 0.34 >= clearBounds.minZ;
      if (!overlapsMansion) {
        createPeak(
          group,
          x,
          z + offset,
          width,
          height,
          depth,
          mountainColors[(index + side) % mountainColors.length],
          center.rotation + ((index % 3) - 1) * 0.12,
        );
      }
    }
  }

  scene.add(group);
  return group;
}
