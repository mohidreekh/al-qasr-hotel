import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { LuxuryNavItem } from './types'
import { cx } from './utils'

type NavItemProps = {
  item: LuxuryNavItem
  isActive: boolean
  isMobile?: boolean
  onClick?: () => void
}

export function NavItem({ item, isActive, isMobile, onClick }: NavItemProps) {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const hasChildren = Boolean(item.children?.length)

  if (isMobile && hasChildren) {
    return (
      <div className="border-b border-white/10 last:border-b-0">
        <button
          type="button"
          aria-expanded={isSubmenuOpen}
          aria-haspopup="menu"
          onClick={() => setIsSubmenuOpen((isOpen) => !isOpen)}
          className={cx(
            'flex w-full items-center justify-between py-3 text-start font-normal transition duration-300 hover:pl-1 hover:text-sky-100',
            item.accent &&
              'text-[#C69479] [-webkit-text-stroke:1px_#D3A282] [paint-order:stroke_fill] hover:text-[#C69479]',
          )}
        >
          <span>{item.label}</span>
          <span className="flex items-center gap-3">
            {isActive && <span className="h-px w-10 bg-current" />}
            <ChevronDown
              aria-hidden="true"
              className={cx(
                'h-4 w-4 transition-transform duration-300',
                isSubmenuOpen && 'rotate-180',
              )}
            />
          </span>
        </button>

        <div
          role="menu"
          className={cx(
            'overflow-hidden rounded-xl bg-white/7 text-sm text-white/85 transition-all duration-300',
            isSubmenuOpen ? 'mb-3 max-h-64 opacity-100' : 'max-h-0 opacity-0',
          )}
        >
          {item.children?.map((child) => (
            <a
              key={child.id}
              href={child.href}
              role="menuitem"
              onClick={() => {
                setIsSubmenuOpen(false)
                onClick?.()
              }}
              className="block px-4 py-2.5 text-start transition duration-300 hover:bg-white/10 hover:text-white"
            >
              {child.label}
            </a>
          ))}
        </div>
      </div>
    )
  }

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

  if (hasChildren) {
    return (
      <div
        className="group relative"
        onMouseEnter={() => setIsSubmenuOpen(true)}
        onMouseLeave={() => setIsSubmenuOpen(false)}
        onFocus={() => setIsSubmenuOpen(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setIsSubmenuOpen(false)
          }
        }}
      >
        <button
          type="button"
          aria-current={isActive ? 'page' : undefined}
          aria-expanded={isSubmenuOpen}
          aria-haspopup="menu"
          onClick={() => setIsSubmenuOpen((isOpen) => !isOpen)}
          className={cx(
            'relative flex items-center gap-1.5 whitespace-nowrap pb-2 font-normal transition duration-300 hover:-translate-y-0.5 hover:text-sky-100',
            item.accent
              ? 'text-[clamp(11px,1.9vw,28px)] text-[#C69479] [-webkit-text-stroke:1px_#D3A282] [paint-order:stroke_fill] hover:text-[#C69479]'
              : 'text-[clamp(12px,2.08vw,31px)]',
          )}
        >
          <span>{item.label}</span>
          <ChevronDown
            aria-hidden="true"
            className={cx(
              'h-[0.78em] w-[0.78em] transition-transform duration-300',
              isSubmenuOpen && 'rotate-180',
            )}
          />
          <span
            className={cx(
              'absolute bottom-0 left-0 h-px bg-current transition-all duration-300',
              isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-80',
            )}
          />
        </button>

        <div
          role="menu"
          className={cx(
            'absolute left-1/2 top-full z-30 mt-2 min-w-56 -translate-x-1/2 overflow-hidden rounded-2xl border border-white/15 bg-[#0d1d2b]/95 py-2 text-[clamp(14px,1.1vw,18px)] text-white/90 shadow-[0_18px_36px_rgba(8,16,28,0.28)] backdrop-blur transition duration-300',
            isSubmenuOpen ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-2 opacity-0',
          )}
        >
          {item.children?.map((child) => (
            <a
              key={child.id}
              href={child.href}
              role="menuitem"
              onClick={() => {
                setIsSubmenuOpen(false)
                onClick?.()
              }}
              className="block whitespace-nowrap px-5 py-3 text-start transition duration-300 hover:bg-white/10 hover:text-white"
            >
              {child.label}
            </a>
          ))}
        </div>
      </div>
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
