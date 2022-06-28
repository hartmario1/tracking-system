import axios from "axios";

// need to add urls from server

export const path = axios.defaults.baseURL = ''
// @ts-ignore
axios.defaults.headers['Content-Type'] = 'application/json';
export default axios;
