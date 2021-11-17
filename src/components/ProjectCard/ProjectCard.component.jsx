import React from 'react';
import { Link } from 'gatsby';
import loadable from '@loadable/component';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';

import { CustomButton } from '../CustomButton/CustomButton.component';
import { TechList } from '../TechList/TechList.component';
import { HeaderBlade } from '../HeaderBlade/HeaderBlade.component';

import './ProjectCard.styles.scss';

const ProjectCardScreenshots = loadable(
  () => import('../ProjectCardScreenshots/ProjectCardScreenshots.component'),
  {
    fallback: <div>Loading...</div>,
  }
);

export const ProjectCard = ({ project, slug }) => {
  const icon = getImage(project.icon);
  return (
    <li role="article" className="project-overview">
      <header className="project-overview-header">
        <div className="project-overview-icon">
          {project.type === 'frontend' ? (
            <GatsbyImage image={icon} alt={`${project.name} icon`} />
          ) : (
            <StaticImage
              src="../../../static/img/backend.png"
              alt="backend project"
              placeholder="tracedSVG"
              width={75}
            />
          )}
        </div>
        <HeaderBlade className="project-overview-title">
          <h3>{project.title}</h3>
          <TechList technologies={project.technologies} />
        </HeaderBlade>
      </header>
      {project.type === 'frontend' && (
        <ProjectCardScreenshots screenshots={project.screenshots} />
      )}
      <section className="project-overview-info">
        <div className="project-overview-info-links">
          <CustomButton hyperlink href={project.link}>
            Link
          </CustomButton>
          <CustomButton alternate hyperlink href={project.repo}>
            Repo
          </CustomButton>
        </div>
        <div className="project-overview-info-details">
          <div className="project-overview-info-details-description">
            <p>{project.description}</p>
            <Link to={slug}>More details...</Link>
          </div>
        </div>
      </section>
    </li>
  );
};
