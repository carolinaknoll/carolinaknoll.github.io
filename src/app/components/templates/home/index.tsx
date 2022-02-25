import React from 'react';
import { HeroSection } from './hero';
import { AboutSection } from './about';
import { ContactSection } from './contact';
import { PortfolioSection } from './portfolio';
import { PortfolioItemData } from 'app/utils/portfolio';

interface HomeTemplateProps {
  portfolioItems: PortfolioItemData[];
}

const HomeTemplate = ({ portfolioItems }: HomeTemplateProps) => (
  <>
    <HeroSection />
    <AboutSection />
    <PortfolioSection portfolioItems={portfolioItems} />
    <ContactSection />
  </>
);

export { HomeTemplate };
