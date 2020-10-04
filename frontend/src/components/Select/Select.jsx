import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Select, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './select.scss';

const { Option } = Select;

const SelectComponent = ({ placeholder, label, isAdd, addItem, dataSource, onChange, value }) => {
  const [inputValue, setInputValue] = useState(undefined);
  return (
    <div className="select-container">
      <div className="select-label">{label}</div>
      <Select
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        dropdownRender={menu => (
          <div>
            {menu}
            {
              isAdd ? (
                <div className="add-input-container">
                  <Input onChange={(e) => { setInputValue(e.target.value); }} value={inputValue} />
                  <PlusOutlined onClick={() => { addItem(inputValue); }} style={{ fontSize: 16 }} />
                </div>
              ) : null
            }
          </div>
        )}
      >
        {dataSource.map((item) => (
          <Option key={item.id}>{item.name}</Option>
        ))}
      </Select>
    </div>
  );
}

SelectComponent.propTypes = {
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isAdd: PropTypes.bool,
  addItem: PropTypes.func.isRequired,
  dataSource: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onChange: PropTypes.func.isRequired,
};

SelectComponent.defaultProps = {
  isAdd: false,
};

export default SelectComponent;
