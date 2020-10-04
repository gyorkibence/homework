import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ onClick, disabled, text }) => (
  <div
    role="button"
    tabIndex={0}
    onClick={() => {
      if (!disabled) {
        onClick();
      }
    }}
    className={`button-container${disabled ? ' disabled' : ''}`}
  >
    {text}
  </div>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
