import request from "../../request";
import requestUrl from "../../requestUrl";
import requestParam from "../../requestParam";


export function getMenuList (params) {
  return request({
    url: requestUrl('/hyresourcestandard/listHyResourceStandardTree'),
    method: 'post',
    data: requestParam(params)
  })
}

export function getLibList (params) {
  return request({
    url: requestUrl('/hyresourcefile/listHyResourceFileReception'),
    method: 'post',
    data: requestParam(params)
  })
}
