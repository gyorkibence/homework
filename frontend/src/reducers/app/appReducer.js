import {
  GET_PARTNER_S,
  GET_CITY_S,
  GET_BUSINESS_FORM_S,
  OPEN_MODAL,
  CHANGE_INPUT,
  APP_CHANGE_LANGUAGE,
  SET_SEARCH_VALUES,
  CLEAR_SEARCH_VALUES,
  SEARCH,
} from 'consts/actionTypes';
import initialState from './initialState';

export const normalize = (value) => value.split(' ').join('').toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export const getSearchedItems = (partners, name, city, businessForm) => partners.filter((partner) => {
  let filterParams = true;
  if (name) {
    filterParams = normalize(partner.name).includes(normalize(name));
  }
  if (city) {
    filterParams = filterParams && +partner.city_id === +city;
  }
  if (businessForm) {
    filterParams = filterParams && +partner.business_form_id === +businessForm;
  }
  return filterParams;
});

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_CHANGE_LANGUAGE: {
      const { language } = action.payload;
      return {
        ...state,
        language,
      };
    }

    case GET_PARTNER_S: {
      const { partners } = action.payload;
      return {
        ...state,
        partners: partners.map((item) => ({ ...item, action: item })),
        searchedItems: partners.map((item) => ({ ...item, action: item })),
      };
    }

    case GET_CITY_S: {
      const { cities } = action.payload;
      return {
        ...state,
        cities,
      };
    }

    case GET_BUSINESS_FORM_S: {
      const { businessForms } = action.payload;
      return {
        ...state,
        businessForms,
      };
    }

    case OPEN_MODAL: {
      const { modalName, open, optionalData } = action.payload;
      let data = optionalData;
      if (state.modals[modalName] && !open) {
        data = null;
      }
      return {
        ...state,
        modals: {
          ...state.modals,
          [modalName]: open,
        },
        input: {
          ...state.input,
          ...data,
        },
      };
    }

    case CHANGE_INPUT: {
      const { field, value } = action.payload;
      return {
        ...state,
        input: {
          ...state.input,
          [field]: value,
        },
      };
    }

    case SET_SEARCH_VALUES: {
      const { field, value } = action.payload;
      return {
        ...state,
        searchValues: {
          ...state.searchValues,
          [field]: value,
        },
      };
    }

    case CLEAR_SEARCH_VALUES:
      return {
        ...state,
        searchValues: initialState.searchValues,
        searchedItems: state.partners,
      };

    case SEARCH: {
      const { searchValues: { name, city, businessForm }, partners } = state;
      return {
        ...state,
        searchedItems: getSearchedItems(partners, name, city, businessForm),
      };
    }

    default:
      return state;
  }
};

export default appReducer;
