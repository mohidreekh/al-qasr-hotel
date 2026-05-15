import type { TFunction } from 'i18next'
import type { LuxuryNavItem } from '../components/LuxuryNavbar'

export const getDefaultLinks = (t: TFunction): LuxuryNavItem[] => [
  { id: 'home', label: t('nav.home'), href: '/' },
  { id: 'about', label: t('nav.about'), href: '/about' },
  { id: 'contact', label: t('nav.contact'), href: '/contact' },
  {
    id: 'services',
    label: t('nav.services'),
    href: '/services',
    children: [
      { id: 'services-rooms', label: t('services.roomsTitle'), href: '/services#rooms' },
      { id: 'services-halls', label: t('services.hallsTitle'), href: '/services#halls' },
      { id: 'services-packages', label: t('services.packagesTitle'), href: '/services#packages' },
      { id: 'services-restaurant', label: t('services.restaurant'), href: '/services#restaurant' },
    ],
  },
  { id: 'bookNow', label: t('nav.bookNow'), href: '/booking', accent: true },
]
