import {
  GET_PARTNER_R,
  DELETE_PARTNER_R,
  POST_PARTNER_R,
  UPDATE_PARTNER_R,
  GET_CITY_R,
  POST_CITY_R,
  GET_BUSINESS_FORM_R,
  POST_BUSINESS_FORM_R,
  CHANGE_INPUT,
  OPEN_MODAL,
  APP_CHANGE_LANGUAGE,
  SEARCH,
  SET_SEARCH_VALUES,
  CLEAR_SEARCH_VALUES,
} from 'consts/actionTypes';

export const changeLanguage = (language) => ({
  type: APP_CHANGE_LANGUAGE,
  payload: {
    language,
  },
});

export const search = () => ({
  type: SEARCH,
});

export const setSearchValue = (field, value) => ({
  type: SET_SEARCH_VALUES,
  payload: {
    field,
    value,
  },
});

export const clearSearchValues = () => ({
  type: CLEAR_SEARCH_VALUES,
});

export const getPartners = () => ({
  type: GET_PARTNER_R,
});

export const deletePartner = (id) => ({
  type: DELETE_PARTNER_R,
  payload: {
    id,
  },
});

export const addPartner = (data) => ({
  type: POST_PARTNER_R,
  payload: {
    data,
  },
});

export const updatePartner = (data, id) => ({
  type: UPDATE_PARTNER_R,
  payload: {
    data,
    id,
  },
});

export const getCities = () => ({
  type: GET_CITY_R,
});

export const addCity = (name) => ({
  type: POST_CITY_R,
  payload: {
    name,
  },
});

export const getBusinessForms = () => ({
  type: GET_BUSINESS_FORM_R,
});

export const addBusinessForm = (name) => ({
  type: POST_BUSINESS_FORM_R,
  payload: {
    name,
  },
});

export const changeInput = (field, value) => ({
  type: CHANGE_INPUT,
  payload: {
    field,
    value,
  },
});

export const openModal = (modalName, open, optionalData = null) => ({
  type: OPEN_MODAL,
  payload: {
    modalName,
    open,
    optionalData,
  },
});
