import React from "react";
import { accreditationGradientDefs } from "@/config/trust-data";

/**
 * Shared SVG gradient definitions for accreditation icons.
 * Renders a hidden <svg> with <linearGradient> defs that can be referenced
 * via `fill="url(#grad-mara-light)"` etc.
 */
export function AccreditationGradients() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        {accreditationGradientDefs.map((grad) => (
          <linearGradient key={grad.id} id={grad.id} x1="0%" y1="0%" x2="100%" y2="100%">
            {grad.stops.map((stop) => (
              <stop key={stop.offset} offset={stop.offset} stopColor={stop.color} />
            ))}
          </linearGradient>
        ))}
      </defs>
    </svg>
  );
}
