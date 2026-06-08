"use client";

import { useEffect, useState } from "react";

export function useCountUp(target: number, isActive: boolean, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    let frame = 0;
    const totalFrames = Math.round(duration / (1000 / 60));

    const tick = () => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isActive, target, duration]);

  return value;
}
