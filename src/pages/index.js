import React from 'react'

import { Heading, Text } from '_atoms'
import { Layout } from '_templates'

import classNames from 'classnames'

import heroImg from '_images/hero.jpg'

import styles from './styles.module.css'

const Home = () => (
  <Layout>
    <section className={styles.hero} id="home">
      <div className={classNames(styles.half, styles.imageWrapper)}>
        <img src={heroImg} alt="Well hello there!" />
      </div>

      <div className={classNames(styles.half, styles.contentWrapper)}>
        <div className={styles.content}>
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
      </div>
    </section>

    <section className={styles.about} id="about">
      <div className={classNames(styles.half, styles.imageWrapper)}>
        <img src={heroImg} alt="Well hello there!" />
      </div>

      <div className={classNames(styles.half, styles.contentWrapper)}>
        <div className={styles.content}>
          <div className={styles.headingGroup}>
            <Heading type="h4" form="print">
              // hint... a
            </Heading>
            <Heading type="h4" form="cursive" className={styles.titleGradient}>
              super hero!
            </Heading>
          </div>

          <div className={styles.headingGroup}>
            <Heading type="h5" form="print">
              // we can all be
            </Heading>
            <Heading type="h5" form="cursive" className={styles.titleGradient}>
              super heroes!
            </Heading>
          </div>
          <Text size="20">
            We all have people around us that we can certainly call heroes. Not only the firemen or
            trash cleaners, but also that person that offered you their seat at the bus, or that
            person who held the door so you could close your umbrella on a cold, rainy day.
          </Text>

          <Text size="20">
            There's a japanese word for balance called Ikigai, and I try to pursuit it. I believe it
            helps us search inside ourselves and find what we can do best, even if it changes over
            time. Part of Ikigai, for me, is building magical layouts and experiences.
          </Text>

          <Text size="20">
            If you're super curious, I mainly work with
            <span className={styles.ac4beafb00d4ff}>
              React, Redux, Gatsby, GraphQL, CSS Modules and Storybook
            </span>
            . No, none of these are Pokémon! As a hobby, I enjoy creating activities for home
            education in Portuguese, and deeply agree with the Montessori method of guiding a child
            to <span className={styles.ac4beafb00d4ff}>independence</span> from the first stages of
            life.
          </Text>

          <Text size="20">
            We humans grew so accustomed with smartphones, special effects, VR, filters, and
            everything tech around us that we look{' '}
            <span className={styles.a3a9db4b1dfdb3cfc9145}>outside</span> searching for this "super"
            factor. But I believe in words. In acts of kindness. In building trust and empowering
            people so that they can{' '}
            <span className={styles.a3a9db4b1dfdb3cfc9145}>decide by themselves</span>. This is our
            "<span className={styles.a3a9db4b1dfdb3cfc9145}>super</span>" factor, and everyone can
            have it! Please, be a super hero too.
          </Text>
        </div>
      </div>
    </section>

    <section className={styles.portfolio} id="portfolio">
      <div className={classNames(styles.half, styles.imageWrapper)}>
        <img src={heroImg} alt="Well hello there!" />
      </div>

      <div className={classNames(styles.half, styles.contentWrapper)}>
        <div className={styles.content}>
          <div className={styles.headingGroup}>
            <Heading type="h4" form="print">
              // How to craft a
            </Heading>
            <Heading type="h4" form="cursive" className={styles.a523ab4b1ddefdc61fc45}>
              better world?
            </Heading>
          </div>

          <Heading type="h6" form="print">
            // hint: it's very hard!
          </Heading>
          <Text size="20">
            There's a lot that goes behind the{' '}
            <span className={styles.a523ab4b1ddefdc61fc45}>scenes</span>. Of course I have some
            projects on my{' '}
            <a href="https://github.com/carolinaknoll?tab=repositories">
              <span className={styles.a523ab4b1ddefdc61fc45}>GitHub profile</span>
            </a>{' '}
            if you're curious and want to take a peek. But like with any other dev, they're mostly
            outdated, and belong to different parts of my life and learning.
          </Text>

          <div className={styles.headingGroup}>
            <Heading type="h5" form="print">
              // what are your
            </Heading>
            <Heading type="h5" form="cursive" className={styles.ae4d62eb2bd26ec2b6cd2}>
              highs and lows?
            </Heading>
          </div>
          <Text size="20">
            I'm a somewhat artistic person, but{' '}
            <span className={styles.ae4d62eb2bd26ec2b6cd2}>deeply</span> enjoy coding as well. I can
            work independently on my own, and feel my best by creating pages and components from
            Invision or Figma files with{' '}
            <span className={styles.ae4d62eb2bd26ec2b6cd2}>reasonable logic</span>, but will likely
            need <span className={styles.ae4d62eb2bd26ec2b6cd2}>guidance</span> when some logic is
            more complex or a component requires a more complex behavior. So, what are your highs
            and lows?
          </Text>

          <div className={styles.headingGroup}>
            <Heading type="h5" form="print">
              // Formally speaking... what level are
            </Heading>
            <Heading type="h5" form="cursive" className={styles.ae4802ebff2600cb52323}>
              you?
            </Heading>
          </div>
          <Text size="20">
            Professional human terms are sometimes vague, and one of the reasons is because they
            don't consider the human in his or her own{' '}
            <span className={styles.ae4802ebff2600cb52323}>integrality</span>. I can have awesome
            <span className={styles.ae4802ebff2600cb52323}> visual skills</span>, but if I'm not so
            good at deciphering <span className={styles.ae4802ebff2600cb52323}>complex logic</span>,
            then I'm not that good after all. That's why I think that terms like Junior, Mid and
            Senior are, on their own, vague.
          </Text>

          <div className={styles.headingGroup}>
            <Heading type="h5" form="print">
              //
            </Heading>
            <Heading type="h5" form="cursive" className={styles.a3a9db4b1dfdb3cfc9145}>
              Outside
            </Heading>
            <Heading type="h5" form="print">
              work
            </Heading>
          </div>
          <Text size="20">
            Outside work, I believe school teaches us very little about how to go on with{' '}
            <span className={styles.a3a9db4b1dfdb3cfc9145}>(mature) </span>
            life. That is, before taking sides on any opinion, habit or action, one should work
            primarily on nurturing a{' '}
            <span className={styles.a3a9db4b1dfdb3cfc9145}>solid moral ground</span> - in other
            words, I can deeply <span className={styles.a3a9db4b1dfdb3cfc9145}>love</span> chocolate
            cakes, but it is unhealthy and not morally acceptable to eat them all day, everyday.
          </Text>
        </div>
      </div>
    </section>

    <section className={styles.contact} id="contact">
      <div className={classNames(styles.half, styles.imageWrapper)}>
        <img src={heroImg} alt="Well hello there!" />
      </div>

      <div className={classNames(styles.half, styles.contentWrapper)}>
        <div className={styles.content}>
          <div className={styles.headingGroup}>
            <Heading type="h4" form="print">
              // let's exchange
            </Heading>
            <Heading type="h4" form="cursive" className={styles.a312ee4b00c2ffc05f7f4}>
              virtual
            </Heading>
            <Heading type="h4" form="print">
              bits of info
            </Heading>
          </div>

          <Heading type="h6" form="print">
            // maybe eat pizza, or have some tea while listening to heavy metal
          </Heading>
          <Text size="20">
            Humans are (kind of) social creatures, be it by quietly knowing others by reading their
            books or maybe gathering at a party. Contact forms are a (somewhat boring) way that a
            human can wirelessly reach another human.
          </Text>

          <div className={styles.headingGroup}>
            <Heading type="h5" form="print">
              // the world is
            </Heading>
            <Heading type="h5" form="cursive" className={styles.a478530b00ff1dc93f1bf}>
              your chalkboard
            </Heading>
          </div>
          <Text size="20">
            Just send a simple "hi!" if you'd like, then we can talk about dinosaurs, super powers,
            learning, and Montessori practices.
          </Text>
        </div>
      </div>
    </section>
  </Layout>
)

export default Home
