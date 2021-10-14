import React from 'react';

import './CustomButton.styles.scss';

export const CustomButton = ({
  children,
  hyperlink,
  alternate,
  ...otherAttr
}) => {
  const ButtonTag = hyperlink ? 'a' : 'button';

  return (
    <ButtonTag
      className={`custom-button${alternate ? ' alternate' : ''}`}
      {...otherAttr}
    >
      {children}
    </ButtonTag>
  );
};
