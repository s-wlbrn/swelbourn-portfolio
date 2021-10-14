import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import './SkillGrid.styles.scss';

export const SkillGrid = () => {
  const data = useStaticQuery(graphql`
    query SkillsQuery {
      contentYaml {
        skills {
          name
          image
          level
          description
        }
      }
    }
  `);

  return (
    <div className="skill-grid">
      {data.contentYaml.skills.map((skill) => {
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
            <img src={skill.image} alt={skill.name} />
          </div>
        );
      })}
    </div>
  );
};
