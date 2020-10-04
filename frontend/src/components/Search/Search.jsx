import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { search, setSearchValue, clearSearchValues } from 'actions/appActions';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import Select from 'components/Select/Select';
import './search.scss';

const Search = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { searchValues, businessForms, cities } = useSelector((store) => store.app);
  return (
    <div className="search-container">
      <div className="search-form-container">
        <Input
          label={t('search.nameLabel')}
          placeholder={t('search.namePlaceholder')}
          onChange={(value) => { dispatch(setSearchValue('name', value)); }}
          value={searchValues.name}
        />
        <Select
          label={t('search.businessFormLabel')}
          placeholder={t('search.businessFormPlaceholder')}
          onChange={(value) => { dispatch(setSearchValue('businessForm', value)); }}
          dataSource={businessForms}
          value={searchValues.businessForm ? searchValues.businessForm.toString() : null}
        />
        <Select
          label={t('search.citiesLabel')}
          placeholder={t('search.citiesPlaceholder')}
          onChange={(value) => { dispatch(setSearchValue('city', value)); }}
          dataSource={cities}
          value={searchValues.city ? searchValues.city.toString() : null}
        />
      </div>
      <div className="search-button-container">
        <Button
          text={t('search.searchButton')}
          onClick={() => { dispatch(search()); }}
        />
        <Button
          text={t('search.clearButton')}
          onClick={() => { dispatch(clearSearchValues()); }}
        />
      </div>
    </div>
  );
};

export default Search;
