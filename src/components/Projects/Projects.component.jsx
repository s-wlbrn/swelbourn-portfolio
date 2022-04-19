import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import { ProjectCard } from '../ProjectCard/ProjectCard.component';

import './Projects.styles.scss';

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
              icon {
                childImageSharp {
                  gatsbyImageData(
                    width: 75
                    placeholder: TRACED_SVG
                    formats: [WEBP]
                    quality: 90
                  )
                }
              }
              description
              screenshots {
                screenshot {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: BLURRED
                      transformOptions: { fit: CONTAIN }
                      formats: [WEBP]
                      quality: 90
                    )
                  }
                }
              }
              type
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
  `);

  return (
    <div className="projects-wrapper">
      <section className="projects main-section" id="projects">
        <h2>Projects</h2>
        <section className="frontend-projects">
          <h3 className="projects-subheading">Front-End</h3>
          <ol className="projects-list">
            {data.frontendProjects.edges.map((el) => {
              const project = el.node.frontmatter;
              return (
                <li key={project.title}>
                  <ProjectCard project={project} slug={el.node.fields.slug} />
                </li>
              );
            })}
          </ol>
        </section>
        <section className="backend-projects">
          <h3 className="projects-subheading">Back-End</h3>
          <ol className="projects-list">
            {data.backendProjects.edges.map((el) => {
              const project = el.node.frontmatter;
              return (
                <li key={project.title}>
                  <ProjectCard project={project} slug={el.node.fields.slug} />
                </li>
              );
            })}
          </ol>
        </section>
      </section>
    </div>
  );
};
