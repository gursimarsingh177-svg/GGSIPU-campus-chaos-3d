import { CAMPUS_ROUTES } from '../world/roads.js';

export class HUD {
  constructor(root, campus, mansion) {
    this.root = root;
    this.campus = campus;
    this.mansion = mansion;
    this.root.innerHTML = '';
    this.element = document.createElement('section');
    this.element.className = 'screen hud';
    this.element.hidden = true;
    this.root.append(this.element);
    this.toastTimer = null;
    this.lastPlayer = null;
    this.mapVisible = true;
    this.peopleVisible = true;
    this.vehiclesVisible = true;
    this.campusPanelVisible = false;
    this.vehicleStateKey = '';
    this.motorcycleStateKey = '';
    this.helicopterStateKey = '';
    this.lastVehicleState = { nearby: false, driving: false, speed: 0, blocked: '' };
    this.lastMotorcycleState = { nearby: false, riding: false, speed: 0, blocked: '' };
  }

  show(visible) {
    this.element.hidden = !visible;
  }

  render(progress = { coins: 0, xp: 0, completed: {} }) {
    this.element.innerHTML = `
      <div class="hud-group">
        <div class="hud-card"><div class="hud-label">Campus Chaos · <span class="mode-tag">Campus Explorer</span></div><div class="hud-value" id="objective">Explore the campus and find three welcome coins</div><div class="hud-value" id="timer" hidden></div></div>
        <div class="hud-card"><div class="hud-label">Progress</div><div class="hud-value" id="stats">🪙 ${progress.coins} &nbsp; ✦ ${progress.xp} XP</div><div class="hud-label" id="achievements">Achievements: ${progress.achievements?.length || 0}</div></div>
      </div>
      <div class="hud-group">
        <div class="hud-card" id="map-card"><div class="hud-label">World map · M toggle</div><canvas class="minimap" width="340" height="260" aria-label="World map showing your position, vehicles, and mansion"></canvas><div class="map-legend"><span>● You</span><span>■ Supercar</span><span>▲ Helicopter</span><span>◆ Mansion</span></div></div>
        <div class="hud-actions">
          <button class="small-button" data-action="map">Map · M</button>
          <button class="small-button" data-action="view">View · V</button>
          <button class="small-button" data-action="people" aria-pressed="true">People · On</button>
          <button class="small-button" data-action="vehicles" aria-pressed="true">Vehicles · On</button>
          <button class="small-button" data-action="motorcycle-sound">🏍 Pat-pat sound · Full volume</button>
          <button class="small-button" data-action="vehicle" id="vehicle-button" hidden>Enter supercar · E</button>
          <button class="small-button" data-action="motorcycle" id="motorcycle-button" hidden>Ride motorcycle · E</button>
          <button class="small-button" data-action="helicopter" id="helicopter-button" hidden>Enter helicopter · E</button>
          <button class="small-button" data-action="campus">Campus info</button>
          <button class="small-button" data-action="theme">Day / night</button>
          <button class="small-button" data-action="rain">Weather</button>
          <button class="small-button" data-action="pause">Pause · Esc</button>
        </div>
      </div>
      <div class="hud-card mission-card"><div class="hud-label">Current challenge</div><div class="hud-value" id="challenge">Campus Explorer</div><div class="hud-label" style="margin-top:5px">Progress saves on this device</div></div>
      <div class="hud-card vehicle-status" id="vehicle-status" aria-live="polite">Your pearl-and-teal supercar is parked beside the main gate.</div>
      <section class="hud-card campus-info-panel" id="campus-info" aria-label="Campus information" hidden>
        <button class="small-button campus-info-close" data-action="campus" aria-label="Close campus information">Close</button>
        <div class="hud-label">Campus life</div>
        <div class="hud-value" id="people-count">16 students · 2 security staff</div>
        <div class="hud-value" id="vehicle-count">4 campus cars · 6 bicycles · Bullet Electra + supercar</div>
        <p>Security staff wear visible ID badges. Press E near a guard for a campus safety reminder.</p>
        <p class="campus-disclaimer">Buildings, vehicle bays, and internal site details are stylized approximations, not a surveyed campus plan.</p>
      </section>
      <div class="controls-hint">WASD move · Space jump · Shift sprint<br>Supercar: W/S drive · A/D steer · Shift boost · E exit<br>Motorcycle: W/S ride · A/D steer · E get off<br>Helicopter: W/S fly · A/D turn · Space/R up · Ctrl/F down · E exit on landing<br>Click + mouse look · Esc pause · V view · M overhead</div>
      <div class="touch-controls"><button data-touch="left">◀</button><button data-touch="jump">↑</button><button data-touch="right">▶</button></div>
      <div class="toast" role="status" aria-live="polite"></div>`;
  }

