import React from 'react';
import './css/button.css';

const Button = ({
  onClick,
  children,
  size = 'medium',
  color = 'blue',
  disabled,
  customSize,
  e,
}) => {
  const getSizeClassName = (size) => {
    switch (size) {
      case 'small':
        return 'button--small';
      case 'medium':
        return 'button--medium';
      default:
        return `button--custom button--custom-${size}`;
    }
  };

  const sizeClassName = getSizeClassName(size);
  const colorClassName = `button--${color}`;

  const style = customSize ? { width: customSize, height: customSize } : {};

  return (
    <button
      className={`button ${sizeClassName} ${colorClassName}`}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
