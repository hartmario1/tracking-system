import { token } from "./utils";

export const requestHeaders = new Headers({
  'Content-Type': 'application/json',
  'Accept': 'aplication/xml',
  'Authorization': `Bearer ${token}`
});
