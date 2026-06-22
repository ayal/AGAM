// A gentle generative "fountain" tune via the Web Audio API: soft pentatonic
// droplets with a little echo, plus an occasional low pad.
//
// iOS note: through the built-in speaker, the hardware mute/ring switch silences
// normal Web Audio. Routing the output through a media element (MediaStream ->
// <audio>) makes iOS treat it as media playback, so it plays even on silent.
export interface Music {
  start(): void;
  stop(): void;
}

const isIOS =
  typeof navigator !== "undefined" &&
  (/iP(hone|ad|od)/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && (navigator as any).maxTouchPoints > 1));

export function createMusic(): Music {
  let ctx: AudioContext | undefined;
  let master: GainNode;
  let mediaEl: HTMLAudioElement | undefined;
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
    note(t, freq(semi), 0.6, 0.14, "triangle");
    if (Math.random() < 0.5) note(t + 0.12, freq(semi + 12), 0.5, 0.06, "sine");
    if (step % 4 === 0) note(t, freq(scale[0] - 12), 1.4, 0.1, "sine");
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

        let out: AudioNode = ctx.destination;
        if (isIOS) {
          // route through a media element so the mute switch doesn't silence it
          const streamDest = ctx.createMediaStreamDestination();
          mediaEl = document.createElement("audio");
          (mediaEl as any).playsInline = true;
          mediaEl.srcObject = streamDest.stream;
          out = streamDest;
        }
        master.connect(out);
        master.connect(delay);
        delay.connect(fb);
        fb.connect(delay);
        delay.connect(out);
      }
      void ctx.resume();
      mediaEl?.play().catch(() => {});
      // unlock + a real note inside the gesture
      const unlock = ctx.createBufferSource();
      unlock.buffer = ctx.createBuffer(1, 1, 22050);
      unlock.connect(ctx.destination);
      unlock.start(0);
      tick();
      if (timer === undefined) timer = window.setInterval(tick, 360);
    },
    stop() {
      if (timer !== undefined) {
        clearInterval(timer);
        timer = undefined;
      }
      mediaEl?.pause();
      ctx?.suspend();
    },
  };
}
