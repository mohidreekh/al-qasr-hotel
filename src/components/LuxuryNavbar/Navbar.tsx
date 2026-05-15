import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavbarShell } from './NavbarShell'
import { LanguageSwitcher } from './LanguageSwitcher'
import { MobileMenu } from './MobileMenu'
import { NavItem } from './NavItem'
import type { LuxuryNavbarProps } from './types'
import { cx } from './utils'
import defaultLogo from '../../assets/al-qasr-logo.png'

function MenuButton({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
      aria-expanded={isOpen}
      onClick={onClick}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 transition duration-300 hover:bg-white/16"
    >
      <span className="relative h-4 w-5">
        <span
          className={cx(
            'absolute left-0 top-0 h-0.5 w-5 rounded-full bg-white transition duration-300',
            isOpen && 'translate-y-[7px] rotate-45',
          )}
        />
        <span
          className={cx(
            'absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-white transition duration-300',
            isOpen && 'opacity-0',
          )}
        />
        <span
          className={cx(
            'absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-white transition duration-300',
            isOpen && '-translate-y-[7px] -rotate-45',
          )}
        />
      </span>
    </button>
  )
}

export function Navbar({
  logoSrc = defaultLogo,
  logoAlt = 'Al-Qasr Hotel',
  links,
  activeId,
  isMenuOpen: externalIsMenuOpen,
  onMenuToggle,
  currentLanguage,
  onLanguageToggle,
}: LuxuryNavbarProps) {
  const [internalIsMenuOpen, setInternalIsMenuOpen] = useState(false)

  const isMenuOpen = externalIsMenuOpen !== undefined ? externalIsMenuOpen : internalIsMenuOpen

  const handleToggle = () => {
    const newState = !isMenuOpen
    onMenuToggle?.(newState)
    if (externalIsMenuOpen === undefined) {
      setInternalIsMenuOpen(newState)
    }
  }

  const handleClose = () => {
    if (onMenuToggle && isMenuOpen) {
      onMenuToggle(false)
    }
    if (externalIsMenuOpen === undefined) {
      setInternalIsMenuOpen(false)
    }
  }

  return (
    <header className="mb-6 w-full bg-transparent min-[500px]:mb-14">
      {/* Mobile: compact bar — no decorative shell */}
      <div className="px-3 pt-3 min-[500px]:hidden">
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0a1824] via-[#142433] to-[#1e3a52] px-3 py-2.5 shadow-[0_10px_28px_rgba(8,16,28,0.22)]">
          <Link to="/" aria-label={`${logoAlt} home`} className="min-w-0 shrink">
            <img
              src={logoSrc}
              alt={logoAlt}
              className="h-11 w-auto max-w-[7.5rem] object-contain"
            />
          </Link>

          <div className="ms-auto flex items-center gap-2">
            {currentLanguage && onLanguageToggle && (
              <LanguageSwitcher
                currentLanguage={currentLanguage}
                onToggle={onLanguageToggle}
              />
            )}
            <MenuButton isOpen={isMenuOpen} onClick={handleToggle} />
          </div>
        </div>

        <MobileMenu
          isOpen={isMenuOpen}
          onClose={handleClose}
          links={links}
          activeId={activeId}
        />
      </div>

      {/* Desktop: original shell layout */}
      <div className="relative mx-auto hidden h-[clamp(220px,33vw,418px)] w-full max-w-[1490px] overflow-visible px-3 min-[500px]:block sm:px-5">
        <NavbarShell />

        <Link
          to="/"
          aria-label={`${logoAlt} home`}
          className="absolute left-[1.5%] top-[0.01%] z-10 flex w-[clamp(142px,22vw,310px)] items-center justify-center transition duration-300 hover:scale-[1.015]"
        >
          <img
            src={logoSrc}
            alt={logoAlt}
            className="h-auto w-full object-contain drop-shadow-[0_10px_18px_rgba(0,0,0,0.28)]"
          />
        </Link>

        {currentLanguage && onLanguageToggle && (
          <LanguageSwitcher currentLanguage={currentLanguage} onToggle={onLanguageToggle} />
        )}

        <nav
          aria-label="Primary navigation"
          className="absolute right-[5.6%] top-[14.7%] z-20 flex items-center gap-[clamp(14px,3.08vw,56px)] font-['Kurale',serif] font-normal leading-none text-white"
        >
          {links.map((link) => (
            <NavItem key={link.id} item={link} isActive={link.id === activeId} />
          ))}
        </nav>
      </div>
    </header>
  )
}
