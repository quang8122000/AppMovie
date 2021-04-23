import axios from 'axios';
import store from '../redux/store';
import {Service} from 'axios-middleware';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org',
});

export const createService = () => {
  const apiService = new Service($axios.api);

  apiService.register({
    onRequest(config: any) {
      const {devices}: any = store.getState();
      if (devices?.token) {
        config.headers.Authorization = `Bearer ${devices?.token}`;
      }
      // if(!!App.location.longitude && !!App.location.latitude && devices?.deviceId){
      //   config.headers.long = App.location.longitude;
      //   config.headers.lat = App.location.latitude;
      //   config.headers.deviceId = devices?.deviceId
      // }
      console.log('config', config);

      return config;
    },

    onSync(promise: any) {
      return promise;
    },

    onResponse(response: any) {
      console.log('response', response);
      return response;
    },
    // onResponseError(error) {
    //   console.log('error', error?.response ? error?.response : error);
    //   return error;
    // },
  });
};
export const $axios = {api};
