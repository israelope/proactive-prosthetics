import React from "react";
import Image from "next/image";
import FadeIn from "../ui/FadeIn";
import ServiceCard from "../ui/ServiceCard";

const Treatment = () => {
  return (
    <FadeIn>
      <main className="px-4 py-10 lg:px-25 lg:py-15">
        <div className="px-0 lg:px-30">
          <p className="text-3xl md:text-4xl lg:text-5xl w-full lg:w-3/4 text-brand-light leading-tight py-12 lg:py-30">
            At Proactive, everything we do is shaped around our patients. We
            combine world-class clinical expertise with inputs from our patients
            to deliver Patient Crafted Care that helps them move forward with
            confidence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[450px]">
              <Image
                src="/images/our.jpg"
                alt="Prosthetic specialist drawing on a socket"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
            <div className="flex flex-col space-y-4 lg:space-y-6">
              <h2 className="text-5xl md:text-4xl lg:text-[4em]  text-brand-light  tracking-tight">
                Our treatments
              </h2>

              <p className="text-base lg:text-[1.2em] text-brand-dark font-body leading-relaxed">
                Our treatments are designed to help people reclaim independence
                through advanced Prosthetics, Orthotics and Rehabilitation.
              </p>

              <p className="text-base lg:text-[1.2em] text-brand-dark font-body leading-relaxed">
                From initial assessment through to long-term support, we take a
                joined-up, proactive approach that brings together prosthetists,
                orthotists, physiotherapists and rehabilitation specialists to
                deliver care that adapts to patients needs as they progress.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 py-10 pt-40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              title="Prosthetics"
              description="From everyday mobility to high-performance and specialist prosthetic care, we offer advanced lower and upper limb prosthetics that are designed to restore independence and confidence."
              imageSrc="/images/prosthetics.jpg"
              href="/treatments/prosthetics"
            />

            <ServiceCard
              title="Orthotics"
              description="We offer custom orthotic solutions, includingg 3D-printed devices, pain-relieving orthoses and advanced bracing, to improve comfort, stability and movement for our patients."
              imageSrc="/images/orthotics.jpg"
              href="/treatments/orthotics"
            />

            <ServiceCard
              title="Rehabilitation"
              description="We deliver flexible rehabilitation programmes in clinics and in the community that support recovery in real-world settings and help our patients get back to achieving their goals."
              imageSrc="/images/rehabilitation.jpg"
              href="/treatments/rehabilitation"
            />
          </div>
        </div>
      </main>
    </FadeIn>
  );
};

export default Treatment;
