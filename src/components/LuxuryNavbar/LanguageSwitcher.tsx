import usaFlag from '../../assets/icons8-usa-flag-48-1.png'

type LanguageSwitcherProps = {
  currentLanguage: string
  onToggle: () => void
}

export function LanguageSwitcher({ currentLanguage, onToggle }: LanguageSwitcherProps) {
  const isArabic = currentLanguage === 'ar'

  return (
    <button
      type="button"
      onClick={onToggle}
      className="static flex items-center gap-1 pr-1 font-['Kurale',serif] text-sm font-normal leading-none text-white transition-opacity hover:opacity-80 sm:text-base min-[500px]:absolute min-[500px]:right-[0.8%] min-[500px]:top-[2.6%] min-[500px]:z-20 min-[500px]:text-[clamp(14px,1.5vw,20px)]"
    >
      {!isArabic && (
        <img
          src={usaFlag}
          alt=""
          className="h-[9px] w-[17px] rounded-[1px] object-cover shadow-[0_0_5px_rgba(255,255,255,0.2)] sm:h-[14px] sm:w-7"
        />
      )}
      <span>{isArabic ? 'EN' : 'AR'}</span>
    </button>
  )
}
