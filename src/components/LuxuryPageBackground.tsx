import { type CSSProperties, type ReactNode } from 'react'

type LuxuryPageBackgroundProps = {
  children: ReactNode
}

const pageMotionVars = {
  '--cursor-x': '50vw',
  '--cursor-y': '50vh',
} as CSSProperties

const ambientPatternStyle: CSSProperties = {
  backgroundImage: [
    'linear-gradient(116deg, transparent 14%, rgba(198,148,121,0.12) 38%, rgba(255,255,255,0.56) 50%, transparent 74%)',
    'repeating-linear-gradient(28deg, rgba(48,71,89,0.08) 0 1px, transparent 1px 42px)',
    'repeating-linear-gradient(118deg, rgba(48,71,89,0.06) 0 1px, transparent 1px 56px)',
  ].join(', '),
  backgroundPosition:
    'calc((var(--cursor-x) - 50vw) * -0.018) calc((var(--cursor-y) - 50vh) * -0.012), calc((var(--cursor-x) - 50vw) * 0.012) calc((var(--cursor-y) - 50vh) * 0.01), calc((var(--cursor-x) - 50vw) * -0.01) calc((var(--cursor-y) - 50vh) * 0.014)',
  transform:
    'translate3d(calc((var(--cursor-x) - 50vw) * 0.018), calc((var(--cursor-y) - 50vh) * 0.012), 0)',
}

const softSheenStyle: CSSProperties = {
  background:
    'linear-gradient(104deg, transparent 0%, rgba(255,255,255,0.68) 44%, rgba(211,162,130,0.14) 50%, transparent 74%)',
  transform:
    'translate3d(calc((var(--cursor-x) - 50vw) * -0.035), calc((var(--cursor-y) - 50vh) * -0.02), 0) rotate(-8deg)',
}

function LuxuryPageBackground({ children }: LuxuryPageBackgroundProps) {
  return (
    <div
      className="relative isolate min-h-screen overflow-x-hidden bg-[#f5f6f5] text-[#304759]"
      style={pageMotionVars}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-[-18%] opacity-90" style={ambientPatternStyle} />
        <div
          className="absolute left-[18%] top-[-18%] h-[130%] w-[58%] opacity-[0.45] blur-[1px]"
          style={softSheenStyle}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(245,246,245,0.16)_36%,rgba(245,246,245,0.82))]" />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default LuxuryPageBackground
