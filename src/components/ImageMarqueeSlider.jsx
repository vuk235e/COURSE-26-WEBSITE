import React from "react";

import image1 from "../assets/slider/class2.jpg";
import image2 from "../assets/slider/classroom.webp";
import image3 from "../assets/slider/group ada 2.jpg";
import image4 from "../assets/slider/group spomenik.jpg";
import image6 from "../assets/slider/int srb.jpg";
import image5 from "../assets/slider/predavaci.webp";

export default function ImageMarqueeSlider({ speed = 25 }) {
  const images = [image1, image2, image3, image4, image5, image6];

  // Programmatically duplicate the array to guarantee a seamless, gapless track loop
  const seamlessImages = [...images, ...images];

  // Specific variations to create an organic, mismatched collage layout
  const designVariations = [
    { rotate: "-4deg", size: "w-[280px] h-[280px]" },
    { rotate: "5deg", size: "w-[340px] h-[340px]" },
    { rotate: "-3deg", size: "w-[400px] h-[400px]" },
    { rotate: "6deg", size: "w-[360px] h-[360px]" },
    { rotate: "-5deg", size: "w-[290px] h-[290px]" },
    { rotate: "4deg", size: "w-[390px] h-[390px]" },
  ];

  return (
    /* FIX: Changed w-full to w-screen, left-1/2, and -translate-x-1/2.
      This forces the div to ignore the 1440px hero container and stretch edge-to-edge.
    */
    <div
      className="relative left-1/2 -translate-x-1/2 w-screen h-[480px] bg-brand-light flex items-center overflow-hidden select-none"
      style={{ "--marquee-speed": `${speed}s` }}
    >
      {/* Dynamic Marquee Running Track */}
      <div className="flex items-center gap-[8px] animate-image-track whitespace-nowrap pl-[14px]">
        {seamlessImages.map((imgSrc, index) => {
          // Cycle through sizes and rotations smoothly
          const variant = designVariations[index % designVariations.length];

          return (
            <div
              key={index}
              style={{ transform: `rotate(${variant.rotate})` }}
              className={`
                inline-block
                ${variant.size}
                aspect-square
                bg-brand-white
                rounded-[8px]
                border-[4px] border-brand-dark
                shadow-[0_8px_20px_rgba(0,0,0,0.15)]
                hover:shadow-[0_16px_32px_rgba(0,0,0,0.25)]
                hover:scale-105
                hover:z-50
                transition-all duration-300 ease-out
                flex-shrink-0
                overflow-hidden
              `}
            >
              {imgSrc ? (
                <img
                  src={imgSrc}
                  alt={`Marquee item ${index}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              ) : (
                /* Temporary gray background skeleton placeholder if your array is empty */
                <div className="w-full h-full bg-black/10 flex items-center justify-center text-xs font-bold text-brand-dark/40 uppercase">
                  Asset Missing
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
