import React from "react";
import Header from "./Header";
import ItemButtonDark from "./ItemButtonDark";
import Marquee from "./marquee";
import Logotip from "../assets/Copy of LOGOTIP-12.png";
import BadgeButton from "./BadgeButton";
import ImageMarqueeSlider from "./ImageMarqueeSlider";
import Raspored from "../assets/schedule/raspored.pdf";

export default function Hero() {
  return (
    <section
      className="
        w-full min-h-[200px] bg-brand-light
        flex justify-center items-start overflow-x-hidden
      "
    >
      <div
        className="
          /* Inner Layer: Maximum layout bound matching system design */
          w-full max-w-[1440px] min-h-[200px]
          
          /* Responsive Padding & Spacing */
          px-4 md:px-[65px] py-[16px]
          
          /* Container layout engine */
          flex flex-col items-center justify-start gap-6 md:gap-[16px] relative
        "
      >
        {/* Hero Content Elements */}

        {/* Logo container downscaled dynamically for mobile screens */}
        <div className="w-full h-[250px] md:h-[600px] flex items-center justify-center px-2 md:px-0">
          <img
            src={Logotip}
            alt="logotype"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Paragraph Text adjustment: max-w-md restricts width on mobile */}
        <p className="text-brand-dark/80 text-base md:text-lg text-center max-w-md md:max-w-3xl mb-1 mt-4 md:mt-0 px-2">
          Turn your ideas into gold! Dive into the world of entrepreneurship,
          learn something new, connect with others, and discover how ideas can
          become something bigger.
        </p>

        {/* Action Call Button */}
        <ItemButtonDark
          text="See Schedule"
          href={Raspored}
          variant="light"
          color="brand-light"
        />

        {/* Badge Button Layout Wrapper: Absolutes on Desktop, stacks beautifully on Mobile */}
        <div className="relative md:absolute md:top-[460px] md:right-[130px] z-10 my-2 md:my-0">
          <BadgeButton
            size={160}
            text="CHECK IT OUT - BEST BELGRADE INSTAGRAM"
            href="https://instagram.com/best_belgrade"
          />
        </div>
      </div>
    </section>
  );
}
