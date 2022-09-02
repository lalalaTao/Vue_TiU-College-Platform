import request from "../../request";
import requestUrl from "../../requestUrl";
import requestParam from "../../requestParam";

export function gettpjs () {
  return request({
    url: requestUrl('/xqteacherinvitecomment/getList'),
    method: 'post',
    // data: requestParam(params)
  })
}
