import * as THREE from 'three';

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 8);

const materials = {
  skin: ['#b97856', '#d39a76', '#a96f51', '#e0ad88'].map((color) => new THREE.MeshStandardMaterial({ color, roughness: 0.92 })),
  hair: ['#211d1c', '#392a22', '#4b3529', '#251e2b'].map((color) => new THREE.MeshStandardMaterial({ color, roughness: 1 })),
  tops: ['#4e8d83', '#d07c66', '#e0b755', '#58769a', '#8e6d9d', '#a4a46e', '#e2e0d6', '#d58aab'].map((color) => new THREE.MeshStandardMaterial({ color, roughness: 0.88 })),
  bottoms: ['#33445a', '#4b4650', '#263a3c', '#55483c'].map((color) => new THREE.MeshStandardMaterial({ color, roughness: 0.92 })),
  shoes: new THREE.MeshStandardMaterial({ color: '#e5e1d7', roughness: 0.9 }),
  eye: new THREE.MeshStandardMaterial({ color: '#252225', roughness: 0.7 }),
  badge: new THREE.MeshStandardMaterial({ color: '#f0d477', roughness: 0.7 }),
  guards: new THREE.MeshStandardMaterial({ color: '#29475a', roughness: 0.9 }),
  guardTrim: new THREE.MeshStandardMaterial({ color: '#d3b86e', roughness: 0.75 }),
  carBody: ['#e7e4dc', '#567d83', '#b5a68e', '#41515d'].map((color) => new THREE.MeshStandardMaterial({ color, roughness: 0.58, metalness: 0.08 })),
  glass: new THREE.MeshStandardMaterial({ color: '#8bb6bd', roughness: 0.3, metalness: 0.1, transparent: true, opacity: 0.82 }),
  tire: new THREE.MeshStandardMaterial({ color: '#24282a', roughness: 1 }),
  hub: new THREE.MeshStandardMaterial({ color: '#bac2bf', metalness: 0.5, roughness: 0.45 }),
  bike: ['#d77b4e', '#527b8b', '#4c4a59', '#b59a54'].map((color) => new THREE.MeshStandardMaterial({ color, roughness: 0.65, metalness: 0.25 })),
  booth: new THREE.MeshStandardMaterial({ color: '#e5dfce', roughness: 0.9 }),
};

function addBox(parent, material, position, scale, geometry = boxGeometry) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(...position);
  mesh.scale.set(...scale);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function makePerson({ x, z, rotation = 0, index = 0, guard = false }) {
  const person = new THREE.Group();
  person.position.set(x, 0, z);
  person.rotation.y = rotation;
  person.userData.phase = index * 0.9;
  const skin = materials.skin[index % materials.skin.length];
  const hair = materials.hair[(index + 1) % materials.hair.length];
  const top = guard ? materials.guards : materials.tops[index % materials.tops.length];
  const bottom = guard ? materials.guards : materials.bottoms[(index * 3) % materials.bottoms.length];

  addBox(person, top, [0, 1.65, 0], [0.86, 0.92, 0.48]);
  const leftLeg = new THREE.Group();
  const rightLeg = new THREE.Group();
  leftLeg.position.set(-0.22, 1.12, 0);
  rightLeg.position.set(0.22, 1.12, 0);
  person.add(leftLeg, rightLeg);
  addBox(leftLeg, bottom, [0, -0.48, 0], [0.34, 1.12, 0.38]);
  addBox(rightLeg, bottom, [0, -0.48, 0], [0.34, 1.12, 0.38]);
  addBox(leftLeg, materials.shoes, [0, -1.0, 0.1], [0.42, 0.22, 0.58]);
  addBox(rightLeg, materials.shoes, [0, -1.0, 0.1], [0.42, 0.22, 0.58]);
  addBox(person, skin, [0, 2.42, 0], [0.69, 0.7, 0.68]);
  addBox(person, hair, [0, 2.77, -0.035], [0.72, 0.25, 0.73]);
  addBox(person, materials.eye, [-0.15, 2.46, 0.346], [0.075, 0.09, 0.035]);
  addBox(person, materials.eye, [0.15, 2.46, 0.346], [0.075, 0.09, 0.035]);
  const leftArm = new THREE.Group();
  const rightArm = new THREE.Group();
  leftArm.position.set(-0.57, 2.08, 0);
  rightArm.position.set(0.57, 2.08, 0);
  person.add(leftArm, rightArm);
  addBox(leftArm, top, [0, -0.41, 0], [0.28, 0.86, 0.34]);
  addBox(rightArm, top, [0, -0.41, 0], [0.28, 0.86, 0.34]);
  addBox(leftArm, skin, [0, -0.89, 0.01], [0.23, 0.22, 0.25]);
  addBox(rightArm, skin, [0, -0.89, 0.01], [0.23, 0.22, 0.25]);

  if (index % 2 === 0 && !guard) {
    addBox(person, hair, [0, 2.24, -0.34], [0.32, 0.75, 0.22]);
    addBox(person, hair, [0, 1.94, -0.08], [0.58, 0.54, 0.48]);
  } else {
    addBox(person, hair, [0.38, 2.18, -0.16], [0.17, 0.48, 0.23]);
  }
  addBox(person, materials.badge, [0.25, 1.79, 0.25], [0.15, 0.2, 0.035]);
  if (guard) {
    addBox(person, materials.guardTrim, [0, 2.86, 0], [0.74, 0.11, 0.72]);
    addBox(person, materials.guardTrim, [0, 2.44, 0.37], [0.24, 0.14, 0.035]);
    person.userData.isSecurity = true;
  }
  person.userData.limbs = { leftArm, rightArm, leftLeg, rightLeg };
  return person;
}

