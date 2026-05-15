import { NavItem } from './NavItem'
import type { LuxuryNavItem } from './types'
import { cx } from './utils'

type MobileMenuProps = {
  isOpen: boolean
  onClose: () => void
  links: LuxuryNavItem[]
  activeId?: string
}

export function MobileMenu({ isOpen, onClose, links, activeId }: MobileMenuProps) {
  return (
    <div
      className={cx(
        'overflow-hidden transition-all duration-300 ease-out',
        isOpen ? 'mt-2 max-h-80 opacity-100' : 'max-h-0 opacity-0',
      )}
    >
      <nav
        aria-label="Mobile navigation"
        className="rounded-2xl border border-white/12 bg-[#0d1d2b]/98 px-4 py-2 font-['Kurale',serif] text-base font-normal text-white shadow-[0_12px_28px_rgba(8,16,28,0.28)]"
      >
        {links.map((link) => (
          <NavItem
            key={link.id}
            item={link}
            isActive={link.id === activeId}
            isMobile
            onClick={onClose}
          />
        ))}
      </nav>
    </div>
  )
}
