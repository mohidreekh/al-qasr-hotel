import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LuxuryPageBackground from './components/LuxuryPageBackground'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import BookingPage from './pages/BookingPage'
import ContactUs from './pages/ContactUs'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <Router>
      <LuxuryPageBackground>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </LuxuryPageBackground>
    </Router>
  )
}

export default App
