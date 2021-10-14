import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import { Intro } from '../components/Intro/Intro.component';
import { Nav } from '../components/Nav/Nav.component';
import { About } from '../components/About/About.component';
import { Skills } from '../components/Skills/Skills.component';
import { Projects } from '../components/Projects/Projects.component';
import { Contact } from '../components/Contact/Contact.component';

const Homepage = () => {
  return (
    <>
      <Intro />
      <Nav />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
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
