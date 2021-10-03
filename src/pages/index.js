import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Intro } from "../components/Intro/Intro.component"
import { Nav } from "../components/Nav/Nav.component"
import { Projects } from "../components/Projects/Projects.component"

const Homepage = ({ data, location }) => {
  return (
    <>
      <Intro />
      <Nav />
      <main>
        <section className="about">
          <h2>Hi, I'm Stephen.</h2>
          <p>
            I'm a full stack web developer with a focus on front-end
            development, currently based in Nashville, TN. Working as a
            professional violin and bass player has given me an appreciation for
            working as a team with talented people. I'm currently diving into
            the world of web development with a mindset of curiosity and
            continual growth.
          </p>
        </section>
        <section className="skills">
          <h2>My skills</h2>
          <p>
            My concentration has mostly been on front-end technologies with
            increasing exposure to the back-end side, particularly Node.js. Here
            are some of the things I've worked with.
          </p>
        </section>
        <Projects />
      </main>
    </>
  )
}

export default Homepage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
