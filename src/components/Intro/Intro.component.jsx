import React from 'react';
import Particles from 'react-tsparticles';
import { particlesOptions } from './particlesOptions';

import './Intro.styles.scss';

export const Intro = () => {
  const particlesLoaded = (container) => {
    container.canvas.element.style.opacity = 1;
  };

  return (
    <header className="intro">
      <Particles
        loaded={particlesLoaded}
        id="tsparticles"
        style={{ position: 'absolute', left: 0, top: 0, zIndex: 0 }}
        canvasClassName="intro-particles"
        options={particlesOptions}
      />

      <h1>
        Stephen
        <br />
        Welbourn
      </h1>
      <h2>Web Developer</h2>
    </header>
  );
};
