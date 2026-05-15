import type { LuxuryNavItem } from '../components/LuxuryNavbar'

export const getDefaultLinks = (t: any): LuxuryNavItem[] => [
  { id: 'home', label: t('nav.home'), href: '/' },
  { id: 'about', label: t('nav.about'), href: '#' },
  { id: 'contact', label: t('nav.contact'), href: '/contact' },
  { id: 'services', label: t('nav.services'), href: '/services' },
  { id: 'bookNow', label: t('nav.bookNow'), href: '/booking', accent: true },
]
