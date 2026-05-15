import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Check } from 'lucide-react'

interface PackageCardProps {
  title: string
  points: string[]
  onBookNow?: () => void
}

function PackageCard({ title, points, onBookNow }: PackageCardProps) {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const handleBookNow = onBookNow ?? (() => navigate('/booking'))

  return (
    <article className="group flex h-full flex-col rounded-[28px] bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-shadow duration-500 hover:shadow-[0_32px_64px_rgba(0,0,0,0.11)] sm:p-8 md:p-10">
      <span
        aria-hidden
        className="mb-5 block h-1 w-14 rounded-full bg-gradient-to-r from-[#C69479] to-[#466D8B]"
      />

      <h2 className="font-['Kurale',serif] text-[32px] font-normal leading-tight text-[#304759] sm:text-[38px] md:text-[44px]">
        {title}
      </h2>

      <ul className="mt-8 flex flex-1 flex-col gap-5">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-4 text-start">
            <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#304759]/8 text-[#466D8B] sm:h-10 sm:w-10">
              <Check className="h-5 w-5 sm:h-[22px] sm:w-[22px]" strokeWidth={2.25} aria-hidden />
            </span>
            <span className="font-['Kurale',serif] text-[19px] leading-relaxed text-[#304759]/85 sm:text-[21px] md:text-[23px]">
              {point}
            </span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={handleBookNow}
        className="mt-10 flex h-[56px] w-full cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-r from-[#1C2D39] to-[#466D8B] font-['Kurale',serif] text-[24px] text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] sm:h-[60px] sm:text-[28px]"
      >
        {t('nav.bookNow')}
      </button>
    </article>
  )
}

export default PackageCard
