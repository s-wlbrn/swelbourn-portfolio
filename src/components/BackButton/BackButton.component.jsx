import React from 'react';
import { Link } from 'gatsby';

import './BackButton.styles.scss';

export const BackButton = () => {
  return (
    <Link className="back-button" to="/#projects">
      <div className="back-arrow-icon" />
    </Link>
  );
};
