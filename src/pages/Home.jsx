import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Marquee from "../components/marquee";
import ImageMarqueeSlider from "../components/ImageMarqueeSlider";
import Footer from "../components/Footer";
import ItemButtonDark from "../components/ItemButtonDark";
import ScrollToTop from "../components/ScrollToTop";
import ItemButton from "../components/ItemButton";
import sb1 from "../assets/home/belgrade.webp";
import sb3 from "../assets/home/ct.webp";
import sb4 from "../assets/home/classroom.jpg";
import sb2 from "../assets/home/wedding.jpg";
import StatsGridSection from "../components/StatsGridSection";
import OrganizerGrid from "../components/OrganizerGrid";
import SponsorSection from "../components/SponsorSection";

import Raspored from "../assets/schedule/raspored.pdf";
import SurvivalGuide from "../assets/survival/guide.pdf";
import AftermovieSection from "../components/AftermovieSection";

export default function Home({ onNavigate }) {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center">
      {/* 0. Global Utilities */}
      <ScrollToTop />

      {/* =======================================================================
          1. TOP STRIPE: LIGHT BLUE BACKGROUND (Edge-to-Edge)
          ======================================================================= */}
      <div className="w-full bg-brand-light flex flex-col items-center justify-start pb-12">
        <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-[65px] flex flex-col items-center justify-start gap-[16px] overflow-hidden">
          <div className="w-full">
            <Marquee />
          </div>
          <Header onNavigate={onNavigate} />
          <Hero onNavigate={onNavigate} />
        </div>
      </div>

      {/* =======================================================================
          2. MIDDLE TRANSITION: IMAGE MARQUEE SLIDER (Edge-to-Edge)
          ======================================================================= */}
      <div className="w-full overflow-hidden bg-brand-white">
        <ImageMarqueeSlider speed={25} />
      </div>

      {/* =======================================================================
          3. BOTTOM STRIPE: BRAND WHITE BACKGROUND (Edge-to-Edge)
          ======================================================================= */}
      <div className="w-full bg-brand-white flex flex-col items-center justify-start">
        <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-[65px] flex flex-col items-center justify-start">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] items-start my-16 md:my-24 w-full">
            <div className="relative pb-16">
              <h2 className="text-4xl sm:text-5xl md:text-[56px] font-[1000] font-sans text-brand-dark leading-[1.05] uppercase tracking-tight">
                FROM BELGRADE,
                <br />
                WITH LOVE
              </h2>

              {/* 
                UPDATED: Changed right-[38%] to right-[15%] for mobile, 
                and pushed it back to md:right-[38%] for desktop sizes.
              */}
              <div
                className="absolute bottom-[10%] right-[15%] md:right-[30%] w-[90px] h-[90px] select-none pointer-events-none"
                style={{ transform: "rotate(30deg)" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-full h-full fill-[#FFD700] drop-shadow-[2px_3px_0px_#1c1c1c]"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col items-start gap-[24px]">
              <p className="text-base md:text-lg font-medium text-brand-dark/80 leading-relaxed max-w-[540px]">
                Belgrade is one of Europe’s oldest cities and the only capital
                built where the majestic Danube and Sava rivers meet. Home to
                1.7 million people, it is Serbia’s ultimate cultural and
                political hub. Across the river sits New Belgrade, the city's
                fast paced business engine. Known around the world as the city
                that never sleeps, Belgrade lights up after dark with legendary
                floating river club parties and vibrant traditional music
                echoing down the bohemian street of Skadarlija until dawn!
              </p>
              <ItemButtonDark
                text="Learn More"
                onClick={() => onNavigate("course")}
              />
            </div>
          </div>

          {/* =======================================================================
              NEW BANNER 1
              ======================================================================= */}

          <StatsGridSection onNavigate={onNavigate} />
          <AftermovieSection />

          <div className="w-full   p-8 md:p-12  flex flex-col md:flex-row items-center justify-between gap-8 mb-4 overflow-hidden relative">
            {/* Left Hand: */}
            <div className="flex flex-col items-start justify-center gap-3 max-w-[650px] z-10">
              <h3 className="text-3xl md:text-5xl font-[1000] font-sans text-brand-dark uppercase tracking-tight leading-none mb-6">
                SURVIVAL GUIDE TO BELGRADE
              </h3>

              <p className="text-base md:text-md font-medium text-brand-dark/70 leading-relaxed">
                New city, new adventure! This survival guide brings you
                essential information, practical tips, and local recommendations
                to help you settle in Belgrade and experience the city like a
                local.
              </p>

              {/* Using your specific custom ItemButton component equipped with state handler */}
              <ItemButtonDark
                text="Survival guide"
                href={SurvivalGuide}
                color="brand-light"
              />
            </div>

            {/* Right Hand: */}
            <div className="flex-shrink-0 w-full md:w-[380px] h-[240px] z-10 px-4 md:px-0">
              <div
                className="w-full h-full bg-brand-white border-[4px] border-brand-dark rounded-[16px] shadow-[6px_6px_0px_#1c1c1c] flex items-center justify-center relative overflow-hidden transition-transform duration-300 hover:scale-102"
                style={{ transform: "rotate(4deg)" }}
              >
                <img
                  src={sb1}
                  alt="Belgrade Survival Guide"
                  className="w-full h-full object-cover rounded-[12px] transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          </div>

          <div className="w-full max-w-[1310px] border-t border-black/20" />
          {/* --------------------------------------------------------- */}

          <div className="w-full p-8 md:p-12 flex flex-col md:flex-row-reverse items-center justify-between gap-8 mb-4 overflow-hidden relative">
            {/* Right Hand / Main Content Side (Reversed on desktop to appear on the right) */}
            <div className="flex flex-col items-start justify-center gap-3 max-w-[650px] z-10 w-full">
              <h3 className="text-3xl md:text-5xl font-[1000] font-sans text-brand-dark uppercase tracking-tight leading-none mb-6">
                course 2026 schedule
              </h3>

              <p className="text-base md:text-md font-medium text-brand-dark/70 leading-relaxed">
                Your journey in Belgrade starts here! Check out the activities
                planned for your stay and get ready for new experiences,
                cultural discoveries, and unforgettable moments. Many surprises
                await you!
              </p>

              {/* Using your specific custom ItemButton component equipped with state handler */}
              <ItemButtonDark
                text="SCHEDULE"
                href={Raspored}
                color="brand-purple"
              />
            </div>

            {/* Left Hand / Image Side (Reversed on desktop to appear on the left) */}
            <div className="flex-shrink-0 w-full md:w-[380px] h-[240px] z-10 px-4 md:px-0">
              <div
                className="w-full h-full bg-brand-white border-[4px] border-brand-dark rounded-[16px] shadow-[6px_6px_0px_#1c1c1c] flex items-center justify-center relative overflow-hidden transition-transform duration-300 hover:scale-102"
                style={{ transform: "rotate(-4deg)" }}
              >
                <img
                  src={sb2}
                  alt="Belgrade Survival Guide"
                  className="w-full h-full object-cover rounded-[12px] transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          </div>

          <div className="w-full max-w-[1310px] border-t border-black/20" />
          {/* --------------------------------------------------------- */}

          {/* SECTION 3: BEST COURSES */}
          <div className="w-full p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-4 overflow-hidden relative">
            {/* Left Hand: */}
            <div className="flex flex-col items-start justify-center gap-3 max-w-[650px] z-10">
              <h3 className="text-3xl md:text-5xl font-[1000] font-sans text-brand-dark uppercase tracking-tight leading-none mb-6">
                BEST COURSES
              </h3>

              <p className="text-base md:text-md font-medium text-brand-dark/70 leading-relaxed">
                Hands-on learning experiences across various topics such as
                technology, language, applied engineering, and career-related
                skills. You can apply for up to three courses per season but can
                only be accepted to one.
              </p>

              {/* Using your specific custom ItemButton component equipped with state handler */}
              <ItemButtonDark
                text="CHECK IT OUT"
                onClick={() => onNavigate("course")}
                color="brand-peach"
              />
            </div>

            {/* Right Hand: */}
            <div className="flex-shrink-0 w-full md:w-[380px] h-[240px] z-10 px-4 md:px-0">
              <div
                className="w-full h-full bg-brand-white border-[4px] border-brand-dark rounded-[16px] shadow-[6px_6px_0px_#1c1c1c] flex items-center justify-center relative overflow-hidden transition-transform duration-300 hover:scale-102"
                style={{ transform: "rotate(4deg)" }}
              >
                <img
                  src={sb4}
                  alt="BEST Courses"
                  className="w-full h-full object-cover rounded-[12px] transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          </div>

          <div className="w-full max-w-[1310px] border-t border-black/20" />
          {/* --------------------------------------------------------- */}

          {/* SECTION 4: HOW TO WRITE A MOTIVATION LETTER */}
          <div className="w-full p-8 md:p-12 flex flex-col md:flex-row-reverse items-center justify-between gap-8 mb-4 overflow-hidden relative">
            {/* Right Hand / Main Content Side (Reversed on desktop to appear on the right) */}
            <div className="flex flex-col items-start justify-center gap-3 max-w-[650px] z-10 w-full">
              <h3 className="text-3xl md:text-5xl font-[1000] font-sans text-brand-dark uppercase tracking-tight leading-none mb-6">
                HOW TO WRITE A MOTIVATION LETTER
              </h3>

              <p className="text-base md:text-md font-medium text-brand-dark/70 leading-relaxed">
                Ready to apply? Before that adventure starts, you need to write
                a Motivational Letter and answer the questions organisers
                prepared for you. But the question is - what is exactly a
                Motivational Letter? How can you make sure that it's gonna be
                interesting for the other students that will read it and make a
                decision based on it?
              </p>

              {/* Using your specific custom ItemButton component equipped with state handler */}
              <ItemButtonDark
                text="ML guide"
                href="https://www.best.eu.org/courses/howToWriteAMotivationLetter.jsp"
                color="brand-mint"
              />
            </div>

            {/* Left Hand / Image Side (Reversed on desktop to appear on the left) */}
            <div className="flex-shrink-0 w-full md:w-[380px] h-[240px] z-10 px-4 md:px-0">
              <div
                className="w-full h-full bg-brand-white border-[4px] border-brand-dark rounded-[16px] shadow-[6px_6px_0px_#1c1c1c] flex items-center justify-center relative overflow-hidden transition-transform duration-300 hover:scale-102"
                style={{ transform: "rotate(-4deg)" }}
              >
                <img
                  src={sb3}
                  alt="Motivation Letter Guide"
                  className="w-full h-full object-cover rounded-[12px] transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          </div>
          <SponsorSection />

          <OrganizerGrid onNavigate={onNavigate} />
        </div>
      </div>

      {/* 4. Full-Width Footer System */}
      <Footer />
    </div>
  );
}
