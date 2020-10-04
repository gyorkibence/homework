import { call, put } from 'redux-saga/effects';
import * as TYPES from 'consts/actionTypes';
import * as SERVICES from 'services/api';
import * as consts from 'services/consts';
import * as SAGAS from './appSaga';

describe('app sagas', () => {
  it('getPartner Saga test', () => {
    const partners = [1, 2, 3];
    const gen = SAGAS.getPartner();
    expect(gen.next().value).toEqual(call(SERVICES.getData, `${consts.apiURL}/partner`));
    expect(gen.next(partners).value).toEqual(put({
      type: TYPES.GET_PARTNER_S,
      payload: {
        partners,
      },
    }));
    expect(gen.next()).toEqual({ done: true, value: undefined });
  });

  it('getPartner Saga test with error', () => {
    const gen = SAGAS.getPartner();
    expect(gen.next().value).toEqual(call(SERVICES.getData, `${consts.apiURL}/partner`));
    expect(gen.throw(new Error('Something went wrong')).value).toEqual(put({
      type: TYPES.GET_PARTNER_F,
    }));
    expect(gen.next()).toEqual({ done: true, value: undefined });
  });

  it('addPartner Saga test', () => {
    const action = {
      payload: {
        data: [1, 2, 3],
      },
    };
    const message = {
      data: {
        message: 'message',
      },
    };
    const gen = SAGAS.addPartner(action);
    expect(gen.next().value).toEqual(call(SERVICES.postData, `${consts.apiURL}/partner`, action.payload.data));
    expect(gen.next(message).value).toEqual(put({
      type: TYPES.POST_PARTNER_S,
    }));
    expect(gen.next().value).toEqual(put({
      type: TYPES.OPEN_MODAL,
      payload: {
        modalName: 'partner',
        open: false,
      },
    }));
    expect(gen.next().value).toEqual(call(SAGAS.getPartner));
    expect(gen.next()).toEqual({ done: true, value: undefined });
  });

  it('addPartner Saga test with error', () => {
    const action = {
      payload: {
        data: [1, 2, 3],
      },
    };
    const gen = SAGAS.addPartner(action);
    expect(gen.next().value).toEqual(call(SERVICES.postData, `${consts.apiURL}/partner`, action.payload.data));
    expect(gen.throw(new Error('Something went wrong')).value).toEqual(put({
      type: TYPES.POST_PARTNER_F,
    }));
    expect(gen.next()).toEqual({ done: true, value: undefined });
  });

  it('deletePartner Saga test', () => {
    const action = {
      payload: {
        id: 1,
      },
    };
    const { id } = action.payload;
    const message = {
      data: {
        message: 'message',
      },
    };
    const gen = SAGAS.deletePartner(action);
    expect(gen.next().value).toEqual(call(SERVICES.deleteData, `${consts.apiURL}/partner/${id}`));
    expect(gen.next(message).value).toEqual(put({
      type: TYPES.DELETE_PARTNER_S,
    }));
    expect(gen.next().value).toEqual(put({
      type: TYPES.OPEN_MODAL,
      payload: {
        modalName: 'confirm',
        open: false,
      },
    }));
    expect(gen.next().value).toEqual(call(SAGAS.getPartner));
    expect(gen.next()).toEqual({ done: true, value: undefined });
  });

  it('deletePartner Saga test with error', () => {
    const action = {
      payload: {
        id: 1,
      },
    };
    const { id } = action.payload;
    const gen = SAGAS.deletePartner(action);
    expect(gen.next().value).toEqual(call(SERVICES.deleteData, `${consts.apiURL}/partner/${id}`));
    expect(gen.throw(new Error('Something went wrong')).value).toEqual(put({
      type: TYPES.DELETE_PARTNER_F,
    }));
    expect(gen.next()).toEqual({ done: true, value: undefined });
  });

  it('updatePartner Saga test', () => {
    const action = {
      payload: {
        data: [1, 2, 3],
        id: 1,
      },
    };
    const { data, id } = action.payload;
    const message = {
      data: {
        message: 'message',
      },
    };
    const gen = SAGAS.updatePartner(action);
    expect(gen.next().value).toEqual(call(SERVICES.patchData, `${consts.apiURL}/partner/${id}`, data));
    expect(gen.next(message).value).toEqual(put({
      type: TYPES.UPDATE_PARTNER_S,
    }));
    expect(gen.next().value).toEqual(put({
      type: TYPES.OPEN_MODAL,
      payload: {
        modalName: 'partner',
        open: false,
      },
    }));
    expect(gen.next().value).toEqual(call(SAGAS.getPartner));
    expect(gen.next()).toEqual({ done: true, value: undefined });
  });

  it('updatePartner Saga test with error', () => {
    const action = {
      payload: {
        data: [1, 2, 3],
        id: 1,
      },
    };
    const { data, id } = action.payload;
    const gen = SAGAS.updatePartner(action);
    expect(gen.next().value).toEqual(call(SERVICES.patchData, `${consts.apiURL}/partner/${id}`, data));
    expect(gen.throw(new Error('Something went wrong')).value).toEqual(put({
      type: TYPES.UPDATE_PARTNER_F,
    }));
    expect(gen.next()).toEqual({ done: true, value: undefined });
  });

  it('getCity Saga test', () => {
    const cities = [{ city_id: 1, name: 'name' }];
    const gen = SAGAS.getCity();
    expect(gen.next().value).toEqual(call(SERVICES.getData, `${consts.apiURL}/city`));
    expect(gen.next(cities).value).toEqual(put({
      type: TYPES.GET_CITY_S,
      payload: {
        cities: [{ id: 1, name: 'name' }],
      },
    }));
    expect(gen.next()).toEqual({ done: true, value: undefined });
  });

  it('getCity Saga test with error', () => {
    const gen = SAGAS.getCity();
    expect(gen.next().value).toEqual(call(SERVICES.getData, `${consts.apiURL}/city`));
    expect(gen.throw(new Error('Something went wrong')).value).toEqual(put({
      type: TYPES.GET_CITY_F,
    }));
    expect(gen.next()).toEqual({ done: true, value: undefined });
  });

  it('addCity Saga test', () => {
    const action = {
      payload: {
        name: 'name',
      },
    };
    const message = {
      data: {
        message: 'message',
      },
    };
    const { name } = action.payload;
    const gen = SAGAS.addCity(action);
    expect(gen.next().value).toEqual(call(SERVICES.postData, `${consts.apiURL}/city`, { name }));
    expect(gen.next(message).value).toEqual(put({
      type: TYPES.POST_CITY_S,
    }));
    expect(gen.next().value).toEqual(call(SAGAS.getCity));
    expect(gen.next()).toEqual({ done: true, value: undefined });
  });

  it('addCity Saga test with error', () => {
    const action = {
      payload: {
        name: 'name',
      },
    };
    const { name } = action.payload;
    const gen = SAGAS.addCity(action);
    expect(gen.next().value).toEqual(call(SERVICES.postData, `${consts.apiURL}/city`, { name }));
    expect(gen.throw(new Error('Something went wrong')).value).toEqual(put({
      type: TYPES.POST_CITY_F,
    }));
    expect(gen.next()).toEqual({ done: true, value: undefined });
  });

  it('getBusinessForm Saga test', () => {
    const businessForms = [{ business_form_id: 1, business_form: 'name' }];
    const gen = SAGAS.getBusinessForm();
    expect(gen.next().value).toEqual(call(SERVICES.getData, `${consts.apiURL}/business-form`));
    expect(gen.next(businessForms).value).toEqual(put({
      type: TYPES.GET_BUSINESS_FORM_S,
      payload: {
        businessForms: [{ id: 1, name: 'name' }],
      },
    }));
    expect(gen.next()).toEqual({ done: true, value: undefined });
  });

  it('getBusinessForm Saga test with error', () => {
    const gen = SAGAS.getBusinessForm();
    expect(gen.next().value).toEqual(call(SERVICES.getData, `${consts.apiURL}/business-form`));
    expect(gen.throw(new Error('Something went wrong')).value).toEqual(put({
      type: TYPES.GET_BUSINESS_FORM_F,
    }));
    expect(gen.next()).toEqual({ done: true, value: undefined });
  });

  it('addBusinessForm Saga test', () => {
    const action = {
      payload: {
        name: 'name',
      },
    };
    const message = {
      data: {
        message: 'message',
      },
    };
    const { name } = action.payload;
    const gen = SAGAS.addBusinessForm(action);
    expect(gen.next().value).toEqual(call(SERVICES.postData, `${consts.apiURL}/business-form`, { business_form: name }));
    expect(gen.next(message).value).toEqual(put({
      type: TYPES.POST_BUSINESS_FORM_S,
    }));
    expect(gen.next().value).toEqual(call(SAGAS.getBusinessForm));
    expect(gen.next()).toEqual({ done: true, value: undefined });
  });

  it('addBusinessForm Saga test with error', () => {
    const action = {
      payload: {
        name: 'name',
      },
    };
    const { name } = action.payload;
    const gen = SAGAS.addBusinessForm(action);
    expect(gen.next().value).toEqual(call(SERVICES.postData, `${consts.apiURL}/business-form`, { business_form: name }));
    expect(gen.throw(new Error('Something went wrong')).value).toEqual(put({
      type: TYPES.POST_BUSINESS_FORM_F,
    }));
    expect(gen.next()).toEqual({ done: true, value: undefined });
  });
});