function makeCar(x, z, colorIndex, rotation = Math.PI / 2) {
  const car = new THREE.Group();
  car.position.set(x, 0.12, z);
  car.rotation.y = rotation;
  const body = materials.carBody[colorIndex % materials.carBody.length];
  addBox(car, body, [0, 0.58, 0], [4.1, 0.85, 1.85]);
  addBox(car, body, [0, 1.15, -0.08], [2.28, 0.8, 1.58]);
  addBox(car, materials.glass, [0, 1.2, 0.76], [1.9, 0.55, 0.04]);
  addBox(car, materials.glass, [0, 1.2, -0.88], [1.9, 0.55, 0.04]);
  const wheel = new THREE.Mesh(cylinderGeometry, materials.tire);
  wheel.rotation.x = Math.PI / 2;
  for (const side of [-1, 1]) {
    for (const front of [-1, 1]) {
      const tire = wheel.clone();
      tire.position.set(front * 1.32, 0.36, side * 0.91);
      tire.scale.set(0.62, 0.62, 0.62);
      car.add(tire);
      const hub = new THREE.Mesh(cylinderGeometry, materials.hub);
      hub.rotation.x = Math.PI / 2;
      hub.position.set(front * 1.32, 0.36, side * 1.02);
      hub.scale.set(0.3, 0.3, 0.3);
      car.add(hub);
    }
  }
  for (const side of [-1, 1]) {
    addBox(car, materials.badge, [side * 1.85, 0.65, 0.45], [0.08, 0.16, 0.28]);
  }
  return car;
}

