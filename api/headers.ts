import { store } from '../store';

export const requestHeaders = () => {
  const data = store.getState();
  return new Headers({
  'Content-Type': 'application/json',
  'Accept': 'aplication/xml',
  'Authorization': `Bearer ${data.token.token}`
  })
};
