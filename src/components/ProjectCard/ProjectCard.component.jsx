import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { ScreenshotCarousel } from '../ScreenshotCarousel/ScreenshotCarousel.component';
import { CustomButton } from '../CustomButton/CustomButton.component';

import './ProjectCard.styles.scss';

export const ProjectCard = ({ project }) => {
  const icon = getImage(project.icon);

  return (
    <li role="article" className="project-overview">
      <header className="project-overview-header">
        <div className="project-overview-icon">
          {project.type === 'frontend' ? (
            <GatsbyImage image={icon} alt={`${project.name} icon`} />
          ) : (
            <img src="./images/backend.jpg" alt="backend project" />
          )}
        </div>
        <div className="project-overview-title">
          <h3>{project.title}</h3>
        </div>
      </header>
      {project.type === 'frontend' && (
        <ScreenshotCarousel screenshots={project.screenshots} />
      )}
      <section className="project-overview-info">
        <div className="project-overview-info-links">
          <CustomButton type="button" hyperlink href={project.link}>
            Link
          </CustomButton>
          <CustomButton type="button" alternate hyperlink href={project.repo}>
            Github Repo
          </CustomButton>
        </div>
        <p>{project.description}</p>
      </section>
    </li>
  );
};
