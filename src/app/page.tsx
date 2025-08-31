import HeroSection from '../../components/sections/HeroSection'
import StatsSection from '../../components/sections/StatsSection'
import FalangeFeatures from '../../components/sections/FalangeFeatures'
import HowItWorks from '../../components/sections/HowItWorks'
import SpartanTestimonials from '../../components/sections/SpartanTestimonials'
import WarriorCTA from '../../components/sections/WarriorCTA'
import TrustBadges from '../../components/sections/TrustBadges'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBadges />
      <StatsSection />
      <FalangeFeatures />
      <HowItWorks />
      <SpartanTestimonials />
      <WarriorCTA />
    </>
  )
}