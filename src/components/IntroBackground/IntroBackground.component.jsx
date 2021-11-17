import React from 'react';

import './IntroBackground.styles.scss';

export const IntroBackground = () => {
  return (
    <div className="intro-background">
      {(() => {
        const circles = [];
        for (let i = 0; i <= 100; i++) {
          circles.push(
            <div className="circle-container" key={i}>
              <div className="circle" />
            </div>
          );
        }
        return circles;
      })()}
    </div>
  );
};
