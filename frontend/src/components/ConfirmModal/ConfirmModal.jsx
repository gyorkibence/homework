import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { openModal, deletePartner } from 'actions/appActions';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import './confirm-modal.scss';

const ConfirmModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { modals: { confirm }, input: { id } } = useSelector((store) => store.app);
  return (
    <Modal
      title={t('confirmModal.title')}
      onClose={() => dispatch(openModal('confirm', false))}
      open={confirm}
      subtitle={t('confirmModal.subtitle')}
    >
      <div className="modal-button-container">
        <Button
          text={t('confirmModal.okButton')}
          onClick={() => { dispatch(deletePartner(id)); }}
        />
        <Button
          text={t('confirmModal.noButton')}
          onClick={() => { dispatch(openModal('confirm', false)); }}
        />
      </div>
    </Modal>
  );
};

export default ConfirmModal;
