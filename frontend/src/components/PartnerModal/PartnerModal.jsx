import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Divider } from 'antd';
import {
  openModal, addPartner, updatePartner, addBusinessForm, addCity,
} from 'actions/appActions';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import Input from 'components/Input/Input';
import Select from 'components/Select/Select';
import './partner-modal.scss';

const PartnerModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    modals: { partner },
    input: inputFromStore,
    businessForms,
    cities,
  } = useSelector((store) => store.app);

  const [input, setInput] = useState(inputFromStore);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (inputFromStore.name) {
      setInput(inputFromStore);
    }
  }, [inputFromStore]);

  const setFormInput = (field, value) => {
    setInput({
      ...input,
      [field]: value,
    });
  };

  return (
    <Modal
      title={t(input.id ? 'partnerModal.updateTitle' : 'partnerModal.addTitle')}
      onClose={() => dispatch(openModal('partner', false))}
      open={partner}
    >
      <div className="container">
        <div className="modal-form-container">
          <Input
            label={t('partnerModal.nameLabel')}
            placeholder={t('partnerModal.namePlaceholder')}
            onChange={(value) => { setDisabled(!(value && input.city_id)); setFormInput('name', value); }}
            value={input.name}
          />
          <Divider style={{ marginTop: 20, marginBottom: 10 }} />
          <Select
            label={t('partnerModal.businessFormLabel')}
            placeholder={t('partnerModal.businessFormPlaceholder')}
            onChange={(value) => { setFormInput('business_form_id', value); }}
            isAdd
            addItem={(value) => { dispatch(addBusinessForm(value)); }}
            dataSource={businessForms}
            value={input.business_form_id ? input.business_form_id.toString() : null}
          />
          <Divider style={{ marginTop: 20, marginBottom: 10 }} />
          <Input
            label={t('partnerModal.taxnumberLabel')}
            placeholder={t('partnerModal.taxnumberPlaceholder')}
            onChange={(value) => { setFormInput('tax_number', value); }}
            value={input.tax_number}
          />
          <Divider style={{ marginTop: 20, marginBottom: 10 }} />
          <Input
            label={t('partnerModal.companyregistrationnumberLabel')}
            placeholder={t('partnerModal.companyregistrationnumberPlaceholder')}
            onChange={(value) => { setFormInput('company_registration_number', value); }}
            value={input.company_registration_number}
          />
          <Divider style={{ marginTop: 20, marginBottom: 10 }} />
          <Select
            label={t('partnerModal.citiesLabel')}
            placeholder={t('partnerModal.citiesPlaceholder')}
            onChange={(value) => { setDisabled(!(value && input.name)); setFormInput('city_id', value); }}
            isAdd
            addItem={(value) => { dispatch(addCity(value)); }}
            dataSource={cities}
            value={input.city_id ? input.city_id.toString() : null}
          />
          <Divider style={{ marginTop: 20, marginBottom: 10 }} />
          <Input
            label={t('partnerModal.addressLabel')}
            placeholder={t('partnerModal.addressPlaceholder')}
            onChange={(value) => { setFormInput('address', value); }}
            value={input.address}
          />
          <Divider style={{ marginTop: 20, marginBottom: 10 }} />
          <Input
            label={t('partnerModal.phoneLabel')}
            placeholder={t('partnerModal.phonePlaceholder')}
            onChange={(value) => { setFormInput('phone', value); }}
            value={input.phone}
          />
          <Divider style={{ marginTop: 20, marginBottom: 10 }} />
          <Input
            label={t('partnerModal.bankaccountnumberLabel')}
            placeholder={t('partnerModal.bankaccountnumberPlaceholder')}
            onChange={(value) => { setFormInput('bank_account_number', value); }}
            value={input.bank_account_number}
          />
          <Divider style={{ marginTop: 20, marginBottom: 10 }} />
          <Input
            label={t('partnerModal.messageLabel')}
            placeholder={t('partnerModal.messagePlaceholder')}
            onChange={(value) => { setFormInput('message', value); }}
            value={input.message}
          />
        </div>
        <Divider style={{ marginTop: 20, marginBottom: 40 }} />
        <div className="modal-button-container">
          <Button
            text={t(input.id ? 'partnerModal.saveButton' : 'partnerModal.addButton')}
            onClick={() => { dispatch(input.id ? updatePartner(input, input.id) : addPartner(input)); }}
            disabled={disabled}
          />
        </div>
      </div>
    </Modal>
  );
};

export default PartnerModal;
