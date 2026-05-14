import { lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Phone, Mail, MapPin } from 'lucide-react'
import LuxuryNavbar from '../components/LuxuryNavbar'
import ContactForm from '../components/ContactForm'

const LuxuryFooter = lazy(() => import('../components/LuxuryFooter'))

function ContactUs() {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'

  return (
    <div 
      className="min-h-screen bg-[#fcfcfc] text-[#304759]" 
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <LuxuryNavbar activeLabel="contact" />

      <main className="mx-auto -mt-[clamp(40px,10vw,100px)] flex w-full max-w-[1456px] flex-col items-center px-5 pb-20 pt-0 sm:-mt-[clamp(100px,18vw,280px)] sm:px-6 lg:px-8">
        {/* Header Section */}
        <section className="w-full text-center mb-12 sm:mb-20">
          <h1 className="font-['Kurale',serif] text-[clamp(48px,9vw,96px)] font-normal leading-tight text-[#304759] uppercase tracking-wide">
            {t('contactPage.title')}
          </h1>
          <p className="mt-4 font-['Kurale',serif] text-[clamp(18px,2.5vw,28px)] font-normal text-[#304759]/70 max-w-2xl mx-auto leading-relaxed">
            {t('contactPage.subtitle')}
          </p>
        </section>

        <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Left Column: Contact Information & Location */}
          <section className="lg:col-span-5 flex flex-col gap-12">
            <div className="space-y-10">
              <h2 className="font-['Kurale',serif] text-[clamp(28px,3.5vw,38px)] font-normal text-[#304759] border-b border-[#304759]/10 pb-4 inline-block">
                {t('contactPage.infoTitle')}
              </h2>

              <div className="grid gap-8">
                <div className="flex items-center gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-[0_10px_30px_rgba(48,71,89,0.08)] flex items-center justify-center border border-[#304759]/5 transition-all duration-300 group-hover:bg-[#304759] group-hover:text-white">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-['Kurale',serif] text-lg font-medium text-[#304759]/60 mb-0.5">
                      {t('contactPage.phone')}
                    </h3>
                    <p className="text-xl font-medium text-[#304759] [direction:ltr] text-start tracking-tight">+970 59-311-5510</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-[0_10px_30px_rgba(48,71,89,0.08)] flex items-center justify-center border border-[#304759]/5 transition-all duration-300 group-hover:bg-[#304759] group-hover:text-white">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-['Kurale',serif] text-lg font-medium text-[#304759]/60 mb-0.5">
                      {t('contactPage.email')}
                    </h3>
                    <p className="text-xl font-medium text-[#304759] break-all">awwad.hamdan@alqaser.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-[0_10px_30px_rgba(48,71,89,0.08)] flex items-center justify-center border border-[#304759]/5 transition-all duration-300 group-hover:bg-[#304759] group-hover:text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-['Kurale',serif] text-lg font-medium text-[#304759]/60 mb-0.5">
                      {t('contactPage.address')}
                    </h3>
                    <p className="text-xl font-medium text-[#304759]">{t('contactPage.addressValue')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h2 className="font-['Kurale',serif] text-[clamp(28px,3.5vw,38px)] font-normal text-[#304759] border-b border-[#304759]/10 pb-4 inline-block mb-8">
                {t('contactPage.location')}
              </h2>
              <div className="relative group overflow-hidden rounded-[40px] shadow-[0_20px_50px_rgba(48,71,89,0.12)] border-[8px] border-white transition-all duration-500 hover:shadow-[0_30px_70px_rgba(48,71,89,0.18)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1938.651285654074!2d35.23976612421322!3d32.22072245626821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ce06beb49f4b5%3A0x541b781297cdcae1!2z2YHZhtiv2YIg2KfZhNmC2LXYsQ!5e0!3m2!1sen!2s!4v1778691315922!5m2!1sen!2s"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Al-Qasr Hotel Location"
                  className="grayscale-[0.2] contrast-[1.1] transition-all duration-700 group-hover:grayscale-0"
                ></iframe>
                <div className="absolute inset-0 pointer-events-none border border-[#304759]/5 rounded-[32px]"></div>
              </div>
            </div>
          </section>

          {/* Right Column: Message Form */}
          <ContactForm />
        </div>
      </main>

      <Suspense fallback={null}>
        <LuxuryFooter />
      </Suspense>
    </div>
  )
}

export default ContactUs
