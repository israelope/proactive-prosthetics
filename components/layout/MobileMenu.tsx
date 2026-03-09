"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronRight, ArrowRight } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [activeMenu, setActiveMenu] = useState<string>("main");

  const handleClose = () => {
    onClose();
    setTimeout(() => setActiveMenu("main"), 500);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] bg-white transition-all duration-500 ease-in-out flex flex-col ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* 1. Header Area */}
      <div className="flex items-center justify-between px-6 py-6 border-b border-brand-light">
        <Link href="/" onClick={handleClose}>
          <Image
            src="/icons/proactive-logo.png"
            alt="Proactive Prosthetics"
            width={180}
            height={45}
            className="w-auto h-8"
          />
        </Link>
        <button onClick={handleClose} className="p-2 text-brand-dark hover:text-brand-blue transition-colors">
          <X className="w-8 h-8" strokeWidth={1.5} />
        </button>
      </div>

      {/* 2. Scrollable Menu Content */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        
        {/* VIEW A: The Main Menu */}
        {activeMenu === "main" && (
          <nav className="flex flex-col space-y-6 text-xl font-body text-brand-dark overflow-hidden">
            <Link 
              href="/about" 
              onClick={handleClose} 
              className={`hover:text-brand-blue transition-all duration-500 ease-out transform ${isOpen && activeMenu === "main" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: '100ms' }}
            >
              About
            </Link>
            
            <button 
              onClick={() => setActiveMenu("treatments")} 
              className={`flex items-center justify-between hover:text-brand-blue transition-all duration-500 ease-out transform text-left w-full ${isOpen && activeMenu === "main" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: '200ms' }}
            >
              Treatments <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            
            <button 
              onClick={() => setActiveMenu("clinics")} 
              className={`flex items-center justify-between hover:text-brand-blue transition-all duration-500 ease-out transform text-left w-full ${isOpen && activeMenu === "main" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: '300ms' }}
            >
              Clinics <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <Link 
              href="/stories" 
              onClick={handleClose} 
              className={`hover:text-brand-blue transition-all duration-500 ease-out transform ${isOpen && activeMenu === "main" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: '400ms' }}
            >
              Stories
            </Link>

            <button 
              onClick={() => setActiveMenu("referrers")} 
              className={`flex items-center justify-between hover:text-brand-blue transition-all duration-500 ease-out transform text-left w-full ${isOpen && activeMenu === "main" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: '500ms' }}
            >
              Referrers <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <Link 
              href="/academy" 
              onClick={handleClose} 
              className={`hover:text-brand-blue transition-all duration-500 ease-out transform ${isOpen && activeMenu === "main" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: '600ms' }}
            >
              Academy
            </Link>
          </nav>
        )}

        {/* VIEW B: Treatments Sub-Menu */}
        {activeMenu === "treatments" && (
          <div className="flex flex-col space-y-6 text-xl font-body text-brand-dark">
            <button 
              onClick={() => setActiveMenu("main")} 
              className={`text-sm font-bold tracking-widest text-gray-500 hover:text-brand-blue text-left mb-4 uppercase transition-all duration-500 ease-out transform ${activeMenu === "treatments" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: '100ms' }}
            >
              Back
            </button>
            <Link href="/treatments/prosthetics" onClick={handleClose} className={`hover:text-brand-blue transition-all duration-500 ease-out transform ${activeMenu === "treatments" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: '200ms' }}>Prosthetics</Link>
            <Link href="/treatments/orthotics" onClick={handleClose} className={`hover:text-brand-blue transition-all duration-500 ease-out transform ${activeMenu === "treatments" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: '300ms' }}>Orthotics</Link>
            <Link href="/treatments/rehabilitation" onClick={handleClose} className={`hover:text-brand-blue transition-all duration-500 ease-out transform ${activeMenu === "treatments" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: '400ms' }}>Rehabilitation</Link>
          </div>
        )}

        {/* VIEW C: Clinics Sub-Menu */}
        {activeMenu === "clinics" && (
          <div className="flex flex-col space-y-6 text-xl font-body text-brand-dark">
            <button 
              onClick={() => setActiveMenu("main")} 
              className={`text-sm font-bold tracking-widest text-gray-500 hover:text-brand-blue text-left mb-4 uppercase transition-all duration-500 ease-out transform ${activeMenu === "clinics" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: '100ms' }}
            >
              Back
            </button>
            <Link href="/clinics/godalming" onClick={handleClose} className={`hover:text-brand-blue transition-all duration-500 ease-out transform ${activeMenu === "clinics" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: '200ms' }}>Godalming</Link>
            <Link href="/clinics/leeds" onClick={handleClose} className={`hover:text-brand-blue transition-all duration-500 ease-out transform ${activeMenu === "clinics" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: '300ms' }}>Leeds</Link>
            <Link href="/clinics/cambridge" onClick={handleClose} className={`hover:text-brand-blue transition-all duration-500 ease-out transform ${activeMenu === "clinics" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: '400ms' }}>Cambridge</Link>
            <Link href="/clinics/bristol" onClick={handleClose} className={`hover:text-brand-blue transition-all duration-500 ease-out transform ${activeMenu === "clinics" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: '500ms' }}>Bristol</Link>
            <Link href="/clinics/manchester" onClick={handleClose} className={`hover:text-brand-blue transition-all duration-500 ease-out transform ${activeMenu === "clinics" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: '600ms' }}>Manchester</Link>
          </div>
        )}

        {/* VIEW D: Referrers Sub-Menu */}
        {activeMenu === "referrers" && (
          <div className="flex flex-col space-y-6 text-xl font-body text-brand-dark">
            <button 
              onClick={() => setActiveMenu("main")} 
              className={`text-sm font-bold tracking-widest text-gray-500 hover:text-brand-blue text-left mb-4 uppercase transition-all duration-500 ease-out transform ${activeMenu === "referrers" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: '100ms' }}
            >
              Back
            </button>
            <Link href="/referrers/medico-legal" onClick={handleClose} className={`hover:text-brand-blue transition-all duration-500 ease-out transform ${activeMenu === "referrers" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: '200ms' }}>Medico-Legal Services</Link>
          </div>
        )}
      </div>

      {/* 3. FOOTER */}
      <div 
        className={`p-6 pb-10 mt-auto border-t border-brand-light bg-white transition-all duration-700 ease-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: '700ms' }}
      >
        <Link 
          href="/contact" 
          onClick={handleClose}
          className="flex items-center justify-center w-full gap-2 px-6 py-4 font-body text-sm font-medium tracking-wide uppercase border border-brand-blue text-brand-dark hover:bg-brand-blue hover:text-white transition-colors duration-300"
        >
          <span><ArrowRight className="w-4 h-4" /></span> 
          Contact Us
        </Link>
      </div>
    </div>
  );
}