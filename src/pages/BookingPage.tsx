import React from 'react';
import { useTranslation } from 'react-i18next';
import LuxuryNavbar from '../components/LuxuryNavbar';
import { getDefaultLinks } from '../utils/navigation';
import LuxuryFooter from '../components/LuxuryFooter';
import BookingForm from '../components/BookingForm';

const BookingPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <div className="min-h-screen bg-[#F5F5F5] font-['Kurale',serif] flex flex-col">
      <LuxuryNavbar
        activeId="bookNow"
        links={getDefaultLinks(t)}
        currentLanguage={i18n.language}
        onLanguageToggle={() => i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')}
      />

      <main className="flex-1 mx-auto lg:-mt-[clamp(80px,12vw,200px)] w-full max-w-[1400px] px-6 lg:px-12 py-10 md:py-16">
        <header className="mb-12 text-center">
          <h1 className="mb-6 text-5xl md:text-7xl lg:text-[100px] font-normal text-[#304759]">
            {t('booking.title')}
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-[#304759]/80 md:text-3xl leading-relaxed">
            {t('booking.subtitle')}
          </p>
        </header>

        <section className="mb-16">
          <BookingForm />
        </section>

        <section className="mb-24 max-w-5xl mx-auto px-4 md:px-10">
          <h2 className="mb-8 text-3xl md:text-5xl font-normal text-[#304759]">
            {t('booking.infoTitle')}
          </h2>
          <ul className="flex flex-col gap-4 text-base md:text-xl text-[#304759]/80">
            <li className="flex items-start gap-2">
              <span className="font-bold text-[#304759]">•</span>
              <span>{t('booking.checkIn')}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-[#304759]">•</span>
              <span>{t('booking.checkOut')}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-[#304759]">•</span>
              <span>{t('booking.flexibleTime')}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-[#304759]">•</span>
              <span>{t('booking.cancellation')}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-[#304759]">•</span>
              <span>{t('booking.groupBookings')}</span>
            </li>
          </ul>
        </section>
      </main>

      <LuxuryFooter />
    </div>
  );
};

export default BookingPage;
