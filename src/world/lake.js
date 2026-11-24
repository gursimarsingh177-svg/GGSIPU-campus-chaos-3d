import * as THREE from 'three';

const LAKE = { x: -27, z: -90, radiusX: 8.2, radiusZ: 6.2 };

export function createCampusLake(scene) {
  const lake = new THREE.Group();
  lake.name = 'Small landscaped campus lake';

  const shore = new THREE.Mesh(
    new THREE.CircleGeometry(1, 48),
    new THREE.MeshStandardMaterial({ color: '#788269', roughness: 1 }),
  );
  shore.rotation.x = -Math.PI / 2;
  shore.scale.set(LAKE.radiusX + 1.6, LAKE.radiusZ + 1.6, 1);
  shore.position.set(LAKE.x, 0.015, LAKE.z);
  shore.receiveShadow = true;
  lake.add(shore);

  const bank = new THREE.Mesh(
    new THREE.RingGeometry(0.82, 1, 48),
    new THREE.MeshStandardMaterial({ color: '#a99a78', roughness: 0.96, side: THREE.DoubleSide }),
  );
  bank.rotation.x = -Math.PI / 2;
  bank.scale.set(LAKE.radiusX + 0.55, LAKE.radiusZ + 0.55, 1);
  bank.position.set(LAKE.x, 0.034, LAKE.z);
  bank.receiveShadow = true;
  lake.add(bank);

  const waterMaterial = new THREE.MeshPhysicalMaterial({
    color: '#398d9b',
    roughness: 0.18,
    metalness: 0.12,
    clearcoat: 0.72,
    clearcoatRoughness: 0.2,
    transparent: true,
    opacity: 0.94,
  });
  const water = new THREE.Mesh(new THREE.CircleGeometry(1, 48), waterMaterial);
  water.name = 'Lake water';
  water.rotation.x = -Math.PI / 2;
  water.scale.set(LAKE.radiusX, LAKE.radiusZ, 1);
  water.position.set(LAKE.x, 0.055, LAKE.z);
  water.receiveShadow = true;
  lake.add(water);

  const rippleMaterial = new THREE.MeshStandardMaterial({
    color: '#a6d4d0',
    transparent: true,
    opacity: 0.38,
    roughness: 0.24,
    metalness: 0.08,
  });
  const ripples = [];
  for (const [index, [x, z, radius]] of [
    [-1.6, -0.8, 1.8],
    [2.4, 1.2, 1.25],
    [0.2, -2.0, 0.9],
  ].entries()) {
    const ripple = new THREE.Mesh(new THREE.RingGeometry(radius * 0.78, radius, 32), rippleMaterial.clone());
    ripple.rotation.x = -Math.PI / 2;
    ripple.position.set(LAKE.x + x, 0.067 + index * 0.001, LAKE.z + z);
    ripple.userData.phase = index * 2.1;
    lake.add(ripple);
    ripples.push(ripple);
  }

  const stoneMaterial = new THREE.MeshStandardMaterial({ color: '#827f72', roughness: 1 });
  const stones = new THREE.InstancedMesh(
    new THREE.DodecahedronGeometry(0.52, 0),
    stoneMaterial,
    18,
  );
  const matrix = new THREE.Matrix4();
  for (let index = 0; index < 18; index++) {
    const angle = (index / 18) * Math.PI * 2;
    const unevenness = index % 3 === 0 ? 0.6 : 0;
    const x = LAKE.x + Math.cos(angle) * (LAKE.radiusX + unevenness);
    const z = LAKE.z + Math.sin(angle) * (LAKE.radiusZ + unevenness);
    const scale = 0.65 + (index % 4) * 0.13;
    matrix.compose(
      new THREE.Vector3(x, 0.17 * scale, z),
      new THREE.Quaternion().setFromEuler(new THREE.Euler(index * 0.31, index * 0.73, index * 0.19)),
      new THREE.Vector3(scale, scale * 0.55, scale),
    );
    stones.setMatrixAt(index, matrix);
  }
  stones.castShadow = true;
  stones.receiveShadow = true;
  lake.add(stones);
  scene.add(lake);

  return {
    bounds: {
      minX: LAKE.x - LAKE.radiusX - 0.3,
      maxX: LAKE.x + LAKE.radiusX + 0.3,
      minZ: LAKE.z - LAKE.radiusZ - 0.3,
      maxZ: LAKE.z + LAKE.radiusZ + 0.3,
    },
    update(time) {
      for (const ripple of ripples) {
        const phase = (time * 0.24 + ripple.userData.phase) % 1;
        const scale = 0.7 + phase * 0.65;
        ripple.scale.setScalar(scale);
        ripple.material.opacity = 0.32 * (1 - phase);
      }
    },
  };
}
