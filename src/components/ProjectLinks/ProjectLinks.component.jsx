import React from 'react';
import { CustomButton } from '../CustomButton/CustomButton.component';

import './ProjectLinks.styles.scss';

export const ProjectLinks = ({ type, repo, link, className }) => {
  return (
    <div className={`project-links ${className || ''}`}>
      <CustomButton type="button" hyperlink href={link}>
        {type === 'frontend' ? 'Link' : 'Documentation'}
      </CustomButton>
      <CustomButton type="button" alternate hyperlink href={repo}>
        Github Repo
      </CustomButton>
    </div>
  );
};
