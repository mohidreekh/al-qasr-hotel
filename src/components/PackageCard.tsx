import React from 'react';

interface PackageCardProps {
  title: string;
  points: string[];
  onBookNow?: () => void;
}

/**
 * PackageCard - A minimalist luxury card component.
 * Features a title, list of points, and a "Book Now" action.
 * Normalized to a professional, natural size.
 */
const PackageCard: React.FC<PackageCardProps> = ({
  title,
  points,
  onBookNow,
}) => {
  return (
    <div
      className="
        relative flex flex-col items-center justify-between
        rounded-2xl bg-white p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.03)]
        transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
        sm:rounded-3xl sm:p-10 md:p-12
      "
    >
      <div className="flex flex-col items-center w-full">
        {/* Title - Natural Luxury Scale */}
        <h2 className="mb-6 font-['Kurale',serif] text-2xl font-normal text-[#162633] sm:text-3xl md:text-4xl">
          {title}
        </h2>

        {/* Points - Readable Scale */}
        <ul className="mb-10 flex flex-col gap-3 text-left">
          {points.map((point, index) => (
            <li 
              key={index}
              className="flex items-center font-['Kurale',serif] text-sm text-[#304759]/70 sm:text-base md:text-lg"
            >
              <span className="mr-3 h-1.5 w-1.5 rounded-full bg-[#436886]" />
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Action Button - Balanced Design */}
      <button
        onClick={onBookNow}
        className="
          flex h-12 w-full max-w-[200px] items-center justify-center rounded-full
          bg-gradient-to-r from-[#162633] to-[#436886]
          font-['Kurale',serif] text-sm font-normal text-white
          transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_30px_rgba(22,38,51,0.2)]
          active:scale-95 sm:h-14 sm:text-base md:h-16 md:text-lg
        "
      >
        Book Now
      </button>

      {/* Subtle background detail */}
      <div className="absolute inset-x-0 bottom-0 h-1 rounded-b-2xl bg-gradient-to-r from-[#162633]/5 to-[#436886]/5" />
    </div>
  );
};

export default PackageCard;
