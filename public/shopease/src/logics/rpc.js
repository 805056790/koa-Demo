import fetch from 'isomorphic-fetch';
import URI from 'urijs';


export async function request(url) {
  let result = await fetch(url).text();
  return result;
}
