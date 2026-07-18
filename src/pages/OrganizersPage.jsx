import React from "react";
import OrganizerGrid from "../components/OrganizerGrid";
import Header from "../components/Header";
import Marquee from "../components/marquee";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function OurCourse({ onNavigate }) {
  return (
    /* Base wrapper matching Home page configurations */
    <div className="w-full min-h-screen bg-brand-light flex flex-col justify-start items-center">
      {/* Global Action Utilities */}
      <ScrollToTop />

      {/* 1. CENTERED TOP NAV BAR STACK */}
      <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-[65px] flex flex-col items-center justify-start gap-[16px] overflow-hidden">
        {/* Infinite Top Text Marquee Ticker */}
        <div className="w-full">
          <Marquee />
        </div>

        {/* Core Navigation Header Row */}
        <Header onNavigate={onNavigate} />
      </div>

      {/* 2. CORE ACADEMIC INFO OVERVIEW LAYOUT BLOCK */}
      {/* Full-width container background color overridden with baby blue */}
      <main className="w-full bg-brand-light py-16 md:py-24 flex flex-col justify-center items-center gap-16">
        <OrganizerGrid />

        {/* 3. GOOGLE MAPS SECTION: BELGRADE */}
        <section className="w-full max-w-[1440px] px-4 sm:px-6 md:px-[65px] flex flex-col items-center gap-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-[1000] font-sans text-brand-dark uppercase tracking-tight">
              Location: Belgrade, Serbia
            </h2>
            <p className="text-brand-dark/70 text-sm md:text-base font-medium mt-1">
              Find us in the heart of the city
            </p>
          </div>

          <div className="w-full h-[350px] md:h-[450px] bg-brand-white border-[4px] border-brand-dark rounded-[20px] overflow-hidden shadow-[6px_6px_0px_#1c1c1c]">
            <iframe
              title="Belgrade Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000.7935769530526!2d20.47547240174038!3d44.807878898880595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa211438611%3A0xacb84e7a9b9b3e79!2sFaculty%20of%20Technology%20and%20Metallurgy%20of%20the%20University%20of%20Belgrade!5e0!3m2!1sen!2srs!4v1784311228530!5m2!1sen!2srs"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>

      {/* 4. FOOTER FRAMEWORK */}
      <Footer />
    </div>
  );
}
