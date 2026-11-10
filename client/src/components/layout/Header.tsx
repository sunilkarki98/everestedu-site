"use client";

import { useState, useEffect } from "react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-border/40" 
          : "bg-white shadow-none"
      }`}
    >
      <div className={`transition-all duration-300 overflow-hidden ${isScrolled ? "h-0 opacity-0" : "h-auto opacity-100"}`}>
        <TopBar />
      </div>
      <Navbar className={isScrolled ? "bg-transparent" : ""} />
    </header>
  );
}
