import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

import './TechList.styles.scss';

export const TechList = ({ technologies }) => {
  const techIcons = useStaticQuery(graphql`
    query TechListImages {
      allSkillsYaml {
        edges {
          node {
            image {
              childImageSharp {
                gatsbyImageData(width: 32, placeholder: TRACED_SVG, quality: 90)
              }
            }
            name
          }
        }
      }
    }
  `);

  const images = technologies.map((tech) => {
    const {
      node: { name, image },
    } = techIcons.allSkillsYaml.edges.find((icon) => {
      return icon.node.name === tech;
    });
    return {
      name,
      image: getImage(image),
    };
  });

  return (
    <div className="project-tech">
      {images.map((el) => {
        return (
          <div
            key={el.name}
            className="project-tech-icon-container"
            title={el.name}
          >
            <GatsbyImage
              key={el.name}
              image={el.image}
              alt={el.name}
              className="project-tech-icon"
            />
          </div>
        );
      })}
    </div>
  );
};