function makePersonalFortuner() {
  const car = new THREE.Group();
  car.name = 'Personal two-seat supercar · driveable';
  const paint = new THREE.MeshStandardMaterial({ color: '#dce7e7', roughness: 0.22, metalness: 0.48 });
  const darkPaint = new THREE.MeshStandardMaterial({ color: '#1e3038', roughness: 0.34, metalness: 0.38 });
  const trim = new THREE.MeshStandardMaterial({ color: '#101b20', roughness: 0.5, metalness: 0.22 });
  const alloy = new THREE.MeshStandardMaterial({ color: '#c4d2d0', roughness: 0.2, metalness: 0.86 });
  const carbon = new THREE.MeshStandardMaterial({ color: '#253a3e', roughness: 0.62, metalness: 0.2 });
  const accent = new THREE.MeshStandardMaterial({ color: '#22b8b2', roughness: 0.24, metalness: 0.42 });
  const red = new THREE.MeshStandardMaterial({ color: '#bd3946', emissive: '#450d15', emissiveIntensity: 0.55, roughness: 0.3 });
  const headlight = new THREE.MeshStandardMaterial({ color: '#f4ffff', emissive: '#b9f4f4', emissiveIntensity: 1.65, roughness: 0.18 });
  const led = new THREE.MeshStandardMaterial({ color: '#d4ffff', emissive: '#42f5e9', emissiveIntensity: 2.2, roughness: 0.16 });
  const glass = new THREE.MeshStandardMaterial({ color: '#82c5ca', roughness: 0.12, metalness: 0.16, transparent: true, opacity: 0.2 });
  const leather = new THREE.MeshStandardMaterial({ color: '#bd8b5d', roughness: 0.68 });
  const leatherLight = new THREE.MeshStandardMaterial({ color: '#e1c49a', roughness: 0.64 });
  const cabinTrim = new THREE.MeshStandardMaterial({ color: '#263236', roughness: 0.66 });
  const screen = new THREE.MeshStandardMaterial({ color: '#80e9e3', emissive: '#287c78', emissiveIntensity: 0.7, roughness: 0.28 });

  addBox(car, darkPaint, [0, 0.43, 0], [2.12, 0.42, 4.72]);
  addBox(car, paint, [0, 0.61, 1.48], [2.08, 0.35, 1.48]).rotation.x = 0.08;
  addBox(car, paint, [0, 0.68, -1.7], [2.02, 0.4, 1.05]);
  addBox(car, paint, [0, 0.57, 0], [2.12, 0.37, 2.5]);
  addBox(car, trim, [0, 0.51, 0], [1.76, 0.12, 2.55]);
  for (const x of [-0.62, 0.62]) {
    addBox(car, accent, [x, 0.81, 1.42], [0.045, 0.025, 1.08]).rotation.z = x * -0.12;
    addBox(car, darkPaint, [x, 0.8, -0.05], [0.045, 0.035, 0.82]).rotation.y = x * 0.12;
  }

  for (const x of [-1.02, 1.02]) {
    addBox(car, paint, [x, 0.68, -0.03], [0.16, 0.4, 2.72]);
    for (const z of [-1.49, 1.49]) {
      addBox(car, paint, [x * 1.06, 0.76, z], [0.2, 0.28, 0.82]);
      addBox(car, accent, [x * 1.14, 0.78, z], [0.025, 0.04, 0.55]);
    }
    addBox(car, darkPaint, [x * 1.03, 0.44, -0.05], [0.13, 0.2, 3.7]);
    addBox(car, darkPaint, [x * 1.025, 0.77, 0.05], [0.11, 0.08, 1.05]);
    addBox(car, alloy, [x * 1.04, 0.95, 0.95], [0.3, 0.12, 0.32]);
  }

  for (const x of [-0.43, 0.43]) {
    addBox(car, leather, [x, 0.73, 0.06], [0.6, 0.18, 0.62]);
    addBox(car, leather, [x, 1.02, -0.2], [0.56, 0.58, 0.2]);
    addBox(car, leatherLight, [x, 1.0, -0.08], [0.34, 0.37, 0.035]);
    addBox(car, leather, [x, 1.31, -0.18], [0.32, 0.2, 0.16]);
    addBox(car, cabinTrim, [x * 1.48, 0.88, 0.06], [0.08, 0.37, 0.52]);
  }
  addBox(car, cabinTrim, [0, 0.72, 0.13], [0.24, 0.14, 1.0]);
  addBox(car, cabinTrim, [0, 0.91, 0.05], [0.2, 0.24, 0.56]);
  addBox(car, alloy, [0, 1.04, -0.02], [0.08, 0.08, 0.2]);
  addBox(car, cabinTrim, [0, 1.04, 0.95], [1.82, 0.27, 0.32]);
  addBox(car, screen, [0.36, 1.13, 0.91], [0.33, 0.15, 0.035]);
  addBox(car, screen, [-0.34, 1.1, 0.91], [0.28, 0.1, 0.035]);

  const steeringWheel = new THREE.Mesh(new THREE.TorusGeometry(0.19, 0.035, 8, 18), trim);
  steeringWheel.position.set(0.43, 1.08, 0.69);
  steeringWheel.castShadow = true;
  car.add(steeringWheel);
  addBox(car, glass, [0, 1.2, 0.93], [1.58, 0.045, 0.68]).rotation.x = 0.4;
  addBox(car, glass, [0, 1.2, -1.13], [1.38, 0.04, 0.42]).rotation.x = -0.42;
  for (const x of [-0.77, 0.77]) {
    addBox(car, darkPaint, [x, 1.12, 0.68], [0.075, 0.62, 0.09]).rotation.x = 0.42;
    addBox(car, darkPaint, [x, 1.13, -0.9], [0.085, 0.56, 0.09]).rotation.x = -0.42;
    addBox(car, trim, [x * 1.15, 0.94, 1.05], [0.22, 0.09, 0.25]);
  }

  addBox(car, darkPaint, [0, 0.53, 2.39], [1.95, 0.26, 0.18]);
  addBox(car, darkPaint, [0, 0.49, -2.37], [1.9, 0.3, 0.18]);
  addBox(car, trim, [0, 0.59, 2.49], [1.12, 0.31, 0.06]);
  addBox(car, carbon, [0, 0.36, 2.55], [2.26, 0.12, 0.42]);
  for (const x of [-1, 1]) {
    addBox(car, accent, [x * 1.02, 0.38, 2.56], [0.48, 0.1, 0.035]);
    addBox(car, carbon, [x * 1.05, 0.69, 2.42], [0.16, 0.34, 0.26]).rotation.z = x * -0.22;
    addBox(car, carbon, [x * 1.2, 0.42, 0.05], [0.32, 0.16, 3.38]);
    addBox(car, accent, [x * 1.22, 0.51, 0.05], [0.12, 0.045, 2.72]);
    addBox(car, paint, [x * 1.08, 0.7, -1.68], [0.48, 0.38, 0.22]);
    for (const front of [-1, 1]) {
      const arch = new THREE.Mesh(
        new THREE.TorusGeometry(0.55, 0.09, 7, 24, Math.PI),
        carbon,
      );
      arch.rotation.y = Math.PI / 2;
      arch.position.set(x * 1.07, 0.48, front * 1.49);
      arch.castShadow = true;
      car.add(arch);
    }
  }
  for (const x of [-0.72, 0.72]) {
    addBox(car, darkPaint, [x, 0.85, 2.29], [0.65, 0.2, 0.1]).rotation.y = x < 0 ? -0.12 : 0.12;
    addBox(car, headlight, [x, 0.86, 2.35], [0.52, 0.095, 0.07]).rotation.y = x < 0 ? -0.12 : 0.12;
    addBox(car, led, [x * 0.9, 0.94, 2.35], [0.42, 0.035, 0.075]).rotation.z = x < 0 ? -0.16 : 0.16;
    addBox(car, led, [x * 0.92, 0.76, 2.37], [0.3, 0.025, 0.06]).rotation.z = x < 0 ? 0.12 : -0.12;
    addBox(car, red, [x, 0.83, -2.39], [0.46, 0.12, 0.07]);
    addBox(car, led, [x, 0.88, -2.4], [0.48, 0.035, 0.075]);
    addBox(car, darkPaint, [x, 0.69, 2.41], [0.38, 0.16, 0.08]);
    addBox(car, carbon, [x * 1.08, 0.83, -1.68], [0.5, 0.07, 0.34]);
  }
  addBox(car, alloy, [0, 0.57, 2.51], [1.0, 0.08, 0.04]);
  addBox(car, trim, [0, 0.42, -2.5], [2.18, 0.24, 0.15]);
  for (const x of [-0.74, 0.74]) {
    addBox(car, carbon, [x, 0.38, -2.36], [0.38, 0.27, 0.42]);
  }
  for (const x of [-0.74, 0.74]) {
    const exhaust = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.16, 0.2, 16), alloy);
    exhaust.rotation.x = Math.PI / 2;
    exhaust.position.set(x, 0.5, -2.53);
    exhaust.castShadow = true;
    car.add(exhaust);
    const exhaustOpening = new THREE.Mesh(new THREE.CylinderGeometry(0.105, 0.12, 0.012, 16), trim);
    exhaustOpening.rotation.x = Math.PI / 2;
    exhaustOpening.position.set(x, 0.5, -2.64);
    car.add(exhaustOpening);
  }
  for (const x of [-0.56, -0.28, 0, 0.28, 0.56]) {
    addBox(car, carbon, [x, 0.32, -2.28], [0.055, 0.2, 0.34]);
  }
  for (const x of [-0.82, 0.82]) {
    addBox(car, carbon, [x, 0.99, -2.12], [0.08, 0.3, 0.08]).rotation.x = -0.18;
  }
  addBox(car, carbon, [0, 1.17, -2.12], [2.45, 0.1, 0.28]).rotation.x = -0.08;
  addBox(car, accent, [0, 1.13, -2.12], [2.25, 0.025, 0.18]).rotation.x = -0.08;

  const wheel = new THREE.Mesh(cylinderGeometry, materials.tire);
  wheel.rotation.z = Math.PI / 2;
  for (const side of [-1, 1]) {
    for (const front of [-1, 1]) {
      const z = front * 1.49;
      const tire = wheel.clone();
      tire.position.set(side * 1.07, 0.48, z);
      tire.scale.set(0.76, 0.86, 0.86);
      tire.castShadow = true;
      car.add(tire);
      const hub = new THREE.Mesh(cylinderGeometry, alloy);
      hub.rotation.z = Math.PI / 2;
      hub.position.set(side * 1.17, 0.48, z);
      hub.scale.set(0.19, 0.52, 0.52);
      car.add(hub);
      const center = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.22, 16), trim);
      center.rotation.z = Math.PI / 2;
      center.position.set(side * 1.2, 0.48, z);
      car.add(center);
    }
  }
  const plate = new THREE.Mesh(boxGeometry, alloy);
  plate.position.set(0, 0.53, 2.53);
  plate.scale.set(0.62, 0.13, 0.035);
  car.add(plate);
  const nameplateCanvas = document.createElement('canvas');
  nameplateCanvas.width = 384;
  nameplateCanvas.height = 64;
  const nameplateContext = nameplateCanvas.getContext('2d');
  nameplateContext.clearRect(0, 0, nameplateCanvas.width, nameplateCanvas.height);
  nameplateContext.fillStyle = '#242629';
  nameplateContext.font = 'bold 32px Segoe UI, sans-serif';
  nameplateContext.textAlign = 'center';
  nameplateContext.textBaseline = 'middle';
  nameplateContext.fillText('GT  /  02', nameplateCanvas.width / 2, nameplateCanvas.height / 2);
  const nameplateTexture = new THREE.CanvasTexture(nameplateCanvas);
  nameplateTexture.colorSpace = THREE.SRGBColorSpace;
  const nameplate = new THREE.Mesh(
    new THREE.PlaneGeometry(0.82, 0.14),
    new THREE.MeshBasicMaterial({ map: nameplateTexture, transparent: true, depthWrite: false }),
  );
  nameplate.position.set(0, 0.74, -2.455);
  nameplate.rotation.y = Math.PI;
  car.add(nameplate);

  return car;
}

