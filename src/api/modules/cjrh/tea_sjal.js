import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";

//获取企业实践
export function getsjal (params) {
  return request({
    url: requestUrl('/xqteacherbusinesspractice/info'),
    method: 'post',
    // data: requestParam(params)
  })
}

//删除企业实践
export function deletesjal (params) {
  return request({
    url: requestUrl('/xqteacherbusinesspractice/delete'),
    method: 'post',
    data: requestParam(params)
  })
}
