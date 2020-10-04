import * as TYPES from 'consts/actionTypes';
import reducer, { normalize, getSearchedItems } from './appReducer';
import initialState from './initialState';

describe('app reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle APP_CHANGE_LANGUAGE', () => {
    const payload = {
      language: ' language',
    };
    expect(
      reducer(initialState, {
        type: TYPES.APP_CHANGE_LANGUAGE,
        payload,
      }),
    ).toEqual({
      ...initialState,
      language: payload.language,
    });
  });

  it('should handle GET_PARTNER_S', () => {
    const payload = {
      partners: [{ field: 'value' }],
    };
    expect(
      reducer(initialState, {
        type: TYPES.GET_PARTNER_S,
        payload,
      }),
    ).toEqual({
      ...initialState,
      partners: payload.partners.map((item) => ({ ...item, action: item })),
      searchedItems: payload.partners.map((item) => ({ ...item, action: item })),
    });
  });

  it('should handle GET_CITY_S', () => {
    const payload = {
      cities: [{ field: 'value' }],
    };
    expect(
      reducer(initialState, {
        type: TYPES.GET_CITY_S,
        payload,
      }),
    ).toEqual({
      ...initialState,
      cities: payload.cities,
    });
  });

  it('should handle GET_BUSINESS_FORM_S', () => {
    const payload = {
      businessForms: [{ field: 'value' }],
    };
    expect(
      reducer(initialState, {
        type: TYPES.GET_BUSINESS_FORM_S,
        payload,
      }),
    ).toEqual({
      ...initialState,
      businessForms: payload.businessForms,
    });
  });

  it('should handle OPEN_MODAL with optional data and modal open action', () => {
    const payload = {
      modalName: 'partner',
      open: true,
      optionalData: { id: 1 },
    };
    expect(
      reducer(initialState, {
        type: TYPES.OPEN_MODAL,
        payload,
      }),
    ).toEqual({
      ...initialState,
      modals: {
        ...initialState.modals,
        [payload.modalName]: payload.open,
      },
      input: {
        ...initialState.input,
        ...payload.optionalData,
      },
    });
  });

  it('should handle OPEN_MODAL with optional data and modal close action', () => {
    const payload = {
      modalName: 'partner',
      open: false,
      optionalData: { id: 1 },
    };
    expect(
      reducer({
        ...initialState,
        modals: {
          ...initialState.modals,
          partner: true,
        },
      }, {
        type: TYPES.OPEN_MODAL,
        payload,
      }),
    ).toEqual({
      ...initialState,
      modals: {
        ...initialState.modals,
        [payload.modalName]: payload.open,
      },
      input: {
        ...initialState.input,
      },
    });
  });

  it('should handle CHANGE_INPUT', () => {
    const payload = {
      field: 'field',
      value: 'value',
    };
    expect(
      reducer(initialState, {
        type: TYPES.CHANGE_INPUT,
        payload,
      }),
    ).toEqual({
      ...initialState,
      input: {
        ...initialState.input,
        [payload.field]: payload.value,
      },
    });
  });

  it('should handle SET_SEARCH_VALUES', () => {
    const payload = {
      field: 'field',
      value: 'value',
    };
    expect(
      reducer(initialState, {
        type: TYPES.SET_SEARCH_VALUES,
        payload,
      }),
    ).toEqual({
      ...initialState,
      searchValues: {
        ...initialState.searchValues,
        [payload.field]: payload.value,
      },
    });
  });

  it('should handle CLEAR_SEARCH_VALUES', () => {
    expect(
      reducer(initialState, {
        type: TYPES.CLEAR_SEARCH_VALUES,
      }),
    ).toEqual({
      ...initialState,
      searchValues: initialState.searchValues,
      searchedItems: initialState.partners,
    });
  });

  it('should handle SEARCH', () => {
    const mockInitialState = {
      ...initialState,
      searchedItems: [{ id: 1, city_id: 1, business_form_id: 1, name: 'name' }],
      searchValues: {
        ...initialState.searchValues,
        name: 'na',
      },
    };
    const { searchValues: { name, city, businessForm }, partners } = mockInitialState;
    expect(
      reducer(mockInitialState, {
        type: TYPES.SEARCH,
      }),
    ).toEqual({
      ...mockInitialState,
      searchedItems: getSearchedItems(partners, name, city, businessForm),
    });
  });

  it('should test normalize', () => {
    expect(normalize('ÉkeZetes Össze vissza')).toEqual('EKEZETESOSSZEVISSZA');
  });

  it('should test getSearchedItems with name', () => {
    const partners = [{ id: 1, city_id: 1, business_form_id: 1, name: 'name' }];
    const name = 'na';
    const city = null;
    const businessForm = null;
    expect(getSearchedItems(partners, name, city, businessForm)).toEqual(partners);
  });

  it('should test getSearchedItems with city', () => {
    const partners = [{ id: 1, city_id: 1, business_form_id: 1, name: 'name' }];
    const name = null;
    const city = 1;
    const businessForm = null;
    expect(getSearchedItems(partners, name, city, businessForm)).toEqual(partners);
  });

  it('should test getSearchedItems with businessForm ', () => {
    const partners = [{ id: 1, city_id: 1, business_form_id: 1, name: 'name' }];
    const name = null;
    const city = null;
    const businessForm = 1;
    expect(getSearchedItems(partners, name, city, businessForm)).toEqual(partners);
  });

  it('should test getSearchedItems without filters', () => {
    const partners = [{ id: 1, city_id: 1, business_form_id: 1, name: 'name' }];
    const name = null;
    const city = null;
    const businessForm = null;
    expect(getSearchedItems(partners, name, city, businessForm)).toEqual(partners);
  });
});