function makeBike(x, z, colorIndex, rotation = 0) {
  const bike = new THREE.Group();
  bike.position.set(x, 0, z);
  bike.rotation.y = rotation;
  const frame = materials.bike[colorIndex % materials.bike.length];
  for (const wheelX of [-0.76, 0.76]) {
    const tire = new THREE.Mesh(new THREE.TorusGeometry(0.37, 0.075, 6, 12), materials.tire);
    tire.position.set(wheelX, 0.43, 0);
    bike.add(tire);
  }
  const bar = (a, b, radius = 0.055) => {
    const start = new THREE.Vector3(...a);
    const end = new THREE.Vector3(...b);
    const delta = end.clone().sub(start);
    const part = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, delta.length(), 6), frame);
    part.position.copy(start.add(end).multiplyScalar(0.5));
    part.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), delta.normalize());
    part.castShadow = true;
    bike.add(part);
  };
  bar([-0.76, 0.43, 0], [-0.2, 0.43, 0]);
  bar([-0.2, 0.43, 0], [0.15, 0.82, 0]);
  bar([0.15, 0.82, 0], [0.76, 0.43, 0]);
  bar([-0.76, 0.43, 0], [0.15, 0.82, 0]);
  bar([0.15, 0.82, 0], [0.55, 0.82, 0]);
  bar([0.55, 0.82, 0], [0.76, 0.43, 0]);
  bar([0.15, 0.82, 0], [0.15, 1.12, 0]);
  bar([0.35, 1.12, 0], [0.72, 1.12, 0], 0.045);
  bar([-0.36, 0.83, 0], [-0.06, 0.83, 0], 0.045);
  return bike;
}

function makeBulletElectra(x, z) {
  const bike = new THREE.Group();
  bike.name = 'Black Bullet Electra-style motorcycle';
  bike.position.set(x, 0, z);

  const black = new THREE.MeshStandardMaterial({ color: '#15191b', roughness: 0.34, metalness: 0.42 });
  const rubber = new THREE.MeshStandardMaterial({ color: '#202324', roughness: 0.9 });
  const chrome = new THREE.MeshStandardMaterial({ color: '#c4cecc', roughness: 0.22, metalness: 0.86 });
  const gold = new THREE.MeshStandardMaterial({ color: '#d3ac56', roughness: 0.32, metalness: 0.62 });
  const flameMaterial = new THREE.MeshBasicMaterial({
    color: '#ff8b20',
    transparent: true,
    opacity: 0.92,
    depthWrite: false,
  });
  const lamp = new THREE.MeshStandardMaterial({
    color: '#fff8dc',
    emissive: '#fff0bd',
    emissiveIntensity: 2.8,
    roughness: 0.18,
  });
  const tailLamp = new THREE.MeshStandardMaterial({ color: '#d94143', emissive: '#551015', roughness: 0.32 });

  const rod = (start, end, radius, material) => {
    const from = new THREE.Vector3(...start);
    const to = new THREE.Vector3(...end);
    const delta = to.clone().sub(from);
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, delta.length(), 10), material);
    mesh.position.copy(from.add(to).multiplyScalar(0.5));
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), delta.normalize());
    mesh.castShadow = true;
    bike.add(mesh);
    return mesh;
  };

  for (const wheelZ of [-0.88, 0.88]) {
    const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.36, 0.075, 8, 24), rubber);
    wheel.rotation.y = Math.PI / 2;
    wheel.position.set(0, 0.39, wheelZ);
    bike.add(wheel);
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.15, 16), chrome);
    hub.rotation.z = Math.PI / 2;
    hub.position.set(0, 0.39, wheelZ);
    bike.add(hub);
    for (let spoke = 0; spoke < 8; spoke++) {
      const angle = (spoke / 8) * Math.PI * 2;
      rod(
        [0, 0.39, wheelZ],
        [0, 0.39 + Math.sin(angle) * 0.31, wheelZ + Math.cos(angle) * 0.31],
        0.012,
        chrome,
      );
    }
  }

  rod([0, 0.39, -0.88], [0, 0.83, -0.38], 0.065, black);
  rod([0, 0.39, 0.88], [0, 1.0, 0.23], 0.045, chrome);
  rod([-0.12, 0.39, 0.88], [-0.12, 1.0, 0.23], 0.035, chrome);
  rod([0, 0.82, -0.38], [0, 0.82, 0.23], 0.045, black);
  const fuelTank = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 14), black);
  fuelTank.position.set(0, 1.08, 0.2);
  fuelTank.scale.set(0.19, 0.17, 0.25);
  fuelTank.castShadow = true;
  bike.add(fuelTank);
  addBox(bike, gold, [0, 1.255, 0.19], [0.13, 0.015, 0.17]);
  addBox(bike, black, [0, 0.88, -0.43], [0.42, 0.14, 0.62]);
  const seat = new THREE.Mesh(new THREE.SphereGeometry(1, 18, 12), rubber);
  seat.position.set(0, 0.99, -0.43);
  seat.scale.set(0.23, 0.09, 0.38);
  seat.castShadow = true;
  bike.add(seat);
  addBox(bike, black, [0, 0.91, -0.58], [0.42, 0.13, 0.48]);
  addBox(bike, chrome, [0, 0.51, -0.05], [0.4, 0.46, 0.4]);
  addBox(bike, black, [0, 0.51, -0.05], [0.3, 0.34, 0.32]);
  for (const y of [0.42, 0.5, 0.58, 0.66]) {
    addBox(bike, chrome, [0, y, -0.05], [0.46, 0.035, 0.38]);
  }
  const exhaustFlames = [];
  for (const side of [-1, 1]) {
    rod([side * 0.18, 0.83, -0.23], [side * 0.18, 0.48, 0.32], 0.04, black);
    rod([side * 0.18, 0.42, -0.5], [side * 0.18, 0.42, 0.28], 0.055, chrome);
    const exhaust = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.075, 0.92, 12), chrome);
    exhaust.rotation.x = Math.PI / 2;
    exhaust.position.set(side * 0.2, 0.58, -0.28);
    bike.add(exhaust);
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.62, 10), flameMaterial);
    flame.rotation.x = -Math.PI / 2;
    flame.position.set(side * 0.2, 0.58, -0.86);
    flame.visible = false;
    bike.add(flame);
    exhaustFlames.push(flame);
    addBox(bike, black, [side * 0.22, 0.94, 0.22], [0.1, 0.1, 0.12]);
    rod([side * 0.22, 0.96, 0.22], [side * 0.36, 1.26, 0.28], 0.018, chrome);
    const signal = new THREE.Mesh(new THREE.SphereGeometry(0.065, 10, 8), gold);
    signal.position.set(side * 0.27, 0.83, 0.72);
    bike.add(signal);
  }

  const headlight = new THREE.Mesh(new THREE.SphereGeometry(0.19, 16, 12), lamp);
  headlight.scale.set(0.82, 0.72, 0.48);
  headlight.position.set(0, 1.04, 0.47);
  bike.add(headlight);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.03, 8, 20), chrome);
  rim.position.copy(headlight.position);
  bike.add(rim);
  const headlightBeam = new THREE.SpotLight('#fff0bd', 22, 32, Math.PI / 7, 0.55, 1.5);
  headlightBeam.position.set(0, 1.04, 0.62);
  headlightBeam.target.position.set(0, 0.45, 9);
  bike.add(headlightBeam, headlightBeam.target);
  addBox(bike, black, [0, 0.85, 0.9], [0.3, 0.2, 0.08]);
  addBox(bike, tailLamp, [0, 0.88, -0.96], [0.24, 0.12, 0.07]);
  rod([-0.32, 1.12, -0.08], [0.32, 1.12, -0.08], 0.035, chrome);
  addBox(bike, gold, [0.245, 0.99, 0.025], [0.025, 0.1, 0.24]);
  bike.userData.exhaustFlames = exhaustFlames;

  return bike;
}

