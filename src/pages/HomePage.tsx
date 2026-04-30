import LuxuryFooter from '../components/LuxuryFooter'
import HotelImageSlider, {
  type HotelImageSlide,
} from '../components/HotelImageSlider'
import LuxuryNavbar from '../components/LuxuryNavbar'
import hotelEntrance from '../assets/hotel-entrance.png'
import hotelLounge from '../assets/hotel-lounge.png'
import hotelNightSign from '../assets/hotel-night-sign.png'

const introText =
  'Al-Qasr Hotel is one of the projects of Al-Rayyan Real Estate and Investment Company, reflecting the values of authentic Palestinian hospitality and distinguished hospitality experiences. Located away from the hustle and bustle of the city center, the hotel offers guests easy access to key facilities and attractions.'

const hotelSlides: HotelImageSlide[] = [
  {
    mainImage: hotelEntrance,
    secondaryImage: hotelNightSign,
    mainAlt: 'Al-Qasr Hotel entrance at night',
    secondaryAlt: 'Illuminated Al-Qasr Hotel sign at night',
    mainObjectPosition: 'center 54%',
    secondaryObjectPosition: 'center 44%',
  },
  {
    mainImage: hotelNightSign,
    secondaryImage: hotelLounge,
    mainAlt: 'Illuminated Al-Qasr Hotel sign at night',
    secondaryAlt: 'Al-Qasr Hotel lounge seating area',
    mainObjectPosition: 'center 40%',
    secondaryObjectPosition: 'center 52%',
  },
  {
    mainImage: hotelLounge,
    secondaryImage: hotelEntrance,
    mainAlt: 'Al-Qasr Hotel lounge seating area',
    secondaryAlt: 'Al-Qasr Hotel entrance facade and lit steps',
    mainObjectPosition: 'center 52%',
    secondaryObjectPosition: 'center 58%',
  },
]

function HomePage() {
  return (
    <>
      <LuxuryNavbar />

      <main className="mx-auto -mt-[clamp(34px,8vw,82px)] flex w-full max-w-[1456px] flex-col items-center px-5 pb-[clamp(62px,9.8vw,120px)] pt-0 sm:-mt-[clamp(82px,14vw,220px)] sm:px-6 lg:px-8">
        <section aria-labelledby="home-welcome-title" className="w-full text-center">
          <h1
            id="home-welcome-title"
            className="font-['Kurale',serif] text-[clamp(42px,11vw,90px)] font-normal leading-[0.95] tracking-normal text-[#304759]"
          >
            Welcome
          </h1>
          <p className="mt-2 font-['Kurale',serif] text-[clamp(20px,5.8vw,45px)] font-normal leading-none text-[#304759] sm:mt-3">
            Al-Qasr Hotel
          </p>

          <p className="mx-auto mt-[clamp(38px,8vw,106px)] max-w-[1344px] font-['Kurale',serif] text-[clamp(14px,3.9vw,35px)] font-normal leading-[1.5] text-[#304759] sm:leading-[1.45]">
            {introText}
          </p>
        </section>

        <HotelImageSlider slides={hotelSlides} autoPlay className="mt-[clamp(22px,5vw,56px)]" />
      </main>

      <LuxuryFooter className="!pt-0" />
    </>
  )
}

export default HomePage
