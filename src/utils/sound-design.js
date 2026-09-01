import { Howl, Howler } from 'howler';

// ═══════════════════════════════════════════════════════════════
// NEXUS OS v3 — Cinematic Cyberpunk Audio & Voice DSP Engine
// Inspired by Anonymous, Cyber AI, Sci-Fi Narrators & Web Audio DSP
// ═══════════════════════════════════════════════════════════════

let audioCtx = null;
let activeMatrixDrone = null;
let reverbConvolver = null;

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// ─── Procedural Reverb Impulse Response Generator ───
function getReverbNode(ctx) {
  if (reverbConvolver) return reverbConvolver;
  const sampleRate = ctx.sampleRate;
  const length = sampleRate * 2.8; // 2.8 seconds decay
  const impulse = ctx.createBuffer(2, length, sampleRate);
  const left = impulse.getChannelData(0);
  const right = impulse.getChannelData(1);

  for (let i = 0; i < length; i++) {
    const decay = Math.exp(-i / (sampleRate * 0.7));
    left[i] = (Math.random() * 2 - 1) * decay;
    right[i] = (Math.random() * 2 - 1) * decay;
  }

  const convolver = ctx.createConvolver();
  convolver.buffer = impulse;
  reverbConvolver = convolver;
  return convolver;
}

// ─── WaveShaper Distortion Curve (Warm Analog / Cyberpunk Mask) ───
function makeDistortionCurve(amount = 25) {
  const k = amount;
  const n_samples = 44100;
  const curve = new Float32Array(n_samples);
  const deg = Math.PI / 180;
  for (let i = 0; i < n_samples; ++i) {
    const x = (i * 2) / n_samples - 1;
    curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
  }
  return curve;
}

// 1. Som de Acesso Root (Beep Grave + Impacto Sub-Harmônico)
export function playRootAccessSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  // Sub-bass thump (Anonymous cyber authority)
  const subOsc = ctx.createOscillator();
  const subGain = ctx.createGain();
  subOsc.type = 'sine';
  subOsc.frequency.setValueAtTime(80, now);
  subOsc.frequency.exponentialRampToValueAtTime(28, now + 0.8);

  subGain.gain.setValueAtTime(0.85, now);
  subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

  subOsc.connect(subGain);
  subGain.connect(ctx.destination);

  subOsc.start(now);
  subOsc.stop(now + 0.8);

  // Metallic cyber beep
  const beepOsc = ctx.createOscillator();
  const beepFilter = ctx.createBiquadFilter();
  const beepGain = ctx.createGain();

  beepOsc.type = 'square';
  beepOsc.frequency.setValueAtTime(320, now);
  beepOsc.frequency.setValueAtTime(640, now + 0.08);

  beepFilter.type = 'bandpass';
  beepFilter.frequency.setValueAtTime(1400, now);
  beepFilter.Q.setValueAtTime(5.0, now);

  beepGain.gain.setValueAtTime(0.35, now);
  beepGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

  beepOsc.connect(beepFilter);
  beepFilter.connect(beepGain);
  beepGain.connect(ctx.destination);

  beepOsc.start(now);
  beepOsc.stop(now + 0.35);
}

// 2. Som de Desligamento da Reality Engine (Digital Shutdown / Degauss Collapse)
export function playRealityEngineShutdownSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const filter = ctx.createBiquadFilter();
  const shaper = ctx.createWaveShaper();
  const gain = ctx.createGain();

  shaper.curve = makeDistortionCurve(15);
  shaper.oversample = '4x';

  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(750, now);
  osc.frequency.exponentialRampToValueAtTime(16, now + 2.0);

  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(1800, now);
  filter.frequency.exponentialRampToValueAtTime(25, now + 2.0);

  gain.gain.setValueAtTime(0.45, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 2.0);

  osc.connect(shaper);
  shaper.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 2.0);
}

// 3. Ambiente Sonoro Digital Durante a Matrix Cascade (Sub-drone + Binário Cyber)
export function startMatrixDroneSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const droneOsc = ctx.createOscillator();
  const subOsc = ctx.createOscillator();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();

  droneOsc.type = 'sawtooth';
  droneOsc.frequency.setValueAtTime(45, now); // F#0 deep rumble

  subOsc.type = 'sine';
  subOsc.frequency.setValueAtTime(90, now);

  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(280, now);

  // Reverb space connection
  const reverb = getReverbNode(ctx);
  const reverbGain = ctx.createGain();
  reverbGain.gain.setValueAtTime(0.4, now);

  // Soft fade in
  gain.gain.setValueAtTime(0.001, now);
  gain.gain.linearRampToValueAtTime(0.32, now + 1.8);

  droneOsc.connect(filter);
  subOsc.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  gain.connect(reverb);
  reverb.connect(reverbGain);
  reverbGain.connect(ctx.destination);

  droneOsc.start(now);
  subOsc.start(now);

  activeMatrixDrone = { droneOsc, subOsc, gain, ctx };
}

