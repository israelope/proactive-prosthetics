"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, X, ArrowRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "../ui/FadeIn";

// 1. The Mock Data (Based on your screenshot)
const teamMembers = [
  {
    id: 1,
    name: "Alan McDougall",
    role: "Clinical Director",
    location: "Godalming",
    image: "/images/kammy.png", // Replace with your actual image path
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
  },
  {
    id: 6,
    name: "Asad Khan",
    role: "Clinical Manager & Clinical Specialist Prosthetist",
    location: "Leeds",
    image: "/images/kammy.png",
    bio: "Asad manages the Leeds clinic, focusing on both upper and lower limb prosthetics and delivering patient-crafted care with a multidisciplinary approach."
  }
];

export default function Team() {
  // 2. The State: Tracks which member is currently selected in the pop-up (null means closed)
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

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

          {/* Slider Controls (Visual only for now) */}
          <div className="flex justify-end gap-4 mb-6">
            <button className="p-2 rounded-full border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* 3. The Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="group cursor-pointer" onClick={() => setSelectedMember(member)}>
                {/* Image Card */}
                <div className="relative h-72 md:h-80 w-full rounded-2xl overflow-hidden mb-4 shadow-sm">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Plus Icon (Top Right) */}
                  <div className="absolute top-4 right-4 bg-white rounded-full p-1.5 shadow-md">
                    <Plus className="w-4 h-4 text-brand-blue" />
                  </div>
                  {/* Location Overlay (Bottom Center) */}
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

      {/* 4. THE POP-UP MODAL ANIMATION */}
      <AnimatePresence>
        {selectedMember && (
          // The Dark Background Overlay
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)} // Close when clicking outside
          >
            {/* The White Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()} // Prevent clicking inside from closing it
            >
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-10 p-1 text-brand-blue hover:bg-brand-light rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image (Left side on desktop) */}
              <div className="relative w-full md:w-2/5 h-64 md:h-auto min-h-[300px]">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Modal Text Content (Right side on desktop) */}
              <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-center bg-white">
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