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

//保存企业实践
export function savesjal (params) {
  return request({
    url: requestUrl('/xqteacherbusinesspractice/save'),
    method: 'post',
    data: requestParam(params)
  })
}

//修改企业实践
export function updatesjal (params) {
  return request({
    url: requestUrl('/xqteacherbusinesspractice/update'),
    method: 'post',
    data: requestParam(params)
  })
}
