import React from 'react';

import './Footer.styles.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Stephen Welbourn, Built with
        {`  `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </p>
    </footer>
  );
};
