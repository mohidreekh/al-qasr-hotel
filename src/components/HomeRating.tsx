import { useState } from 'react'
import { Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const ratingStorageKey = 'al-qasr-home-rating'
const baseAverage = 4.8
const baseCount = 312
const maxRating = 5

function getSavedRating() {
  if (typeof window === 'undefined') {
    return 0
  }

  const savedRating = Number(window.localStorage.getItem(ratingStorageKey))
  return savedRating >= 1 && savedRating <= maxRating ? savedRating : 0
}

function HomeRating() {
  const { t } = useTranslation()
  const [selectedRating, setSelectedRating] = useState(getSavedRating)
  const [hoveredRating, setHoveredRating] = useState(0)

  const activeRating = hoveredRating || selectedRating
  const totalCount = selectedRating ? baseCount + 1 : baseCount
  const displayedAverage = selectedRating
    ? (baseAverage * baseCount + selectedRating) / totalCount
    : baseAverage

  const handleRating = (rating: number) => {
    setSelectedRating(rating)
    window.localStorage.setItem(ratingStorageKey, String(rating))
  }

  return (
    <section
      aria-labelledby="home-rating-title"
      className="mt-[clamp(4px,2.4vw,28px)] w-full max-w-[920px]"
    >
      <div className="border-y border-[#d5aa93]/45 px-4 py-[clamp(22px,4vw,34px)] text-center">
        <div className="mx-auto mb-4 h-px w-[min(42vw,220px)] bg-gradient-to-r from-transparent via-[#C69479]/65 to-transparent" />

        <div className="mx-auto max-w-[620px]">
          <p className="font-['Kurale',serif] text-[clamp(17px,3.8vw,23px)] leading-none text-[#C69479]">
            {t('home.rating.subtitle')}
          </p>
          <h2
            id="home-rating-title"
            className="mt-2 font-['Kurale',serif] text-[clamp(34px,7vw,56px)] font-normal leading-none text-[#304759]"
          >
            {t('home.rating.title')}
          </h2>
        </div>

        <div className="mt-6 flex flex-col items-center gap-4">
          <div
            className="flex min-h-14 items-center justify-center gap-1.5"
            onMouseLeave={() => setHoveredRating(0)}
          >
            {Array.from({ length: maxRating }, (_, index) => {
              const rating = index + 1
              const isActive = rating <= activeRating

              return (
                <button
                  key={rating}
                  type="button"
                  aria-label={t('home.rating.starLabel', { value: rating })}
                  onClick={() => handleRating(rating)}
                  onMouseEnter={() => setHoveredRating(rating)}
                  onFocus={() => setHoveredRating(rating)}
                  onBlur={() => setHoveredRating(0)}
                  className="flex h-12 w-12 items-center justify-center rounded-full text-[#C69479] transition duration-200 hover:-translate-y-0.5 hover:bg-white/70 hover:shadow-[0_10px_22px_rgba(198,148,121,0.16)] focus:outline-none focus:ring-2 focus:ring-[#C69479]/45"
                >
                  <Star
                    aria-hidden="true"
                    className="h-8 w-8 drop-shadow-[0_6px_10px_rgba(198,148,121,0.16)]"
                    fill={isActive ? 'currentColor' : 'transparent'}
                    strokeWidth={1.8}
                  />
                </button>
              )
            })}
          </div>

          <div className="font-['Kurale',serif] text-[#304759]" aria-live="polite">
            <p className="text-[clamp(23px,4.8vw,30px)] leading-none">
              {t('home.rating.averageLabel', { average: displayedAverage.toFixed(1) })}
            </p>
            <p className="mt-1 text-[clamp(17px,3.7vw,21px)] text-[#304759]/68">
              {t('home.rating.countLabel', { count: totalCount })}
            </p>
            {selectedRating ? (
              <p className="mt-3 text-[clamp(17px,3.7vw,21px)] text-[#466D8B]">
                {t('home.rating.thankYou')}
              </p>
            ) : null}
          </div>
        </div>

        <div className="mx-auto mt-5 h-px w-[min(30vw,150px)] bg-gradient-to-r from-transparent via-[#304759]/28 to-transparent" />
      </div>
    </section>
  )
}

export default HomeRating
