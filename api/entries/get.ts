import axios from 'axios';
import { path } from '../axios/axios';
import { DATA } from './entries';

export const getEntries = () => {
  console.log(DATA);
}

// export const getEntries = async() => {
//   const { data } = await axios.get(path + '/api');
//   return data;
// }