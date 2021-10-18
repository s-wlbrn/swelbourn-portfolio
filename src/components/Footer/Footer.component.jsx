import React from 'react';
import { Link } from 'gatsby';

import './Footer.styles.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <p>©2021</p>
      <p>
        Made by Stephen Welbourn with{' '}
        <Link to="https://gatsbyjs.com">Gatsby</Link>.
      </p>
    </footer>
  );
};
