import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
}

const SEO = ({ title, description }: SEOProps) => (
  <Helmet>
    <title>Carolina - Jr. Software and Mobile Engineer passionate about Education</title>
    <meta
      name="description"
      content="React and React Native engineer passionate about education practices and
      hopeful about a future where society looks up to a higher truth with humility
      and love to one another."
    />
  </Helmet>
);

export { SEO };
