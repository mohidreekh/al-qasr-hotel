import type { LuxuryNavItem } from './components/LuxuryNavbar'

export type AppRoute = 'home' | 'about' | 'contact'

export const HOME_HASH = '#/'
export const ABOUT_HASH = '#/about'
export const CONTACT_HASH = '#/contact'

export const primaryNavLinks: LuxuryNavItem[] = [
  { label: 'Home', href: HOME_HASH },
  { label: 'About us', href: ABOUT_HASH },
  { label: 'Contact', href: CONTACT_HASH },
  { label: 'Services', href: '#' },
  { label: 'Book Now', href: '#', accent: true },
]

export const getRouteFromHash = (hash: string): AppRoute => {
  const normalizedHash = hash.trim().toLowerCase()

  if (normalizedHash === ABOUT_HASH) {
    return 'about'
  }

  if (normalizedHash === CONTACT_HASH) {
    return 'contact'
  }

  return 'home'
}
