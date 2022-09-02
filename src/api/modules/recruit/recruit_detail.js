import request from "../../request";
import requestUrl from "../../requestUrl";
import requestParam from "../../requestParam";

//获取招聘信息
export function getzpdetail (params) {
  return request({
    url: requestUrl('/xqrecruit/info'),
    method: 'post',
    data: requestParam(params)
  })
}
//投递简历
export function setjl (params) {
  return request({
    url: requestUrl('/xqrecruit/saveAccept'),
    method: 'post',
    data: requestParam(params)
  })
}
