import { ArrowUpRight } from 'lucide-react';
import React from 'react';

export default function IconButtonDark({ 
  text = "Lorem ipsum", 
  onClick, 
  href, 
  color = "brand-peach",
  variant = "dark" // "dark" or "light"
}) {
  
  const colorMap = {
    'brand-peach': 'bg-brand-peach',
    'brand-yellow': 'bg-brand-yellow',
    'brand-light': 'bg-brand-light',
    'brand-blue': 'bg-brand-blue',
    'brand-purple': 'bg-brand-purple',
    'brand-mint': 'bg-brand-mint'
  };

  const dynamicBgClass = colorMap[color] || (color.startsWith('bg-') ? color : 'bg-brand-peach');

  // Determine core button container colors based on the chosen variant theme
  const variantClasses = variant === 'light'
    ? 'bg-brand-white text-brand-dark border-none shadow-none hover:bg-brand-white'
    : 'bg-brand-dark text-brand-white border-none shadow-none hover:bg-brand-dark';

  // Combined styling properties for layouts
  const sharedClasses = `
    flex items-center justify-between gap-2
    min-w-[100px] h-[58px] pl-4 pr-2 
    font-bold rounded-lg uppercase tracking-wider
    active:scale-98 transition-all duration-200
    group cursor-pointer select-none inline-flex
    ${variantClasses}
  `;

  // Render content skeleton
  const renderInnerContent = () => (
    <>
      <span className="text-sm tracking-wide">{text}</span>
      <div 
        className={`
          flex items-center justify-center
          w-[42px] h-[42px] flex-shrink-0
          text-brand-dark rounded-lg
          overflow-hidden
          ${dynamicBgClass}
          group-hover:bg-brand-yellow
          transition-all duration-500 ease-in-out
        `}
      >
        <ArrowUpRight className="w-5 h-5 stroke-[2.5] group-hover:animate-arrow-portal" />
      </div>
    </>
  );

  // Router anchor node handling
  if (href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={sharedClasses}
      >
        {renderInnerContent()}
      </a>
    );
  }

  // Normal button action fallback template
  return (
    <button onClick={onClick} className={sharedClasses}>
      {renderInnerContent()}
    </button>
  );
}