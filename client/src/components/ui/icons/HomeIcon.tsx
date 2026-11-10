import * as React from "react";

export function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor"
      {...props}
    >
      {/* Roof */}
      <path d="M12.65 2.56a1 1 0 0 0-1.3 0L2.26 9.6a1 1 0 0 0 1.28 1.53L12 4.65l8.46 6.48a1 1 0 0 0 1.28-1.53L12.65 2.56z"/>
      {/* Chimney */}
      <path d="M16 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4.5l-4-3.06V4z" />
      {/* House Body */}
      <path d="M5.5 12.8 12 7.82l6.5 4.98V20a2 2 0 0 1-2 2h-2.5v-6h-4v6H7.5a2 2 0 0 1-2-2v-7.2z"/>
    </svg>
  );
}
