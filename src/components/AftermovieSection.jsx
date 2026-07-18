import React from "react";
import { motion } from "framer-motion";
import aftermovie from "../assets/videos/aftermovie.mp4";

export default function AftermovieSection() {
  return (
    <section className="w-full bg-brand-white py-12 md:py-20 flex justify-center items-center overflow-hidden">
      <div className="w-full max-w-[1310px] px-4 sm:px-6 md:px-[65px] flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 relative">
        {/* LEFT SIDE: Big Headline & Arrow Pointer */}
        <div className="flex flex-col items-start justify-center max-w-[620px] z-10 relative">
          <span className="px-4 py-1.5 border-2 border-brand-dark bg-brand-peach text-brand-dark font-black text-xs md:text-sm uppercase tracking-widest rounded-full shadow-[3px_3px_0px_#1c1c1c] mb-4">
            Sneak Peek
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-[1000] font-sans text-brand-dark uppercase tracking-tight leading-[0.95]">
            Check out last course's aftermovie
          </h2>

          <p className="font-medium mt-6 leading-relaxed max-w-xl text-base md:text-md text-brand-dark/70">
            Get a taste of the energy, community, and unforgettable moments
            waiting for you in Belgrade!
          </p>
        </div>

        {/* RIGHT SIDE: Animated Phone Frame Mockup */}
        <div className="flex-shrink-0 z-10">
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: 0 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 3 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 18,
              duration: 0.5,
            }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            className="relative w-[280px] sm:w-[320px] aspect-[9/19] bg-brand-dark border-[5px] border-brand-dark rounded-[36px] shadow-[10px_10px_0px_#1c1c1c] p-2.5 flex flex-col items-center justify-between cursor-pointer"
          >
            {/* Phone Speaker Notch */}
            <div className="w-24 h-4 bg-brand-dark rounded-b-xl absolute top-0 z-20 flex items-center justify-center">
              <div className="w-10 h-1 bg-white/20 rounded-full" />
            </div>

            {/* Video Container inside Phone */}
            <div className="w-full h-full rounded-[26px] overflow-hidden bg-black relative">
              <video
                src={aftermovie}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Phone Home Bar Accent */}
            <div className="w-28 h-1 bg-white/30 rounded-full absolute bottom-2 z-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