  bindActions(handlers) {
    this.element.addEventListener('click', (event) => {
      const target = event.target.closest('[data-action]');
      const action = target?.dataset.action;
      if (action) handlers[action]?.();
      const touch = event.target.closest('[data-touch]')?.dataset.touch;
      if (touch) handlers.touch?.(touch);
    });
    const touchKeys = { left: 'KeyA', right: 'KeyD', jump: 'Space' };
    const heldPointers = new Map();
    const pressTouch = (event) => {
      const touch = event.target.closest('[data-touch]')?.dataset.touch;
      if (touch && touchKeys[touch]) {
        event.preventDefault();
        const key = touchKeys[touch];
        heldPointers.set(event.pointerId, key);
        handlers.virtualKey?.(key, true);
      }
    };
    const releaseTouch = (event) => {
      const key = heldPointers.get(event.pointerId);
      if (key) {
        handlers.virtualKey?.(key, false);
        heldPointers.delete(event.pointerId);
      }
    };
    const releaseAllTouches = () => {
      for (const key of heldPointers.values()) handlers.virtualKey?.(key, false);
      heldPointers.clear();
    };
    this.element.addEventListener('pointerdown', pressTouch);
    window.addEventListener('pointerup', releaseTouch);
    window.addEventListener('pointercancel', releaseTouch);
    window.addEventListener('blur', releaseAllTouches);
  }

  setMode(name) {
    const tag = this.element.querySelector('.mode-tag');
    const challenge = this.element.querySelector('#challenge');
    if (tag) tag.textContent = name;
    if (challenge) challenge.textContent = name;
  }

  setObjective(text) {
    const element = this.element.querySelector('#objective');
    if (element) element.textContent = text;
  }

