import React from 'react';
import Particles from 'react-particles-js';

import './Intro.styles.scss';

export const Intro = () => {
  return (
    <header className="intro">
      <Particles
        style={{ position: 'absolute', left: 0, top: 0, zIndex: 0 }}
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
            color: '#ad5b3b',
            stroke: {
              width: 2,
              color: '#d99478',
            },
            links: {
              enable: true,
              distance: 150,
              color: '#d99478',
              shadow: {
                enable: true,
                blur: 5,
                color: '#8ec4d9',
              },
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
            },
          },
        }}
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
