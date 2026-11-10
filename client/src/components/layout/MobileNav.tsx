"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, User, Home } from "lucide-react";
import { siteConfig, MenuItem, MenuKey } from "@/config/site";

interface MobileNavProps {
  mobileOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

export default function MobileNav({
  mobileOpen,
  toggleMobileMenu,
  closeMobileMenu,
}: MobileNavProps) {
  const [dropdownOpen, setDropdownOpen] = useState<Record<MenuKey, boolean>>({
    courses: false,
    visaMigration: false,
    abroadStudy: false,
    otherServices: false,
  });

  const menus: MenuItem[] = siteConfig.nav;

  const toggleDropdown = useCallback((menu: MenuKey) => {
    setDropdownOpen((prev) => ({
      ...Object.keys(prev).reduce(
        (acc, key) => ({ ...acc, [key]: false }),
        {} as Record<MenuKey, boolean>
      ),
      [menu]: !prev[menu],
    }));
  }, []);

  return (
    <>
      <div className="lg:hidden flex items-center gap-2">
        <button
          onClick={toggleMobileMenu}
          className="p-2 text-primary"
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`lg:hidden bg-background border-t border-border transition-all duration-300 ease-out ${
          mobileOpen
            ? "max-h-[80vh] opacity-100 overflow-y-auto"
            : "max-h-0 opacity-0 pointer-events-none"
        } overflow-hidden`}
      >
        <div className="px-4 py-4 space-y-1">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-2 py-3 px-4 font-medium text-base rounded-lg transition-colors text-primary hover:bg-muted"
          >
            <Home size={18} />
            Home
          </Link>

          <Link
            href="/blog"
            onClick={closeMobileMenu}
            className="block py-3 px-4 font-medium text-base rounded-lg transition-colors text-primary hover:bg-muted"
          >
            Blog
          </Link>

          {menus.map((menu) => (
            <div key={menu.key} className="space-y-1">
              <button
                onClick={() => toggleDropdown(menu.key)}
                className="flex items-center justify-between w-full py-3 px-4 font-medium text-base rounded-lg transition-colors text-primary hover:bg-muted"
              >
                <span>{menu.label}</span>
                <ChevronDown
                  size={18}
                  className={`text-secondary transition-transform ${
                    dropdownOpen[menu.key] ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  dropdownOpen[menu.key]
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 py-2 space-y-1">
                  {menu.links.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block py-2 px-4 text-ui-small rounded-md transition-colors text-foreground hover:bg-secondary hover:text-secondary-foreground"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <a
            href="https://calendly.com/samir-dreamtrip"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
            className="block py-3 px-4 font-medium text-base rounded-lg text-primary hover:bg-muted"
          >
            Contact
          </a>

          {/* Mobile ImmiAccount */}
          <a
            href="https://online.immi.gov.au/ola/app"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
            className="flex items-center justify-center gap-2 w-full py-2.5 mt-2 font-bold text-base rounded-xl transition-colors border-2 border-primary/10 text-primary hover:bg-primary/5"
          >
            <User className="w-5 h-5" />
            ImmiAccount Login
          </a>


        </div>
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden -z-10"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
}
