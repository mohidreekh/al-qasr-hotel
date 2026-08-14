import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import type { LuxuryNavItem } from './types'
import { LanguageSwitcher } from './LanguageSwitcher'

type MobileMenuProps = {
  isOpen: boolean
  onClose: () => void
  links: LuxuryNavItem[]
  activeId?: string
  currentLanguage?: string
  onLanguageToggle?: () => void
}

export function MobileMenu({
  isOpen,
  onClose,
  links,
  activeId,
  currentLanguage,
  onLanguageToggle,
}: MobileMenuProps) {
  const { t } = useTranslation()

  // Prevent background scroll on mobile when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-[#07121c]/98 p-6 text-white backdrop-blur-none min-[500px]:hidden animate-in fade-in duration-150">
      {/* Header inside overlay menu */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <span className="font-['Kurale',serif] text-xl font-medium text-[#C69479]">
          {t('home.hotelName')}
        </span>

        <div className="flex items-center gap-3">
          {currentLanguage && onLanguageToggle && (
            <LanguageSwitcher
              currentLanguage={currentLanguage}
              onToggle={onLanguageToggle}
            />
          )}

          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 active:scale-95"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Nav items container */}
      <nav aria-label="Mobile navigation links" className="mt-6 flex flex-col gap-2 overflow-y-auto font-['Kurale',serif]">
        {links.map((link) => {
          const isActive = link.id === activeId
          return (
            <Link
              key={link.id}
              to={link.href}
              onClick={onClose}
              className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-lg font-normal transition-colors active:bg-white/15 ${
                isActive
                  ? 'bg-white/12 text-[#C69479] font-medium'
                  : 'text-white/90 hover:bg-white/8 hover:text-white'
              }`}
            >
              <span>{link.label}</span>
              {isActive && <span className="h-2 w-2 rounded-full bg-[#C69479]" />}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
