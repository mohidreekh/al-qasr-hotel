import React from 'react';

/**
 * Interface for InfoCard component props.
 */
interface InfoCardProps {
  /** The main heading of the card (e.g., "Large Event Hall") */
  title: string;
  /** An optional highlighted subtitle (e.g., "Up to 500 guests") */
  subtitle?: string;
  /** The main content/description text for the card */
  description: string;
  /** Optional additional CSS classes for custom styling */
  className?: string;
}

/**
 * InfoCard - A premium, responsive content card component.
 * Converts static Figma absolute positioning into a flexible, modern React component.
 * Uses the project's 'Kurale' serif font for a luxury hotel aesthetic.
 */
const InfoCard: React.FC<InfoCardProps> = ({
  title,
  subtitle,
  description,
  className = '',
}) => {
  return (
    <section
      className={`
        relative flex flex-col items-start justify-center overflow-hidden
        rounded-2xl bg-[#FFFDFD] p-6 shadow-[0_15px_45px_rgba(0,0,0,0.03)]
        transition-all duration-700 hover:shadow-[0_25px_70px_rgba(0,0,0,0.08)]
        sm:rounded-3xl sm:p-8 md:rounded-[2rem] md:p-10 
        lg:rounded-[2.5rem] lg:p-12
        ${className}
      `}
    >
      {/* Decorative subtle gradient for premium touch */}
      <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-gradient-to-br from-[#E8B08F]/10 via-[#E8B08F]/5 to-transparent blur-3xl" />
      
      <div className="relative z-10 flex w-full flex-col gap-4 md:gap-6 lg:gap-8">
        {/* Header content: Title and Subtitle */}
        <header className="flex flex-col gap-1 md:gap-2 lg:gap-3">
          <h2 
            className="font-['Kurale',serif] text-3xl font-normal leading-tight text-[#304759] sm:text-4xl md:text-5xl"
          >
            {title}
          </h2>

          {/* Subtitle / Key Highlight */}
          {subtitle && (
            <p 
              className="font-['Kurale',serif] text-lg font-normal tracking-wide text-[#E8B08F] sm:text-xl md:text-2xl"
            >
              {subtitle}
            </p>
          )}
        </header>

        {/* Main description text */}
        <p 
          className="max-w-[95%] whitespace-pre-line font-['Kurale',serif] text-base font-normal leading-relaxed text-[#304759]/80 sm:text-lg md:text-xl"
        >
          {description}
        </p>
      </div>

      {/* Subtle inner glow/border for depth */}
      <div className="absolute inset-0 rounded-[inherit] border border-[#304759]/5 pointer-events-none" />
      
      {/* Subtle corner accent */}
      <div className="absolute left-0 bottom-0 h-24 w-24 bg-gradient-to-tr from-[#304759]/5 to-transparent opacity-30" />
    </section>
  );
};

export default InfoCard;


