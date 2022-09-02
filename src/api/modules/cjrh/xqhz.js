import request from "../../request";
import requestUrl from "../../requestUrl";
import requestParam from "../../requestParam";

export function getcjtzlist (params) {
  return request({
    url: requestUrl('/xqcjnotice/list'),
    method: 'post',
    data: requestParam(params)
  })
}

export function getcjinfo (params) {
  return request({
    url: requestUrl('/xqcjnotice/info'),
    method: 'post',
    data: requestParam(params)
  })
}

export function getcxcylist (params) {
  return request({
    url: requestUrl('/xqcxnotice/list'),
    method: 'post',
    data: requestParam(params)
  })
}
