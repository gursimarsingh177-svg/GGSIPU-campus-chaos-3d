import * as THREE from 'three';

const MODE_INFO = {
  explorer: { name: 'Campus Explorer', description: 'Roam the grounds and discover the campus.' },
  parkour: { name: 'Parkour Challenge', description: 'Clear the five marked jump gates in order.' },
  race: { name: 'Campus Race', description: 'Run through all six checkpoints before the clock runs out.' },
  treasure: { name: 'Treasure Hunt', description: 'Find eight hidden campus coins.' },
  robotics: { name: 'Robotics Challenge', description: 'Activate the three lab beacons in the indicated order.' },
  basketball: { name: 'Basketball Challenge', description: 'Reach the court and score three baskets with E.' },
};

const ringMaterial = new THREE.MeshStandardMaterial({ color: '#91d6c6', emissive: '#3a9d88', emissiveIntensity: 0.7, roughness: 0.35 });
const coinMaterial = new THREE.MeshStandardMaterial({ color: '#f1c65d', emissive: '#bc7e1b', emissiveIntensity: 0.5, metalness: 0.45, roughness: 0.3 });
const activatedMaterial = new THREE.MeshStandardMaterial({ color: '#75d9a1', emissive: '#3cbf76', emissiveIntensity: 1 });

export class GameModes {
  constructor(scene, campus, missions, hud) {
    this.scene = scene;
    this.campus = campus;
    this.missions = missions;
    this.hud = hud;
    this.active = null;
    this.objects = new THREE.Group();
    this.objects.name = 'Mode objectives';
    scene.add(this.objects);
    this.elapsed = 0;
    this.progress = 0;
    this.rings = [];
    this.collectibles = [];
    this.switches = [];
    this.ball = null;
    this.ballVelocity = new THREE.Vector3();
    this.collisionBoxes = [...campus.buildings.map(({ name, bounds }) => ({ ...bounds, name }))];
  }

  start(mode) {
    if (!MODE_INFO[mode]) return false;
    this.resetObjects();
    this.active = mode;
    this.elapsed = 0;
    this.progress = 0;
    this.timeLimit = null;
    this.rings = [];
    this.collectibles = [];
    this.switches = [];
    this.hud.setMode(MODE_INFO[mode].name);

    if (mode === 'parkour') {
      const route = [[-14, 12], [-9, 0], [1, 13], [11, -1], [15, -25]];
      this.rings = route.map(([x, z]) => this.addRing(x, z, 1.65));
      this.createParkourObstacles(route);
    } else if (mode === 'race') {
      const route = [[-27, 85], [-20, 45], [-15, 7], [20, -10], [45, -47], [60, -90]];
      this.rings = route.map(([x, z]) => this.addRing(x, z, 2.3));
      this.timeLimit = 150;
    } else if (mode === 'treasure') {
      const places = [[-91, 28], [-35, 50], [-24, 42], [5, -8], [-40, 10], [15, -25], [92, -83], [35, -85]];
      this.collectibles = places.map(([x, z]) => this.addCoin(x, z));
    } else if (mode === 'robotics') {
      this.switches = [[24, -68], [31, -68], [38, -68]].map(([x, z], index) => this.addSwitch(x, z, index));
    } else if (mode === 'basketball') {
      this.createBasketballHoop();
      this.timeLimit = 90;
    } else if (mode === 'explorer') {
      this.collectibles = [[-30, 50], [-24, 42], [35, -85]].map(([x, z]) => this.addCoin(x, z, 0.72));
    }
    this.hud.notify(`${MODE_INFO[mode].name} started`);
    this.updateObjective();
    return true;
  }

