import React from 'react'

import { Heading } from '_atoms'
import { Layout } from '_templates'

import styles from './styles.module.css'

const Home = () => (
  <Layout>
    <div className={styles.home}>
      <Heading type="h2" form="cursive">
        Hello, world!
      </Heading>
    </div>
  </Layout>
)

export default Home
