/// <reference types="vite/client" />

declare module '*as=picture' {
  const picture: {
    sources: Record<string, string>
    img: { src: string; w: number; h: number }
  }
  export default picture
}

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string
  readonly VITE_EMAILJS_PUBLIC_KEY: string
  readonly VITE_EMAILJS_TEMPLATE_BOOKING: string
  readonly VITE_EMAILJS_TEMPLATE_CONTACT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
