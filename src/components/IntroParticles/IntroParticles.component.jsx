import React from 'react';
import Particles from 'react-tsparticles';
import { particlesOptions } from './particlesOptions';

import './IntroParticles.styles.scss';

const IntroParticles = () => {
  const particlesLoaded = (container) => {
    container.canvas.element.style.opacity = 1;
  };

  return (
    <Particles
      loaded={particlesLoaded}
      id="tsparticles"
      style={{ position: 'absolute', left: 0, top: 0, zIndex: 0 }}
      canvasClassName="intro-particles"
      options={particlesOptions}
    />
  );
};

export default IntroParticles;
