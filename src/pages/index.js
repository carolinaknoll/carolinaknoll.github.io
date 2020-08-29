import React from 'react'

import { Heading } from '_atoms'
import { Layout } from '_templates'

import styles from './styles.module.css'

const Home = () => (
  <Layout>
    <div className={styles.hero}>
      <Heading type="h5" form="print">
        Remember when they asked you...
      </Heading>
      <Heading type="h4" form="print">
        "What do you want to be when you
      </Heading>
      <Heading type="h2" form="cursive" className={styles.titleGradient}>
        grow up?"
      </Heading>
    </div>

    <div className={styles.about}>
      <Heading type="h5" form="print">
        // hint... a
      </Heading>
      <Heading type="h2" form="cursive" className={styles.titleGradient}>
        super hero!
      </Heading>
    </div>
  </Layout>
)

export default Home
