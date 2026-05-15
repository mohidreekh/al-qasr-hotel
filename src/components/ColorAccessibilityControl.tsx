import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { Check, ChevronDown, Palette } from 'lucide-react'
import { useTranslation } from 'react-i18next'

type ColorMode = 'default' | 'contrast' | 'redGreen' | 'blueYellow' | 'gray'

type ColorModeOption = {
  id: ColorMode
  labelKey: string
  swatch: CSSProperties
}

const colorModeStorageKey = 'al-qasr-color-mode'

const colorModeOptions: ColorModeOption[] = [
  {
    id: 'default',
    labelKey: 'accessibility.colors.default',
    swatch: {
      background: 'linear-gradient(135deg, #304759 0%, #C69479 55%, #f5f6f5 100%)',
    },
  },
  {
    id: 'contrast',
    labelKey: 'accessibility.colors.contrast',
    swatch: {
      background: 'linear-gradient(135deg, #06131f 0%, #ffffff 48%, #d1a06e 100%)',
    },
  },
  {
    id: 'redGreen',
    labelKey: 'accessibility.colors.redGreen',
    swatch: {
      background: 'linear-gradient(135deg, #123b68 0%, #f2bf4b 52%, #f7f7f7 100%)',
    },
  },
  {
    id: 'blueYellow',
    labelKey: 'accessibility.colors.blueYellow',
    swatch: {
      background: 'linear-gradient(135deg, #24324a 0%, #8ad4cf 52%, #fff0b8 100%)',
    },
  },
  {
    id: 'gray',
    labelKey: 'accessibility.colors.gray',
    swatch: {
      background: 'linear-gradient(135deg, #111827 0%, #8b929c 52%, #ffffff 100%)',
    },
  },
]

const colorModeIds = new Set<ColorMode>(colorModeOptions.map((option) => option.id))

function getSavedColorMode(): ColorMode {
  if (typeof window === 'undefined') {
    return 'default'
  }

  const savedMode = window.localStorage.getItem(colorModeStorageKey) as ColorMode | null
  return savedMode && colorModeIds.has(savedMode) ? savedMode : 'default'
}

function ColorAccessibilityControl() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedMode, setSelectedMode] = useState<ColorMode>(getSavedColorMode)
  const controlRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.documentElement.dataset.colorMode = selectedMode
    window.localStorage.setItem(colorModeStorageKey, selectedMode)
  }, [selectedMode])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!controlRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  const selectedLabel = t(
    colorModeOptions.find((option) => option.id === selectedMode)?.labelKey ??
      'accessibility.colors.default',
  )

  return (
    <div
      ref={controlRef}
      className="fixed bottom-5 end-5 z-[70] font-['Kurale',serif] text-[#304759]"
    >
      <button
        type="button"
        aria-label={t('accessibility.colors.button')}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        onClick={() => setIsOpen((open) => !open)}
        className="flex min-h-12 items-center gap-2 rounded-full border border-[#d5aa93]/45 bg-white/92 px-3.5 py-2 text-base shadow-[0_14px_34px_rgba(20,32,42,0.16)] backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#C69479]/45"
      >
        <Palette aria-hidden="true" className="h-5 w-5 text-[#C69479]" />
        <span className="hidden sm:inline">{selectedLabel}</span>
        <ChevronDown
          aria-hidden="true"
          className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        role="menu"
        className={`absolute bottom-full end-0 mb-3 w-[min(calc(100vw-2rem),19rem)] overflow-hidden rounded-2xl border border-[#d5aa93]/40 bg-white/96 p-2 shadow-[0_20px_48px_rgba(20,32,42,0.2)] backdrop-blur transition duration-300 ${
          isOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible translate-y-2 opacity-0'
        }`}
      >
        <p className="px-3 pb-2 pt-1 text-lg leading-none text-[#304759]/75">
          {t('accessibility.colors.title')}
        </p>

        <div className="grid gap-1">
          {colorModeOptions.map((option) => {
            const isSelected = option.id === selectedMode

            return (
              <button
                key={option.id}
                type="button"
                role="menuitemradio"
                aria-checked={isSelected}
                onClick={() => {
                  setSelectedMode(option.id)
                  setIsOpen(false)
                }}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-start text-lg transition duration-200 hover:bg-[#f5f1ee] focus:outline-none focus:ring-2 focus:ring-[#C69479]/35"
              >
                <span
                  aria-hidden="true"
                  className="h-8 w-8 shrink-0 rounded-full border border-[#304759]/10 shadow-inner"
                  style={option.swatch}
                />
                <span className="min-w-0 flex-1">{t(option.labelKey)}</span>
                {isSelected ? (
                  <Check aria-hidden="true" className="h-5 w-5 shrink-0 text-[#C69479]" />
                ) : null}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ColorAccessibilityControl
