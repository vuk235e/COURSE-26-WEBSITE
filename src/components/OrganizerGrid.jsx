import React, { useState } from 'react';
import { Mail, Phone, Globe } from 'lucide-react';

import img1 from '../assets/ct/mo.jpeg';
import img2 from '../assets/ct/ar.jpeg';

export default function OrganizerGrid() {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const organizers = [
    { position: 'MO', name: 'Milica Kovačević', email: 'mo@best.rs', phone: '+381 64 123 4567', linkedin: 'https://www.linkedin.com/in/kovacevicmm/', color: 'bg-brand-peach', img: img1 },
    { position: 'PAX', name: 'Ana Antić', email: 'pax@best.rs', phone: '+381 64 234 5678', linkedin: '#', color: 'bg-brand-purple', img: img2 },
    { position: 'PR', name: 'Marko Marković', email: 'pr@best.rs', phone: '+381 64 345 6789', linkedin: '#', color: 'bg-brand-light', img: img1 },
    { position: 'PUB', name: 'Vuk Bojanić', email: 'pub@best.rs', phone: '+381 64 456 7890', linkedin: '#', color: 'bg-brand-mint', img: img2 },
    { position: 'FR', name: 'Jovana Jovanić', email: 'fr@best.rs', phone: '+381 64 567 8901', linkedin: '#', color: 'bg-brand-peach', img: img1 },
    { position: 'LOG', name: 'Stefan Stefanović', email: 'log@best.rs', phone: '+381 64 678 9012', linkedin: '#', color: 'bg-brand-purple', img: img2 },
    { position: 'AC', name: 'Milica Milić', email: 'ac@best.rs', phone: '+381 64 789 0123', linkedin: '#', color: 'bg-brand-light', img: img1 },
    { position: 'SOC', name: 'Luka Lukić', email: 'soc@best.rs', phone: '+381 64 890 1234', linkedin: '#', color: 'bg-brand-mint', img: img2 },
  ];

  return (
    <div className="w-full bg-brand-white py-16 flex flex-col items-center justify-center">
      
          <h2 className="text-5xl md:text-5xl font-[1000] font-sans text-brand-dark tracking-tight uppercase leading-[1.1] text-center mb-6">
            Meet the Organizers </h2> 
        <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-[65px] flex flex-col items-start justify-center gap-6">
            <h3 className="text-base md:text-lg font-[1000] font-sans text-brand-dark tracking-tight uppercase leading-[1.1] text-center mb-2">
            click to flip </h3> 
        </div>
      {/* Responsive Engine */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 justify-items-center items-center max-w-[1440px] px-4 sm:px-6 md:px-[65px] w-full">
        
        {organizers.map((person, idx) => {
          const isFlipped = !!flippedCards[idx];

          return (
            <div
              key={idx}
              onClick={() => toggleFlip(idx)}
              /* UPDATED: Upscaled to a comfortable 270x330px mid-size */
              className="w-[270px] h-[330px] cursor-pointer"
              style={{ perspective: '1000px' }}
            >
              {/* Card Inner Wrapper */}
              <div
                className="relative w-full h-full transition-transform duration-700 ease-in-out"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                
                {/* ==========================================
                    FRONT SIDE: Organizer Image & Position Tag
                    ========================================== */}
                <div 
                  className="absolute inset-0 w-full h-full bg-brand-white border-[4px] border-brand-dark rounded-[18px] overflow-hidden flex items-center justify-center p-1.5 select-none"
                  style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                >
                  <img
                    src={person.img}
                    alt={`${person.name} - ${person.position}`}
                    className="w-full h-full object-cover rounded-[12px]"
                  />

                  {/* Lower Left Corner Dynamic Badge */}
                  <div className={`absolute bottom-3.5 left-3.5 w-[42px] h-[42px] rounded-full border-2 border-brand-dark flex items-center justify-center font-black text-xs text-brand-dark ${person.color}`}>
                    {person.position}
                  </div>
                </div>

                {/* ==========================================
                    BACK SIDE: Contact Information
                    ========================================== */}
                <div 
                  className="absolute inset-0 w-full h-full bg-brand-light border-[4px] border-brand-dark rounded-[18px] p-5 flex flex-col justify-between items-start"
                  style={{ 
                    backfaceVisibility: 'hidden', 
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)' 
                  }}
                >
                  {/* Top Block: Name & Role Badge */}
                  <div className="w-full flex flex-col gap-1">
                    <div className="flex justify-between items-center w-full">
                      <span className={`px-2.5 py-0.5 rounded-full border border-brand-dark text-[9px] font-black uppercase tracking-wider ${person.color}`}>
                        {person.position}
                      </span>
                      <span className="text-[9px] font-bold text-brand-dark/40 uppercase">Back</span>
                    </div>
                    <h4 className="text-lg font-[1000] font-sans text-brand-dark uppercase tracking-tight mt-1 border-b-2 border-brand-dark pb-1 w-full truncate">
                      {person.name}
                    </h4>
                  </div>

                  {/* Middle Block: Credentials List */}
                  <div className="flex flex-col gap-2.5 w-full font-sans text-brand-dark font-bold text-xs">
                    <a 
                      href={`mailto:${person.email}`} 
                      onClick={(e) => e.stopPropagation()} 
                      className="flex items-center gap-2.5 hover:text-brand-purple transition-colors break-all"
                    >
                      <Mail className="w-4 h-4 flex-shrink-0" strokeWidth={2.5} />
                      <span className="font-medium text-brand-dark/80 truncate">{person.email}</span>
                    </a>
                    
                    <a 
                      href={`tel:${person.phone}`} 
                      onClick={(e) => e.stopPropagation()} 
                      className="flex items-center gap-2.5 hover:text-brand-purple transition-colors"
                    >
                      <Phone className="w-4 h-4 flex-shrink-0" strokeWidth={2.5} />
                      <span className="font-medium text-brand-dark/80">{person.phone}</span>
                    </a>
                  </div>

                  {/* Bottom Block: Fixed Anchor Action */}
                  <div className="w-full pt-1.5">
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full h-[38px] bg-brand-dark text-brand-white rounded-md flex items-center justify-center gap-1.5 font-black uppercase tracking-wider text-[11px] border border-brand-dark hover:bg-brand-white hover:text-brand-dark transition-colors duration-200"
                    >
                      <Globe className="w-3.5 h-3.5 stroke-[2.5]" />
                      Connect
                    </a>
                  </div>

                </div>

              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}