import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

import './SkillGrid.styles.scss';

export const SkillGrid = () => {
  const data = useStaticQuery(graphql`
    query SkillsQuery {
      contentYaml {
        skills {
          name
          image {
            childImageSharp {
              gatsbyImageData(width: 250, placeholder: TRACED_SVG)
            }
          }
          level
          description
        }
      }
    }
  `);

  return (
    <div className="skill-grid">
      {data.contentYaml.skills.map((skill) => {
        const image = getImage(skill.image);
        return (
          <div key={skill.name} className="skill-item">
            <div className="skill-info">
              <h3>{skill.name}</h3>
              <div className="progress-border">
                <span
                  className="progress-bar"
                  style={{ width: `${skill.level * 10}%` }}
                >
                  <span className="progress-bar-overlay" />
                </span>
              </div>
              <p>{skill.description}</p>
            </div>
            <GatsbyImage image={image} alt={skill.name} />
          </div>
        );
      })}
    </div>
  );
};
