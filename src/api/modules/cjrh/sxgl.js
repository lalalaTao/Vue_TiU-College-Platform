import request from "../../request";
import requestUrl from "../../requestUrl";
import requestParam from "../../requestParam";

export function getsxlist (params) {
  return request({
    url: requestUrl('/xqstudent/getInternshipInfo?'+params),
    method: 'post',
    // data: requestParam(params)
  })
}
export function getsxxq (params) {
  return request({
    url: requestUrl('/xqstudent/getInternshipInfo?userId='+params),
    method: 'post',
  })
}

export function getclass (params) {
  return request({
    url: requestUrl('/xqXzclassController/doGetXzClassByParams'),
    method: 'post',
    data: requestParam(params)
  })
}
