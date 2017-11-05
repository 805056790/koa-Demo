import {post} from './rpc';
import URI from 'urijs';

export async function reg(obj) {
  try {
    let result = await post("/reg", obj);
    console.log(result);
    return result;
  } catch (err) {
    console.log(err.message);
  }
}