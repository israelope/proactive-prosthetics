import React from "react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "../ui/FadeIn";
import { ArrowRight } from "lucide-react";

// We store the clinic data in an array so it's easy to render the bottom row
const clinicLocations = [
  { name: "Godalming", image: "/images/clinic/godalming.jpg", href: "/clinics/godalming" },
  { name: "Leeds", image: "/images/clinic/leeds.jpg", href: "/clinics/leeds" },
  { name: "Cambridge", image: "/images/clinic/cambridge.jpg", href: "/clinics/cambridge" },
  { name: "Bristol", image: "/images/clinic/bristol.jpg", href: "/clinics/bristol" },
  { name: "Manchester", image: "/images/clinic/manchester.jpg", href: "/clinics/manchester" },
];

export default function Clinics() {
  return (
    <section className="py-20 px-4 md:px-8 container mx-auto max-w-7xl">
      <FadeIn>
        
        {/* TOP SECTION: Text and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          
          {/* Left Column: Text & Buttons */}
          <div className="flex flex-col space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-heading font-medium text-brand-blue mb-6 tracking-tight">
                Our clinics
              </h2>
              <p className="text-lg text-brand-dark font-body leading-relaxed mb-6">
                From North to South, East to West, we have clinics across the UK
                so more patients can access expert care, wherever they are.
              </p>
              
              <Link 
                href="/clinics" 
                className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-[#4BB3B7] hover:opacity-70 transition-opacity"
              >
                <span><ArrowRight className="w-4 h-4" /></span>
                Explore Our Clinics
              </Link>
            </div>

            {/* Divider Line */}
            <div className="w-full h-px bg-gray-200"></div>

            {/* Featured Clinic (Godalming) */}
            <div>
              <h3 className="text-3xl font-heading font-medium text-brand-blue mb-4">
                Godalming
              </h3>
              <p className="text-brand-dark font-body leading-relaxed mb-6">
                Innovation Place,<br />
                Douglas Dr,<br />
                Godalming GU7 1JX
              </p>
              <Link 
                href="/clinics/godalming"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#4BB3B7] text-[#4BB3B7] text-sm font-medium uppercase tracking-widest hover:bg-[#4BB3B7] hover:text-white transition-all duration-300"
              >
                <span><ArrowRight className="w-4 h-4" /></span>
                Find out about Godalming
              </Link>
            </div>
          </div>

          {/* Right Column: The UK Map */}
          {/* We use relative positioning here so Next.js Image fill works correctly */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              src="/images/map.png" // Make sure to save their map image here!
              alt="Map of UK showing clinic locations"
              fill
              className="object-contain object-right"
            />
          </div>

        </div>

        {/* BOTTOM SECTION: 5-Column Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {clinicLocations.map((clinic, index) => (
            <Link 
              key={index} 
              href={clinic.href}
              className="group relative h-48 md:h-64 w-full block rounded-xl overflow-hidden shadow-sm"
            >
              {/* Background Image */}
              <Image
                src={clinic.image}
                alt={`${clinic.name} clinic`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Dark Gradient Overlay (so the white text is readable) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
              
              {/* Clinic Name */}
              <h4 className="absolute bottom-4 left-4 text-white text-xl md:text-2xl font-heading font-medium z-10">
                {clinic.name}
              </h4>
            </Link>
          ))}
        </div>

      </FadeIn>
    </section>
  );
}