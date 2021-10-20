import React from 'react';

import './HeaderBlade.styles.scss';

export const HeaderBlade = ({ className, children }) => {
  return <div className={`header-blade ${className}`}>{children}</div>;
};
