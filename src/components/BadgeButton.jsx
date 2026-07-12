import { ArrowDown } from 'lucide-react';

export default function BadgeButton({ 
  text = "CHECK IT OUT -BEST BELGRADE INSTAGRAM",
  size = 160,
  href = "https://instagram.com/best_belgrade"
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ width: size, height: size }}
      className="relative flex items-center justify-center select-none group transition-transform active:scale-95 duration-200"
    >
      {/* LAYER 1: The Wavy Badge Background (SVG vector for pixel-perfect curves) 
      <div 
  className="
    absolute inset-0 
    bg-[#c3c4ff] border border-[#121212]/50 
    rounded-full 
    filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.06)] */}
  "
        <div className="absolute inset-0 text-brand-peach animate-spin-reverse 
          group-hover:[animation-duration:15s] 
          transition-all duration-500">
        
        <svg 
          id="Layer_2" 
          data-name="Layer 2" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 276.28 272.8"
          className="w-full h-full"
        >
          <g id="Layer_1-2" data-name="Layer 1">
            <g id="Generative_Object" data-name="Generative Object">
              <path 
                /* Swapped 'class="cls-1"' out for 'fill="currentColor"'.
                  This links the color directly to the parent wrapper text class 
                  so it renders that beautiful coral red (#fe858f) flawlessly.
                */
                fill="currentColor" 
                d="M117.62.11c3.35.43,6.92,1.5,9.96,2.97,6.24,3.02,13.23,4,19.65.65l1.45-.57c3.26-1.29,6.55-2.47,9.99-3.13,3.61-.26,6.85,1.15,9.97,2.92,0,.17.09.41.24.52s.56.13.69.15l9.47,8.24,3.52,1.97c2.11,1.18,4.61.97,7.15.98l10.92.06c3.38.02,6.55,1.4,8.85,3.55,1.71,1.6,3.25,3.61,4.43,5.64,5.28,9.12,4.68,12.58,16.27,16.72,3.49,1.25,7.09,2.13,10.39,3.8.05.21.28.24.44.35,3.31,2.2,5.65,5.59,6.28,9.5l1.78,10.98c.67,4.13,2.51,7.57,5.51,9.98l5.89,4.74c2.12,1.7,4.3,3.63,5.92,5.85,1.91,2.63,2.9,6.3,2.37,9.47l-1.66,9.97c-.61,3.65-1.23,7.28.29,10.69,1.05,2.35,2,5,3.82,6.94.26,1.24,1.22,2.28,1.86,3.41,1.74,3.07,3.2,6.39,3.21,9.95s-1.44,6.96-3.28,10.02l-2.39,4-3.37,6.06c-1.74,3.14-.84,6.99-.27,10.5l1.69,10.45c.58,3.57-.66,6.96-2.66,10.01l-9.32,8.03c-4.21,3.63-7,7.74-7.87,13.13l-1.4,8.68c-.68,4.21-3.3,8.17-6.72,10.7l-.71.53-9.83,3.69c-5.27,1.42-9.59,4.04-12.3,9.05l-3.91,7.22c-1.16,2.14-2.55,4.2-4.31,5.87-2.62,2.49-6.13,4.04-10.02,3.95l-9.49-.22c-2.18-.05-4.15-.05-6.03.37s-3.55,1.37-4.99,2.59l-9.48,8-1,.81c-2.73,2.22-6.47,3.34-10.04,2.87s-6.97-2.01-10.39-3.3c-7.07-2.68-11.27-4.01-19.17-.34l-1.5.7c-3.1,1.44-6.54,2.59-9.97,2.98-3.7.43-7.4-1.12-10.32-3.26-.19-.14-.41-.38-.64-.47l-6.59-5.95-2.83-2.08c-1.26-.93-2.51-1.61-3.97-2.15-1.96-.73-4.18-.79-6.58-.78l-10.99.07c-3.47.02-6.53-1.28-8.84-3.58-1.63-1.63-3.04-3.58-4.18-5.63-2.09-3.76-3.77-7.86-6.69-11.26-2.62-3.05-6.31-4.25-9.86-5.56l-9.53-3.53c-4.31-2.15-6.77-6.11-7.5-10.63l-1.65-10.15c-.69-4.23-2.44-7.8-5.6-10.37l-6.63-5.4c-1.73-1.41-3.45-3.01-4.82-4.73-2.21-2.78-3.37-6.38-2.75-9.86l1.87-10.49c.83-4.67.68-9.18-1.89-13.46l-4.28-7.11C1.45,143.35,0,139.99,0,136.47c0-3.6,1.46-6.94,3.29-9.99l2.05-3.4c1.29-2.14,2.6-4.28,3.53-6.59,1.4-3.46,1.21-7.03.46-10.65-.71-3.43-1.5-6.88-1.76-10.41s.46-7.21,2.68-9.86c6.6-7.92,15.51-9.85,17.17-20.81l1.57-10.35c.76-5.04,4.29-9.1,9.29-10.81l8.39-2.87c4.99-1.71,9.21-4.51,11.88-9.4l3.76-6.91c1.15-2.12,2.59-4.18,4.35-5.83,2.81-2.62,6.58-3.88,10.39-3.81l11.07.21c3.73.07,6.97-1.16,9.56-3.36l9.07-7.71.95-.8c2.99-1.87,6.32-3.47,9.95-3Z" 
              />
            </g>
          </g>
        </svg>
      </div>

      {/* LAYER 2: The Circular Typography Wrapper (Spins Infinitely) */}
      <div className="absolute inset-[10%] animate-[spin_20s_linear_infinite] group-hover:[animation-duration:10s] transition-all duration-500">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#121212] fill-current font-bold font-sans text-[7.5px] tracking-[0.2em]">
          <defs>
            {/* An invisible track guide that keeps the text in a pristine circle layout */}
            <path
              id="textCirclePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text>
            <textPath href="#textCirclePath" startOffset="0%">
              {text.toUpperCase()}
            </textPath>
          </text>
        </svg>
      </div>

      {/* LAYER 3: The Center Dark Core (Stays stable, icon transitions inside) */}
      <div 
        className="
          absolute w-[46%] h-[46%] rounded-full bg-[#1c1c1c] 
          flex items-center justify-center text-brand-peach
          shadow-md group-hover:scale-105 transition-transform duration-300 ease-out
        "
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 448 512" 
          className="
            w-[36px] h-[36px] fill-current
            group-hover:scale-110 group-hover:rotate-6 
            transition-transform duration-300
          "
        >
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM402.4 392c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-135.7 9s-106.2 2.7-135.7-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-135.7s-2.7-106.2 9-135.7c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 135.7-9s106.2-2.7 135.7 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 135.7s2.7 106.3-9 135.7z"/>
        </svg>
      </div>
    </a>
  );
}