import * as React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/seo';
import Layout from '../components/Layout';
import { Intro } from '../components/Intro/Intro.component';
import { About } from '../components/About/About.component';
import { Skills } from '../components/Skills/Skills.component';
import { Projects } from '../components/Projects/Projects.component';
import { Contact } from '../components/Contact/Contact.component';

// get the viewport height and derive real value for a vh unit
const vh = window.innerHeight * 0.01;
// set the value in the --vh custom property to root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

const Homepage = () => {
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
