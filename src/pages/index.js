import React from 'react'
import { Footer } from '_atoms'
import { Layout } from '_fragments'
import { HomeTemplate } from '_templates'
import { getPortfolioItems } from '_utils/portfolio'

const Home = () => {
  const PORTFOLIO_ITEMS = getPortfolioItems()

  return (
    <Layout>
      <HomeTemplate portfolioItems={PORTFOLIO_ITEMS} />
      <Footer />
    </Layout>
  )
}

export default Home
