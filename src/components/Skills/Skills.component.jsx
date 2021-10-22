import React from 'react';

import { SkillGrid } from '../SkillGrid/SkillGrid.component';

import './Skills.styles.scss';

export const Skills = () => {
  return (
    <section className="skills main-section" id="skills">
      <header>
        <h2>My skills</h2>
        <p>
          My concentration has mostly been on front-end technologies with
          increasing exposure to the back-end side, particularly Node.js. Here
          are some of the things I've worked with.
        </p>
      </header>
      <section className="skills-list">
        <SkillGrid />
      </section>
    </section>
  );
};
