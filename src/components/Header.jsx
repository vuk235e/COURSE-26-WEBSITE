import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ItemButtonDark from './ItemButtonDark';
import logoOne from '../assets/best-logo-plavi.jpeg';
import logoTwo from '../assets/best-courses.jpeg';

const SCHEDULE_URL = 'https://course.best.rs/PreliminarySchedule2026.pdf';

const linkClass =
  'hover:opacity-70 transition-opacity uppercase font-bold tracking-widest cursor-pointer';

export default function Header({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (page) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  const navLinks = (
    <>
      <button onClick={() => handleNavigate('home')} className={linkClass}>
        Home
      </button>
      <button onClick={() => handleNavigate('course')} className={`${linkClass} text-brand-dark`}>
        About
      </button>
      <a href="#guide" className={linkClass} onClick={() => setMenuOpen(false)}>
        Guide
      </a>
      <a href="#contact" className={linkClass} onClick={() => setMenuOpen(false)}>
        Contact
      </a>
    </>
  );

  return (
    <header className="relative w-full bg-[#ffffff] md:bg-transparent rounded-[16px] md:rounded-none border-[4px] md:border-0 border-brand-dark shadow-[6px_6px_0px_#1c1c1c] md:shadow-none p-3 md:p-0 text-brand-dark font-bold text-sm">
      <div className="flex items-center justify-between gap-3 min-h-[50px] md:min-h-[58px]">
        {/* Logos — always visible */}
        <div className="flex items-center justify-start gap-2 md:gap-3 flex-shrink-0">
          <a
            href="https://best.rs/"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[44px] md:min-w-[50px] h-[44px] md:h-[58px] bg-[#ffffff] md:bg-brand-white rounded-xl flex items-center justify-center pl-1 md:pl-2"
          >
            <img src={logoOne} alt="BEST Belgrade Logo" className="w-auto h-[80%] object-contain" />
          </a>
          <a
            href="https://www.best.eu.org/courses/welcome.jsp"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[44px] md:min-w-[50px] h-[44px] md:h-[58px] bg-[#ffffff] md:bg-brand-white rounded-xl flex items-center justify-center border border-brand-blue/10"
          >
            <img src={logoTwo} alt="BEST Course Logo" className="w-auto h-[80%] object-contain" />
          </a>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center justify-center gap-8 uppercase text-sm font-bold tracking-widest flex-1">
          {navLinks}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center justify-end flex-shrink-0">
          <ItemButtonDark text="SCHEDULE" href={SCHEDULE_URL} color="brand-purple" />
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center w-[44px] h-[44px] rounded-lg border-[3px] border-brand-dark bg-brand-light text-brand-dark flex-shrink-0 transition-transform duration-200 active:scale-95"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-5 h-5" strokeWidth={2.5} /> : <Menu className="w-5 h-5" strokeWidth={2.5} />}
        </button>
      </div>

      {/* Mobile menu — smooth open/close */}
      <div
        className={`md:hidden grid transition-[grid-template-rows] duration-300 ease-in-out ${
          menuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <nav
          className={`overflow-hidden flex flex-col gap-4 uppercase text-sm font-bold tracking-widest transition-opacity duration-300 ease-in-out ${
            menuOpen ? 'opacity-100 pt-4 mt-3 border-t-[3px] border-brand-dark/15' : 'opacity-0 pt-0 mt-0 border-t-[3px] border-transparent'
          }`}
        >
          <button
            onClick={() => handleNavigate('home')}
            className={`text-left py-1 ${linkClass}`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavigate('course')}
            className={`text-left py-1 ${linkClass}`}
          >
            About
          </button>
          <a href="#guide" className={`py-1 ${linkClass}`} onClick={() => setMenuOpen(false)}>
            Guide
          </a>
          <a href="#contact" className={`py-1 ${linkClass}`} onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <div className="pt-2">
            <ItemButtonDark text="SCHEDULE" href={SCHEDULE_URL} color="brand-purple" />
          </div>
        </nav>
      </div>
    </header>
  );
}
