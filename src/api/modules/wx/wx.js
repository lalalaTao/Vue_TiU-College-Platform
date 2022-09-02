import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";

// 重置密码
export function getOauthAccessToken (params) {
  return request({
    url: requestUrl('/wx/getOauthAccessToken'),
    method: 'post',
    data: requestParam(params)
  })
}
