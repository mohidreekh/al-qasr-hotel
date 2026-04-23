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

      <main className="mx-auto -mt-[clamp(102px,15.8vw,220px)] flex w-full max-w-[1456px] flex-col items-center px-4 pb-[clamp(62px,9.8vw,120px)] pt-0 sm:px-5">
        <section aria-labelledby="home-welcome-title" className="w-full text-center">
          <h1
            id="home-welcome-title"
            className="font-['Kurale',serif] text-[clamp(50px,8.68vw,90px)] font-normal leading-[0.95] tracking-normal text-[#304759]"
          >
            Welcome
          </h1>
          <p className="mt-3 font-['Kurale',serif] text-[clamp(23px,4.2vw,45px)] font-normal leading-none text-[#304759]">
            Al-Qasr Hotel
          </p>

          <p className="mx-auto mt-[clamp(67px,9.8vw,106px)] max-w-[1344px] font-['Kurale',serif] text-[clamp(14px,2.87vw,35px)] font-normal leading-[1.45] text-[#304759]">
            {introText}
          </p>
        </section>

        <HotelImageSlider slides={hotelSlides} autoPlay />
      </main>

      <LuxuryFooter className="!pt-0" />
    </>
  )
}

export default HomePage
