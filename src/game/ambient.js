export class AmbientSound {
  constructor() {
    this.context = null;
    this.gain = null;
    this.source = null;
    this.motorcycleOscillator = null;
    this.motorcyclePulse = null;
    this.motorcycleGain = null;
    this.motorcycleLimiter = null;
    this.motorcyclePulseDepth = null;
    this.volume = 0.08;
  }

  async start() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    if (!this.context) {
      this.context = new AudioContext();
      this.gain = this.context.createGain();
      this.gain.gain.value = this.volume;
      const filter = this.context.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 480;
      const buffer = this.context.createBuffer(1, this.context.sampleRate * 2, this.context.sampleRate);
      const channel = buffer.getChannelData(0);
      for (let i = 0; i < channel.length; i++) channel[i] = (Math.random() * 2 - 1) * 0.18;
      this.source = this.context.createBufferSource();
      this.source.buffer = buffer;
      this.source.loop = true;
      this.source.connect(filter).connect(this.gain).connect(this.context.destination);
      this.source.start();
    }
    if (this.context.state === 'suspended') await this.context.resume();
  }

  setVolume(volume) {
    this.volume = volume;
    if (this.gain && this.context) this.gain.gain.setTargetAtTime(volume, this.context.currentTime, 0.08);
  }

  async playMotorcycleSound() {
    await this.start();
    if (!this.context) return;

    const oscillator = this.context.createOscillator();
    oscillator.type = 'sawtooth';
    oscillator.frequency.value = 72;
    const filter = this.context.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 320;
    const envelope = this.context.createGain();
    const limiter = this.context.createDynamicsCompressor();
    limiter.threshold.value = -6;
    limiter.knee.value = 3;
    limiter.ratio.value = 12;
    limiter.attack.value = 0.002;
    limiter.release.value = 0.12;

    const now = this.context.currentTime;
    envelope.gain.setValueAtTime(0, now);
    for (let beat = 0; beat < 10; beat++) {
      const start = now + beat * 0.13;
      envelope.gain.setValueAtTime(0, start);
      envelope.gain.linearRampToValueAtTime(0.95, start + 0.012);
      envelope.gain.exponentialRampToValueAtTime(0.025, start + 0.105);
    }
    envelope.gain.setValueAtTime(0, now + 1.3);

    oscillator.connect(filter).connect(envelope).connect(limiter).connect(this.context.destination);
    oscillator.start(now);
    oscillator.stop(now + 1.32);
    oscillator.onended = () => {
      oscillator.disconnect();
      filter.disconnect();
      envelope.disconnect();
      limiter.disconnect();
    };
  }

  startMotorcycle() {
    if (!this.context || !this.gain || this.motorcycleOscillator) return;
    const oscillator = this.context.createOscillator();
    oscillator.type = 'sawtooth';
    oscillator.frequency.value = 58;
    const filter = this.context.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 210;
    const engineGain = this.context.createGain();
    engineGain.gain.value = 0.9;
    const limiter = this.context.createDynamicsCompressor();
    limiter.threshold.value = -8;
    limiter.knee.value = 4;
    limiter.ratio.value = 12;
    limiter.attack.value = 0.003;
    limiter.release.value = 0.18;
    const pulse = this.context.createOscillator();
    pulse.type = 'sine';
    pulse.frequency.value = 4.5;
    const pulseDepth = this.context.createGain();
    pulseDepth.gain.value = 0.18;
    oscillator.connect(filter).connect(engineGain).connect(limiter).connect(this.context.destination);
    pulse.connect(pulseDepth).connect(engineGain.gain);
    oscillator.start();
    pulse.start();
    this.motorcycleOscillator = oscillator;
    this.motorcyclePulse = pulse;
    this.motorcycleGain = engineGain;
    this.motorcycleLimiter = limiter;
    this.motorcyclePulseDepth = pulseDepth;
  }

  setMotorcycleSpeed(speed) {
    if (!this.motorcycleOscillator || !this.motorcyclePulse) return;
    const rpm = Math.abs(speed);
    this.motorcycleOscillator.frequency.value = 58 + Math.min(rpm * 1.4, 38);
    this.motorcyclePulse.frequency.value = 4.5 + Math.min(rpm * 0.08, 2.5);
  }

  stopMotorcycle() {
    if (!this.context || !this.motorcycleOscillator || !this.motorcyclePulse || !this.motorcycleGain) return;
    const oscillator = this.motorcycleOscillator;
    const pulse = this.motorcyclePulse;
    const engineGain = this.motorcycleGain;
    const limiter = this.motorcycleLimiter;
    const pulseDepth = this.motorcyclePulseDepth;
    this.motorcycleOscillator = null;
    this.motorcyclePulse = null;
    this.motorcycleGain = null;
    this.motorcycleLimiter = null;
    this.motorcyclePulseDepth = null;
    pulse.disconnect();
    pulseDepth?.disconnect();
    engineGain.gain.cancelScheduledValues(this.context.currentTime);
    engineGain.gain.setTargetAtTime(0, this.context.currentTime, 0.04);
    window.setTimeout(() => {
      oscillator.stop();
      oscillator.disconnect();
      engineGain.disconnect();
      limiter.disconnect();
    }, 220);
  }
}
