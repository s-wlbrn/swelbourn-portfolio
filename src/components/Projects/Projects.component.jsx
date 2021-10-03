import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import "./Projects.styles.scss"

export const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      frontendProjects: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "frontend" } } }
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
        filter: { frontmatter: { type: { eq: "backend" } } }
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
  `)
  console.log(data)

  return (
    <section className="projects">
      <h2>Projects</h2>
      {data.frontendProjects.edges.map(el => {
        const project = el.node.frontmatter
        return (
          <article>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </article>
        )
      })}
    </section>
  )
}
