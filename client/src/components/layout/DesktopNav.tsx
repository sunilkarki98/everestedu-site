"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, User } from "lucide-react";
import { siteConfig, MenuItem, MenuKey } from "@/config/site";
import { HomeIcon } from "@/components/ui/icons/HomeIcon";

export default function DesktopNav() {
  const pathname = usePathname() || "/";
  const [activeDropdown, setActiveDropdown] = useState<MenuKey | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const menus: MenuItem[] = siteConfig.nav;

  const handleMouseEnter = useCallback((menu: MenuKey) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  }, []);

  return (
    <>
      <div className="hidden lg:flex flex-1 justify-end items-center h-full space-x-3 lg:space-x-6 xl:space-x-8 px-4">
        
        <Link
          href="/"
          className={`px-3 py-2 flex items-center justify-center group transition-colors duration-300 ${pathname === "/" ? "text-accent" : "text-primary hover:text-accent"}`}
          aria-label="Home"
        >
          <HomeIcon className="w-6 h-6 mb-[2px]" />
        </Link>

        {menus.map((menu) => (
          <div key={menu.key} className="relative">
            <button
              onMouseEnter={() => handleMouseEnter(menu.key)}
              onMouseLeave={handleMouseLeave}
              className={`px-3 py-2 font-medium flex items-center gap-0 relative group ${menu.href && pathname.startsWith(menu.href) ? "text-accent" : "text-primary hover:text-accent"}`}
            >
              {menu.label}
              <ChevronDown
                size={16}
                className="translate-y-[1px] text-secondary"
              />
              <span className={`absolute inset-x-0 bottom-1 h-0.5 transition-transform origin-left bg-primary ${menu.href && pathname.startsWith(menu.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
            </button>

            <div
              className={`absolute top-full left-0 bg-white/85 backdrop-blur-2xl text-foreground shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] rounded-xl mt-2 w-72 border border-white/60 transition-all duration-300 origin-top ${activeDropdown === menu.key
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              onMouseEnter={() => handleMouseEnter(menu.key)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="py-2">
                {menu.href ? (
                  <Link
                    href={menu.href}
                    className="block px-4 py-3 font-semibold border-b border-border text-primary"
                  >
                    {menu.label}
                  </Link>
                ) : (
                  <span className="block px-4 py-3 font-semibold border-b border-border text-muted-foreground cursor-not-allowed">
                    {menu.label}
                  </span>
                )}
                {menu.links.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-3 transition-colors duration-200 text-foreground hover:bg-secondary hover:text-secondary-foreground"
                  >
                    <div className="font-medium">{item.label}</div>
                    {item.description && (
                      <div className="text-ui-small mt-1 opacity-80">
                        {item.description}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}

        <Link
          href="/blog"
          className={`px-4 py-2 font-medium relative group ${pathname.startsWith("/blog") ? "text-accent" : "text-primary hover:text-accent"}`}
        >
          Blog
          <span className={`absolute inset-x-0 bottom-1 h-0.5 transition-transform origin-left bg-primary ${pathname.startsWith("/blog") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
        </Link>

        <a
          href="https://calendly.com/samir-dreamtrip"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 font-medium relative group text-primary"
        >
          Contact
          <span className="absolute inset-x-0 -bottom-0.5 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left bg-primary"></span>
        </a>
      </div>

      <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
        <a
          href="https://online.immi.gov.au/ola/app"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 flex items-center gap-2 px-4 py-2 text-ui-small font-bold text-primary bg-primary/5 hover:bg-primary/10 rounded-full transition-colors border border-primary/10"
        >
          <User className="w-4 h-4" />
          ImmiAccount
        </a>
      </div>
    </>
  );
}
