import React, { useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { mod } from '../../libs/mod';

import './ScreenshotCarousel.styles.scss';

export const ScreenshotCarousel = ({ screenshots, openModal }) => {
  const [displayArr, setDisplayArr] = useState([0, 1, 2]);
  const [loaded, setLoaded] = useState(true);

  const scrollCarousel = (n) => {
    setLoaded(false);
    const updatedDisplay = displayArr.map((i) => {
      return i + n;
    });

    setTimeout(() => {
      setDisplayArr(updatedDisplay);
      setLoaded(true);
    }, 250);
  };

  return (
    <div className="screenshot-carousel">
      <button
        className="carousel-control-left"
        type="button"
        onClick={() => scrollCarousel(-1)}
      >
        <div className="carousel-arrow-left" />
      </button>
      <span className={`carousel-content ${loaded ? 'loaded' : ''}`}>
        {displayArr.map((el) => {
          const imageIndex = mod(el, screenshots.length);
          const image = getImage(screenshots[imageIndex].screenshot);

          return (
            <figure
              key={`${el}-${imageIndex}`}
              onClick={() => openModal(imageIndex)}
            >
              <div className="carousel-slide">
                <GatsbyImage
                  image={image}
                  alt="screenshot"
                  imgStyle={{
                    objectFit: 'contain',
                  }}
                />
              </div>
            </figure>
          );
        })}
      </span>
      <button
        className="carousel-control-right"
        type="button"
        onClick={() => scrollCarousel(1)}
      >
        <div className="carousel-arrow-right" />
      </button>
    </div>
  );
};
