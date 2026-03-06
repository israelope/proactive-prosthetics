import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function Hero() {
  return (
    // The h-[90vh] makes it take up 90% of the screen height
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* 1. Background Image */}
      <div className="absolute inset-0 z-0 bg-brand-dark">
        {/* Replace 'hero-bg.jpg' with the actual name of the image you downloaded! */}
        <Image
          src="/images/homebg.jpg" 
          alt="Patient crafted care"
          fill
          className="object-cover opacity-60" // The opacity darkens it so white text pops
          priority // Tells Next.js to load this instantly
        />
      </div>

      {/* 2. Text Content */}
      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 tracking-tight">
            Patient Crafted Care
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <p className="text-lg md:text-2xl font-body max-w-3xl mx-auto mb-10 text-gray-200">
            Prosthetics, Orthotics and Rehabilitation that helps every patient reach their full potential.
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <Link
            href="/contact"
            className="inline-block bg-brand-blue text-white px-10 py-4 rounded-full font-heading font-bold uppercase tracking-wide text-sm hover:bg-white hover:text-brand-blue transition-colors duration-300 shadow-lg"
          >
            Watch Video
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}