export class CampusLife {
  constructor(scene) {
    this.scene = scene;
    this.people = new THREE.Group();
    this.people.name = 'Campus students and security staff';
    this.vehicles = new THREE.Group();
    this.vehicles.name = 'Campus parked vehicles';
    scene.add(this.people, this.vehicles);
    this.animatedPeople = [];
    this.isDriving = false;
    this.carSpeed = 0;
    this.driveBlocked = '';
    this.isRidingMotorcycle = false;
    this.motorcycleSpeed = 0;
    this.motorcycleBlocked = '';
    this.createPeople();
    this.createVehicles();
    this.createPersonalFortuner();
    this.createSecurityBooth();
  }

  createPeople() {
    const groups = [
      { center: [-43, 42], count: 4, spread: 3.1 },
      { center: [4, 12], count: 4, spread: 2.8 },
      { center: [42, -39], count: 5, spread: 2.6 },
      { center: [46, -58], count: 3, spread: 2.4 },
    ];
    let index = 0;
    for (const group of groups) {
      for (let personIndex = 0; personIndex < group.count; personIndex++) {
        const angle = personIndex * 2.4;
        const distance = group.spread * (0.25 + (personIndex % 3) * 0.22);
        const person = makePerson({
          x: group.center[0] + Math.cos(angle) * distance,
          z: group.center[1] + Math.sin(angle) * distance,
          rotation: angle + Math.PI,
          index,
        });
        this.people.add(person);
        this.animatedPeople.push(person);
        index++;
      }
    }
    const guardPatrols = [
      [[-37, 116], [-34, 113], [-31, 116], [-34, 119]],
      [[-22, 119], [-19, 116], [-16, 119], [-19, 122]],
    ];
    for (const [guardIndex, [x, z]] of [[-34, 116], [-19, 119]].entries()) {
      const rotation = guardIndex === 0 ? 0.25 : -0.25;
      const guard = makePerson({ x, z, rotation, index, guard: true });
      guard.userData.patrol = guardPatrols[guardIndex].map(([px, pz]) => new THREE.Vector3(px, 0, pz));
      guard.userData.patrolTarget = 1;
      guard.userData.patrolSpeed = 1.6 + guardIndex * 0.2;
      this.people.add(guard);
      this.animatedPeople.push(guard);
      index++;
    }
  }

