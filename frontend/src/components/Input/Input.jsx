import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import './input.scss';

const InputComponent = ({ label, placeholder, onChange, value }) => (
  <div className="input-container">
    <div className="input-label">{label}</div>
    <Input
      placeholder={placeholder}
      onChange={(e) => { onChange(e.target.value); }}
      value={value}
    />
  </div>
);

InputComponent.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default InputComponent;
