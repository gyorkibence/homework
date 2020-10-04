import axios from 'axios';

export const api = axios.create({
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

export const getData = (url) => api.get(url).then((response) => (response.data));

export const patchData = (url, data) => api.patch(url, data).then((response) => (response));

export const postData = (url, data) => api.post(url, data).then((response) => (response));

export const deleteData = (url) => api.delete(url).then((response) => (response));
