import { useId, useState } from 'react'
import defaultLogo from '../assets/al-qasr-logo.png'
import usaFlag from '../assets/icons8-usa-flag-48-1.png'

export type LuxuryNavItem = {
  label: string
  href: string
  accent?: boolean
}

type LuxuryNavbarProps = {
  logoSrc?: string
  logoAlt?: string
  logoHref?: string
  links?: LuxuryNavItem[]
  activeLabel?: string
  className?: string
}

const defaultLinks: LuxuryNavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'About us', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Book Now', href: '#', accent: true },
]

const shellPath =
  'M1 1H1252C1270 1 1279 10 1279 28V121C1279 137 1268 145 1238 150C1060 179 790 152 586 134C496 126 422 121 386 130C350 139 338 166 335 214C332 318 340 422 364 488C250 488 134 441 65 360C24 312 1 252 1 134V1Z'

const cx = (...classes: Array<string | false | undefined>) =>
  classes.filter(Boolean).join(' ')

function LuxuryNavbar({
  logoSrc = defaultLogo,
  logoAlt = 'Al-Qasr Hotel',
  logoHref = '#/',
  links = defaultLinks,
  activeLabel = 'Home',
  className,
}: LuxuryNavbarProps) {
  const reactId = useId()
  const svgId = reactId.replace(/:/g, '')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const fillId = `${svgId}-luxury-navbar-fill`
  const shadowId = `${svgId}-luxury-navbar-shadow`

  return (
    <header
      className={cx(
        'w-full overflow-x-clip overflow-y-visible bg-transparent px-3 sm:px-5',
        className,
      )}
    >
      <div className="relative mx-auto h-[182px] w-full max-w-[1490px] overflow-visible min-[500px]:h-[clamp(220px,33vw,418px)]">
        <svg
          aria-hidden="true"
          viewBox="0 0 1280 492"
          preserveAspectRatio="none"
          className="absolute inset-0 z-0 h-full w-full overflow-visible"
        >
          <defs>
            <linearGradient id={fillId} x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#07121c" />
              <stop offset="48%" stopColor="#142433" />
              <stop offset="100%" stopColor="#244458" />
            </linearGradient>
            <filter id={shadowId} x="-16%" y="-18%" width="132%" height="164%">
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="7"
                floodColor="#9d7778"
                floodOpacity="0.5"
              />
              <feDropShadow
                dx="0"
                dy="10"
                stdDeviation="10"
                floodColor="#7d5b5e"
                floodOpacity="0.3"
              />
              <feDropShadow
                dx="0"
                dy="18"
                stdDeviation="12"
                floodColor="#342429"
                floodOpacity="0.28"
              />
            </filter>
          </defs>

          <path d={shellPath} fill={`url(#${fillId})`} filter={`url(#${shadowId})`} />
        </svg>

        <a
          href={logoHref}
          aria-label="Al-Qasr Hotel home"
          className="absolute left-[5%] top-[4%] z-10 flex w-[132px] items-center justify-center transition duration-300 hover:scale-[1.015] min-[500px]:left-[4.2%] min-[500px]:top-[0.01%] min-[500px]:w-[clamp(142px,22vw,310px)]"
        >
          <img
            src={logoSrc}
            alt={logoAlt}
            className="h-auto w-full object-contain drop-shadow-[0_10px_18px_rgba(0,0,0,0.28)]"
          />
        </a>

        <div className="absolute right-[4.8%] top-[6.5%] z-20 flex items-center gap-1 pr-1 font-['Kurale',serif] text-[10px] font-normal leading-none text-white min-[500px]:right-[0.8%] min-[500px]:top-[2.6%] sm:text-[clamp(11px,1.1vw,18px)]">
          <img
            src={usaFlag}
            alt=""
            className="h-[9px] w-[17px] rounded-[1px] object-cover shadow-[0_0_5px_rgba(255,255,255,0.2)] sm:h-[14px] sm:w-7"
          />
          <span>EN</span>
        </div>

        <nav
          aria-label="Primary navigation"
          className="absolute right-[5.6%] top-[14.7%] z-20 hidden items-center gap-[clamp(14px,3.08vw,56px)] font-['Kurale',serif] font-normal leading-none text-white min-[500px]:flex"
        >
          {links.map((link) => {
            const isActive = link.label === activeLabel

            return (
              <a
                key={link.label}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={cx(
                  'group relative whitespace-nowrap pb-2 font-normal transition duration-300 hover:-translate-y-0.5 hover:text-sky-100',
                  link.accent
                    ? 'text-[clamp(11px,1.9vw,28px)] text-[#C69479] [-webkit-text-stroke:1px_#D3A282] [paint-order:stroke_fill] hover:text-[#C69479]'
                    : 'text-[clamp(12px,2.08vw,31px)]',
                )}
              >
                <span>{link.label}</span>
                <span
                  className={cx(
                    'absolute bottom-0 left-0 h-px bg-current transition-all duration-300',
                    isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-80',
                  )}
                />
              </a>
            )
          })}
        </nav>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="absolute right-[5.6%] top-[15.2%] z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/8 shadow-[0_8px_18px_rgba(0,0,0,0.18)] backdrop-blur transition duration-300 hover:bg-white/14 min-[500px]:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="relative h-4 w-5">
            <span
              className={cx(
                'absolute left-0 top-0 h-0.5 w-5 rounded-full bg-white transition duration-300',
                isMenuOpen && 'translate-y-[7px] rotate-45',
              )}
            />
            <span
              className={cx(
                'absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-white transition duration-300',
                isMenuOpen && 'opacity-0',
              )}
            />
            <span
              className={cx(
                'absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-white transition duration-300',
                isMenuOpen && '-translate-y-[7px] -rotate-45',
              )}
            />
          </span>
        </button>

        <div
          className={cx(
            'absolute left-[5%] right-[5%] top-[34%] z-30 overflow-hidden rounded-[24px] border border-white/15 bg-[#0d1d2b]/96 shadow-[0_16px_28px_rgba(10,20,32,0.35)] backdrop-blur transition-all duration-300 min-[500px]:hidden',
            isMenuOpen
              ? 'max-h-80 opacity-100'
              : 'pointer-events-none max-h-0 border-transparent opacity-0',
          )}
        >
          <nav aria-label="Mobile navigation" className="flex flex-col px-5 py-4 font-['Kurale',serif] text-base font-normal text-white">
            {links.map((link) => {
              const isActive = link.label === activeLabel

              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setIsMenuOpen(false)}
                  className={cx(
                    'flex items-center justify-between border-b border-white/10 py-3 font-normal transition duration-300 last:border-b-0 hover:pl-1 hover:text-sky-100',
                    link.accent && 'text-[#C69479] [-webkit-text-stroke:1px_#D3A282] [paint-order:stroke_fill] hover:text-[#C69479]',
                  )}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="h-px w-10 bg-current" />}
                </a>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default LuxuryNavbar
