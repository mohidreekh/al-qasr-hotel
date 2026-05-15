import { useId } from 'react'

const shellPath =
  'M1 1H1252C1270 1 1279 10 1279 28V121C1279 137 1268 145 1238 150C1060 179 790 152 586 134C496 126 422 121 386 130C350 139 338 166 335 214C332 318 340 422 364 488C250 488 134 441 65 360C24 312 1 252 1 134V1Z'

export function NavbarShell() {
  const reactId = useId()
  const svgId = reactId.replace(/:/g, '')
  const fillId = `${svgId}-luxury-navbar-fill`
  const shadowId = `${svgId}-luxury-navbar-shadow`

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1280 492"
      preserveAspectRatio="none"
      className="absolute inset-0 z-0 h-full w-full overflow-visible"
    >
      <defs>
        <linearGradient id={fillId} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#07121c" />
          <stop offset="48%" stopColor="#142433" />
          <stop offset="100%" stopColor="#244458" />
        </linearGradient>
        <filter id={shadowId} x="-16%" y="-18%" width="132%" height="164%">
          <feDropShadow dx="0" dy="0" stdDeviation="7" floodColor="#9d7778" floodOpacity="0.5" />
          <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#7d5b5e" floodOpacity="0.3" />
          <feDropShadow dx="0" dy="18" stdDeviation="12" floodColor="#342429" floodOpacity="0.28" />
        </filter>
      </defs>

      <path d={shellPath} fill={`url(#${fillId})`} filter={`url(#${shadowId})`} />
    </svg>
  )
}
