const MODES = [
  ['explorer', 'Campus Explorer', 'Free roam · find welcome coins'],
  ['parkour', 'Parkour Challenge', 'Jump through five checkpoints'],
  ['race', 'Campus Race', 'Beat the 2:30 checkpoint timer'],
  ['treasure', 'Treasure Hunt', 'Collect eight hidden campus coins'],
  ['robotics', 'Robotics Challenge', 'Activate three lab beacons in order'],
  ['basketball', 'Basketball Challenge', 'Make three shots before time runs out'],
];

export class Menu {
  constructor(root, onStart) {
    this.root = root;
    this.onStart = onStart;
    this.element = null;
    this.progress = { coins: 0, xp: 0, completed: {} };
  }

  setProgress(progress) {
    this.progress = progress;
    const status = this.element?.querySelector('#menu-progress');
    if (status) status.textContent = `${progress.coins} coins · ${progress.xp} XP · ${Object.keys(progress.completed).length} modes completed · ${progress.achievements?.length || 0} achievements`;
  }

  open() {
    this.close();
    const screen = document.createElement('div');
    screen.className = 'screen menu-screen';
    screen.innerHTML = `
      <div class="menu-card">
        <div class="menu-copy">
          <div class="eyebrow">GGSIPU · East Delhi campus · stylized exploration</div>
          <h1>Campus<br><span>Chaos 3D</span></h1>
          <p class="lead">Walk the roads, find your way around, and take on campus-sized challenges in a block-built student world.</p>
          <div class="campus-note"><strong>Map accuracy note:</strong> The parcel is based on OpenStreetMap. Google Maps aerial references informed a western circular-roof landmark and loop road; these are approximate visual matches, not surveyed positions. The facade photo is labeled USDI, so it does not confirm the USAR building identity. Other internal positions and the gate remain approximate.</div>
          <p id="menu-progress" class="eyebrow" style="margin-top:24px"></p>
        </div>
        <div class="mode-panel"><h2>Choose your day</h2>${MODES.map(([id, name, description]) => `<button class="mode-button" data-mode="${id}"><strong>${name}</strong><small>${description}</small></button>`).join('')}<small style="color:#91a2ae;line-height:1.5;margin-top:8px">All six modes are playable. Click the world to capture the mouse; press Esc to pause or release it.</small></div>
      </div>`;
    screen.addEventListener('click', (event) => {
      const mode = event.target.closest('[data-mode]')?.dataset.mode;
      if (mode) {
        this.close();
        this.onStart(mode);
      }
    });
    this.root.append(screen);
    this.element = screen;
    this.setProgress(this.progress);
  }

  close() {
    this.element?.remove();
    this.element = null;
  }
}
