import { useEffect, useState } from 'react'

export type HotelImageSlide = {
  mainImage: string
  secondaryImage: string
  mainAlt: string
  secondaryAlt?: string
  mainObjectPosition?: string
  secondaryObjectPosition?: string
}

type HotelImageSliderProps = {
  slides: HotelImageSlide[]
  className?: string
  ariaLabel?: string
  autoPlay?: boolean
  autoPlayInterval?: number
}

const cx = (...classes: Array<string | false | undefined>) =>
  classes.filter(Boolean).join(' ')

const transitionMs = 1100

function HotelImageSlider({
  slides,
  className,
  ariaLabel = 'Hotel gallery slider',
  autoPlay = true,
  autoPlayInterval = 4200,
}: HotelImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const activeIndex = slides.length ? currentIndex % slides.length : 0
  const nextIndex = slides.length ? (activeIndex + 1) % slides.length : 0

  useEffect(() => {
    if (!autoPlay || slides.length < 2) {
      return
    }

    if (isAnimating) {
      return
    }

    const intervalId = window.setTimeout(() => {
      setIsAnimating(true)
    }, autoPlayInterval)

    return () => window.clearTimeout(intervalId)
  }, [autoPlay, autoPlayInterval, isAnimating, slides.length, activeIndex])

  useEffect(() => {
    if (!isAnimating || slides.length < 2) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setCurrentIndex(nextIndex)
      setIsAnimating(false)
    }, transitionMs)

    return () => window.clearTimeout(timeoutId)
  }, [isAnimating, nextIndex, slides.length])

  if (!slides.length) {
    return null
  }

  const currentSlide = slides[activeIndex]
  const nextSlide = slides[nextIndex]

  return (
    <section
      aria-label={ariaLabel}
      aria-roledescription={slides.length > 1 ? 'carousel' : undefined}
      className={cx('mt-10 w-full max-w-[1288px] sm:mt-11 md:mt-14', className)}
    >
      <div className="relative h-[clamp(320px,56vw,700px)]">
        <div className="pointer-events-none absolute inset-x-[4%] top-[7%] h-[78%] rounded-[36px] bg-[radial-gradient(circle_at_28%_34%,rgba(255,255,255,0.7),rgba(255,255,255,0)_34%),radial-gradient(circle_at_78%_70%,rgba(198,148,121,0.14),rgba(198,148,121,0)_35%)] opacity-80 blur-3xl" />

        <figure
          className={cx(
            'absolute left-[2%] top-[clamp(6px,1vw,20px)] z-20 w-[72%] overflow-hidden rounded-[18px] border border-white/65 bg-white/70 shadow-[0_26px_48px_rgba(20,32,42,0.2),0_10px_22px_rgba(198,148,121,0.12)] ring-1 ring-white/45 transition-[transform,opacity,left,top,width,height,filter] duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] min-[500px]:left-[8%] min-[500px]:w-[58%]',
            isAnimating &&
              'left-[0%] top-[clamp(0px,0.5vw,10px)] w-[68%] -translate-x-[clamp(8px,1.2vw,18px)] scale-[0.94] opacity-45 blur-[0.35px] saturate-[0.92] min-[500px]:left-[5%] min-[500px]:w-[54%]',
          )}
        >
          <img
            src={currentSlide.mainImage}
            alt={currentSlide.mainAlt}
            className="h-[clamp(205px,40vw,555px)] w-full object-cover"
            style={{ objectPosition: currentSlide.mainObjectPosition ?? 'center' }}
          />
        </figure>

        <figure
          className={cx(
            'absolute left-[50%] top-[clamp(104px,15vw,165px)] z-10 w-[49%] overflow-hidden rounded-[18px] border border-white/55 bg-white/60 shadow-[0_22px_40px_rgba(20,32,42,0.18),0_8px_18px_rgba(48,71,89,0.09)] ring-1 ring-white/35 transition-[transform,opacity,left,top,width,height,filter] duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] min-[500px]:left-[55%] min-[500px]:w-[43%] md:left-[53%] md:w-[44%]',
            isAnimating &&
              'left-[2%] top-[clamp(6px,1vw,20px)] z-30 w-[72%] shadow-[0_28px_52px_rgba(20,32,42,0.22),0_12px_24px_rgba(198,148,121,0.15)] min-[500px]:left-[8%] min-[500px]:w-[58%]',
          )}
        >
          <img
            src={currentSlide.secondaryImage}
            alt={currentSlide.secondaryAlt ?? currentSlide.mainAlt}
            className={cx(
              'w-full object-cover transition-[height] duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
              isAnimating
                ? 'h-[clamp(205px,40vw,555px)]'
                : 'h-[clamp(180px,31vw,430px)]',
            )}
            style={{
              objectPosition: currentSlide.secondaryObjectPosition ?? 'center',
            }}
          />
        </figure>

        {slides.length > 1 ? (
          <figure
            aria-hidden="true"
            className={cx(
              'pointer-events-none absolute left-[60%] top-[clamp(132px,18vw,198px)] z-0 w-[34%] overflow-hidden rounded-[18px] border border-white/35 bg-white/35 opacity-0 shadow-[0_14px_24px_rgba(20,32,42,0.12)] ring-1 ring-white/25 transition-[transform,opacity,left,top,width,height,filter] duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] min-[500px]:left-[60%] min-[500px]:w-[34%] md:left-[58%] md:w-[35%]',
              isAnimating &&
                'left-[50%] top-[clamp(104px,15vw,165px)] opacity-100 saturate-[0.96] min-[500px]:left-[55%] min-[500px]:w-[43%] md:left-[53%] md:w-[44%]',
            )}
          >
            <img
              src={nextSlide.secondaryImage}
              alt=""
              className="h-[clamp(154px,25vw,338px)] w-full object-cover"
              style={{ objectPosition: nextSlide.secondaryObjectPosition ?? 'center' }}
            />
          </figure>
        ) : null}
      </div>
    </section>
  )
}

export default HotelImageSlider
