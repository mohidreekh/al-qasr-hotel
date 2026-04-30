import locationIcon from '../assets/icons8-location-50-1.png'
import mailIcon from '../assets/icons8-mail-50-1.png'
import phoneIcon from '../assets/icons8-phone-50-1.png'
import LuxuryFooter from '../components/LuxuryFooter'
import LuxuryNavbar from '../components/LuxuryNavbar'
import { primaryNavLinks } from '../siteNavigation'

const contactIntroText =
  'Get in touch with us for any inquiries, reservations, or special requests. We are here to make your stay at Al-Qasr Hotel smooth and welcoming.'

type ContactItem = {
  title: string
  value: string
  href?: string
  iconSrc: string
}

const contactItems: ContactItem[] = [
  {
    title: 'Phone',
    value: '+972 59-311-5510',
    href: 'tel:+972593115510',
    iconSrc: phoneIcon,
  },
  {
    title: 'Email',
    value: 'info@alqasrhotel.com',
    href: 'mailto:info@alqasrhotel.com',
    iconSrc: mailIcon,
  },
  {
    title: 'Address',
    value: 'Nablus City, Palestine',
    iconSrc: locationIcon,
  },
] as const

const formFields = [
  { label: 'Full Name', type: 'text', name: 'fullName', autoComplete: 'name' },
  { label: 'Phone Number', type: 'tel', name: 'phoneNumber', autoComplete: 'tel' },
  { label: 'Email Address', type: 'email', name: 'emailAddress', autoComplete: 'email' },
  { label: 'Subject', type: 'text', name: 'subject', autoComplete: 'off' },
] as const

