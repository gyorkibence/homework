import React from 'react';
import { Switch } from 'antd';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { openModal, changeLanguage } from 'actions/appActions';
import Button from 'components/Button/Button';
import './header.scss';

const Header = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  return (
    <div className="header-container">
      <div className="left-container">
        <img src="/logo.png" alt="logo" />
        <div className="title">{t('header.registrationSystem')}</div>
      </div>
      <div className="right-container">
        <Button
          text={t('header.buttonTitle')}
          onClick={() => { dispatch(openModal('partner', true)); }}
        />
        <div className="switch-container">
          <div className="lang-title">ENG</div>
          <Switch onChange={(checked) => {
            i18n.changeLanguage(checked ? 'hu' : 'en');
            dispatch(changeLanguage(checked ? 'hu' : 'en'));
          }} />
          <div className="lang-title">HUN</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
