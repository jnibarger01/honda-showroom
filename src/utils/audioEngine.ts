/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Web Audio API engine for simulated Honda performance engine note & VIP delivery reveal chimes

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playVtecRevSound() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Master gain
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.001, now);
    masterGain.gain.exponentialRampToValueAtTime(0.35, now + 0.1);
    masterGain.gain.exponentialRampToValueAtTime(0.4, now + 0.6);
    masterGain.gain.exponentialRampToValueAtTime(0.001, now + 1.8);
    masterGain.connect(ctx.destination);

    // Fundamental cylinder pulses (Oscillator 1 - Sawtooth)
    const osc1 = ctx.createOscillator();
    osc1.type = 'sawtooth';
    // Idle 850 RPM (~56 Hz fundamental for 4-cyl), revving to 6800 RPM (~450 Hz)
    osc1.frequency.setValueAtTime(65, now);
    osc1.frequency.exponentialRampToValueAtTime(280, now + 0.4); // VTEC crossover
    osc1.frequency.exponentialRampToValueAtTime(460, now + 0.9); // High RPM scream
    osc1.frequency.exponentialRampToValueAtTime(80, now + 1.7);  // Rev drop

    // Harmonic richness (Oscillator 2 - Square wave for exhaust rasp)
    const osc2 = ctx.createOscillator();
    osc2.type = 'square';
    osc2.frequency.setValueAtTime(130, now);
    osc2.frequency.exponentialRampToValueAtTime(560, now + 0.4);
    osc2.frequency.exponentialRampToValueAtTime(920, now + 0.9);
    osc2.frequency.exponentialRampToValueAtTime(160, now + 1.7);

    // Turbocharger high-frequency spool hiss (White noise + bandpass)
    const bufferSize = ctx.sampleRate * 1.5;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(2400, now);
    noiseFilter.frequency.exponentialRampToValueAtTime(4800, now + 0.7);
    noiseFilter.Q.value = 4.0;

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.001, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.12, now + 0.5);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 1.4);

    whiteNoise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(masterGain);

    // Lowpass filter for deep exhaust tone
    const exhaustFilter = ctx.createBiquadFilter();
    exhaustFilter.type = 'lowpass';
    exhaustFilter.frequency.setValueAtTime(350, now);
    exhaustFilter.frequency.exponentialRampToValueAtTime(1800, now + 0.8);
    exhaustFilter.frequency.exponentialRampToValueAtTime(400, now + 1.7);

    osc1.connect(exhaustFilter);
    osc2.connect(exhaustFilter);
    exhaustFilter.connect(masterGain);

    osc1.start(now);
    osc2.start(now);
    whiteNoise.start(now);

    osc1.stop(now + 1.8);
    osc2.stop(now + 1.8);
    whiteNoise.stop(now + 1.8);
  } catch {
    // Ignore audio autoplay restrictions if user hasn't interacted
  }
}

export function playDeliveryRevealChime() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Harmonic chord: C4, E4, G4, B4, C5 (Lydian/Major 7th uplifting chime)
    const frequencies = [261.63, 329.63, 392.00, 493.88, 523.25, 659.25];

    frequencies.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.12);

      gain.gain.setValueAtTime(0.001, now + idx * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.15, now + idx * 0.12 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + 2.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.12);
      osc.stop(now + idx * 0.12 + 2.3);
    });
  } catch {
    // Graceful silence if audio policy is active
  }
}
