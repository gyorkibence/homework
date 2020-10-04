import {
  takeEvery, call, put,
} from 'redux-saga/effects';
import { apiURL } from 'services/consts';
import * as API from 'services/api';
import {
  GET_PARTNER_R, GET_PARTNER_S, GET_PARTNER_F,
  POST_PARTNER_R, POST_PARTNER_S, POST_PARTNER_F,
  DELETE_PARTNER_R, DELETE_PARTNER_S, DELETE_PARTNER_F,
  UPDATE_PARTNER_R, UPDATE_PARTNER_S, UPDATE_PARTNER_F,
  GET_CITY_R, GET_CITY_S, GET_CITY_F,
  POST_CITY_R, POST_CITY_S, POST_CITY_F,
  GET_BUSINESS_FORM_R, GET_BUSINESS_FORM_S, GET_BUSINESS_FORM_F,
  POST_BUSINESS_FORM_R, POST_BUSINESS_FORM_S, POST_BUSINESS_FORM_F,
  OPEN_MODAL,
} from '../consts/actionTypes';
import { notification } from 'antd';

export function* getPartner() {
  try {
    const partners = yield call(API.getData, `${apiURL}/partner`);
    yield put({
      type: GET_PARTNER_S,
      payload: {
        partners,
      },
    });
  } catch (error) {
    console.log(error); // eslint-disable-line
    yield put({
      type: GET_PARTNER_F,
    });
  }
}

export function* addPartner(action) {
  try {
    const { data } = action.payload;
    const message = yield call(API.postData, `${apiURL}/partner`, data);
    yield put({
      type: POST_PARTNER_S,
    });
    yield put({
      type: OPEN_MODAL,
      payload: {
        modalName: 'partner',
        open: false,
      },
    });
    yield call (getPartner);
    notification.success({
      message: 'SUCCESS',
      description: message.data.message,
    });
  } catch (error) {
    console.log(error); // eslint-disable-line
    yield put({
      type: POST_PARTNER_F,
    });
  }
}

export function* deletePartner(action) {
  try {
    const { id } = action.payload;
    const message = yield call(API.deleteData, `${apiURL}/partner/${id}`);
    yield put({
      type: DELETE_PARTNER_S,
    });
    yield put({
      type: OPEN_MODAL,
      payload: {
        modalName: 'confirm',
        open: false,
      },
    });
    yield call(getPartner);
    notification.success({
      message: 'SUCCESS',
      description: message.data.message,
    });
  } catch (error) {
    console.log(error); // eslint-disable-line
    yield put({
      type: DELETE_PARTNER_F,
    });
  }
}

export function* updatePartner(action) {
  try {
    const { data, id } = action.payload;
    const message = yield call(API.patchData, `${apiURL}/partner/${id}`, data);
    yield put({
      type: UPDATE_PARTNER_S,
    });
    yield put({
      type: OPEN_MODAL,
      payload: {
        modalName: 'partner',
        open: false,
      },
    });
    yield call(getPartner);
    notification.success({
      message: 'SUCCESS',
      description: message.data.message,
    });
  } catch (error) {
    console.log(error); // eslint-disable-line
    yield put({
      type: UPDATE_PARTNER_F,
    });
  }
}

export function* getCity() {
  try {
    const cities = yield call(API.getData, `${apiURL}/city`);
    yield put({
      type: GET_CITY_S,
      payload: {
        cities: cities.map((item) => ({
          id: item.city_id,
          name: item.name,
        })),
      },
    });
  } catch (error) {
    console.log(error); // eslint-disable-line
    yield put({
      type: GET_CITY_F,
    });
  }
}

export function* addCity(action) {
  try {
    const { name } = action.payload;
    const message = yield call(API.postData, `${apiURL}/city`, { name });
    yield put({
      type: POST_CITY_S,
    });
    yield call(getCity);
    notification.success({
      message: 'SUCCESS',
      description: message.data.message,
    });
  } catch (error) {
    console.log(error); // eslint-disable-line
    yield put({
      type: POST_CITY_F,
    });
  }
}

export function* getBusinessForm() {
  try {
    const businessForms = yield call(API.getData, `${apiURL}/business-form`);
    yield put({
      type: GET_BUSINESS_FORM_S,
      payload: {
        businessForms: businessForms.map((item) => ({
          id: item.business_form_id,
          name: item.business_form,
        })),
      },
    });
  } catch (error) {
    console.log(error); // eslint-disable-line
    yield put({
      type: GET_BUSINESS_FORM_F,
    });
  }
}

export function* addBusinessForm(action) {
  try {
    const { name } = action.payload;
    const message = yield call(API.postData, `${apiURL}/business-form`, { business_form: name });
    yield put({
      type: POST_BUSINESS_FORM_S,
    });
    yield call(getBusinessForm);
    notification.success({
      message: 'SUCCESS',
      description: message.data.message,
    });
  } catch (error) {
    console.log(error); // eslint-disable-line
    yield put({
      type: POST_BUSINESS_FORM_F,
    });
  }
}

export const appSagas = [
  takeEvery(GET_PARTNER_R, getPartner),
  takeEvery(POST_PARTNER_R, addPartner),
  takeEvery(DELETE_PARTNER_R, deletePartner),
  takeEvery(UPDATE_PARTNER_R, updatePartner),
  takeEvery(GET_CITY_R, getCity),
  takeEvery(POST_CITY_R, addCity),
  takeEvery(GET_BUSINESS_FORM_R, getBusinessForm),
  takeEvery(POST_BUSINESS_FORM_R, addBusinessForm),
];
