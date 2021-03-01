import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const SEO = ({ title, description }) => (
  <Helmet>
    <title>Carolina - Jr. Software Engineer passionate about Education</title>
    <meta
      name="description"
      content="React/React Native developer passionate about education practices and
      hopeful about a future where society looks up to a higher truth with humility
      and love to one another."
    />
  </Helmet>
)
export default SEO
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}
SEO.defaultProps = {
  title: null,
  description: null,
}
