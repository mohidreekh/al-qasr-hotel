import type { CSSProperties } from 'react'

/** Shape returned by `vite-imagetools` with `&as=picture`. */
export type ImagetoolsPicture = {
  sources: Record<string, string>
  img: {
    src: string
    w: number
    h: number
  }
}

const SOURCE_TYPE_ORDER = ['avif', 'webp', 'jpeg', 'jpg', 'png', 'gif'] as const

function mimeForFormat(formatKey: string): string {
  switch (formatKey) {
    case 'avif':
      return 'image/avif'
    case 'webp':
      return 'image/webp'
    case 'jpeg':
    case 'jpg':
      return 'image/jpeg'
    case 'png':
      return 'image/png'
    case 'gif':
      return 'image/gif'
    default:
      return `image/${formatKey}`
  }
}

export type OptimizedPictureProps = {
  picture: ImagetoolsPicture
  alt: string
  sizes: string
  className?: string
  style?: CSSProperties
  loading: 'eager' | 'lazy'
  fetchPriority?: 'high' | 'low' | 'auto'
  decoding?: 'async' | 'auto' | 'sync'
}

/**
 * AVIF → WebP → `<img>` fallback; each `<source>` carries a full width-based `srcSet`.
 * Uses intrinsic dimensions from the generated fallback image to limit CLS.
 */
export default function OptimizedPicture({
  picture,
  alt,
  sizes,
  className,
  style,
  loading,
  fetchPriority,
  decoding = 'async',
}: OptimizedPictureProps) {
  const { sources, img } = picture

  return (
    <picture>
      {SOURCE_TYPE_ORDER.map((fmt) => {
        const srcSet = sources[fmt]
        if (!srcSet) {
          return null
        }
        return <source key={fmt} srcSet={srcSet} sizes={sizes} type={mimeForFormat(fmt)} />
      })}
      <img
        src={img.src}
        alt={alt}
        width={img.w}
        height={img.h}
        className={className}
        style={style}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
      />
    </picture>
  )
}
