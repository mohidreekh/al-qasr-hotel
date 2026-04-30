import { useEffect, useState } from 'react'
import LuxuryPageBackground from './components/LuxuryPageBackground'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import { type AppRoute, HOME_HASH, getRouteFromHash } from './siteNavigation'

function App() {
  const [route, setRoute] = useState<AppRoute>(() => {
    if (typeof window === 'undefined') {
      return 'home'
    }

    return getRouteFromHash(window.location.hash)
  })

  useEffect(() => {
    const syncRoute = () => {
      if (!window.location.hash) {
        window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}${HOME_HASH}`)
      }

      setRoute(getRouteFromHash(window.location.hash || HOME_HASH))
    }

    syncRoute()
    window.addEventListener('hashchange', syncRoute)

    return () => window.removeEventListener('hashchange', syncRoute)
  }, [])

  return (
    <LuxuryPageBackground>
      {route === 'about' ? <AboutPage /> : route === 'contact' ? <ContactPage /> : <HomePage />}
    </LuxuryPageBackground>
  )
}

export default App
