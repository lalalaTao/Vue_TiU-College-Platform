import axios  from "axios";
import requestUrl from './requestUrl';
const ERR_OK = 0

export function get(url){
  let new_url = requestUrl(url)
  return function (params){
    debugger
    return axios.get(new_url,params)
      .then((res=>{
        debugger
        const {error,data} = res.data;
        if(error == ERR_OK){}
          return data;
      }))

  }
}
