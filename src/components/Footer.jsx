import React from 'react';
import logo from '../assets/zuta logo mali.png'; 
import qr from '../assets/SVG/qr.svg';
import { MapPin, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-brand-dark text-brand-white flex flex-col items-center justify-between pt-[64px] pb-[24px] px-4 md:px-[65px] min-h-[500px]">
      
      {/* Upper Content Layer: Two-Column Flex Grid */}
      <div className="w-full max-w-[1310px] flex flex-col md:flex-row items-center justify-between gap-[48px] flex-grow">
        
        {/* MODIFIED LEFT SIDE: Two-column split for image and contact details */}
        <div className="w-full lg:w-[58%] flex flex-col sm:flex-row items-center gap-[32px]">
          
          {/* UPDATED: Added responsive vertical padding (py-4 md:py-6) to give the image container more Y-axis breathing room */}
          <div className="w-full sm:w-[45%] aspect-[3/4] bg-brand-dark rounded-[12px] overflow-hidden flex items-center justify-center relative shadow-inner flex-shrink-0 py-4 md:py-6">
            <img src={logo} alt="BEST Belgrade Course Logo" className="w-full h-full object-contain" />
          </div>

          {/* UPDATED: Increased vertical padding from py-2 to py-6 md:py-8 to expand margins on the y-axis */}
          <div className="w-full sm:w-[55%] flex flex-col gap-[20px] py-6 md:py-8">
            <h4 className="text-lg font-black font-sans tracking-wider text-brand-light uppercase border-b border-white/10 pb-2">
              Contact & Address
            </h4>
            
            <ul className="flex flex-col gap-[16px] text-sm md:text-base font-medium text-white/90">
              {/* Address Link */}
              <li className="flex items-start gap-[12px] group">
                <MapPin className="w-5 h-5 text-brand-light mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" strokeWidth={1.5} />
                <a 
                  href="https://maps.google.com/?q=University+of+Belgrade+Serbia" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand-light transition-colors duration-200 leading-snug"
                >
                  <strong className="block text-xs uppercase tracking-wider text-white/50 font-bold mb-0.5">Address</strong>
                  Karnegijeva 4,<br />11000 Belgrade, Serbia
                </a>
              </li>

              {/* Email Link */}
              <li className="flex items-start gap-[12px] group">
                <Mail className="w-5 h-5 text-brand-light mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" strokeWidth={1.5} />
                <a 
                  href="mailto:belgrade@best-eu.org" 
                  className="hover:text-brand-light transition-colors duration-200 break-all"
                >
                  <strong className="block text-xs uppercase tracking-wider text-white/50 font-bold mb-0.5">Email Us</strong>
                  belgrade@best-eu.org
                </a>
              </li>

              {/* Website Link */}
              <li className="flex items-start gap-[12px] group">
                <Globe className="w-5 h-5 text-brand-light mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" strokeWidth={1.5} />
                <a 
                  href="https://best.rs" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand-light transition-colors duration-200"
                >
                  <strong className="block text-xs uppercase tracking-wider text-white/50 font-bold mb-0.5">Official Website</strong>
                  www.best.rs
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Right Column: QR Code & Call To Action Stack */}
        <div className="w-full md:w-[40%] flex flex-col items-center text-center justify-center gap-[24px]">
          
          {/* QR Code Graphic Frame */}
          <div className="w-[140px] h-[140px] bg-white rounded-[4px] p-2 flex items-center justify-center shadow-lg border border-black/5">
            <img src={qr} alt="Instagram QR Code" className="w-full h-full object-contain" />
          </div>

          {/* Text Engagement Headers */}
          <div className="flex flex-col gap-[8px]">
            <h3 className="text-3xl md:text-4xl font-black font-sans tracking-tight text-white leading-tight">
              We're waiting for you<br />on Instagram!
            </h3>
            <p className="text-sm md:text-base font-medium text-white/70 italic">
              You can also visit the{' '}
              <a 
                href="https://instagram.com/best_belgrade" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline text-brand-light hover:text-white transition-colors duration-200 font-semibold not-italic"
              >
                link :)
              </a>
            </p>
          </div>

        </div>
      </div>

      {/* Footer Title Header Block */}
      <div className="w-full max-w-[1310px] select-none mt-16 md:mt-8">
        <h2 
          className="text-4xl sm:text-5xl md:text-[66px] font-[1000] font-sans tracking-tight text-brand-dark leading-none uppercase text-center md:text-left"
          style={{ 
            textAlignLast: window.innerWidth >= 768 ? 'justify' : 'center',
            textShadow: '1px 1px 0 rgba(255,255,255,0.1), -1px -1px 0 rgba(255,255,255,0.1), 1px -1px 0 rgba(255,255,255,0.1), -1px 1px 0 rgba(255,255,255,0.1)'
          }}
        >
          BEST SUMMER COURSE IN BELGRADE
        </h2>
      </div>

      {/* Decorative Separation Horizontal Divider Rule Line */}
      <div className="w-full max-w-[1310px] border-t border-white/10 mt-[8px] mb-[24px]" />

      {/* Lower Copyright Row */}
      <div className="text-center text-xs md:text-sm font-semibold tracking-wide text-white/50 font-sans">
        Copyright @ BEST Belgrade
      </div>

    </footer>
  );
}