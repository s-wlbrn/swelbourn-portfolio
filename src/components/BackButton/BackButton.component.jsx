import React from 'react';
import { Link } from 'gatsby';

import BackButtonSVG from '../../svg/BackButton.svg';

import './BackButton.styles.scss';

export const BackButton = () => {
  return (
    <Link className="back-button" to="/#projects">
      <BackButtonSVG />
    </Link>
  );
};
