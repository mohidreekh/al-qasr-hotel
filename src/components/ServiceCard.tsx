import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  buttonText?: string;
  onBookNow?: () => void;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageSrc,
  onBookNow,
}) => {
  const navigate = useNavigate();
  
  const handleBookNow = onBookNow || (() => navigate('/booking'));

  return (
    <article
      className={
        'group relative flex flex-col overflow-hidden rounded-[28px] bg-white text-[#1C2D39] shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)]'
      }
    >
      {/* Image */}
      <div className="relative w-full overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[320px] md:h-[380px]"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-5 sm:p-6 md:p-8">
        <h3 className="font-['Kurale',serif] text-[26px] leading-tight sm:text-[32px] md:text-[40px]">
          {title}
        </h3>

        <p className="font-['Kurale',serif] text-[15px] leading-relaxed text-[#1C2D39]/80 sm:text-[17px] md:text-[19px]">
          {description}
        </p>

        {/* CTA */}
        <button
          onClick={handleBookNow}
          className="
            mt-4 flex h-[56px] items-center justify-center 
            rounded-[16px] bg-gradient-to-r from-[#1C2D39] to-[#466D8B]
            text-[24px] text-white transition-all duration-300
            hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]
            sm:h-[60px] sm:text-[28px] cursor-pointer
          "
        >
          Book Now
        </button>
      </div>
    </article>
  );
};

export default ServiceCard;