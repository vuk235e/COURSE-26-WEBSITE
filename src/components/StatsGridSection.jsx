import React from "react";

import photo1 from "../assets/stats/classroom2.jpg";
import photo2 from "../assets/stats/pyramid.jpg";

export default function StatsGridSection() {
  // Helper function to calculate the precise remaining days until August 8th, 2026
  const getDaysLeft = () => {
    const targetDate = new Date("2026-08-08T00:00:00");
    const today = new Date();

    // Reset hours to get an accurate day-to-day conversion
    targetDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const differenceInTime = targetDate.getTime() - today.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

    // Return 0 if the date has already arrived/passed
    return differenceInDays > 0 ? differenceInDays : 0;
  };

  const cards = [
    {
      type: "text",
      number: "20+",
      title: "SUMMER COURSES",
      desc: "Spend your best summer yet by learning, exploring, meeting people from around the world, and creating memories that will last a lifetime.",
      bgColor: "bg-brand-light",
      rotateClass: "-rotate-3 hover:-rotate-1",
    },
    {
      type: "image",
      imgSrc: photo1,
      alt: "BEST Belgrade Course Fun 1",
      bgColor: "bg-brand-purple",
      rotateClass: "rotate-2 hover:rotate-4",
    },
    {
      type: "text",
      number: `Less than ${getDaysLeft()}`,
      title: "DAYS",
      desc: (
        <>
          Left until 2026 BEST Belgrade
          <br />
          Summer course
        </>
      ),
      bgColor: "bg-brand-purple",
      rotateClass: "-rotate-2 hover:rotate-0",
    },
    {
      type: "image",
      imgSrc: photo2,
      alt: "BEST Belgrade Course Fun 2",
      bgColor: "bg-brand-light",
      rotateClass: "rotate-3 hover:rotate-5",
    },
  ];

  return (
    <div className="w-full bg-brand-white py-20 flex flex-col items-center justify-center overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-6 justify-items-center items-center max-w-[1440px] px-[65px] w-full">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`
              /* Exact dimensions requested */
              w-[340px] h-[415px] 
              ${card.bgColor} 
              border-[4px] border-brand-dark 
              rounded-[24px] 
              shadow-[8px_8px_0px_#1c1c1c] 
              relative 
              flex flex-col justify-between 
              p-8
              transition-all duration-300 ease-out
              ${card.rotateClass}
            `}
          >
            {card.type === "text" ? (
              <>
                <div className="flex flex-col items-start">
                  <h3 className="text-4xl md:text-[44px] font-[1000] font-sans text-brand-dark tracking-tight uppercase leading-[1.1]">
                    {card.number}
                  </h3>
                </div>

                {/* Bottom Text Content Block matching wireframe typography layout */}
                <div className="flex flex-col items-start gap-2 w-full">
                  <h4 className="text-2xl font-[900] font-sans text-brand-dark uppercase tracking-tight border-b-2 border-brand-dark/20 pb-1 w-full">
                    {card.title}
                  </h4>
                  <p className="text-sm font-semibold text-brand-dark/80 leading-snug">
                    {card.desc}
                  </p>
                </div>
              </>
            ) : (
              /* Image Card Wrapper - Fills card frame beautifully with exact neo-brutalist borders intact */
              <div className="absolute inset-0 w-full h-full p-2">
                <img
                  src={card.imgSrc}
                  alt={card.alt}
                  className="w-full h-full object-cover rounded-[16px] border-2 border-brand-dark/10"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
