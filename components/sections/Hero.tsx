import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function Hero() {
  return (
    <section className="px-4 pt-4 pb-12 md:px-4 md:pt-4 w-full  bg-white">
      <div className="relative h-[95vh] flex items-center justify-center overflow-hidden rounded-xl md:rounded-[1.5rem] shadow-lg">
        <div className="absolute inset-0 z-0 bg-brand-dark h-s">
          <Image
            src="/images/homebg.jpg"
            alt="Patient crafted care"
            fill
            className="object-cover brightness-85"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white pt-10">
          <FadeIn delay={0.2}>
            <p className="text-5xl md:text-7xl lg:text-8xl font-heading  mb-6 text-white tracking-tight">
              Patient Crafted Care
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-lg md:text-2xl font-body max-w-3xl mx-auto mb-10 text-gray-200 pb-20">
              Prosthetics, Orthotics and Rehabilitation that helps every patient
              reach their full potential.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <Link
              href="/contact"
              className="inline-block bg-transparent text-white hover:text-white  px-6 py-4  font-light uppercase tracking-wide text-sm hover:bg-brand-blue transition-colors duration-300 shadow-lg border-white border-2 "
            >
              Watch Video
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
