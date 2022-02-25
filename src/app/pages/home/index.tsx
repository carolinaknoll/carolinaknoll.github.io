import React from 'react';

import { Layout } from 'app/pages/fragments';
import { Footer } from 'app/components/atoms';
import { HomeTemplate } from 'app/components/templates';
import { getPortfolioItems } from 'app/utils/portfolio';

export const Home = () => {
  const portfolioItems = getPortfolioItems();
  return (
    <Layout>
      <HomeTemplate portfolioItems={portfolioItems} />
      <Footer />
    </Layout>
  );
};
