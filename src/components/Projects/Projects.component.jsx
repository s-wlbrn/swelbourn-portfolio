import { useStaticQuery, graphql } from "gatsby"
import React, { useState } from "react"
import Modal from "react-modal"

import { mod } from "../../libs/mod"

import { CustomButton } from "../CustomButton/CustomButton.component"
import { ProjectCard } from "../ProjectCard/ProjectCard.component"
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
              screenshots {
                screenshot
              }
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

  return (
    <section className="projects">
      <h2>Projects</h2>
      <ol className="projects-list">
        {data.frontendProjects.edges.map(el => {
          const project = el.node.frontmatter
          return <ProjectCard project={project} />
        })}
      </ol>
    </section>
  )
}
