import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import './modal.scss';

const ModalComponent = ({ open, title, onClose, children, subtitle }) => (
  <Modal
    visible={open}
    centered
    maskClosable={false}
  >
    <div className="modal-container">
      <div className="modal-header">
        <div className="modal-title">{title}</div>
        <CloseOutlined onClick={() => { onClose(); }} />
      </div>
      <div className="modal-body">
        {subtitle ? <div className="subtitle">{subtitle}</div> : null}
        {children}
      </div>
    </div>
  </Modal>
);

ModalComponent.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default ModalComponent;
