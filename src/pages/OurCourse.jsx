import React from 'react';
import { MapPin, Calendar, Users, Landmark, AlertCircle, BarChart3, Clock } from 'lucide-react';
import Header from '../components/Header';
import Marquee from '../components/marquee';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

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
      <main className="w-full bg-brand-light py-16 md:py-24 flex justify-center items-center">
        
        {/* Layout Grid container matches previous Hero/Header width system precisely */}
        <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-[65px] grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-[40px] items-start">
          
          {/* LEFT SIDE: Big Detailed Context Canvas Card */}
          <div className="lg:col-span-2 bg-brand-white p-6 sm:p-8 md:p-[40px] rounded-[16px] border-[4px] border-brand-dark shadow-[8px_8px_0px_#1c1c1c] flex flex-col gap-[24px] w-full">
            <h1 className="text-2xl md:text-[32px] font-[1000] font-sans text-brand-blue italic uppercase leading-tight tracking-tight">
              THE ALCHEMY OF STARTUP CREATION: TURN YOUR IDEA INTO GOLD!
            </h1>
            
            <div className="flex flex-col gap-[20px] text-base md:text-base font-medium text-brand-dark/80 leading-relaxed font-sans">
              <p>
                Have you ever imagined that, like a true alchemist, you could create gold out of 
                nothing? Did you know that you can often do exactly that by digging just a little 
                deeper into your own mind, starting from an idea that has been lingering in your 
                thoughts for days? Come to Belgrade and find out how!
              </p>
              <p>
                We won’t talk only about ideas, but also about turning them into reality. Over eight 
                days of this BEST Course, you will go through the real startup journey – from the 
                first sparks of an idea to an innovative concept ready to be presented to the world. 
                Through hands-on workshops, interactive tasks, and teamwork, you will develop a 
                true entrepreneurial mindset – learning how to spot opportunities where others see 
                nothing, test your ideas, and build business models that truly work.
              </p>
              <p>
                And while you’re working on your “gold,” you won’t even notice how you’ve 
                absorbed a piece of Serbian spirit. People here welcome you warmly, with tables 
                full of delicious local specialties and an essential cup of great coffee, enjoyed 
                slowly over long conversations. You’ve surely heard about the famous Balkan 
                parties, and this is your chance to experience them firsthand! Beyond the vibrant 
                nightlife, Belgrade also has a calmer side you’ll enjoy just as much – walks through 
                Kalemegdan Fortress, with stunning views over the Sava and Danube rivers, 
                revealing a city shaped by centuries of history, where both tradition and urban 
                energy flow naturally through everyday life.
              </p>
              <p>
                Apply now and join us for a summer of innovation, creativity, and unforgettable 
                experiences in one of Europe’s most exciting and inspiring cities. Belgrade is full of 
                surprises, and every corner has the potential to spark your next golden idea!
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: Sidebar Metadata Card Pillar */}
          <div className="flex flex-col gap-[24px] w-full">
            
            {/* Card 1: General Info */}
            <div className="bg-brand-white p-6 sm:p-8 md:p-[32px] rounded-[16px] border-[4px] border-brand-dark shadow-[6px_6px_0px_#1c1c1c] flex flex-col gap-[20px] w-full">
              <h3 className="text-xl font-[1000] font-sans text-brand-blue italic uppercase tracking-tight border-b-2 border-brand-dark/10 pb-2">
                GENERAL INFO
              </h3>
              <ul className="flex flex-col gap-[16px] text-base font-bold text-brand-dark">
                <li className="flex items-center gap-[12px]">
                  <MapPin className="w-5 h-5 text-brand-blue" strokeWidth={2.5} />
                  <span>Location: <span className="font-medium text-brand-dark/80">Belgrade, Serbia</span></span>
                </li>
                <li className="flex items-center gap-[12px]">
                  <Calendar className="w-5 h-5 text-brand-blue" strokeWidth={2.5} />
                  <span>Dates: <span className="font-medium text-brand-dark/80">08.08. – 15.08.2026.</span></span>
                </li>
                <li className="flex items-center gap-[12px]">
                  <Users className="w-5 h-5 text-brand-blue" strokeWidth={2.5} />
                  <span>Organizer: <span className="font-medium text-brand-dark/80">BEST Belgrade</span></span>
                </li>
                <li className="flex items-center gap-[12px]">
                  <Landmark className="w-5 h-5 text-brand-blue" strokeWidth={2.5} />
                  <span>University: <span className="font-medium text-brand-dark/80">University of Belgrade</span></span>
                </li>
              </ul>
            </div>

            {/* Card 2: Prerequisites */}
            <div className="bg-brand-white p-6 sm:p-8 md:p-[32px] rounded-[16px] border-[4px] border-brand-dark shadow-[6px_6px_0px_#1c1c1c] flex flex-col gap-[16px] w-full">
              <h3 className="text-xl font-[1000] font-sans text-brand-blue italic uppercase tracking-tight border-b-2 border-brand-dark/10 pb-2">
                PREREQUISITES FOR APPLYING
              </h3>
              <div className="flex items-start gap-[12px] text-base font-medium text-brand-dark/80">
                <AlertCircle className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                <p>No prior knowledge needed.</p>
              </div>
            </div>

            {/* Card 3: Academic Info */}
            <div className="bg-brand-white p-6 sm:p-8 md:p-[32px] rounded-[16px] border-[4px] border-brand-dark shadow-[6px_6px_0px_#1c1c1c] flex flex-col gap-[20px] w-full">
              <h3 className="text-xl font-[1000] font-sans text-brand-blue italic uppercase tracking-tight border-b-2 border-brand-dark/10 pb-2">
                ACADEMIC INFO
              </h3>
              <ul className="flex flex-col gap-[16px] text-base font-bold text-brand-dark">
                <li className="flex items-center gap-[12px]">
                  <BarChart3 className="w-5 h-5 text-brand-blue" strokeWidth={2.5} />
                  <span>Level: <span className="font-medium text-brand-dark/80">Basic</span></span>
                </li>
                <li className="flex items-center gap-[12px]">
                  <Clock className="w-5 h-5 text-brand-blue" strokeWidth={2.5} />
                  <span>Number of academic hours: <span className="font-medium text-brand-dark/80">21</span></span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </main>

      {/* 3. FOOTER FRAMEWAY */}
      <Footer />
      
    </div>
  );
}