  createVehicles() {
    for (const [index, [x, z]] of [[73, -67], [77, -67], [81, -67], [85, -67]].entries()) {
      this.vehicles.add(makeCar(x, z, index));
    }
    for (let index = 0; index < 6; index++) {
      this.vehicles.add(makeBike(39 + index * 1.45, -54, index, -Math.PI / 2));
    }
    const motorcycleBay = new THREE.Group();
    motorcycleBay.name = 'Marked motorcycle display bay by the main gate';
    const motorcyclePaving = new THREE.Mesh(
      boxGeometry,
      new THREE.MeshStandardMaterial({ color: '#666c6b', roughness: 0.88 }),
    );
    motorcyclePaving.position.set(-25.5, 0.035, 111.5);
    motorcyclePaving.scale.set(3.5, 0.12, 4.5);
    motorcyclePaving.receiveShadow = true;
    motorcycleBay.add(motorcyclePaving);
    const motorcycleLine = new THREE.Mesh(
      boxGeometry,
      new THREE.MeshStandardMaterial({ color: '#e4c86c', roughness: 0.7 }),
    );
    for (const x of [-27.15, -23.85]) {
      const line = motorcycleLine.clone();
      line.position.set(x, 0.11, 111.5);
      line.scale.set(0.09, 0.025, 4.1);
      motorcycleBay.add(line);
    }
    this.vehicles.add(motorcycleBay);

    this.bulletElectra = makeBulletElectra(-25.5, 111.5);
    this.bulletElectra.scale.setScalar(1.85);
    this.vehicles.add(this.bulletElectra);
    const rackMaterial = new THREE.MeshStandardMaterial({ color: '#465253', metalness: 0.45, roughness: 0.55 });
    const rack = new THREE.Mesh(boxGeometry, rackMaterial);
    rack.position.set(42.8, 0.7, -54);
    rack.scale.set(0.12, 1.4, 10.2);
    rack.castShadow = true;
    this.vehicles.add(rack);
  }

  createSecurityBooth() {
    const booth = new THREE.Group();
    booth.name = 'Small campus security guard booth';
    const centerX = -47;
    const centerZ = 118;
    const width = 4.4;
    const depth = 3.6;
    const wallHeight = 2.75;
    const wallThickness = 0.16;
    const floor = new THREE.Mesh(boxGeometry, new THREE.MeshStandardMaterial({ color: '#b8b2a4', roughness: 0.92 }));
    floor.position.set(centerX, 0.1, centerZ);
    floor.scale.set(width + 0.25, 0.2, depth + 0.25);
    floor.receiveShadow = true;
    booth.add(floor);

    addBox(booth, materials.booth, [centerX, wallHeight / 2 + 0.2, centerZ - depth / 2], [width, wallHeight, wallThickness]);
    addBox(booth, materials.booth, [centerX - width / 2, wallHeight / 2 + 0.2, centerZ], [wallThickness, wallHeight, depth]);
    addBox(booth, materials.booth, [centerX + width / 2, wallHeight / 2 + 0.2, centerZ], [wallThickness, wallHeight, depth]);
    addBox(booth, materials.booth, [centerX - width / 2 + 0.08, wallHeight / 2 + 0.2, centerZ + depth / 2], [0.32, wallHeight, 0.18]);
    addBox(booth, materials.booth, [centerX + width / 2 - 0.08, wallHeight / 2 + 0.2, centerZ + depth / 2], [0.32, wallHeight, 0.18]);

    const frontGlass = new THREE.Mesh(boxGeometry, materials.glass);
    frontGlass.position.set(centerX, 1.95, centerZ + depth / 2);
    frontGlass.scale.set(width - 0.65, 1.35, 0.06);
    booth.add(frontGlass);
    const sideWindow = new THREE.Mesh(boxGeometry, materials.glass);
    sideWindow.position.set(centerX + width / 2, 2.0, centerZ - 0.25);
    sideWindow.scale.set(0.06, 1.15, 1.65);
    booth.add(sideWindow);

    const roofMaterial = new THREE.MeshStandardMaterial({ color: '#526b68', roughness: 0.8 });
    addBox(booth, roofMaterial, [centerX, 3.18, centerZ], [width + 0.55, 0.3, depth + 0.55]);
    const fascia = addBox(booth, materials.guards, [centerX, 2.95, centerZ + depth / 2 + 0.1], [3.4, 0.42, 0.12]);
    sceneAddLabel(fascia, 'SECURITY');
    addBox(booth, new THREE.MeshStandardMaterial({ color: '#526b68', roughness: 0.8 }), [centerX - 1.35, 1.25, centerZ + depth / 2], [0.78, 2.3, 0.12]);
    addBox(booth, materials.badge, [centerX - 1.08, 1.25, centerZ + depth / 2 + 0.08], [0.07, 0.22, 0.06]);
    this.scene.add(booth);
    this.securityBooth = booth;
  }

  createPersonalFortuner() {
    const bay = new THREE.Group();
    bay.name = 'Personal car parking bay by the main gate';
    const paving = new THREE.Mesh(boxGeometry, new THREE.MeshStandardMaterial({ color: '#777a75', roughness: 0.95 }));
    paving.position.set(-32, 0.025, 111.5);
    paving.scale.set(7.6, 0.12, 9);
    paving.receiveShadow = true;
    bay.add(paving);
    const lineMaterial = new THREE.MeshStandardMaterial({ color: '#e8e1c8', roughness: 0.82 });
    for (const x of [-35.15, -28.85]) {
      const line = new THREE.Mesh(boxGeometry, lineMaterial);
      line.position.set(x, 0.095, 111.5);
      line.scale.set(0.12, 0.025, 8.2);
      bay.add(line);
    }
    this.scene.add(bay);
    this.parkingBay = bay;

    this.personalFortuner = makePersonalFortuner();
    this.personalFortuner.position.set(-32, 0.1, 111.5);
    this.personalFortuner.rotation.y = Math.PI;
    this.personalFortuner.scale.setScalar(1.45);
    this.scene.add(this.personalFortuner);
  }

