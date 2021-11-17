import React from 'react';
import loadable from '@loadable/component';

import './Intro.styles.scss';

const IntroParticles = loadable(() =>
  import('../IntroParticles/IntroParticles.component')
);

export const Intro = () => {
  return (
    <header className="intro">
      <IntroParticles />
      <h1>
        Stephen
        <br />
        Welbourn
      </h1>
      <h2>Web Developer</h2>
    </header>
  );
};
