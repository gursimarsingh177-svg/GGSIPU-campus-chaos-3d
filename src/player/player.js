import * as THREE from 'three';

const materials = {
  skin: new THREE.MeshStandardMaterial({ color: '#c88c67', roughness: 0.9 }),
  hair: new THREE.MeshStandardMaterial({ color: '#29252b', roughness: 1 }),
  shirt: new THREE.MeshStandardMaterial({ color: '#49a798', roughness: 0.82 }),
  shirtAlt: new THREE.MeshStandardMaterial({ color: '#e5c76f', roughness: 0.85 }),
  pants: new THREE.MeshStandardMaterial({ color: '#34445c', roughness: 0.92 }),
  shoes: new THREE.MeshStandardMaterial({ color: '#e8e4d8', roughness: 0.82 }),
  eyes: new THREE.MeshStandardMaterial({ color: '#20252a', roughness: 0.6 }),
};

function cube(parent, geometry, material, x, y, z) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

export class Player {
  constructor(scene, start) {
    this.position = start.clone();
    this.velocityY = 0;
    this.grounded = true;
    this.worldScale = 0.88;
    this.radius = 0.5;
    this.height = 2.86;
    this.speed = 8.5;
    this.group = new THREE.Group();
    this.group.name = 'Student player';
    this.group.position.copy(start);
    this.group.scale.setScalar(this.worldScale);

    const body = new THREE.Group();
    body.position.y = 0.12;
    this.group.add(body);
    this.body = body;
    cube(body, new THREE.BoxGeometry(1.05, 0.95, 0.62), materials.shirt, 0, 1.75, 0);
    cube(body, new THREE.BoxGeometry(0.82, 0.86, 0.82), materials.skin, 0, 2.8, 0);
    cube(body, new THREE.BoxGeometry(0.88, 0.26, 0.88), materials.hair, 0, 3.34, 0.03);
    for (const x of [-0.2, 0.2]) cube(body, new THREE.BoxGeometry(0.1, 0.12, 0.07), materials.eyes, x, 2.86, 0.42);

    this.leftLeg = new THREE.Group();
    this.rightLeg = new THREE.Group();
    this.leftArm = new THREE.Group();
    this.rightArm = new THREE.Group();
    this.leftLeg.position.set(-0.3, 1.38, 0);
    this.rightLeg.position.set(0.3, 1.38, 0);
    this.leftArm.position.set(-0.68, 2.12, 0);
    this.rightArm.position.set(0.68, 2.12, 0);
    body.add(this.leftLeg, this.rightLeg, this.leftArm, this.rightArm);
    cube(this.leftLeg, new THREE.BoxGeometry(0.48, 1.25, 0.5), materials.pants, 0, -0.55, 0);
    cube(this.rightLeg, new THREE.BoxGeometry(0.48, 1.25, 0.5), materials.pants, 0, -0.55, 0);
    cube(this.leftLeg, new THREE.BoxGeometry(0.55, 0.3, 0.74), materials.shoes, 0, -1.23, 0.1);
    cube(this.rightLeg, new THREE.BoxGeometry(0.55, 0.3, 0.74), materials.shoes, 0, -1.23, 0.1);
    cube(this.leftArm, new THREE.BoxGeometry(0.42, 1.25, 0.48), materials.shirtAlt, 0, -0.52, 0);
    cube(this.rightArm, new THREE.BoxGeometry(0.42, 1.25, 0.48), materials.shirtAlt, 0, -0.52, 0);
    cube(this.leftArm, new THREE.BoxGeometry(0.4, 0.4, 0.4), materials.skin, 0, -1.26, 0);
    cube(this.rightArm, new THREE.BoxGeometry(0.4, 0.4, 0.4), materials.skin, 0, -1.26, 0);
    scene.add(this.group);
  }

  jump() {
    if (!this.grounded) return false;
    this.velocityY = 10.5;
    this.grounded = false;
    return true;
  }