  update(dt, playerPosition, carPosition = null) {
    const time = performance.now() * 0.001;
    for (const person of this.animatedPeople) {
      const patrol = person.userData.patrol;
      if (!patrol) {
        person.position.y = Math.sin(time * 1.6 + person.userData.phase) * 0.025;
        person.rotation.y += Math.sin(time * 0.55 + person.userData.phase) * dt * 0.035;
        continue;
      }

      const checkingPosition = carPosition || playerPosition;
      const checking = Math.hypot(person.position.x - checkingPosition.x, person.position.z - checkingPosition.z) < 8;
      const limbs = person.userData.limbs;
      if (checking) {
        const dx = checkingPosition.x - person.position.x;
        const dz = checkingPosition.z - person.position.z;
        person.rotation.y = THREE.MathUtils.damp(person.rotation.y, Math.atan2(dx, dz), 4, dt);
        const signal = Math.sin(time * 4.2 + person.userData.phase);
        limbs.rightArm.rotation.x = -1.7 + Math.max(0, signal) * 0.55;
        limbs.rightArm.rotation.z = -0.2;
        limbs.leftArm.rotation.x = -0.15;
        limbs.leftLeg.rotation.x = 0;
        limbs.rightLeg.rotation.x = 0;
        person.position.y = 0;
        continue;
      }

      const target = patrol[person.userData.patrolTarget];
      const dx = target.x - person.position.x;
      const dz = target.z - person.position.z;
      const distance = Math.hypot(dx, dz);
      if (distance < 0.2) {
        person.userData.patrolTarget = (person.userData.patrolTarget + 1) % patrol.length;
      } else {
        const step = Math.min(distance, person.userData.patrolSpeed * dt);
        person.position.x += (dx / distance) * step;
        person.position.z += (dz / distance) * step;
        person.rotation.y = Math.atan2(dx, dz);
      }
      const gait = time * 7 + person.userData.phase;
      limbs.leftLeg.rotation.x = Math.sin(gait) * 0.5;
      limbs.rightLeg.rotation.x = -Math.sin(gait) * 0.5;
      limbs.leftArm.rotation.x = -Math.sin(gait) * 0.38;
      limbs.rightArm.rotation.x = Math.sin(gait) * 0.38;
      limbs.rightArm.rotation.z = 0;
      person.position.y = Math.abs(Math.sin(gait)) * 0.07;
    }
  }

  interact(player) {
    const guard = this.animatedPeople.find((person) => person.userData.isSecurity
      && Math.hypot(person.position.x - player.position.x, person.position.z - player.position.z) < 3.3);
    if (!guard) return false;
    return true;
  }

  isNearFortuner(position) {
    return Math.hypot(position.x - this.personalFortuner.position.x, position.z - this.personalFortuner.position.z) < 5.2;
  }

  getPersonalCarBounds() {
    const heading = this.personalFortuner.rotation.y;
    const halfLength = 2.6 * this.personalFortuner.scale.z;
    const halfWidth = 1.72 * this.personalFortuner.scale.x;
    const halfX = Math.abs(Math.cos(heading)) * halfWidth + Math.abs(Math.sin(heading)) * halfLength;
    const halfZ = Math.abs(Math.sin(heading)) * halfWidth + Math.abs(Math.cos(heading)) * halfLength;
    return {
      minX: this.personalFortuner.position.x - halfX,
      maxX: this.personalFortuner.position.x + halfX,
      minZ: this.personalFortuner.position.z - halfZ,
      maxZ: this.personalFortuner.position.z + halfZ,
    };
  }

  toggleDriving(player, scene) {
    if (this.isDriving) {
      if (this.personalFortuner.position.y < -0.15) return 'below-ground';
      const exitPosition = new THREE.Vector3(3.2, 0, 0)
        .applyQuaternion(this.personalFortuner.quaternion)
        .add(this.personalFortuner.position);
      player.leaveVehicle(scene, exitPosition);
      this.isDriving = false;
      this.carSpeed = 0;
      this.driveBlocked = '';
      return 'exited';
    }
    if (!this.isNearFortuner(player.position)) return 'too-far';
    player.enterVehicle(this.personalFortuner);
    this.isDriving = true;
    this.carSpeed = 0;
    this.driveBlocked = '';
    return 'entered';
  }

  isNearMotorcycle(position) {
    return Math.hypot(position.x - this.bulletElectra.position.x, position.z - this.bulletElectra.position.z) < 5.2;
  }

  toggleMotorcycle(player, scene) {
    if (this.isRidingMotorcycle) {
      const exitPosition = new THREE.Vector3(1.15 * this.bulletElectra.scale.x, 0, 0)
        .applyQuaternion(this.bulletElectra.quaternion)
        .add(this.bulletElectra.position);
      player.leaveVehicle(scene, exitPosition);
      this.isRidingMotorcycle = false;
      this.motorcycleSpeed = 0;
      this.motorcycleBlocked = '';
      return 'exited';
    }
    if (!this.isNearMotorcycle(player.position)) return 'too-far';
    player.enterVehicle(this.bulletElectra);
    this.isRidingMotorcycle = true;
    this.motorcycleSpeed = 0;
    this.motorcycleBlocked = '';
    return 'entered';
  }