export function stopMatrixDroneSound() {
  if (!activeMatrixDrone) return;
  const { droneOsc, subOsc, gain, ctx } = activeMatrixDrone;
  const now = ctx.currentTime;

  gain.gain.setValueAtTime(gain.gain.value, now);
  gain.gain.linearRampToValueAtTime(0.001, now + 1.5);

  setTimeout(() => {
    try {
      droneOsc.stop();
      subOsc.stop();
    } catch (e) {}
    activeMatrixDrone = null;
  }, 1600);
}

// 4. Voz Grave, Misteriosa e Cinematográfica (Cyber AI / Anonymous Style)
export function playCinematicVoice(text, onEnd) {
  const ctx = getAudioContext();

  // Sub-octave chest resonance drone synchronized with the speech utterance
  if (ctx) {
    const now = ctx.currentTime;
    const voiceSubOsc = ctx.createOscillator();
    const voiceSubGain = ctx.createGain();
    const subFilter = ctx.createBiquadFilter();

    voiceSubOsc.type = 'sine';
    // Deep chest resonance (65Hz - 85Hz range)
    voiceSubOsc.frequency.setValueAtTime(72, now);
    voiceSubOsc.frequency.linearRampToValueAtTime(60, now + 2.2);

    subFilter.type = 'lowpass';
    subFilter.frequency.setValueAtTime(160, now);

    voiceSubGain.gain.setValueAtTime(0.001, now);
    voiceSubGain.gain.linearRampToValueAtTime(0.28, now + 0.15);
    voiceSubGain.gain.exponentialRampToValueAtTime(0.001, now + 2.8);

    // Stereo delay / echo chain
    const delay = ctx.createDelay();
    delay.delayTime.setValueAtTime(0.22, now);
    const delayGain = ctx.createGain();
    delayGain.gain.setValueAtTime(0.35, now);

    voiceSubOsc.connect(subFilter);
    subFilter.connect(voiceSubGain);
    voiceSubGain.connect(ctx.destination);

    // Echo routing
    voiceSubGain.connect(delay);
    delay.connect(delayGain);
    delayGain.connect(delay);
    delayGain.connect(ctx.destination);

    voiceSubOsc.start(now);
    voiceSubOsc.stop(now + 3.0);
  }

  // SpeechSynthesis calibrated for deep authoritative male/cyber narrator timbre
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    // Deep pitch and deliberate measured pacing
    utterance.pitch = 0.52;
    utterance.rate = 0.82;
    utterance.volume = 1.0;

    const voices = window.speechSynthesis.getVoices();
    // Prioritize deep natural English / Portuguese voices
    const deepVoice = voices.find(v => 
      v.name.includes('David') || 
      v.name.includes('Mark') || 
      v.name.includes('Daniel') || 
      v.name.includes('George') || 
      v.name.includes('Male') || 
      v.name.includes('Natural') ||
      v.lang.includes('en')
    ) || voices[0];

    if (deepVoice) {
      utterance.voice = deepVoice;
    }

    if (onEnd) {
      utterance.onend = onEnd;
      utterance.onerror = onEnd;
    }

    window.speechSynthesis.speak(utterance);
  } else {
    if (onEnd) onEnd();
  }
}

// 5. Som de Glitch Durante a Corrupção Visual
export function playGlitchSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const bufferSize = ctx.sampleRate * 0.16;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * (Math.sin(i / 12) > 0.2 ? 0.9 : 0.05);
  }

  const noise = ctx.createBufferSource();
  noise.buffer = buffer;

  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(1600, now);
  filter.Q.setValueAtTime(3.0, now);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.38, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  noise.start(now);
}

// 6. Som de Reconstrução da Realidade (Ascending Quantum Harmonic Bloom)
export function playRealityRebuildingSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const frequencies = [110, 220, 330, 440, 660, 880, 1320];

  frequencies.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq * 0.6, now + idx * 0.12);
    osc.frequency.exponentialRampToValueAtTime(freq, now + idx * 0.12 + 1.4);

    gain.gain.setValueAtTime(0.001, now + idx * 0.12);
    gain.gain.linearRampToValueAtTime(0.14, now + idx * 0.12 + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + 2.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now + idx * 0.12);
    osc.stop(now + idx * 0.12 + 2.3);
  });
}
