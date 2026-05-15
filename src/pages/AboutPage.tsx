import { Check, Heart, Star, type LucideIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import aboutHotelInterior from '../assets/hotel-lounge.png'
import LuxuryFooter from '../components/LuxuryFooter'
import LuxuryNavbar from '../components/LuxuryNavbar'
import { getDefaultLinks } from '../utils/navigation'

const valueIcons: LucideIcon[] = [Star, Heart, Check]

type AboutValue = {
  title: string
  description: string
}

function AboutPage() {
  const { t, i18n } = useTranslation()
  const values = t('about.values', { returnObjects: true }) as AboutValue[]

  return (
    <>
      <LuxuryNavbar
        activeId="about"
        links={getDefaultLinks(t)}
        currentLanguage={i18n.language}
        onLanguageToggle={() => i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')}
      />

      <main className=" mx-auto lg:-mt-[clamp(80px,12vw,200px)] flex w-full max-w-[1456px] flex-col items-center px-5 pb-[clamp(62px,9.8vw,120px)] sm:px-6 lg:px-8">
        <section aria-labelledby="about-page-title" className="w-full text-center">
          <h1
            id="about-page-title"
            className="font-['Kurale',serif] text-[clamp(42px,11vw,90px)] font-normal leading-[0.95] tracking-normal text-[#304759]"
          >
            {t('about.title')}
          </h1>
          <p className="mt-2 font-['Kurale',serif] text-[clamp(20px,5.8vw,45px)] font-normal leading-none text-[#304759] sm:mt-3">
            {t('about.hotelName')}
          </p>

          <p className="mx-auto mt-[clamp(38px,8vw,106px)] max-w-[1344px] font-['Kurale',serif] text-[clamp(18px,4vw,35px)] font-normal leading-[1.5] text-[#304759] sm:leading-[1.45]">
            {t('about.intro')}
          </p>
        </section>

        <section aria-labelledby="about-interior-image" className="mt-[clamp(22px,5vw,56px)] w-full">
          <h2 id="about-interior-image" className="sr-only">
            {t('about.interiorAlt')}
          </h2>

          <div className="relative mx-auto w-full max-w-[1080px]">
            <figure className="relative overflow-hidden rounded-[30px] border border-[#d5aa93]/45 bg-white shadow-[0_18px_36px_rgba(20,32,42,0.12),0_8px_18px_rgba(198,148,121,0.08)] sm:rounded-[40px]">
              <img
                src={aboutHotelInterior}
                alt={t('about.interiorAlt')}
                className="block aspect-[16/9] w-full object-cover object-center"
              />
            </figure>
          </div>
        </section>

        <section aria-labelledby="about-values-title" className="mt-[clamp(48px,7vw,86px)] w-full">
          <div className="mx-auto max-w-[760px] text-center">
            <h2
              id="about-values-title"
              className="font-['Kurale',serif] text-[clamp(34px,8vw,60px)] font-normal leading-[0.96] text-[#304759]"
            >
              {t('about.valuesTitle')}
            </h2>
          </div>

          <div className="mx-auto mt-[clamp(28px,5vw,48px)] grid w-full max-w-[1060px] gap-y-10 md:grid-cols-3 md:gap-x-8 lg:gap-x-14">
            {values.map(({ title, description }, index) => {
              const Icon = valueIcons[index]
              return (
                <article
                  key={title}
                  className="group flex flex-col items-center px-4 text-center"
                >
                  <div className="relative mx-auto flex size-[clamp(108px,13vw,126px)] items-center justify-center rounded-full bg-[linear-gradient(135deg,#23394d_0%,#33526f_55%,#4f7598_100%)] transition duration-300 group-hover:scale-[1.03] group-hover:brightness-[1.03]">
                    {Icon ? (
                      <Icon
                        aria-hidden
                        className="h-[clamp(28px,4vw,42px)] w-[clamp(28px,4vw,42px)] text-white transition duration-300 group-hover:scale-105"
                        strokeWidth={1.75}
                      />
                    ) : null}
                  </div>

                  <h3 className="mt-5 font-['Kurale',serif] text-[clamp(24px,5vw,30px)] font-normal leading-none text-[#304759]">
                    {title}
                  </h3>

                  <p className="mx-auto mt-4 max-w-[260px] font-['Kurale',serif] text-[clamp(18px,3.6vw,22px)] leading-[1.55] text-[#304759]">
                    {description}
                  </p>
                </article>
              )
            })}
          </div>
        </section>
      </main>

      <LuxuryFooter className="!pt-0" />
    </>
  )
}

export default AboutPage