  addRing(x, z, radius) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.18, 8, 24), ringMaterial);
    ring.position.set(x, 1.8, z);
    ring.userData.baseY = ring.position.y;
    this.objects.add(ring);
    return { x, z, mesh: ring, hit: false };
  }

  addCoin(x, z, scale = 1) {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.58 * scale, 0.58 * scale, 0.18 * scale, 12), coinMaterial);
    mesh.position.set(x, 1.25, z);
    mesh.rotation.x = Math.PI / 2;
    this.objects.add(mesh);
    return { x, z, mesh, taken: false };
  }

  addSwitch(x, z, index) {
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 0.35, 8), new THREE.MeshStandardMaterial({ color: '#405966' }));
    base.position.set(x, 0.18, z);
    const beacon = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.8, 0.8), new THREE.MeshStandardMaterial({ color: '#d99c57', emissive: '#714214', emissiveIntensity: 0.2 }));
    beacon.position.set(x, 1.1, z);
    this.objects.add(base, beacon);
    return { x, z, index, active: false, base, beacon };
  }

  createParkourObstacles(route) {
    const material = new THREE.MeshStandardMaterial({ color: '#d39b62', roughness: 0.85 });
    route.slice(1, -1).forEach(([x, z], index) => {
      const obstacle = new THREE.Mesh(new THREE.BoxGeometry(3, 0.75, 2), material);
      obstacle.position.set(x, 0.38, z);
      obstacle.castShadow = true;
      obstacle.receiveShadow = true;
      this.objects.add(obstacle);
      this.collisionBoxes.push({ minX: x - 1.7, maxX: x + 1.7, minZ: z - 1.2, maxZ: z + 1.2, obstacle: true, height: 0.75 });
    });
  }

  createBasketballHoop() {
    const postMat = new THREE.MeshStandardMaterial({ color: '#475563', roughness: 0.75 });
    const rimMat = new THREE.MeshStandardMaterial({ color: '#e18a4a', metalness: 0.35, roughness: 0.45 });
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.35, 3.3, 0.35), postMat);
    post.position.set(100, 1.65, -98);
    const backboard = new THREE.Mesh(new THREE.BoxGeometry(3.2, 2, 0.25), new THREE.MeshStandardMaterial({ color: '#eef0e9', roughness: 0.55 }));
    backboard.position.set(100, 3.15, -102);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.78, 0.09, 8, 20), rimMat);
    rim.position.set(100, 2.55, -101);
    rim.rotation.x = Math.PI / 2;
    this.objects.add(post, backboard, rim);
    this.hoopTarget = new THREE.Vector3(100, 2.55, -101);
    this.court = new THREE.Mesh(new THREE.BoxGeometry(22, 0.1, 15), new THREE.MeshStandardMaterial({ color: '#b3784d', roughness: 0.93 }));
    this.court.position.set(103, 0.1, -89);
    this.objects.add(this.court);
  }

  interact(player) {
    if (this.active === 'robotics') {
      const target = this.switches[this.progress];
      if (target && Math.hypot(player.position.x - target.x, player.position.z - target.z) < 3.2) {
        target.active = true;
        target.beacon.material = activatedMaterial;
        this.progress++;
        this.hud.notify(`Beacon ${this.progress}/${this.switches.length} activated`);
        this.updateObjective();
        if (this.progress === this.switches.length) this.finish();
      } else {
        this.hud.notify('Move close to the next beacon and press E');
      }
      return;
    }
    if (this.active === 'basketball') {
      if (!this.ball) {
        const facing = new THREE.Vector3(Math.sin(player.group.rotation.y), 0, Math.cos(player.group.rotation.y));
        const target = new THREE.Vector3(this.hoopTarget.x - player.position.x, 0, this.hoopTarget.z - player.position.z);
        const distance = target.length();
        const direction = target.clone().normalize();
        if (facing.dot(direction) < 0.72) {
          this.hud.notify('Turn to face the hoop before shooting');
          return;
        }
        this.ball = new THREE.Mesh(new THREE.SphereGeometry(0.48, 12, 10), new THREE.MeshStandardMaterial({ color: '#e78c43', roughness: 0.72 }));
        this.ball.position.set(player.position.x, player.position.y + 2.2, player.position.z);
        this.objects.add(this.ball);
        const flightTime = Math.max(0.7, distance / 10);
        this.ballVelocity.set(
          target.x / flightTime,
          (this.hoopTarget.y - this.ball.position.y + 8 * flightTime ** 2) / flightTime,
          target.z / flightTime,
        );
        this.shotScored = false;
        this.hud.notify('Shot taken!');
      } else {
        this.hud.notify('Wait for the ball to land before shooting again');
      }
    }
  }

  update(dt, player) {
    if (!this.active) return;
    this.elapsed += dt;
    this.rings.forEach((ring, index) => {
      ring.mesh.position.y = ring.mesh.userData.baseY + Math.sin(this.elapsed * 2.2 + index) * 0.17;
      if (index === this.progress && !ring.hit && Math.hypot(player.position.x - ring.x, player.position.z - ring.z) < (this.active === 'parkour' ? 2.4 : 4)) {
        if (this.active !== 'parkour' || player.position.y > 0.55) {
          ring.hit = true;
          ring.mesh.material = activatedMaterial;
          this.progress++;
          this.hud.notify(this.active === 'parkour' ? `Jump gate ${this.progress}/${this.rings.length}` : `Checkpoint ${this.progress}/${this.rings.length}`);
          this.updateObjective();
          if (this.progress === this.rings.length) this.finish();
        }
      }
    });

    for (const coin of this.collectibles) {
      if (coin.taken) continue;
      coin.mesh.rotation.z += dt * 1.5;
      coin.mesh.position.y = 1.2 + Math.sin(this.elapsed * 3 + coin.x) * 0.2;
      if (Math.hypot(player.position.x - coin.x, player.position.z - coin.z) < 2.2) {
        coin.taken = true;
        this.objects.remove(coin.mesh);
        this.missions.collectCoin();
        this.hud.notify('Campus coin collected · +5 XP');
        if ((this.active === 'treasure' || this.active === 'explorer') && this.collectibles.every((item) => item.taken)) this.finish();
        else this.updateObjective();
      }
    }

    if (this.active === 'basketball' && this.ball) this.updateBall(dt);
    if (this.timeLimit) {
      const remaining = Math.max(0, this.timeLimit - this.elapsed);
      this.hud.setTimer(remaining);
      if (remaining === 0) {
        this.hud.notify('Time is up — try again!');
        this.hud.setObjective('Time expired — pause to restart the challenge or return to the menu');
        this.active = null;
        this.timeLimit = null;
        this.hud.setTimer(null);
      }
    }
  }

  updateBall(dt) {
    this.ballVelocity.y -= 16 * dt;
    this.ball.position.addScaledVector(this.ballVelocity, dt);
    const crossedRim = this.ballVelocity.y < 0 && this.ball.position.y < this.hoopTarget.y + 0.25 &&
      this.ball.position.y > this.hoopTarget.y - 0.7 && Math.hypot(this.ball.position.x - this.hoopTarget.x, this.ball.position.z - this.hoopTarget.z) < 0.72;
    if (crossedRim && !this.shotScored) {
      this.shotScored = true;
      this.progress++;
      this.hud.notify(`Basket! ${this.progress}/3`);
      this.updateObjective();
      if (this.progress >= 3) this.finish();
    }
    if (this.ball.position.y < 0.48 || this.elapsed > this.timeLimit) {
      this.objects.remove(this.ball);
      this.ball = null;
    }
  }

  updateObjective() {
    if (this.active === 'parkour') this.hud.setObjective(`Jump while passing gate ${Math.min(this.progress + 1, 5)} / 5`);
    if (this.active === 'race') this.hud.setObjective(`Reach checkpoint ${Math.min(this.progress + 1, 6)} / 6`);
    if (this.active === 'treasure') this.hud.setObjective(`Find ${this.collectibles.filter((item) => !item.taken).length} remaining coins`);
    if (this.active === 'robotics') this.hud.setObjective(`Activate beacon ${Math.min(this.progress + 1, 3)} / 3 · Press E`);
    if (this.active === 'basketball') this.hud.setObjective(`Score ${Math.max(0, 3 - this.progress)} baskets · face hoop + E`);
    if (this.active === 'explorer') this.hud.setObjective(`Explore the campus and find ${this.collectibles.filter((item) => !item.taken).length} welcome coins`);
  }

  finish() {
    if (!this.active) return;
    const mode = this.active;
    const time = this.elapsed;
    this.missions.complete(mode, time);
    this.hud.notify(`${MODE_INFO[mode].name} complete! +50 XP · +10 coins`);
    this.hud.setObjective('Challenge complete — choose another mode from the menu');
    this.hud.setTimer(null);
    this.timeLimit = null;
    this.active = null;
  }

  resetObjects() {
    this.collisionBoxes = this.collisionBoxes.filter((box) => !box.obstacle);
    while (this.objects.children.length) {
      const child = this.objects.children[0];
      this.objects.remove(child);
      child.geometry?.dispose();
      if (Array.isArray(child.material)) child.material.forEach((material) => material.dispose());
      else if (child.material && child.material !== ringMaterial && child.material !== coinMaterial && child.material !== activatedMaterial) child.material.dispose();
    }
  }

  stop() {
    this.resetObjects();
    this.active = null;
    this.timeLimit = null;
    this.hud.setTimer(null);
    this.hud.setMode('Campus Explorer');
  }
}

export { MODE_INFO };
