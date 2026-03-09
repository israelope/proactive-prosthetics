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
    setTimeout(() => setActiveMenu("main"), 300);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] bg-white transform transition-transform duration-300 ease-in-out flex flex-col ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* 1. Header Area (Logo & Close Button) */}
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
        <button onClick={handleClose} className="p-2 text-brand-dark hover:text-brand-blue">
          <X className="w-8 h-8" strokeWidth={1.5} />
        </button>
      </div>

      {/* 2. Scrollable Menu Content */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        
        {/* VIEW A: The Main Menu */}
        {activeMenu === "main" && (
          <nav className="flex flex-col space-y-6 text-xl font-body text-brand-dark">
            <Link href="/about" onClick={handleClose} className="hover:text-brand-blue transition-colors">
              About
            </Link>
            
            <button onClick={() => setActiveMenu("treatments")} className="flex items-center justify-between hover:text-brand-blue transition-colors text-left w-full">
              Treatments <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            
            <button onClick={() => setActiveMenu("clinics")} className="flex items-center justify-between hover:text-brand-blue transition-colors text-left w-full">
              Clinics <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <Link href="/stories" onClick={handleClose} className="hover:text-brand-blue transition-colors">
              Stories
            </Link>

            <button onClick={() => setActiveMenu("referrers")} className="flex items-center justify-between hover:text-brand-blue transition-colors text-left w-full">
              Referrers <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <Link href="/academy" onClick={handleClose} className="hover:text-brand-blue transition-colors">
              Academy
            </Link>
          </nav>
        )}

        {/* VIEW B: Treatments Sub-Menu */}
        {activeMenu === "treatments" && (
          <div className="flex flex-col space-y-6 text-xl font-body text-brand-dark">
            <button 
              onClick={() => setActiveMenu("main")} 
              className="text-sm font-bold tracking-widest text-gray-500 hover:text-brand-blue text-left mb-4 uppercase"
            >
              Back
            </button>
            <Link href="/treatments/prosthetics" onClick={handleClose} className="hover:text-brand-blue transition-colors">Prosthetics</Link>
            <Link href="/treatments/orthotics" onClick={handleClose} className="hover:text-brand-blue transition-colors">Orthotics</Link>
            <Link href="/treatments/rehabilitation" onClick={handleClose} className="hover:text-brand-blue transition-colors">Rehabilitation</Link>
          </div>
        )}

        {/* VIEW C: Clinics Sub-Menu */}
        {activeMenu === "clinics" && (
          <div className="flex flex-col space-y-6 text-xl font-body text-brand-dark">
            <button 
              onClick={() => setActiveMenu("main")} 
              className="text-sm font-bold tracking-widest text-gray-500 hover:text-brand-blue text-left mb-4 uppercase"
            >
              Back
            </button>
            <Link href="/clinics/godalming" onClick={handleClose} className="hover:text-brand-blue transition-colors">Godalming</Link>
            <Link href="/clinics/leeds" onClick={handleClose} className="hover:text-brand-blue transition-colors">Leeds</Link>
            <Link href="/clinics/cambridge" onClick={handleClose} className="hover:text-brand-blue transition-colors">Cambridge</Link>
            <Link href="/clinics/bristol" onClick={handleClose} className="hover:text-brand-blue transition-colors">Bristol</Link>
            <Link href="/clinics/manchester" onClick={handleClose} className="hover:text-brand-blue transition-colors">Manchester</Link>
          </div>
        )}

        {/* VIEW D: Referrers Sub-Menu */}
        {activeMenu === "referrers" && (
          <div className="flex flex-col space-y-6 text-xl font-body text-brand-dark">
            <button 
              onClick={() => setActiveMenu("main")} 
              className="text-sm font-bold tracking-widest text-gray-500 hover:text-brand-blue text-left mb-4 uppercase"
            >
              Back
            </button>
            <Link href="/referrers/medico-legal" onClick={handleClose} className="hover:text-brand-blue transition-colors">Medico-Legal Services</Link>
          </div>
        )}
      </div>

      {/* 3. Sticky Footer Area (Contact Button) */}
      <div className="p-6 pb-10 mt-auto border-t border-brand-light bg-white">
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