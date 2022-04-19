import * as React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/seo';
import Layout from '../components/Layout';
import { Intro } from '../components/Intro/Intro.component';
import { About } from '../components/About/About.component';
import { Skills } from '../components/Skills/Skills.component';
import { Projects } from '../components/Projects/Projects.component';
import { Contact } from '../components/Contact/Contact.component';
import { setWindowHeightProperty } from '../libs/setWindowHeightProperty';

const Homepage = () => {
  React.useEffect(() => {
    // set real vh value
    setWindowHeightProperty();

    // listen for window resize to reset vh value
    window.addEventListener('resize', () => {
      setWindowHeightProperty();
    });

    // remove listener on unmount
    return () => {
      window.removeEventListener('resize', setWindowHeightProperty);
    };
  }, []);

  return (
    <>
      <Seo
        title="Stephen Welbourn's Portfolio"
        description="Stephen Welbourn is a web developer in Nashville, TN."
      />
      <Intro />
      <Layout className="index">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
};

export default Homepage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
