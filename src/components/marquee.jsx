export default function Marquee() {
  // Repeat the text a few times to ensure it fills the width and loops seamlessly
  const text =
    "BEST Letnji kurs 2026 • The Alchemy of Startup Creation • Best Course in Summer 2026 • LBG Belgrade • ";
  const repeatedText = `${text} ${text} ${text} ${text}`;

  return (
    <div
      className="
        /* Dimensions & Colors */
        w-full h-[40px] bg-brand-dark text-brand-white rounded-[8px]
        
        /* Layout */
        flex items-center overflow-hidden pointer-events-none
        
        /* Typography */
        text-xs font-bold tracking-widest uppercase
      "
    >
      {/* Animated Text Wrapper */}
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="pr-4">{repeatedText}</span>
      </div>
    </div>
  );
}
