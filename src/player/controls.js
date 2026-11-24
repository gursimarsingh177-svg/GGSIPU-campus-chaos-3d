import * as THREE from 'three';

export class Controls {
  constructor(camera, renderer, player, callbacks) {
    this.camera = camera;
    this.renderer = renderer;
    this.player = player;
    this.callbacks = callbacks;
    this.keys = new Set();
    this.yaw = 0;
    this.pitch = 0.24;
    this.distance = 11;
    this.firstPerson = false;
    this.mapView = false;
    this.dragging = false;
    this.locked = false;
    this.enabled = false;
    this.vehicle = null;

    this.onKeyDown = (event) => {
      if (!this.enabled) return;
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.code)) event.preventDefault();
      this.keys.add(event.code);
      if (event.code === 'Space' && !event.repeat && !this.vehicle) this.player.jump();
      if (event.code === 'KeyE' && !event.repeat) this.callbacks.interact();
      if (event.code === 'KeyV' && !event.repeat) this.firstPerson = !this.firstPerson;
      if (event.code === 'KeyM' && !event.repeat) this.toggleMap();
      if (event.code === 'Escape') {
        this.locked = false;
        this.callbacks.pause();
      }
    };
    this.onKeyUp = (event) => this.keys.delete(event.code);
    this.onMouseMove = (event) => {
      if (!this.enabled || (!this.locked && !this.dragging) || this.mapView) return;
      this.yaw -= event.movementX * 0.0026;
      this.pitch = THREE.MathUtils.clamp(this.pitch + event.movementY * 0.0018, -0.18, 0.82);
    };
    this.onPointerDown = (event) => {
      if (!this.enabled || event.target.closest('button')) return;
      this.dragging = true;
      if (this.renderer.domElement.requestPointerLock && !this.locked) this.renderer.domElement.requestPointerLock();
    };
    this.onPointerUp = () => { this.dragging = false; };
    this.onLockChange = () => { this.locked = document.pointerLockElement === this.renderer.domElement; };
    this.onWheel = (event) => {
      this.distance = THREE.MathUtils.clamp(this.distance + event.deltaY * 0.012, 4.2, 24);
    };
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mouseup', this.onPointerUp);
    document.addEventListener('pointerlockchange', this.onLockChange);
    renderer.domElement.addEventListener('mousedown', this.onPointerDown);
    renderer.domElement.addEventListener('wheel', this.onWheel, { passive: true });
  }

  setEnabled(enabled) {
    this.enabled = enabled;
    if (!enabled) this.keys.clear();
  }

  toggleMap() {
    this.mapView = !this.mapView;
    this.callbacks.mapChanged(this.mapView);
  }

  toggleFirstPerson() {
    this.firstPerson = !this.firstPerson;
    return this.firstPerson;
  }

  setVehicle(vehicle) {
    this.vehicle = vehicle;
    if (vehicle) this.firstPerson = false;
  }

  setVirtualKey(key, pressed) {
    if (pressed && !this.enabled) return;
    if (pressed) this.keys.add(key);
    else this.keys.delete(key);
  }

  update(dt) {
    if (!this.enabled) return new THREE.Vector3();
    const forward = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const right = new THREE.Vector3(-forward.z, 0, forward.x);
    const direction = new THREE.Vector3();
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) direction.add(forward);
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) direction.sub(forward);
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) direction.add(right);
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) direction.sub(right);

    const position = this.vehicle ? this.vehicle.position : this.player.position;
    if (this.mapView) {
      this.camera.up.set(0, 0, -1);
      this.camera.position.set(0, 250, 0.01);
      this.camera.lookAt(0, 0, 0);
    } else {
      this.camera.up.set(0, 1, 0);
      const cameraYaw = this.vehicle ? this.vehicle.rotation.y - Math.PI : this.yaw;
      const distance = this.firstPerson ? 0.18 : this.distance;
      const height = this.firstPerson ? 2.72 : distance * Math.sin(this.pitch);
      const horizontal = this.firstPerson ? 0.08 : distance * Math.cos(this.pitch);
      if (this.vehicle && this.firstPerson) {
        const vehicleScale = this.vehicle.scale.y;
        const seat = new THREE.Vector3(0.43, 1.0, 0.45)
          .multiplyScalar(vehicleScale)
          .applyQuaternion(this.vehicle.quaternion);
        this.camera.position.set(position.x + seat.x, position.y + seat.y, position.z + seat.z);
        const forward = new THREE.Vector3(Math.sin(this.vehicle.rotation.y), 0, Math.cos(this.vehicle.rotation.y));
        this.camera.lookAt(
          position.x + forward.x * 12,
          position.y + 1.2 * vehicleScale,
          position.z + forward.z * 12,
        );
      } else {
        this.camera.position.set(
          position.x + Math.sin(cameraYaw) * horizontal,
          position.y + height + (this.firstPerson ? 0 : 1.2),
          position.z + Math.cos(cameraYaw) * horizontal,
        );
        const lookY = position.y + (this.firstPerson ? 2.72 : 1.6);
        this.camera.lookAt(position.x - Math.sin(cameraYaw) * 5, lookY, position.z - Math.cos(cameraYaw) * 5);
      }
    }
    return direction;
  }
}
