import { useInsertionEffect } from 'react'

import type { ImagetoolsPicture } from './OptimizedPicture'

type LcpImagePreloadProps = {
  picture: ImagetoolsPicture
  sizes: string
}

/**
 * Injects a responsive `preload` for the hero image so discovery happens before the bundle executes.
 * Uses `imagesrcset`/`imagesizes` when AVIF/WebP srcsets exist so the browser selects an appropriate candidate.
 */ 
export default function LcpImagePreload({ picture, sizes }: LcpImagePreloadProps) {
  useInsertionEffect(() => {
    const imagesrcset = picture.sources.avif ?? picture.sources.webp
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = picture.img.src
    if (imagesrcset) {
      link.setAttribute('imagesrcset', imagesrcset)
      link.setAttribute('imagesizes', sizes)
    }
    link.setAttribute('fetchpriority', 'high')
    document.head.appendChild(link)
    return () => {
      link.remove()
    }
  }, [picture, sizes])

  return null
}