  enterVehicle(vehicle) {
    vehicle.add(this.group);
    const motorcycle = vehicle.name.includes('motorcycle');
    this.group.position.set(motorcycle ? 0 : 0.43, motorcycle ? 0.48 : 0.3, motorcycle ? -0.43 : -0.1);
    this.group.rotation.y = 0;
    this.group.scale.setScalar(0.31);
    this.leftLeg.rotation.x = motorcycle ? -0.28 : -Math.PI / 2;
    this.rightLeg.rotation.x = motorcycle ? -0.28 : -Math.PI / 2;
    this.leftLeg.rotation.z = motorcycle ? 0.42 : 0;
    this.rightLeg.rotation.z = motorcycle ? -0.42 : 0;
    this.leftArm.rotation.x = motorcycle ? -1.35 : -0.25;
    this.rightArm.rotation.x = motorcycle ? -1.35 : -0.25;
    this.leftArm.rotation.z = motorcycle ? -0.12 : 0;
    this.rightArm.rotation.z = motorcycle ? 0.12 : 0;
    this.body.position.y = 0.08;
    this.velocityY = 0;
    this.grounded = true;
  }

  leaveVehicle(scene, position) {
    this.group.removeFromParent();
    scene.add(this.group);
    this.group.scale.setScalar(this.worldScale);
    this.leftLeg.rotation.x = 0;
    this.rightLeg.rotation.x = 0;
    this.leftLeg.rotation.z = 0;
    this.rightLeg.rotation.z = 0;
    this.leftArm.rotation.x = 0;
    this.rightArm.rotation.x = 0;
    this.leftArm.rotation.z = 0;
    this.rightArm.rotation.z = 0;
    this.body.position.y = 0.12;
    this.position.set(position.x, position.y, position.z);
    this.group.position.copy(this.position);
    this.group.rotation.y = 0;
  }

  update(dt, direction, sprint, campus, collisionBoxes) {
    const moving = direction.lengthSq() > 0;
    if (moving) {
      direction.normalize();
      const speed = this.speed * (sprint ? 1.55 : 1);
      const nextX = this.position.x + direction.x * speed * dt;
      const nextZ = this.position.z + direction.z * speed * dt;
      if (campus.canMove(this.position.x, this.position.z, nextX, this.position.z, this.radius)
        && !this.collides(nextX, this.position.z, collisionBoxes, campus)) this.position.x = nextX;
      if (campus.canMove(this.position.x, this.position.z, this.position.x, nextZ, this.radius)
        && !this.collides(this.position.x, nextZ, collisionBoxes, campus)) this.position.z = nextZ;
      this.group.rotation.y = Math.atan2(direction.x, direction.z);
    }

    const wasGrounded = this.grounded;
    this.velocityY -= 25 * dt;
    this.position.y += this.velocityY * dt;
    if (this.position.y <= 0) {
      this.position.y = 0;
      this.velocityY = 0;
      this.grounded = true;
    } else {
      this.grounded = false;
    }
    this.group.position.copy(this.position);

    const gait = moving ? (sprint ? 10 : 7) : 0;
    const swing = Math.sin(performance.now() * 0.001 * gait) * (moving && this.grounded ? 0.52 : 0);
    this.leftLeg.rotation.x = swing + (this.grounded ? 0 : -0.3);
    this.rightLeg.rotation.x = -swing + (this.grounded ? 0 : -0.3);
    this.leftArm.rotation.x = -swing * 0.75;
    this.rightArm.rotation.x = swing * 0.75;
    this.body.position.y = 0.12 + (moving && this.grounded ? Math.abs(Math.sin(performance.now() * 0.01)) * 0.08 : 0);
    return { moving, landed: !wasGrounded && this.grounded };
  }

  collides(x, z, boxes, campus) {
    return boxes.some((box) => {
      if (box.campusBuilding && campus.isBuildingEntrance(x, z)) return false;
      if (box.obstacle && this.position.y >= (box.height || 0) + 0.15) return false;
      return x + this.radius > box.minX && x - this.radius < box.maxX && z + this.radius > box.minZ && z - this.radius < box.maxZ;
    });
  }
}
