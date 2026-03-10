"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Plus, X, ArrowRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "../ui/FadeIn";

const teamMembers = [
  {
    id: 1,
    name: "Alan McDougall",
    role: "Clinical Director",
    location: "Godalming",
    image: "/images/kammy.png", 
    bio: "Alan brings decades of experience to the clinical team, overseeing all prosthetic and orthotic care to ensure the highest standards for our patients."
  },
  {
    id: 2,
    name: "Katy McIntosh",
    role: "Clinical Manager & Clinical Specialist Prosthetist",
    location: "Bristol",
    image: "/images/kammy.png",
    bio: "Katy specializes in advanced lower limb prosthetics, helping patients achieve their mobility goals through tailored rehabilitation programs."
  },
  {
    id: 3,
    name: "Jamie Gillespie",
    role: "Clinical Manager & Clinical Specialist Prosthetist",
    location: "Cambridge",
    image: "/images/kammy.png",
    bio: "Jamie leads the Cambridge clinic while providing specialist prosthetic care, supporting patients through rehabilitation with tailored prosthetic solutions and coordinated care."
  },
  {
    id: 4,
    name: "Asad Khan",
    role: "Clinical Manager & Clinical Specialist Prosthetist",
    location: "Leeds",
    image: "/images/kammy.png",
    bio: "Asad manages the Leeds clinic, focusing on both upper and lower limb prosthetics and delivering patient-crafted care with a multidisciplinary approach."
  },
  {
    id: 5,
    name: "Asad Khan",
    role: "Clinical Manager & Clinical Specialist Prosthetist",
    location: "Leeds",
    image: "/images/kammy.png",
    bio: "Asad manages the Leeds clinic, focusing on both upper and lower limb prosthetics and delivering patient-crafted care with a multidisciplinary approach."
  }

  
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);
  
  // 1. Create a reference to the slider container
  const sliderRef = useRef<HTMLDivElement>(null);

  // 2. The function to handle the arrow clicks
  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      // Find the width of one card + the gap to know exactly how far to slide
      const cardWidth = sliderRef.current.firstElementChild?.clientWidth || 300;
      const gap = 24; // This matches our 'gap-6' Tailwind class (which is 24px)
      const scrollAmount = direction === "left" ? -(cardWidth + gap) : (cardWidth + gap);
      
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-[#F8FDFD] overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <FadeIn>
          
          {/* Top Toggle & Text */}
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex inline-flex bg-white rounded-md shadow-sm border border-brand-light mb-8 overflow-hidden">
              <button className="px-8 py-3 bg-brand-blue text-white font-medium text-sm">
                Meet the team
              </button>
              <button className="px-8 py-3 text-brand-blue font-medium text-sm hover:bg-brand-light transition-colors">
                About Us
              </button>
            </div>
            <p className="max-w-3xl text-lg text-brand-dark font-body leading-relaxed">
              Our multidisciplinary team brings together leading prosthetists, orthotists, 
              physiotherapists and rehabilitation specialists who are united by a shared 
              commitment to delivering exceptional, patient crafted care.
            </p>
          </div>

          {/* 3. The Arrow Controls */}
          <div className="flex justify-end gap-4 mb-6">
            <button 
              onClick={() => scroll("left")}
              className="p-2 rounded-full border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
              aria-label="Previous team member"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="p-2 rounded-full border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
              aria-label="Next team member"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* 4. The Slider Container */}
          <div 
            ref={sliderRef}
            // These classes hide the scrollbar but keep the functionality, and enable snapping
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                // w-[85%] on mobile ensures they see the edge of the next card, hinting they can swipe!
                className="group cursor-pointer flex-none w-[85%] sm:w-[45%] lg:w-[calc(25%-18px)] snap-start" 
                onClick={() => setSelectedMember(member)}
              >
                {/* Image Card */}
                <div className="relative h-72 md:h-80 w-full rounded-2xl overflow-hidden mb-4 shadow-sm">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full p-1.5 shadow-md">
                    <Plus className="w-4 h-4 text-brand-blue" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 pb-4 pt-12 bg-gradient-to-t from-black/80 to-transparent flex justify-center items-end">
                    <span className="text-white font-medium text-lg tracking-wide">{member.location}</span>
                  </div>
                </div>
                {/* Text Info */}
                <div>
                  <h3 className="text-2xl font-heading text-brand-blue mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-500 font-body pr-4">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

        </FadeIn>
      </div>

      {/* THE POP-UP MODAL */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)} 
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()} 
            >
              
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-10 p-1 text-brand-blue hover:bg-brand-light rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Fixed Padded Image for Modal */}
              <div className="w-full md:w-2/5 p-6 md:p-8 md:pr-0 flex items-center">
                <div className="relative w-full aspect-square md:h-full md:min-h-[280px] rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Modal Text */}
              <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center bg-white">
                <h3 className="text-3xl md:text-4xl font-heading text-brand-blue mb-2">
                  {selectedMember.name}
                </h3>
                <p className="text-[#8B98C2] font-body text-sm mb-6 leading-relaxed">
                  {selectedMember.role},<br />{selectedMember.location}
                </p>
                <p className="text-brand-dark font-body leading-relaxed">
                  {selectedMember.bio}
                </p>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}