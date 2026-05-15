import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, type LucideIcon } from 'lucide-react'

import facebookIcon from '../assets/icons8-facebook-48-1.png'
import instagramIcon from '../assets/icons8-instagram-48-1.png'
import tiktokIcon from '../assets/icons8-tiktok-250-1.png'

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/share/1GTwSjADM2/?mibextid=wwXIfr', icon: facebookIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/al.qaserhotel.ps?igsh=aWp2MmkxbjY4aTFm', icon: instagramIcon },
  { label: 'TikTok', href: 'https://www.tiktok.com/@al.qaser.hotel?_r=1&_t=ZS-96NbNMHr1D3', icon: tiktokIcon },
] as const

type LuxuryFooterProps = {
  className?: string
}

type ContactItem = {
  label: string
  value: string
  href?: string
  Icon: LucideIcon
}

function IconTile({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15 transition group-hover:bg-[#C69479]/25 group-hover:ring-[#C69479]/40">
      {children}
    </span>
  )
}

function LuxuryFooter({ className = '' }: LuxuryFooterProps) {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  const contacts: ContactItem[] = [
    {
      label: t('footer.phone'),
      value: '+970 59-311-5510',
      href: 'tel:+970593115510',
      Icon: Phone,
    },
    {
      label: t('footer.email'),
      value: 'awwad.hamdan@alqaser.com',
      href: 'mailto:awwad.hamdan@alqaser.com',
      Icon: Mail,
    },
    {
      label: t('footer.address'),
      value: t('footer.addressValue'),
      Icon: MapPin,
    },
  ]

  const rowClass =
    'group inline-flex w-full max-w-sm items-center gap-4 transition hover:text-white'

  return (
    <footer
      className={`mt-16 bg-gradient-to-b from-[#12202c] via-[#1a3348] to-[#243f55] text-white ${className}`}
    >
      <div className="mx-auto max-w-2xl px-6 py-12 text-center sm:py-14">
        <Link
          to="/"
          className="font-['Kurale',serif] text-[clamp(28px,6vw,40px)] leading-tight text-white transition hover:text-[#E8C4A8]"
        >
          {t('home.hotelName')}
        </Link>

        <ul className="mt-10 flex flex-col items-center gap-6">
          {contacts.map(({ label, value, href, Icon }) => {
            const content = (
              <>
                <IconTile>
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </IconTile>
                <span className="min-w-0 text-start">
                  <span className="block text-base font-medium uppercase tracking-wider text-white/45">
                    {label}
                  </span>
                  <span className="mt-1 block font-['Kurale',serif] text-xl leading-snug text-white/95 [direction:ltr]">
                    {value}
                  </span>
                </span>
              </>
            )

            return (
              <li key={label} className="w-full max-w-sm">
                {href ? (
                  <a href={href} className={rowClass}>
                    {content}
                  </a>
                ) : (
                  <div className={rowClass}>{content}</div>
                )}
              </li>
            )
          })}
        </ul>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {socialLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 transition hover:bg-[#C69479]/25 hover:ring-[#C69479]/40"
            >
              <img src={icon} alt="" className="h-10 w-10 object-contain opacity-90" />
            </a>
          ))}
        </div>

        <p className="mt-10 text-base text-white/35">
          © {year} {t('home.hotelName')}
        </p>
      </div>
    </footer>
  )
}

export default LuxuryFooter
