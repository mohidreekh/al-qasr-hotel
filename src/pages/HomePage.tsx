import { lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next'

import HotelImageSlider, {
  type HotelImageSlide,
} from '../components/HotelImageSlider'
import LcpImagePreload from '../components/LcpImagePreload'
import LuxuryNavbar from '../components/LuxuryNavbar'
import { getDefaultLinks } from '../utils/navigation'
import { SLIDER_MAIN_SIZES } from '../lib/sliderImageSizes'

import hotelEntrance from '../assets/hotel-entrance.png?w=400;800;1200;1600&format=avif;webp;jpeg&quality=68&effort=6&as=picture'
import hotelLounge from '../assets/hotel-lounge.png?w=400;800;1200;1600&format=avif;webp;jpeg&quality=68&effort=6&as=picture'
import hotelNightSign from '../assets/hotel-night-sign.png?w=400;800;1200;1600&format=avif;webp;jpeg&quality=68&effort=6&as=picture'

const LuxuryFooter = lazy(() => import('../components/LuxuryFooter'))

/** Slider assets: AVIF/WebP/JPEG + multi-width srcsets via vite-imagetools (build-time sharp). */
const hotelSlides: HotelImageSlide[] = [
  {
    main: hotelEntrance,
    secondary: hotelNightSign,
    mainAlt: 'Al-Qasr Hotel entrance at night',
    secondaryAlt: 'Illuminated Al-Qasr Hotel sign at night',
    mainObjectPosition: 'center 54%',
    secondaryObjectPosition: 'center 44%',
  },
  {
    main: hotelNightSign,
    secondary: hotelLounge,
    mainAlt: 'Illuminated Al-Qasr Hotel sign at night',
    secondaryAlt: 'Al-Qasr Hotel lounge seating area',
    mainObjectPosition: 'center 40%',
    secondaryObjectPosition: 'center 52%',
  },
  {
    main: hotelLounge,
    secondary: hotelEntrance,
    mainAlt: 'Al-Qasr Hotel lounge seating area',
    secondaryAlt: 'Al-Qasr Hotel facade and lit steps',
    mainObjectPosition: 'center 52%',
    secondaryObjectPosition: 'center 58%',
  },
]

function HomePage() {
  const { t, i18n } = useTranslation()
  const lcpSlide = hotelSlides[0]

  return (
    <>
      <LcpImagePreload picture={lcpSlide.main} sizes={SLIDER_MAIN_SIZES} />

      <LuxuryNavbar
        activeId="home"
        links={getDefaultLinks(t)}
        currentLanguage={i18n.language}
        onLanguageToggle={() => i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')}
      />

      <main className="mx-auto flex w-full max-w-[1456px] flex-col items-center px-5 pb-[clamp(62px,9.8vw,120px)] sm:px-6 lg:px-8">
        <section aria-labelledby="home-welcome-title" className="w-full text-center">
          <h1
            id="home-welcome-title"
            className="font-['Kurale',serif] text-[clamp(42px,11vw,90px)] font-normal leading-[0.95] tracking-normal text-[#304759]"
          >
            {t('home.welcome')}
          </h1>
          <p className="mt-2 font-['Kurale',serif] text-[clamp(20px,5.8vw,45px)] font-normal leading-none text-[#304759] sm:mt-3">
            {t('home.hotelName')}
          </p>

          <p className="mx-auto mt-[clamp(38px,8vw,106px)] max-w-[1344px] font-['Kurale',serif] text-[clamp(14px,3.9vw,35px)] font-normal leading-[1.5] text-[#304759] sm:leading-[1.45]">
            {t('home.intro')}
          </p>
        </section>

        <HotelImageSlider slides={hotelSlides} autoPlay className="mt-[clamp(22px,5vw,56px)]" />
      </main>

      <Suspense fallback={null}>
        <LuxuryFooter className="!pt-0" />
      </Suspense>
    </>
  )
}

export default HomePage
