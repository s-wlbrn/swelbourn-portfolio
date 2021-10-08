import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import { CustomButton } from "../CustomButton/CustomButton.component"
import { ScreenshotCarousel } from "../ScreenshotCarousel/ScreenshotCarousel.component"

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
      <ol className="projects-list">
        {data.frontendProjects.edges.map(el => {
          const project = el.node.frontmatter
          return (
            <li role="article" className="project-overview">
              <header className="project-overview-header">
                <div className="project-overview-icon">
                  <img
                    src={project.icon || "./images/backend.jpg"}
                    alt={`${project.name} icon`}
                  />
                </div>
                <div className="project-overview-title">
                  <h3>{project.title}</h3>
                </div>
              </header>
              <ScreenshotCarousel
                images={[
                  "/img/css",
                  "/img/gatsby",
                  "/img/jest",
                  "/img/mongodb",
                  "/img/git",
                  "/img/javascript",
                ]}
              />
              <section className="project-overview-info">
                <div className="project-overview-info-links">
                  <CustomButton type="button">Link</CustomButton>
                </div>
                <p>{project.description}</p>
              </section>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
