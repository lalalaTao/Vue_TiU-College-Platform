import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";

// 注册
export function getUserIdentity (params) {
  return request({
    url: requestUrl('/sys/useridentity/info'),
    method: 'get',
    params: params
  })
}
