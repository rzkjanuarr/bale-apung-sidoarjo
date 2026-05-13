"use client";

import React, { useEffect, useRef } from "react";

export default function ClickSoundProvider({ children }: { children: React.ReactNode }) {
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    const playClick = () => {
      const AudioCtor =
        window.AudioContext ||
        (window as any).webkitAudioContext;
      if (!AudioCtor) return;

      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtor();
      }

      const context = audioContextRef.current;
      if (context?.state === "suspended") {
        void context.resume();
      }
      
      if (!context) return;

      const now = context.currentTime;
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      const filter = context.createBiquadFilter();

      oscillator.type = "square";
      oscillator.frequency.setValueAtTime(220, now);
      oscillator.frequency.exponentialRampToValueAtTime(130, now + 0.045);

      filter.type = "highpass";
      filter.frequency.setValueAtTime(900, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.45, now + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);

      oscillator.connect(filter);
      filter.connect(gain);
      gain.connect(context.destination);

      oscillator.start(now);
      oscillator.stop(now + 0.07);
    };

    const blockSelectAll = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "a") {
        event.preventDefault();
      }
    };

    const blockSelection = (event: Event) => {
      event.preventDefault();
    };

    document.addEventListener("pointerdown", playClick, { passive: true });
    // Keep selection enabled for form elements if any, but since the user requested global block:
    document.addEventListener("keydown", blockSelectAll);
    document.addEventListener("selectstart", blockSelection);

    return () => {
      document.removeEventListener("pointerdown", playClick);
      document.removeEventListener("keydown", blockSelectAll);
      document.removeEventListener("selectstart", blockSelection);
    };
  }, []);

  return <>{children}</>;
}
