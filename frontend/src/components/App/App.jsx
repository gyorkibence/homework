import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPartners, getCities,
  getBusinessForms, openModal,
} from 'actions/appActions';
import Header from 'components/Header/Header';
import Table from 'components/Table/Table';
import ConfirmModal from 'components/ConfirmModal/ConfirmModal';
import PartnerModal from 'components/PartnerModal/PartnerModal';
import Search from 'components/Search/Search';
import './app.scss';

const App = () => {
  const dispatch = useDispatch();
  const { searchedItems, cities, businessForms } = useSelector((store) => store.app);

  useEffect(() => {
    dispatch(getCities());
    dispatch(getBusinessForms());
    dispatch(getPartners());
  }, [dispatch]);

  return (
    <div className="page-container">
      <Header />
      <ConfirmModal />
      <PartnerModal />
      <div className="page-body">
        <Search />
        {
          searchedItems && searchedItems.length && cities.length && businessForms.length ? (
            <Table
              dataSource={searchedItems.map((item) => ({
                ...item,
                city_id: cities.find((elem) => +elem.id === +item.city_id).name,
                business_form_id: businessForms.find((elem) => +elem.id === +item.business_form_id).name,
              }))}
              onEdit={(data, modalName) => { dispatch(openModal(modalName, true, data)); }}
              onDelete={(data, modalName) => { dispatch(openModal(modalName, true, data)); }}
            />
          ) : null
        }
      </div>
    </div>
  );
};

export default App;
