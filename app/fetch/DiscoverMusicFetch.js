import {fetchAsync} from "./fetchAsync";
import {URL} from "../util/config";

const getBanner = () => {
  return fetchAsync(`${URL}/banner`,'GET').then((res)=>{
    return res.json();
  }).then((res)=>{
    return res.banners;
  });
}

export {getBanner};
