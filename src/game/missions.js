const STORAGE_KEY = 'campus-chaos-progress-v1';

const freshProgress = () => ({
  coins: 0,
  xp: 0,
  completed: {},
  achievements: [],
  bestTimes: {},
});

export class Missions {
  constructor(onChange = () => {}) {
    this.onChange = onChange;
    try {
      this.progress = { ...freshProgress(), ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') };
    } catch (error) {
      console.warn('Saved progress could not be loaded; starting with a fresh save.', error);
      this.progress = freshProgress();
    }
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.progress));
    } catch (error) {
      console.error('Progress could not be saved to local storage.', error);
      this.onChange({ type: 'error', message: 'Save failed: browser storage is unavailable.' });
    }
    this.onChange({ type: 'progress', progress: this.progress });
  }

  collectCoin(amount = 1) {
    this.progress.coins += amount;
    this.progress.xp += 5 * amount;
    if (this.progress.coins >= 1) this.unlockAchievement('First campus coin');
    if (this.progress.coins >= 10) this.unlockAchievement('Campus regular');
    this.save();
  }

  complete(mode, timeSeconds = null) {
    this.progress.completed[mode] = (this.progress.completed[mode] || 0) + 1;
    this.progress.xp += 50;
    this.progress.coins += 10;
    if (timeSeconds !== null) {
      const current = this.progress.bestTimes[mode];
      if (current === undefined || timeSeconds < current) this.progress.bestTimes[mode] = timeSeconds;
    }
    if (this.progress.completed[mode] === 1) this.unlockAchievement('First day on campus');
    this.save();
  }

  unlockAchievement(name) {
    if (this.progress.achievements.includes(name)) return;
    this.progress.achievements.push(name);
    this.onChange({ type: 'achievement', name });
  }
}
