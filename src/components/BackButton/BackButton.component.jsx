import React from 'react';
import { navigate } from 'gatsby';

import BackButtonSVG from '../../svg/BackButton.svg';

import './BackButton.styles.scss';

export const BackButton = () => {
  return (
    <button type="button" className="back-button" onClick={() => navigate(-1)}>
      <BackButtonSVG />
    </button>
  );
};
