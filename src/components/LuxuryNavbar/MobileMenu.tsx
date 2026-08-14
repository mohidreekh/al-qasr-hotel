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
        'grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out',
        isOpen ? 'mt-2 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none',
      )}
    >
      <div className="overflow-hidden">
        <nav
          aria-label="Mobile navigation"
          className="rounded-2xl border border-white/12 bg-[#0d1d2b]/98 px-4 py-2 font-['Kurale',serif] text-base font-normal text-white shadow-[0_8px_20px_rgba(8,16,28,0.24)]"
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
    </div>
  )
}
