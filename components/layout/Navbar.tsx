"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
// Added 'Menu' here for the hamburger icon
import { ArrowRight, ChevronDown, Menu } from "lucide-react"; 
import MobileMenu from "./MobileMenu"; // Importing your new mobile menu!

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // We use a React Fragment (<> ... </>) because we are returning the Header AND the MobileMenu
    <>
      <header className={`fixed top-0 z-50 w-full transition-all duration-500 px-4 md:px-8 py-6 ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      } ${
        isScrolled ? "bg-white border-b border-brand-light shadow-sm py-2" : "bg-transparent py-4"
      }`}>
        <FadeIn>
          <div className="container mx-auto">
            <div className="flex items-center justify-between h-20">
              
              {/* Logo Section */}
              <Link href="/" className="flex-shrink-0">
                <Image
                  src={isScrolled ? "/icons/proactive-logo.png" : "/icons/proactive-logo-light.png"}
                  alt="Proactive Prosthetics"
                  width={220}
                  height={60}
                  className="w-auto h-10 md:h-12 transition-all duration-300"
                  priority
                />
              </Link>

              {/* Desktop Nav Links (Hidden on mobile via lg:flex) */}
              <nav className={`hidden lg:flex items-center gap-8 font-light transition-colors ${
                isScrolled ? "text-brand-dark" : "text-white"
              }`}>
                <Link href="/about" className="hover:text-brand-blue transition-colors">
                  About
                </Link>

                <div className="relative group py-8">
                  <button className="flex items-center gap-1 hover:text-brand-blue transition-colors">
                    Treatments
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute top-full left-0 w-48 bg-white border border-brand-light shadow-lg rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col">
                    <Link href="/treatments/prosthetics" className="px-4 py-3 hover:bg-brand-light hover:text-brand-blue text-black text-sm">Prosthetics</Link>
                    <Link href="/treatments/orthotics" className="px-4 py-3 hover:bg-brand-light hover:text-brand-blue text-sm text-black ">Orthotics</Link>
                    <Link href="/treatments/rehabilitation" className="px-4 py-3 hover:bg-brand-light hover:text-brand-blue text-sm text-black ">Rehabilitation</Link>
                  </div>
                </div>

                <div className="relative group py-8">
                  <button className="flex items-center gap-1 hover:text-brand-blue transition-colors">
                    Clinics
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute top-full left-0 w-48 bg-white border border-brand-light shadow-lg rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col">
                    <Link href="/clinics/godalming" className="px-4 py-3 hover:bg-brand-light hover:text-brand-blue text-sm text-black ">Godalming</Link>
                    <Link href="/clinics/leeds" className="px-4 py-3 hover:bg-brand-light hover:text-brand-blue text-sm text-black ">Leeds</Link>
                    <Link href="/clinics/cambridge" className="px-4 py-3 hover:bg-brand-light hover:text-brand-blue text-sm text-black ">Cambridge</Link>
                    <Link href="/clinics/bristol" className="px-4 py-3 hover:bg-brand-light hover:text-brand-blue text-sm text-black ">Bristol</Link>
                    <Link href="/clinics/manchester" className="px-4 py-3 hover:bg-brand-light hover:text-brand-blue text-sm text-black ">Manchester</Link>
                  </div>
                </div>

                <Link href="/referees" className="hover:text-brand-blue transition-colors">Stories</Link>
                
                <div className="relative group py-8">
                  <button className="flex items-center gap-1 hover:text-brand-blue transition-colors">
                    Referees
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute top-full left-0 w-48 bg-white border border-brand-light shadow-lg rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col">
                    <Link href="/treatments/prosthetics" className="px-4 py-3 hover:bg-brand-light hover:text-brand-blue text-black text-sm">Medico-Legal Services</Link>
                  </div>
                </div>
                <Link href="/academy" className="hover:text-brand-blue transition-colors">Academy</Link>
              </nav>

              {/* Contact Button & Mobile Toggle Container */}
              <div className="flex items-center gap-4">
                
                <Link 
                  href="/contact" 
                  className={`hidden md:flex items-center gap-2 px-6 py-2.5 font-body text-sm uppercase tracking-wide transition-all duration-300 ${
                    isScrolled 
                      ? "bg-transparent border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white" 
                      : "bg-white text-brand-dark hover:bg-gray-100"
                  }`}
                >
                  <span><ArrowRight className="w-4 h-4" /></span> 
                  Contact Us
                </Link>

                {/* THE HAMBURGER BUTTON (Visible only on mobile via lg:hidden) */}
                <button 
                  className={`lg:hidden p-2 transition-colors ${isScrolled ? "text-brand-dark" : "text-white"}`}
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Open mobile menu"
                >
                  <Menu className="w-8 h-8" strokeWidth={1.5} />
                </button>
              </div>

            </div>
          </div>
        </FadeIn>
      </header>

      {/* The isolated mobile menu connects here! */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}