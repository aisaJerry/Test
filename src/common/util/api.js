import axios from "axios";
import loading from 'src/components/loading/load.js'

let loadingInstance = {};

axios.interceptors.request.use(config => {
  // loading
  loadingInstance = loading();
  return config;
}, err => {
  return Promise.reject(err);
});

axios.interceptors.response.use(res => {
  // close loading
  loadingInstance.close();
  return res;
}, error => {
  loadingInstance.close();
  return Promise.resolve(error.response);
});

export default  {
  get: (url, params, config) => {
    config = config || {};
    const urlFixed = `${url}/${params}`;
    return axios.get(urlFixed, config);
  },
  post: (url, params, config) => {
    config = config || {};
    return axios.post(url, params, config);
  }
};
