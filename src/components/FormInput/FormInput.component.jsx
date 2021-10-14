import React from 'react';
import './FormInput.styles.scss';

export const FormInput = ({
  handleChange,
  label,
  disabled,
  type,
  id,
  children,
  ...otherAttr
}) => {
  return (
    <div className={`form-input-group ${id ? `${id}-container` : ''}`}>
      <input
        className="form-input"
        onChange={handleChange}
        disabled={disabled}
        type={type}
        id={id}
        {...otherAttr}
      />
      {label ? (
        <label
          htmlFor={id}
          className={`form-input-label ${
            typeof otherAttr.value === 'number' || otherAttr.value
              ? 'shrink'
              : ''
          }`}
        >
          {label}
        </label>
      ) : (
        <React.Fragment />
      )}
      {children}
    </div>
  );
};
