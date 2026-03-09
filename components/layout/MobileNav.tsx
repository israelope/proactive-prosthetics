import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function Hero() {
  return (
    // 1. The Outer Wrapper: Adds the white gap around the edges (px = horizontal, pt = top)
    <section className="px-4 pt-4 pb-12 md:px-6 md:pt-6 w-full bg-white">
      
      {/* 2. The "Floating" Card: Rounded corners (rounded-[2rem]) clip the image inside */}
      <div className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden rounded-3xl md:rounded-[2.5rem] shadow-lg">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-brand-dark">
          {/* Make sure the src matches your exact file name in the public folder! */}
          <Image
            src="/images/hero-bg.jpg" 
            alt="Patient crafted care"
            fill
            className="object-cover opacity-60" 
            priority 
          />
        </div>

        {/* Text Content */}
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
              className="inline-block bg-transparent border border-white text-white px-10 py-4 rounded-full font-heading font-bold uppercase tracking-wide text-sm hover:bg-white hover:text-brand-dark transition-colors duration-300"
            >
              Watch Video
            </Link>
          </FadeIn>
        </div>
        
      </div>
    </section>
  );
}