"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { Container } from "@/components/layout/Container";

interface NavbarProps {
  className?: string;
  logoSrc?: string;
  logoAlt?: string;
}

export default function Navbar({
  className = "",
  logoSrc = "/logos/everestlogo.jpeg",
  logoAlt = "Everest Education",
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // --- Effects ---
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileOpen(false);
      }
    };

    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileOpen) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileOpen]);

  // --- Handlers ---
  const toggleMobileMenu = useCallback(() => setMobileOpen((prev) => !prev), []);
  const closeMobileMenu = useCallback(() => setMobileOpen(false), []);

  return (
    <nav ref={navRef} className={`relative z-50 font-sans ${className}`}>
      <Container>
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-[72px]">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0 h-full py-1">
            <Link
              href="/"
              className="flex items-center h-full overflow-hidden transition-transform hover:scale-105"
            >
              <Image
                src={logoSrc}
                alt={logoAlt || "Company Logo"}
                width={300}
                height={100}
                className="h-[140%] w-auto object-contain mix-blend-multiply origin-center"
                priority
              />
            </Link>
          </div>

          <DesktopNav />
          <MobileNav
            mobileOpen={mobileOpen}
            toggleMobileMenu={toggleMobileMenu}
            closeMobileMenu={closeMobileMenu}
          />
        </div>
      </Container>
    </nav>
  );
}
