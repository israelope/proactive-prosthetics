import type { Metadata } from "next";
import { Montserrat, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar"; // <-- 1. Import it here
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["700", "800"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Proactive Prosthetics | Patient Crafted Care",
  description: "Prosthetics, Orthotics and Rehabilitation from Proactive Prosthetics.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${outfit.variable}`}>
      <body className="antialiased font-body flex flex-col min-h-screen">
        
        <Navbar />
        <Footer/> 
        
        <main className="flex-grow">
          {children}
        </main>
        
      </body>
    </html>
  );
}