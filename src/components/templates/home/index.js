import React, { useEffect } from 'react'
import HeroSection from './hero'
import AboutSection from './about'
import ContactSection from './contact'
import PortfolioSection from './portfolio'

const HomeTemplate = ({ portfolioItems }) => (
  <>
    <HeroSection />
    <AboutSection />
    <PortfolioSection portfolioItems={portfolioItems} />
    <ContactSection />
  </>
)

export default HomeTemplate