  setTimer(seconds) {
    const timer = this.element.querySelector('#timer');
    if (!timer) return;
    if (seconds === null) {
      timer.hidden = true;
      return;
    }
    timer.hidden = false;
    timer.textContent = `Time ${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;
  }

  updateProgress(progress) {
    const stats = this.element.querySelector('#stats');
    const achievements = this.element.querySelector('#achievements');
    if (stats) stats.textContent = `🪙 ${progress.coins} · ✦ ${progress.xp} XP · ${Object.values(progress.completed).reduce((a, b) => a + b, 0)} challenges`;
    if (achievements) achievements.textContent = progress.achievements?.length ? `Achievements: ${progress.achievements.join(' · ')}` : 'Achievements: none yet';
  }

  notify(message) {
    const toast = this.element.querySelector('.toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('visible');
    window.clearTimeout(this.toastTimer);
    this.toastTimer = window.setTimeout(() => toast.classList.remove('visible'), 2400);
  }

  setMapVisible(visible) {
    this.mapVisible = visible;
    const card = this.element.querySelector('#map-card');
    if (card) card.hidden = !visible;
  }

  setCampusLife({ peopleVisible, vehiclesVisible }) {
    this.peopleVisible = peopleVisible;
    this.vehiclesVisible = vehiclesVisible;
    const peopleButton = this.element.querySelector('[data-action="people"]');
    const vehiclesButton = this.element.querySelector('[data-action="vehicles"]');
    if (peopleButton) {
      peopleButton.textContent = `People · ${peopleVisible ? 'On' : 'Off'}`;
      peopleButton.setAttribute('aria-pressed', String(peopleVisible));
    }
    if (vehiclesButton) {
      vehiclesButton.textContent = `Vehicles · ${vehiclesVisible ? 'On' : 'Off'}`;
      vehiclesButton.setAttribute('aria-pressed', String(vehiclesVisible));
    }
  }

  toggleCampusInfo() {
    this.campusPanelVisible = !this.campusPanelVisible;
    const panel = this.element.querySelector('#campus-info');
    if (panel) panel.hidden = !this.campusPanelVisible;
  }

  setVehicleState({ nearby, driving, speed = 0, blocked = '' }) {
    this.lastVehicleState = { nearby, driving, speed, blocked };
    const key = `${nearby}:${driving}:${Math.round(Math.abs(speed) * 3.6)}:${blocked}`;
    if (key === this.vehicleStateKey) return;
    this.vehicleStateKey = key;
    const button = this.element.querySelector('#vehicle-button');
    const status = this.element.querySelector('#vehicle-status');
    if (button) {
      button.hidden = !nearby && !driving;
      button.textContent = driving ? 'Exit supercar · E' : 'Enter supercar · E';
      button.setAttribute('aria-label', driving ? 'Exit the supercar' : 'Enter the supercar');
    }
    if (status) {
      if (driving) {
        const kmh = Math.round(Math.abs(speed) * 3.6);
        status.textContent = blocked
          ? `Supercar stopped · ${blocked} · steer away with A/D`
          : `Driving your supercar · ${kmh} km/h · WASD steer · E exit`;
      } else if (nearby) {
        status.textContent = 'Your supercar is here · Press E or Enter supercar to drive';
      } else {
        status.textContent = 'Your pearl-and-teal supercar is parked beside the main gate.';
      }
    }
  }

  setHelicopterState({ nearby, piloting, speed = 0, altitude = 0 }) {
    const key = `${nearby}:${piloting}`;
    if (key === this.helicopterStateKey && !piloting) return;
    this.helicopterStateKey = key;
    const button = this.element.querySelector('#helicopter-button');
    const status = this.element.querySelector('#vehicle-status');
    if (button) {
      button.hidden = !nearby && !piloting;
      button.textContent = piloting ? 'Exit helicopter · E' : 'Enter helicopter · E';
      button.setAttribute('aria-label', piloting ? 'Exit the helicopter' : 'Enter the helicopter');
    }
    if (!status) return;
    if (piloting) {
      status.textContent = `Flying helicopter · ${Math.round(Math.abs(speed) * 3.6)} km/h · altitude ${Math.round(altitude)} m · land before exiting`;
    } else if (nearby) {
      status.textContent = 'Mansion helicopter on the helipad · Press E to fly';
    } else if (this.lastMotorcycleState.riding) {
      status.textContent = `Riding the Bullet motorcycle · ${Math.round(Math.abs(this.lastMotorcycleState.speed) * 3.6)} km/h · W/S ride · A/D steer · E get off`;
    } else if (this.lastMotorcycleState.nearby) {
      status.textContent = 'Bullet motorcycle at the main gate · Press E to ride';
    } else if (this.lastVehicleState.driving) {
      status.textContent = `Driving your supercar · ${Math.round(Math.abs(this.lastVehicleState.speed) * 3.6)} km/h · WASD steer · E exit`;
    } else if (this.lastVehicleState.nearby) {
      status.textContent = 'Your supercar is here · Press E or Enter supercar to drive';
    } else {
      status.textContent = 'Your pearl-and-teal supercar is parked beside the main gate.';
    }
  }

  setMotorcycleState({ nearby, riding, speed = 0, blocked = '' }) {
    this.lastMotorcycleState = { nearby, riding, speed, blocked };
    const key = `${nearby}:${riding}:${Math.round(Math.abs(speed) * 3.6)}:${blocked}`;
    if (key === this.motorcycleStateKey) return;
    this.motorcycleStateKey = key;
    const button = this.element.querySelector('#motorcycle-button');
    const status = this.element.querySelector('#vehicle-status');
    if (button) {
      button.hidden = !nearby && !riding;
      button.textContent = riding ? 'Get off motorcycle · E' : 'Ride motorcycle · E';
      button.setAttribute('aria-label', riding ? 'Get off the motorcycle' : 'Ride the motorcycle');
    }
    if (!status) return;
    if (riding) {
      status.textContent = blocked
        ? `Motorcycle stopped · ${blocked} · steer away with A/D`
        : `Riding the Bullet motorcycle · ${Math.round(Math.abs(speed) * 3.6)} km/h · W/S ride · A/D steer · E get off`;
    } else if (nearby) {
      status.textContent = 'Bullet motorcycle at the main gate · Press E to ride';
    }
  }

  updateMap(player, fortuner, helicopter) {
    this.lastPlayer = player;
    const canvas = this.element.querySelector('.minimap');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    const points = this.campus.polygon;
    const minX = -280;
    const maxX = 280;
    const minZ = -340;
    const maxZ = 340;
    const pad = 18;
    const scale = Math.min((w - pad * 2) / (maxX - minX), (h - pad * 2) / (maxZ - minZ));
    const mapWidth = (maxX - minX) * scale;
    const mapHeight = (maxZ - minZ) * scale;
    const offsetX = (w - mapWidth) / 2;
    const offsetY = (h - mapHeight) / 2;
    const mapPoint = (x, z) => [offsetX + (x - minX) * scale, offsetY + (maxZ - z) * scale];
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#283b35';
    ctx.fillRect(0, 0, w, h);
    ctx.beginPath();
    points.forEach(([x, z], index) => {
      const [px, py] = mapPoint(x, z);
      if (index === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    });
    ctx.closePath();
    ctx.fillStyle = '#62755c';
    ctx.fill();
    ctx.strokeStyle = '#d7c9a9';
    ctx.lineWidth = 3;
    ctx.stroke();
    const center = points.reduce((sum, [x, z]) => [sum[0] + x / points.length, sum[1] + z / points.length], [0, 0]);
    ctx.beginPath();
    points.forEach(([x, z], index) => {
      const dx = x - center[0];
      const dz = z - center[1];
      const length = Math.hypot(dx, dz) || 1;
      const [px, py] = mapPoint(x + dx / length * 25, z + dz / length * 25);
      if (index === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    });
    ctx.closePath();
    ctx.strokeStyle = '#9b9b84';
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.strokeStyle = '#565b58';
    ctx.lineWidth = 7;
    for (const route of CAMPUS_ROUTES) {
      ctx.lineWidth = Math.max(3, route.width * scale * 0.7);
      ctx.beginPath();
      route.points.forEach(([x, z], index) => {
        const [px, py] = mapPoint(x, z);
        if (index === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      });
      ctx.stroke();
    }
    const [lakeX, lakeY] = mapPoint(-27, -90);
    ctx.fillStyle = '#4d9eaa';
    ctx.beginPath();
    ctx.ellipse(lakeX, lakeY, Math.max(4, 8.2 * scale), Math.max(3, 6.2 * scale), 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#bfae8e';
    for (const building of this.campus.buildings) {
      const b = building.bounds;
      const [x, y] = mapPoint((b.minX + b.maxX) / 2, (b.minZ + b.maxZ) / 2);
      ctx.fillRect(x - 7, y - 5, 14, 10);
    }
    const [mansionX, mansionY] = mapPoint(this.mansion.center.x, this.mansion.center.z);
    ctx.fillStyle = '#f0bd68';
    ctx.beginPath();
    ctx.moveTo(mansionX, mansionY - 8);
    ctx.lineTo(mansionX + 8, mansionY);
    ctx.lineTo(mansionX, mansionY + 8);
    ctx.lineTo(mansionX - 8, mansionY);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#fff4da';
    ctx.font = 'bold 11px DM Sans';
    ctx.fillText('Mansion', mansionX + 10, mansionY + 4);
    const [carX, carY] = mapPoint(fortuner.x, fortuner.z);
    ctx.fillStyle = '#f2d85f';
    ctx.fillRect(carX - 6, carY - 6, 12, 12);
    ctx.fillStyle = '#27251a';
    ctx.font = 'bold 9px DM Sans';
    ctx.fillText('C', carX - 3, carY + 3);
    const [heliX, heliY] = mapPoint(helicopter.x, helicopter.z);
    ctx.fillStyle = '#7ce0d4';
    ctx.beginPath();
    ctx.moveTo(heliX, heliY - 7);
    ctx.lineTo(heliX + 6, heliY + 5);
    ctx.lineTo(heliX - 6, heliY + 5);
    ctx.closePath();
    ctx.fill();
    const [px, py] = mapPoint(player.x, player.z);
    ctx.fillStyle = '#f2716b';
    ctx.beginPath();
    ctx.arc(px, py, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = '#eee';
    ctx.font = 'bold 12px DM Sans';
    ctx.fillText('N', w - 24, 20);
  }

  showPause({ onContinue, onRestart, onMenu, onTheme, onVolume }) {
    this.closePause();
    const panel = document.createElement('div');
    panel.className = 'screen pause-screen';
    panel.innerHTML = `<div class="pause-card"><div class="eyebrow">Campus break</div><h2>Paused</h2><p>Take a breath between classes.</p><div class="settings-row"><label for="volume">Ambient volume</label><input id="volume" type="range" min="0" max="1" step="0.05" value="0.12"></div><button class="primary-button" data-pause="continue">Continue</button><p><button class="small-button" data-pause="restart">Restart challenge</button> <button class="small-button" data-pause="theme">Toggle day/night</button></p><button class="small-button" data-pause="menu">Return to menu</button></div>`;
    panel.addEventListener('click', (event) => {
      const action = event.target.closest('[data-pause]')?.dataset.pause;
      if (action === 'continue') onContinue();
      if (action === 'restart') onRestart();
      if (action === 'theme') onTheme();
      if (action === 'menu') onMenu();
    });
    panel.querySelector('#volume').addEventListener('input', (event) => onVolume(Number(event.target.value)));
    this.root.append(panel);
    this.pausePanel = panel;
  }

  closePause() {
    this.pausePanel?.remove();
    this.pausePanel = null;
  }
}
