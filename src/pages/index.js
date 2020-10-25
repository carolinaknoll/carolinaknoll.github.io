import React from 'react'
import { Container, Row, Col } from 'react-grid-system'

import { Heading, Text } from '_atoms'
import { Layout } from '_templates'

import styles from './styles.module.css'

const Home = () => (
  <Layout>
    <section className={styles.hero} id="home">
      <Container>
        <Heading type="h5" form="print">
          Remember when they asked you...
        </Heading>
        <Heading type="h4" form="print">
          "What do you want to be when you
        </Heading>
        <Heading type="h2" form="cursive" className={styles.titleGradient}>
          grow up?"
        </Heading>
      </Container>
    </section>

    <section className={styles.about} id="about">
      <Container>
        <Heading type="h5" form="print">
          // hint... a
        </Heading>
        <Heading type="h2" form="cursive" className={styles.titleGradient}>
          super hero!
        </Heading>

        <Row>
          <Col md={8}>
            <Text size="20">
              We all have people around us that we can certainly call heroes. Not only the firemen
              or trash cleaners, but also that person that offered you their seat at the bus, or
              that person who held the door so you could close your umbrella on a cold, rainy day.
            </Text>
          </Col>

          <Col md={4}>
            <Text size="20">Image here</Text>
          </Col>
        </Row>

        <Heading type="h5" form="print">
          // I, uh... create websites
        </Heading>

        <Row>
          <Col md={8}>
            <Text size="20">
              There's a japanese word for balance called Ikigai, and I try to pursuit it. I believe
              it helps us search inside ourselves and find what we can do best, even if it changes
              over time. Part of Ikigai, for me, is building magical layouts and experiences.
            </Text>
          </Col>

          <Col md={4}>
            <Text size="20">Image here</Text>
          </Col>
        </Row>

        <Heading type="h5" form="print">
          // look at these magic words!
        </Heading>

        <Row>
          <Col md={8}>
            <Text size="20">
              If you're super curious, I mainly work with (take a deep breath) React, Redux, Gatsby,
              CSS Modules/variables and Storybook. No, none of these are Pokémon! As a hobby, I
              enjoy creating activities for children's literacy in Portuguese, and deeply agree with
              the Montessori method of guiding a child through the first stages of life.
            </Text>
          </Col>

          <Col md={4}>
            <Text size="20">Image here</Text>
          </Col>
        </Row>

        <Heading type="h5" form="print">
          // please be a super hero too!
        </Heading>

        <Row>
          <Col md={8}>
            <Text size="20">
              We humans grew so accustomed with smartphones, and special effects, and VR, and
              filters, and everything tech around us that we look outside searching for this "super"
              factor. But I believe in words. In acts of kindness. In building trust and empowering
              people so that they can decide by themselves. This is our "super" factor, and everyone
              can have it! Please, be a super hero too.
            </Text>
          </Col>

          <Col md={4}>
            <Text size="20">Image here</Text>
          </Col>
        </Row>
      </Container>
    </section>

    <section className={styles.portfolio} id="portfolio">
      <Container>
        <Heading type="h5" form="print">
          // How to craft a
        </Heading>
        <Heading type="h2" form="cursive" className={styles.titleGradient}>
          better world?
        </Heading>

        <Heading type="h5" form="print">
          // hint: it's very hard!
        </Heading>

        <Row>
          <Col md={8}>
            <Text size="20">
              There's a lot that goes behind the scenes. Of course I have some projects on my GitHub
              profile if you're curious and want to take a peek. But they're mostly outdated, and
              belong to different parts of my life and learning.
            </Text>
          </Col>
          <Col md={4}>
            <Text size="20">Image here</Text>
          </Col>
        </Row>

        <Heading type="h5" form="print">
          // what are your highs and lows?
        </Heading>

        <Row>
          <Col md={8}>
            <Text size="20">
              I'm a somewhat artistic person, but deeply enjoy coding as well. I can work
              independently on my own, and feel my best by creating pages and components from
              Invision or Figma files, but will likely need guidance when some logic is more complex
              or a component requires a more complex behavior. So, what are your highs and lows?
            </Text>
          </Col>
          <Col md={4}>
            <Text size="20">Image here</Text>
          </Col>
        </Row>

        <Heading type="h5" form="print">
          // formally speaking... what level are you?
        </Heading>

        <Row>
          <Col md={8}>
            <Text size="20">
              Professional human terms are sometimes vague, and one of the reasons is because they
              don't consider the human in his or her own integrality. I can have awesome visual
              skills, but if I'm not so good at deciphering complex logic, then I'm not that good
              after all. That's why I think that terms like Junior, Mid and Senior are, on their
              own, vague.
            </Text>
          </Col>
          <Col md={4}>
            <Text size="20">Image here</Text>
          </Col>
        </Row>

        <Heading type="h5" form="print">
          // outside work
        </Heading>

        <Row>
          <Col md={8}>
            <Text size="20">
              Outside work, I believe school teaches us very little about how to go on with (mature)
              life. That is, before taking sides on any opinion, habit or action, one should work
              primarily on nurturing a solid moral ground - in other words, I can deeply love
              chocolate cakes, but it is unhealthy and not morally acceptable to eat them all day,
              everyday.
            </Text>
          </Col>
          <Col md={4}>
            <Text size="20">Image here</Text>
          </Col>
        </Row>

        <Heading type="h5" form="print">
          // X-Ray yourself!
        </Heading>

        <Row>
          <Col md={8}>
            <Text size="20">
              Over the last few years, colleagues have told me that... + I have nice attention to
              detail! + I can communicate fairly well in English. + I don't forget to remove
              console.log statements from code reviewed requests. + I write consistent code, and try
              to slowly make a current codebase better. + I'm kinda funny and unpredictable on the
              day-to-day tasks. - I need to work on understanding Redux a bit more. - I need to
              continue working on asking for help when I reach the limits of my current knowledge.
              What are highs and lows about you your colleagues have told you?
            </Text>
          </Col>

          <Col md={4}>
            <Text size="20">Image here</Text>
          </Col>
        </Row>
      </Container>
    </section>

    <section className={styles.contact} id="contact">
      <Container>
        <Heading type="h5" form="print">
          // let's exchange virtual bits of info
        </Heading>

        <Heading type="h5" form="print">
          // maybe eat pizza, or have some tea while listening to heavy metal
        </Heading>

        <Row>
          <Col md={8}>
            <Text size="20">
              Humans are (kind of) social creatures, be it by quietly knowing others by reading
              their books or maybe gathering at a party. Contact forms are a (somewhat boring) way
              that a human can wirelessly reach another human.
            </Text>
          </Col>
          <Col md={4}>
            <Text size="20">Image here</Text>
          </Col>
        </Row>

        <Heading type="h5" form="print">
          // the world is your chalkboard
        </Heading>

        <Row>
          <Col md={8}>
            <Text size="20">
              Just send a simple "hi!" if you'd like, then we can talk about dinosaurs, super
              powers, learning, and Montessori practices.
            </Text>
          </Col>
          <Col md={4}>
            <Text size="20">Image here</Text>
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
)

export default Home
