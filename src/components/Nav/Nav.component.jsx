import { Link } from 'gatsby';
import React from 'react';

import './Nav.styles.scss';

export const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="#about">About</Link>
        </li>
        <li>
          <Link to="#skills">Skills</Link>
        </li>
        <li>
          <Link to="#projects">Projects</Link>
        </li>
        <li>
          <Link to="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
