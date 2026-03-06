import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 font-body">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Column 1: Brand & Contact Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              {/* Using the white logo for the dark background */}
              <Image
                src="/icons/proactive-logo-light.png"
                alt="Proactive Prosthetics"
                width={200}
                height={55}
                className="w-auto h-10"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Patient Crafted Care. Prosthetics, Orthotics and Rehabilitation that helps every patient reach their full potential.
            </p>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-blue shrink-0" />
                <span>Proactive, Innovation Place<br />Douglas Drive, Godalming<br />GU7 1JX</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-blue shrink-0" />
                <span>+44 (0) 1252 702 500</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-blue shrink-0" />
                <a href="mailto:clinic@proactiveprosthetics.co.uk" className="hover:text-white transition-colors">
                  clinic@proactiveprosthetics.co.uk
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Treatments */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-6 text-white">Treatments</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/treatments/prosthetics" className="hover:text-brand-blue transition-colors">Prosthetics</Link></li>
              <li><Link href="/treatments/orthotics" className="hover:text-brand-blue transition-colors">Orthotics</Link></li>
              <li><Link href="/treatments/rehabilitation" className="hover:text-brand-blue transition-colors">Rehabilitation</Link></li>
            </ul>
          </div>

          {/* Column 3: Clinics */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-6 text-white">Clinics</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/clinics/godalming" className="hover:text-brand-blue transition-colors">Godalming</Link></li>
              <li><Link href="/clinics/leeds" className="hover:text-brand-blue transition-colors">Leeds</Link></li>
              <li><Link href="/clinics/cambridge" className="hover:text-brand-blue transition-colors">Cambridge</Link></li>
              <li><Link href="/clinics/bristol" className="hover:text-brand-blue transition-colors">Bristol</Link></li>
              <li><Link href="/clinics/manchester" className="hover:text-brand-blue transition-colors">Manchester</Link></li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-6 text-white">About</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-brand-blue transition-colors">About Us</Link></li>
              <li><Link href="/stories" className="hover:text-brand-blue transition-colors">Stories</Link></li>
              <li><Link href="/referrers" className="hover:text-brand-blue transition-colors">Referrers</Link></li>
              <li><Link href="/academy" className="hover:text-brand-blue transition-colors">Proactive Academy</Link></li>
              <li><Link href="/contact" className="hover:text-brand-blue transition-colors">Contact Us</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Border & Copyright Section */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            ©{currentYear} Proactive Prosthetics Ltd. | All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-2 text-xs text-gray-500">
             <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
             <span>|</span>
             <Link href="/faqs" className="hover:text-white transition-colors">FAQs</Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-gray-400">
            <a href="#" className="hover:text-brand-blue transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-brand-blue transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-brand-blue transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}