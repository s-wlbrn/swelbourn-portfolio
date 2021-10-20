import React from 'react';
import { Link } from 'gatsby';

import './Footer.styles.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} Stephen Welbourn, Built with
      {` `}
      <Link to="https://www.gatsbyjs.com">Gatsby</Link>
    </footer>
  );
};
