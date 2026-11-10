"use client";

import React from "react";
import { ReactLenis } from "lenis/react";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  // Classic smooth easing curve
  const easingCurve = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: easingCurve,
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      }}
    >
      {children}
    </ReactLenis>
  );
}
