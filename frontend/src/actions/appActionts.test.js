import * as TYPES from 'consts/actionTypes';
import * as ACTIONS from './appActions';

describe('app actions', () => {
  it('should create an action to search', () => {
    const expectedAction = {
      type: TYPES.SEARCH,
    };
    expect(ACTIONS.search()).toEqual(expectedAction);
  });

  it('should create an action to change language', () => {
    const payload = ['hu'];
    const expectedAction = {
      type: TYPES.APP_CHANGE_LANGUAGE,
      payload: {
        language: payload[0],
      },
    };
    expect(ACTIONS.changeLanguage(...payload)).toEqual(expectedAction);
  });

  it('should create an action to set search values', () => {
    const payload = ['field', 'value'];
    const expectedAction = {
      type: TYPES.SET_SEARCH_VALUES,
      payload: {
        field: payload[0],
        value: payload[1],
      },
    };
    expect(ACTIONS.setSearchValue(...payload)).toEqual(expectedAction);
  });

  it('should create an action to clear search values', () => {
    const expectedAction = {
      type: TYPES.CLEAR_SEARCH_VALUES,
    };
    expect(ACTIONS.clearSearchValues()).toEqual(expectedAction);
  });

  it('should create an action to get partners', () => {
    const expectedAction = {
      type: TYPES.GET_PARTNER_R,
    };
    expect(ACTIONS.getPartners()).toEqual(expectedAction);
  });

  it('should create an action to delete partners', () => {
    const payload = ['id'];
    const expectedAction = {
      type: TYPES.DELETE_PARTNER_R,
      payload: {
        id: payload[0],
      },
    };
    expect(ACTIONS.deletePartner(...payload)).toEqual(expectedAction);
  });

  it('should create an action to add partners', () => {
    const payload = ['data'];
    const expectedAction = {
      type: TYPES.POST_PARTNER_R,
      payload: {
        data: payload[0],
      },
    };
    expect(ACTIONS.addPartner(...payload)).toEqual(expectedAction);
  });

  it('should create an action to update partners', () => {
    const payload = ['data', 'id'];
    const expectedAction = {
      type: TYPES.UPDATE_PARTNER_R,
      payload: {
        data: payload[0],
        id: payload[1],
      },
    };
    expect(ACTIONS.updatePartner(...payload)).toEqual(expectedAction);
  });

  it('should create an action to get cities', () => {
    const expectedAction = {
      type: TYPES.GET_CITY_R,
    };
    expect(ACTIONS.getCities()).toEqual(expectedAction);
  });

  it('should create an action to add city', () => {
    const payload = ['name'];
    const expectedAction = {
      type: TYPES.POST_CITY_R,
      payload: {
        name: payload[0],
      },
    };
    expect(ACTIONS.addCity(...payload)).toEqual(expectedAction);
  });

  it('should create an action to get business form', () => {
    const expectedAction = {
      type: TYPES.GET_BUSINESS_FORM_R,
    };
    expect(ACTIONS.getBusinessForms()).toEqual(expectedAction);
  });

  it('should create an action to add business form', () => {
    const payload = ['name'];
    const expectedAction = {
      type: TYPES.POST_BUSINESS_FORM_R,
      payload: {
        name: payload[0],
      },
    };
    expect(ACTIONS.addBusinessForm(...payload)).toEqual(expectedAction);
  });

  it('should create an action to change input', () => {
    const payload = ['field', 'value'];
    const expectedAction = {
      type: TYPES.CHANGE_INPUT,
      payload: {
        field: payload[0],
        value: payload[1],
      },
    };
    expect(ACTIONS.changeInput(...payload)).toEqual(expectedAction);
  });

  it('should create an action to open modal with optional data', () => {
    const payload = ['modalName', 'open', 'optionalData'];
    const expectedAction = {
      type: TYPES.OPEN_MODAL,
      payload: {
        modalName: payload[0],
        open: payload[1],
        optionalData: payload[2],
      },
    };
    expect(ACTIONS.openModal(...payload)).toEqual(expectedAction);
  });

  it('should create an action to open modal without optional data', () => {
    const payload = ['modalName', 'open'];
    const expectedAction = {
      type: TYPES.OPEN_MODAL,
      payload: {
        modalName: payload[0],
        open: payload[1],
        optionalData: null,
      },
    };
    expect(ACTIONS.openModal(...payload)).toEqual(expectedAction);
  });
});
