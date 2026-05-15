import React from 'react';
import { useTranslation } from 'react-i18next';
import LuxuryNavbar from '../components/LuxuryNavbar';
import { getDefaultLinks } from '../utils/navigation';
import LuxuryFooter from '../components/LuxuryFooter';
import ServiceCard from '../components/ServiceCard';
import InfoCard from '../components/InfoCard';
import PackageCard from '../components/PackageCard';
import OptimizedPicture from '../components/OptimizedPicture';
import { SERVICE_FEATURE_IMAGE_SIZES } from '../lib/serviceImageSizes';

import hotelNightSign from '../assets/hotel-night-sign.png?w=400;800;1200;1600&format=avif;webp;jpeg&quality=68&effort=6&as=picture';

import doubleRoom from '../assets/double-room.png?w=400;800;1200&format=avif;webp;jpeg&quality=68&effort=6&as=picture';
import tripleRoom from '../assets/triple-room.png?w=400;800;1200&format=avif;webp;jpeg&quality=68&effort=6&as=picture';
import quadRoom from '../assets/quad-room.png?w=400;800;1200&format=avif;webp;jpeg&quality=68&effort=6&as=picture';
import twinRoom from '../assets/twin-room.png?w=400;800;1200&format=avif;webp;jpeg&quality=68&effort=6&as=picture';

import largeHall from '../assets/large-events-hall.png?w=400;800;1200&format=avif;webp;jpeg&quality=68&effort=6&as=picture';
import smallHall from '../assets/small-events-hall.png?w=400;800;1200&format=avif;webp;jpeg&quality=68&effort=6&as=picture';

const ServicesPage: React.FC = () => {
  const { t, i18n } = useTranslation();

  const rooms = [
    {
      title: t('services.twinRoom'),
      description: t('services.twinRoomDesc'),
      image: twinRoom,
    },
    {
      title: t('services.doubleRoom'),
      description: t('services.doubleRoomDesc'),
      image: doubleRoom,
    },
    {
      title: t('services.tripleRoom'),
      description: t('services.tripleRoomDesc'),
      image: tripleRoom,
    },
    {
      title: t('services.quadRoom'),
      description: t('services.quadRoomDesc'),
      image: quadRoom,
    },
  ];

  const weddingPackagePoints = t('services.weddingPoints', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-['Kurale',serif]">
      <LuxuryNavbar
        activeId="services"
        links={getDefaultLinks(t)}
        currentLanguage={i18n.language}
        onLanguageToggle={() => i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')}
      />

      <main className="mx-auto max-w-[1400px] px-6 pt-2 lg:px-12">
        <header className="mb-16 text-center">
          <h1 className="mb-6 text-5xl font-normal text-[#304759] md:text-7xl lg:text-8xl">
            {t('services.title')}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-[#304759]/70 md:text-4xl">
            {t('services.subtitle')}
          </p>
        </header>

        <section className="mb-32">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-5xl font-normal text-[#304759] md:text-7xl">{t('services.roomsTitle')}</h2>
            <p className="text-xl text-[#304759]/60 md:text-2xl">
              {t('services.roomsSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {rooms.map((room, index) => (
              <ServiceCard
                key={index}
                title={room.title}
                description={room.description}
                picture={room.image}
              />
            ))}
          </div>
        </section>

        <section className="mb-32">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-5xl font-normal text-[#304759] md:text-7xl">{t('services.hallsTitle')}</h2>
            <p className="text-xl text-[#304759]/60 md:text-2xl">
              {t('services.hallsSubtitle')}
            </p>
          </div>

          <div className="flex flex-col gap-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

              <div className="overflow-hidden rounded-2xl md:rounded-3xl">
                <OptimizedPicture
                  picture={smallHall}
                  alt={t('services.smallHall')}
                  sizes={SERVICE_FEATURE_IMAGE_SIZES}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <InfoCard
                title={t('services.smallHall')}
                subtitle={t('services.smallHallSize')}
                description={t('services.smallHallDesc')}
                className="h-full"
              />
              
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="order-2 overflow-hidden rounded-2xl md:order-1 md:rounded-3xl">
                <OptimizedPicture
                  picture={largeHall}
                  alt={t('services.largeHall')}
                  sizes={SERVICE_FEATURE_IMAGE_SIZES}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <InfoCard
                title={t('services.largeHall')}
                subtitle={t('services.largeHallSize')}
                description={t('services.largeHallDesc')}
                className="order-1 h-full lg:order-2"
              />
            </div>
          </div>
        </section>

        <section className="mb-32 overflow-hidden rounded-[3rem] bg-gradient-to-r from-[#162633] to-[#466C8A] p-12 text-center text-white md:p-20 lg:rounded-[100px]">
          <h2 className="mb-6 text-4xl font-normal md:text-6xl">{t('services.bookHall')}</h2>
          <p className="mb-12 text-xl text-white/80 md:text-2xl">
            {t('services.bookHallDesc')}
          </p>
          <a 
            href="tel:+972593115510"
            className="inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-[#EAB08E] to-[#D3AA97] px-10 py-5 text-2xl font-normal text-[#162633] transition-all hover:scale-105 active:scale-95"
          >
            {t('services.callUs')}: +972 59-311-5510
          </a>
        </section>

        <section className="mb-32">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-5xl font-normal text-[#304759] md:text-7xl">{t('services.packagesTitle')}</h2>
            <p className="text-xl text-[#304759]/60 md:text-2xl">
              {t('services.packagesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-2">
             <div className="min-h-[280px] overflow-hidden rounded-2xl md:min-h-0 md:rounded-3xl">
                <OptimizedPicture
                  picture={hotelNightSign}
                  alt={t('services.weddingPackage')}
                  sizes={SERVICE_FEATURE_IMAGE_SIZES}
                  className="h-full min-h-[280px] w-full object-cover md:min-h-full"
                  loading="lazy"
                />
              </div>
              <PackageCard
                title={t('services.weddingPackage')}
                points={weddingPackagePoints}
              />
          </div>
        </section>

        <section className="mb-32 overflow-hidden rounded-[3rem] bg-gradient-to-r from-[#162633] to-[#446987] p-12 text-center text-white md:p-20 lg:rounded-[100px]">
          <h2 className="mb-6 text-4xl font-normal md:text-6xl">{t('services.customPackages')}</h2>
          <p className="mb-12 text-xl text-white/80 md:text-2xl">
            {t('services.customDesc')}
          </p>
          <a 
            href="#contact"
            className="text-3xl font-normal text-white underline decoration-white/40 underline-offset-8 transition-colors hover:text-white/80"
          >
            {t('services.contactUs')}
          </a>
        </section>

        <section className="mb-32 text-center">
            <h2 className="mb-6 text-6xl font-normal text-[#304759] md:text-8xl">{t('services.restaurant')}</h2>
            <p className="mx-auto max-w-3xl text-2xl text-[#304759]/70">
              {t('services.restaurantDesc')}
            </p>
        </section>
      </main>

      <LuxuryFooter />
    </div>
  );
};

export default ServicesPage;
