import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

import './SkillGrid.styles.scss';

export const SkillGrid = () => {
  const data = useStaticQuery(graphql`
    query SkillsQuery {
      allSkillsYaml {
        edges {
          node {
            name
            level
            description
            image {
              childImageSharp {
                gatsbyImageData(width: 250, placeholder: TRACED_SVG)
              }
            }
          }
        }
      }
    }
  `);

  return (
    <div className="skill-grid">
      {data.allSkillsYaml.edges.map(({ node }) => {
        const image = getImage(node.image);
        return (
          <div key={node.name} className="skill-item">
            <div className="skill-info">
              <h3>{node.name}</h3>
            </div>
            <GatsbyImage
              image={image}
              alt={node.name}
              className="project-image"
            />
          </div>
        );
      })}
    </div>
  );
};
