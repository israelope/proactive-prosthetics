"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ConsultationCTA() {
  return (
    // 1. The relative container that holds everything
    <section className="relative py-24 md:py-32 px-4 overflow-hidden flex items-center justify-center">
      
      {/* 2. Top-Left Decorative Shape */}
      <motion.div
        initial={{ opacity: 0, x: -50, y: -50 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 left-0 w-40 h-40 md:w-80 md:h-80 z-0 opacity-80"
      >
        <Image 
          src="/images/bookup.png" // Save your top-left shape with a transparent background!
          alt="" 
          fill 
          className="object-contain object-top object-left" 
        />
      </motion.div>

      {/* 3. Bottom-Right Decorative Shape */}
      <motion.div
        initial={{ opacity: 0, x: 50, y: 50 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-0 right-0 w-40 h-40 md:w-80 md:h-80 z-0 opacity-80"
      >
        <Image 
          src="/images/bookdown.png" // Save your bottom-right shape here!
          alt="" 
          fill 
          className="object-contain object-bottom object-right" 
        />
      </motion.div>

      {/* 4. The Main Card (The "Pop Out" Animation) */}
      <motion.div
        // Starts small (scale: 0.85) and slightly lower (y: 40)
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        // Pops to full size and original position
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        // The 'spring' type gives it that satisfying, bouncy pop-out feel
        transition={{ type: "spring", duration: 0.9, bounce: 0.3 }}
        
        // Notice the border-b-[12px] and border-[#69C9C9] - this creates the teal strip!
        className="relative z-10 w-full max-w-5xl bg-brand-blue rounded-3xl md:rounded-[2.5rem] border-b-[12px] md:border-b-[16px] border-[#69C9C9] px-6 py-16 md:py-24 text-center shadow-2xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-white mb-6">
          Book a consultation
        </h2>
        
        <p className="text-lg md:text-xl text-brand-light font-body mb-10 max-w-2xl mx-auto">
          Whether you’re a patient, referrer or professional partner,
          our team is here to help.
        </p>
        
        <Link 
          href="/contact"
          className="inline-flex items-center gap-2 text-sm md:text-base font-bold uppercase tracking-widest text-[#69C9C9] hover:text-white transition-colors duration-300"
        >
          <span><ArrowRight className="w-4 h-4 md:w-5 md:h-5" /></span>
          Find out more
        </Link>
      </motion.div>

    </section>
  );
}