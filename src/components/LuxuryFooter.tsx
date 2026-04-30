import facebookIcon from '../assets/icons8-facebook-48-1.png'
import instagramIcon from '../assets/icons8-instagram-48-1.png'
import locationIcon from '../assets/icons8-location-50-1.png'
import mailIcon from '../assets/icons8-mail-50-1.png'
import phoneIcon from '../assets/icons8-phone-50-1.png'
import tiktokIcon from '../assets/icons8-tiktok-250-1.png'

type FooterLink = {
  label: string
  href: string
  iconSrc: string
  ariaLabel?: string
}

type FooterContact = {
  label: string
  value: string
  href?: string
  iconSrc: string
}

type LuxuryFooterProps = {
  className?: string
  socialLinks?: FooterLink[]
  contactItems?: FooterContact[]
}

const cx = (...classes: Array<string | false | undefined>) =>
  classes.filter(Boolean).join(' ')

const defaultSocialLinks: FooterLink[] = [
  { label: 'Facebook', href: '#', iconSrc: facebookIcon },
  { label: 'Instagram', href: '#', iconSrc: instagramIcon },
  { label: 'Tik Tok', href: '#', iconSrc: tiktokIcon },
]

const defaultContactItems: FooterContact[] = [
  { label: 'Phone', value: '+972 59-311-5510', href: 'tel:+972593115510', iconSrc: phoneIcon },
  { label: 'Email', value: 'info@alqasrhotel.com', href: 'mailto:info@alqasrhotel.com', iconSrc: mailIcon },
  { label: 'Address', value: 'Nablus, Palestine', iconSrc: locationIcon },
]

const footerSurfaceStyle = {
  backgroundImage:
    'linear-gradient(180deg, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0.012) 20%, rgba(255,255,255,0) 44%), linear-gradient(98deg, #152633 0%, #203646 44%, #4f7190 100%)',
  boxShadow:
    '0 18px 34px rgba(17,28,40,0.14)',
}

function LuxuryFooter({
  className,
  socialLinks = defaultSocialLinks,
  contactItems = defaultContactItems,
}: LuxuryFooterProps) {
  return (
    <footer
      className={cx(
        'w-full overflow-x-clip bg-transparent px-4 py-10 sm:px-5',
        className,
      )}
    >
      <div
        className="mx-auto grid w-full max-w-[1456px] grid-cols-1 items-center gap-8 rounded-[28px] px-6 py-7 text-white sm:px-8 sm:py-8 md:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] md:items-start md:gap-12 lg:px-12 lg:py-10 xl:grid-cols-[340px_760px] xl:justify-center xl:gap-[clamp(90px,10vw,170px)]"
        style={footerSurfaceStyle}
      >
        <section aria-labelledby="luxury-footer-social" className="flex flex-col items-center">
          <h2
            id="luxury-footer-social"
            className="text-center font-['Roboto',sans-serif] text-[clamp(22px,5vw,44px)] font-bold leading-none tracking-wide"
          >
            Follow Us
          </h2>

          <ul className="mx-auto mt-[clamp(20px,5vw,40px)] flex w-full max-w-[18rem] flex-col items-center gap-[clamp(16px,4.5vw,34px)] md:max-w-none md:items-start">
            {socialLinks.map(({ label, href, iconSrc, ariaLabel }) => (
              <li key={label} className="w-full">
                <a
                  href={href}
                  aria-label={ariaLabel ?? label}
                  className="group inline-flex w-full items-center justify-center gap-[clamp(10px,1.2vw,18px)] text-center font-['Roboto',sans-serif] text-[clamp(12px,3.8vw,22px)] font-normal leading-none text-white/94 underline decoration-white/92 decoration-1 underline-offset-[4px] transition duration-300 hover:-translate-y-0.5 hover:text-white md:justify-start md:text-left"
                >
                  <img
                    src={iconSrc}
                    alt=""
                    className="h-[clamp(16px,4.6vw,34px)] w-[clamp(16px,4.6vw,34px)] shrink-0 object-contain transition duration-300 group-hover:scale-105"
                  />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="luxury-footer-contact" className="flex flex-col items-center">
          <h2
            id="luxury-footer-contact"
            className="text-center font-['Roboto',sans-serif] text-[clamp(22px,5vw,44px)] font-bold leading-none tracking-wide"
          >
            Contact
          </h2>

          <ul className="mx-auto mt-[clamp(20px,5vw,40px)] flex w-full max-w-[26rem] flex-col items-center gap-[clamp(16px,4.5vw,34px)] md:items-start">
            {contactItems.map(({ label, value, href, iconSrc }) => {
              const content = (
                <>
                  <img
                    src={iconSrc}
                    alt=""
                    className="mt-[2px] h-[clamp(16px,4.6vw,34px)] w-[clamp(16px,4.6vw,34px)] shrink-0 object-contain"
                  />
                  <span className="min-w-0 break-words text-center md:text-left">
                    {label}: {value}
                  </span>
                </>
              )

              return (
                <li key={label} className="w-full">
                  {href ? (
                    <a
                      href={href}
                      className="inline-flex w-full min-w-0 items-start justify-center gap-[clamp(10px,1.2vw,18px)] font-['Roboto',sans-serif] text-[clamp(12px,3.8vw,22px)] font-normal leading-[1.22] text-white/94 transition duration-300 hover:-translate-y-0.5 hover:text-white md:justify-start"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="inline-flex w-full min-w-0 items-start justify-center gap-[clamp(10px,1.2vw,18px)] font-['Roboto',sans-serif] text-[clamp(12px,3.8vw,22px)] font-normal leading-[1.22] text-white/94 md:justify-start">
                      {content}
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </section>
      </div>
    </footer>
  )
}

export default LuxuryFooter
