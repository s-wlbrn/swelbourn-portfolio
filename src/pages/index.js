import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Homepage = ({ data, location }) => {
  return <header></header>
}

export default Homepage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    frontendProjects: allMarkdownRemark(
      filter: { fields: { collection: { eq: "frontendProjects" } } }
      sort: { fields: frontmatter___date }
      limit: 1
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            technologies
            repo
            link
            icon
            description
          }
        }
      }
    }
    backendProjects: allMarkdownRemark(
      filter: { fields: { collection: { eq: "backendProjects" } } }
      sort: { fields: frontmatter___date }
      limit: 1
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            technologies
            repo
            link
            description
          }
        }
      }
    }
  }
`
