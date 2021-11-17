import React from 'react';
import { IntroBackground } from '../IntroBackground/IntroBackground.component';

import './Intro.styles.scss';

export const Intro = () => {
  return (
    <header className="intro">
      <IntroBackground />
      <h1>
        Stephen
        <br />
        Welbourn
      </h1>
      <h2>Web Developer</h2>
    </header>
  );
};
