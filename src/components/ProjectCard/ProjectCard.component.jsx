import React from "react"

import { ScreenshotCarousel } from "../ScreenshotCarousel/ScreenshotCarousel.component"
import { CustomButton } from "../CustomButton/CustomButton.component"

import "./ProjectCard.styles.scss"

export const ProjectCard = ({ project }) => {
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
      <ScreenshotCarousel screenshots={project.screenshots} />
      <section className="project-overview-info">
        <div className="project-overview-info-links">
          <CustomButton type="button">Link</CustomButton>
        </div>
        <p>{project.description}</p>
      </section>
    </li>
  )
}
