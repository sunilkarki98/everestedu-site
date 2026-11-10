import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-ui-hero",
        "text-ui-section-title",
        "text-ui-card-title",
        "text-ui-lead",
        "text-ui-body",
        "text-ui-small",
      ],
    },
  },
});

/**
 * Merges Tailwind classes safely, resolving conflicts using extended tailwind-merge
 * and conditionally applying classes using clsx.
 */
export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
