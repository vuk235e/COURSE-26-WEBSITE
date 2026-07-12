import React from 'react';

// Replace these placeholders with your actual company logo assets
import logo1 from '../assets/partners/nis.png';
import logo2 from '../assets/partners/Knjaz-Milos.png';

export default function SponsorSection() {
  return (
    <div className="w-full bg-brand-white px-4 sm:px-6 md:px-[65px] py-16 flex flex-col items-center justify-center">
      
      {/* Added H2 Header */}
      <h2 className="text-5xl md:text-5xl font-[1000] font-sans text-brand-dark tracking-tight uppercase leading-[1.1] text-center mb-10">
        PROJECT PARTNERS
      </h2>

      {/* Full-width container with brand-peach background */}
      <div className="w-full max-w-[1310px] bg-brand-peach border-[4px] border-brand-dark rounded-[16px] md:rounded-[24px] px-3 py-6 sm:px-6 sm:py-8 md:p-16 flex items-center justify-center gap-4 sm:gap-6 md:gap-10 shadow-[8px_8px_0px_#1c1c1c]">
        
        {/* Centered Logo Frames */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-10 flex-wrap w-full">
          
          {/* Logo Frame 1 */}
          <div className="w-[calc(50%-8px)] sm:w-[calc(50%-12px)] md:w-[240px] h-[110px] sm:h-[130px] md:h-[150px] bg-brand-white rounded-[16px] p-2 md:p-1 flex items-center justify-center hover:translate-y-[-2px] transition-all duration-200 select-none">
            <img 
              src={logo1} 
              alt="Sponsor Logo 1" 
              className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              onError={(e) => { e.target.style.display = 'none'; }} 
            />
            
          </div>

          {/* Logo Frame 2 */}
          <div className="w-[calc(50%-8px)] sm:w-[calc(50%-12px)] md:w-[240px] h-[110px] sm:h-[130px] md:h-[150px] bg-brand-white rounded-[16px] p-2 md:p-1 flex items-center justify-center hover:translate-y-[-2px] transition-all duration-200 select-none">
            <img 
              src={logo2} 
              alt="Sponsor Logo 2" 
              className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
           
          </div>

        </div>

      </div>
    </div>
  );
}