  updateMotorcycle(dt, keys, campus, collisionBoxes, player) {
    if (!this.isRidingMotorcycle) return 0;
    const accelerating = keys.has('KeyW') || keys.has('ArrowUp');
    const reversing = keys.has('KeyS') || keys.has('ArrowDown');
    const steering = Number(keys.has('KeyD') || keys.has('ArrowRight'))
      - Number(keys.has('KeyA') || keys.has('ArrowLeft'));
    const maxSpeed = 30;

    if (accelerating !== reversing) {
      this.motorcycleSpeed += (accelerating ? 1 : -1) * 15 * dt;
      this.motorcycleSpeed = THREE.MathUtils.clamp(this.motorcycleSpeed, -8, maxSpeed);
    } else if (Math.abs(this.motorcycleSpeed) > 0) {
      const drag = Math.min(Math.abs(this.motorcycleSpeed), 6 * dt);
      this.motorcycleSpeed -= Math.sign(this.motorcycleSpeed) * drag;
    }

    const atTopSpeed = accelerating && this.motorcycleSpeed >= maxSpeed * 0.95;
    for (const [index, flame] of this.bulletElectra.userData.exhaustFlames.entries()) {
      flame.visible = atTopSpeed;
      if (atTopSpeed) {
        const flicker = 0.78 + Math.sin(performance.now() * 0.04 + index * 2) * 0.22;
        flame.scale.setScalar(flicker);
      }
    }

    if (steering) {
      const directionSign = Math.sign(this.motorcycleSpeed) || 1;
      this.bulletElectra.rotation.y += steering * directionSign
        * (0.45 + Math.min(Math.abs(this.motorcycleSpeed) / maxSpeed, 1) * 0.65) * dt;
    }

    const heading = this.bulletElectra.rotation.y;
    const nextX = this.bulletElectra.position.x + Math.sin(heading) * this.motorcycleSpeed * dt;
    const nextZ = this.bulletElectra.position.z + Math.cos(heading) * this.motorcycleSpeed * dt;
    const halfLength = 1.8 * this.bulletElectra.scale.z;
    const halfWidth = 0.55 * this.bulletElectra.scale.x;
    const halfX = Math.abs(Math.cos(heading)) * halfWidth + Math.abs(Math.sin(heading)) * halfLength;
    const halfZ = Math.abs(Math.sin(heading)) * halfWidth + Math.abs(Math.cos(heading)) * halfLength;
    const canMove = campus.canMove(
      this.bulletElectra.position.x,
      this.bulletElectra.position.z,
      nextX,
      nextZ,
      halfWidth,
    );
    const surfaceY = campus.getDrivingSurface(
      nextX,
      nextZ,
      this.bulletElectra.position.y,
      halfX,
      halfZ,
    );
    const blockingObject = collisionBoxes.find((box) => (
      nextX + halfX > box.minX && nextX - halfX < box.maxX
      && nextZ + halfZ > box.minZ && nextZ - halfZ < box.maxZ
    ));
    this.motorcycleBlocked = !canMove
      ? 'world edge or campus wall'
      : (surfaceY === null
        ? 'road boundary'
        : (blockingObject ? `blocked by ${blockingObject.name || 'building'}` : ''));
    if (canMove && surfaceY !== null && !blockingObject) {
      this.bulletElectra.position.set(nextX, surfaceY, nextZ);
    } else {
      this.motorcycleSpeed = 0;
    }
    player.position.copy(this.bulletElectra.position);
    return this.motorcycleSpeed;
  }

  updateDriving(dt, keys, campus, collisionBoxes, player) {
    if (!this.isDriving) return 0;
    const accelerating = keys.has('KeyW') || keys.has('ArrowUp');
    const reversing = keys.has('KeyS') || keys.has('ArrowDown');
    const steering = Number(keys.has('KeyD') || keys.has('ArrowRight'))
      - Number(keys.has('KeyA') || keys.has('ArrowLeft'));
    const boost = keys.has('ShiftLeft') || keys.has('ShiftRight');
    const maxForwardSpeed = boost ? 48 : 34;

    if (accelerating !== reversing) {
      this.carSpeed += (accelerating ? 1 : -1) * 24 * dt;
      this.carSpeed = THREE.MathUtils.clamp(this.carSpeed, -12, maxForwardSpeed);
    } else if (Math.abs(this.carSpeed) > 0) {
      const drag = Math.min(Math.abs(this.carSpeed), 5 * dt);
      this.carSpeed -= Math.sign(this.carSpeed) * drag;
    }

    if (steering) {
      const directionSign = Math.sign(this.carSpeed) || 1;
      this.personalFortuner.rotation.y += steering * directionSign
        * (Math.abs(this.carSpeed) > 0.15
          ? 0.25 + Math.min(Math.abs(this.carSpeed) / maxForwardSpeed, 1) * 0.85
          : 0.45) * dt;
    }

    const heading = this.personalFortuner.rotation.y;
    const nextX = this.personalFortuner.position.x + Math.sin(heading) * this.carSpeed * dt;
    const nextZ = this.personalFortuner.position.z + Math.cos(heading) * this.carSpeed * dt;
    const halfLength = 2.6;
    const halfWidth = 1.72;
    const scaledHalfLength = halfLength * this.personalFortuner.scale.z;
    const scaledHalfWidth = halfWidth * this.personalFortuner.scale.x;
    const halfX = Math.abs(Math.cos(heading)) * scaledHalfWidth + Math.abs(Math.sin(heading)) * scaledHalfLength;
    const halfZ = Math.abs(Math.sin(heading)) * scaledHalfWidth + Math.abs(Math.cos(heading)) * scaledHalfLength;
    const canMove = campus.canMove(
      this.personalFortuner.position.x,
      this.personalFortuner.position.z,
      nextX,
      nextZ,
      Math.min(scaledHalfWidth, scaledHalfLength),
    );
    const surfaceY = campus.getDrivingSurface(
      nextX,
      nextZ,
      this.personalFortuner.position.y,
      halfX,
      halfZ,
    );
    const surfaceAllowed = surfaceY !== null;
    const underground = this.personalFortuner.position.y < -1.2 || (surfaceAllowed && surfaceY < -1.2);
    const activeCollisionBoxes = underground
      ? campus.basementParking.obstacles
      : collisionBoxes;
    const blockingObject = activeCollisionBoxes.find((box) => (
      nextX + halfX > box.minX && nextX - halfX < box.maxX
      && nextZ + halfZ > box.minZ && nextZ - halfZ < box.maxZ
    ));
    this.driveBlocked = canMove
      ? (!surfaceAllowed
        ? 'parking ramp or basement boundary'
        : (blockingObject ? `blocked by ${blockingObject.name || 'building'}` : ''))
      : 'world edge or campus wall';
    if (canMove && surfaceAllowed && !blockingObject) {
      this.personalFortuner.position.set(nextX, surfaceY, nextZ);
    } else {
      this.carSpeed = 0;
    }
    player.position.copy(this.personalFortuner.position);
    return this.carSpeed;
  }

  setPeopleVisible(visible) {
    this.people.visible = visible;
  }

  setVehiclesVisible(visible) {
    this.vehicles.visible = visible;
  }

  dispose() {
    this.scene.remove(this.people, this.vehicles, this.securityBooth);
  }
}

function sceneAddLabel(sign, text) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 64;
  const context = canvas.getContext('2d');
  context.fillStyle = '#29475a';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = '#f2eee3';
  context.font = 'bold 34px Segoe UI, sans-serif';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(text, canvas.width / 2, canvas.height / 2);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const label = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 0.7), new THREE.MeshBasicMaterial({ map: texture }));
  label.position.set(0, 0, 0.055);
  sign.add(label);
}
