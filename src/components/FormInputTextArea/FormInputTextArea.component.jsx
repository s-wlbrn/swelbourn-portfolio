import React from 'react';

import './FormInputTextArea.styles.scss';

export const FormInputTextArea = ({
  handleChange,
  label,
  id,
  children,
  ...otherAttr
}) => (
  <div className={`form-text-area-group ${id ? `${id}-container` : ''}`}>
    <textarea
      className="form-text-area"
      onChange={handleChange}
      id={id}
      {...otherAttr}
    />
    {label && (
      <label
        htmlFor={id}
        className={`form-text-area-label ${
          typeof otherAttr.value === 'number' || otherAttr.value ? 'shrink' : ''
        }`}
      >
        {label}
      </label>
    )}
    {children}
  </div>
);
