import './index.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import FeaturesSection from './components/FeaturesSection'
import StatsSection from './components/StatsSection'
import PortfolioSection from './components/PortfolioSection'
import ProcessSection from './components/ProcessSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <StatsSection />
      <PortfolioSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
