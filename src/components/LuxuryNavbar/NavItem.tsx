import type { LuxuryNavItem } from './types'
import { cx } from './utils'

type NavItemProps = {
  item: LuxuryNavItem
  isActive: boolean
  isMobile?: boolean
  onClick?: () => void
}

export function NavItem({ item, isActive, isMobile, onClick }: NavItemProps) {
  if (isMobile) {
    return (
      <a
        href={item.href}
        aria-current={isActive ? 'page' : undefined}
        onClick={onClick}
        className={cx(
          'flex items-center justify-between border-b border-white/10 py-3 font-normal transition duration-300 last:border-b-0 hover:pl-1 hover:text-sky-100',
          item.accent &&
            'text-[#C69479] [-webkit-text-stroke:1px_#D3A282] [paint-order:stroke_fill] hover:text-[#C69479]',
        )}
      >
        <span>{item.label}</span>
        {isActive && <span className="h-px w-10 bg-current" />}
      </a>
    )
  }

  return (
    <a
      href={item.href}
      aria-current={isActive ? 'page' : undefined}
      onClick={onClick}
      className={cx(
        'group relative whitespace-nowrap pb-2 font-normal transition duration-300 hover:-translate-y-0.5 hover:text-sky-100',
        item.accent
          ? 'text-[clamp(11px,1.9vw,28px)] text-[#C69479] [-webkit-text-stroke:1px_#D3A282] [paint-order:stroke_fill] hover:text-[#C69479]'
          : 'text-[clamp(12px,2.08vw,31px)]',
      )}
    >
      <span>{item.label}</span>
      <span
        className={cx(
          'absolute bottom-0 left-0 h-px bg-current transition-all duration-300',
          isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-80',
        )}
      />
    </a>
  )
}
