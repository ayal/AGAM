// A gentle generative "fountain" tune via the Web Audio API: soft pentatonic
// droplets with a little echo, plus an occasional low pad. Must be started from
// a user gesture (the music button).
export interface Music {
  start(): void;
  stop(): void;
}

export function createMusic(): Music {
  let ctx: AudioContext | undefined;
  let master: GainNode;
  let timer: number | undefined;
  let step = 0;

  const scale = [0, 2, 4, 7, 9]; // major pentatonic
  const baseHz = 261.63; // C4
  const freq = (semi: number) => baseHz * Math.pow(2, semi / 12);

  function note(t: number, f: number, dur: number, gain: number, type: OscillatorType) {
    if (!ctx) return;
    const o = ctx.createOscillator();
    o.type = type;
    o.frequency.value = f;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g);
    g.connect(master);
    o.start(t);
    o.stop(t + dur + 0.05);
  }

  function tick() {
    if (!ctx) return;
    const t = ctx.currentTime + 0.05;
    const semi = scale[Math.floor(Math.random() * scale.length)] + (Math.random() < 0.4 ? 12 : 0);
    note(t, freq(semi), 0.6, 0.14, "triangle"); // droplet
    if (Math.random() < 0.5) note(t + 0.12, freq(semi + 12), 0.5, 0.06, "sine"); // sparkle
    if (step % 4 === 0) note(t, freq(scale[0] - 12), 1.4, 0.1, "sine"); // soft bass
    step++;
  }

  return {
    start() {
      if (!ctx) {
        ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        master = ctx.createGain();
        master.gain.value = 0.2;
        const delay = ctx.createDelay();
        delay.delayTime.value = 0.28;
        const fb = ctx.createGain();
        fb.gain.value = 0.3;
        master.connect(ctx.destination);
        master.connect(delay);
        delay.connect(fb);
        fb.connect(delay);
        delay.connect(ctx.destination);
      }
      // iOS Safari: must resume AND play a sound inside the user gesture to unlock
      void ctx.resume();
      const unlock = ctx.createBufferSource();
      unlock.buffer = ctx.createBuffer(1, 1, 22050);
      unlock.connect(ctx.destination);
      unlock.start(0);
      if (timer === undefined) timer = window.setInterval(tick, 360);
    },
    stop() {
      if (timer !== undefined) {
        clearInterval(timer);
        timer = undefined;
      }
      ctx?.suspend();
    },
  };
}
