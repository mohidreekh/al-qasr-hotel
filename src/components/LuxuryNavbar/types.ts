export type LuxuryNavItem = {
  id: string
  label: string
  href: string
  accent?: boolean
}

export type LuxuryNavbarProps = {
  logoSrc?: string
  logoAlt?: string
  links: LuxuryNavItem[]
  activeId?: string
  isMenuOpen?: boolean
  onMenuToggle?: (isOpen: boolean) => void
  currentLanguage?: string
  onLanguageToggle?: () => void
}
