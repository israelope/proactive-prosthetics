import React from "react";

const page = () => {
  return (
    <main className="p-10 space-y-8 bg-white min-h-screen">
      {/* 1. BRAND HEADING TEST */}
      <h1 className="text-6xl text-center">
        This is a Proactive Heading
      </h1>

      {/* 2. BRAND BODY TEST */}
      <p className="text-center text-xl text-brand-grey font-body">
        This is the body text using the Outfit font.
      </p>

      {/* 3. BRAND COLORS TEST */}
      <div className="flex flex-col items-center gap-4">
        <button className="bg-brand-blue text-white px-8 py-3 rounded-lg font-heading hover:opacity-90 transition-all">
          Book a Consultation
        </button>

        <button className="bg-brand-light text-brand-blue px-8 py-3 rounded-full font-heading border border-brand-blue">
          Secondary Action Button
        </button>
        <p className="bg-brand-grey font-">This is a test</p>
      </div>
    </main>
  );
};

export default page;