function ContactPage() {
  return (
    <>
      <LuxuryNavbar links={primaryNavLinks} activeLabel="Contact" />

      <main className="mx-auto -mt-[clamp(34px,8vw,82px)] flex w-full max-w-[1456px] flex-col items-center px-5 pb-[clamp(62px,9.8vw,120px)] pt-0 sm:-mt-[clamp(82px,14vw,220px)] sm:px-6 lg:px-8">
        <section aria-labelledby="contact-page-title" className="w-full text-center">
          <h1
            id="contact-page-title"
            className="font-['Kurale',serif] text-[clamp(42px,11vw,90px)] font-normal leading-[0.95] tracking-normal text-[#304759]"
          >
            Contact Us
          </h1>
          <p className="mt-2 font-['Kurale',serif] text-[clamp(20px,5.8vw,45px)] font-normal leading-none text-[#304759] sm:mt-3">
            Al-Qasr Hotel
          </p>

          <p className="mx-auto mt-[clamp(38px,8vw,106px)] max-w-[1344px] font-['Kurale',serif] text-[clamp(14px,3.9vw,35px)] font-normal leading-[1.5] text-[#304759] sm:leading-[1.45]">
            {contactIntroText}
          </p>
        </section>

        <section
          aria-labelledby="contact-content-title"
          className="mt-[clamp(34px,6vw,62px)] w-full"
        >
          <h2 id="contact-content-title" className="sr-only">
            Contact information and message form
          </h2>

          <div className="grid gap-[clamp(32px,6vw,76px)] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
            <div className="flex flex-col">
              <section aria-labelledby="contact-info-title">
                <h3
                  id="contact-info-title"
                  className="font-['Kurale',serif] text-[clamp(26px,5vw,46px)] font-normal leading-none text-[#304759]"
                >
                  Contact Information
                </h3>

                <div className="mt-[clamp(22px,4.6vw,40px)] space-y-[clamp(18px,3.6vw,30px)]">
                  {contactItems.map(({ title, value, href, iconSrc }) => {
                    const valueContent = href ? (
                      <a
                        href={href}
                        className="transition duration-300 hover:text-[#203646]"
                      >
                        {value}
                      </a>
                    ) : (
                      value
                    )

                    return (
                      <article key={title} className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/75 shadow-[0_10px_18px_rgba(20,32,42,0.08)] ring-1 ring-white/80">
                          <img src={iconSrc} alt="" className="h-5 w-5 object-contain opacity-85" />
                        </div>

                        <div className="min-w-0">
                          <h4 className="font-['Kurale',serif] text-[clamp(22px,4.2vw,34px)] font-normal leading-none text-[#304759]">
                            {title}
                          </h4>
                          <p className="mt-3 font-['Roboto',sans-serif] text-[clamp(14px,3.2vw,22px)] leading-[1.45] text-[#425869]">
                            {valueContent}
                          </p>
                        </div>
                      </article>
                    )
                  })}
                </div>
              </section>

              <section aria-labelledby="contact-location-title" className="mt-[clamp(34px,6vw,58px)]">
                <h3
                  id="contact-location-title"
                  className="font-['Kurale',serif] text-[clamp(26px,5vw,46px)] font-normal leading-none text-[#304759]"
                >
                  Location
                </h3>

                <div className="mt-[clamp(18px,4vw,30px)] overflow-hidden rounded-[28px] border border-white/75 bg-white shadow-[0_16px_32px_rgba(20,32,42,0.1),0_8px_18px_rgba(198,148,121,0.08)] ring-1 ring-white/70">
                  <iframe
                    title="Al-Qasr Hotel location in Nablus"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=35.2438%2C32.2149%2C35.2747%2C32.2314&layer=mapnik&marker=32.2231%2C35.2592"
                    className="h-[clamp(220px,34vw,320px)] w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </section>
            </div>

            <section aria-labelledby="contact-form-title" className="flex flex-col">
              <h3
                id="contact-form-title"
                className="font-['Kurale',serif] text-[clamp(26px,5vw,46px)] font-normal leading-none text-[#304759]"
              >
                Send us a Message
              </h3>

              <form className="mt-[clamp(22px,4.6vw,40px)] space-y-[clamp(18px,3.8vw,28px)]">
                {formFields.map(({ label, type, name, autoComplete }) => (
                  <label key={name} className="block">
                    <span className="block font-['Kurale',serif] text-[clamp(20px,4vw,30px)] text-[#304759]">
                      {label}
                    </span>
                    <input
                      type={type}
                      name={name}
                      autoComplete={autoComplete}
                      className="mt-3 h-[clamp(48px,8vw,64px)] w-full rounded-[18px] border border-white/80 bg-[rgba(255,255,255,0.82)] px-5 font-['Roboto',sans-serif] text-[clamp(14px,3vw,20px)] text-[#304759] shadow-[0_10px_22px_rgba(20,32,42,0.06)] outline-none transition duration-300 placeholder:text-[#7f8f9b] focus:border-[#d5aa93] focus:bg-white focus:shadow-[0_14px_28px_rgba(198,148,121,0.14)]"
                    />
                  </label>
                ))}

                <label className="block">
                  <span className="block font-['Kurale',serif] text-[clamp(20px,4vw,30px)] text-[#304759]">
                    Message
                  </span>
                  <textarea
                    name="message"
                    rows={6}
                    className="mt-3 w-full rounded-[22px] border border-white/80 bg-[rgba(255,255,255,0.82)] px-5 py-4 font-['Roboto',sans-serif] text-[clamp(14px,3vw,20px)] text-[#304759] shadow-[0_10px_22px_rgba(20,32,42,0.06)] outline-none transition duration-300 placeholder:text-[#7f8f9b] focus:border-[#d5aa93] focus:bg-white focus:shadow-[0_14px_28px_rgba(198,148,121,0.14)]"
                  />
                </label>

                <button
                  type="button"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[linear-gradient(135deg,#9f755f_0%,#c69479_45%,#d8ad8e_100%)] px-8 py-3 font-['Kurale',serif] text-[clamp(18px,3.6vw,26px)] text-white shadow-[0_14px_26px_rgba(159,117,95,0.25)] transition duration-300 hover:-translate-y-0.5 hover:brightness-[1.03]"
                >
                  Send Message
                </button>
              </form>
            </section>
          </div>
        </section>
      </main>

      <LuxuryFooter className="!pt-0" />
    </>
  )
}

export default ContactPage
