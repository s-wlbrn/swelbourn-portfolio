import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import './ScreenshotSlide.styles.scss';

export const ScreenshotSlide = ({ image, openModal }) => (
  <button type="button" className="screenshot-slide" onClick={openModal}>
    <GatsbyImage
      image={image}
      className="screenshot-image"
      alt="application screenshot"
      imgStyle={{
        objectFit: 'contain',
      }}
    />
  </button>
);
