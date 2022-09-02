import request from "../../request";
import requestUrl from "../../requestUrl";
import requestParam from "../../requestParam";

export function queryZhuanyeList (params) {
  return request({
    url: requestUrl('/xqspecialty/info'),
    method: 'post',
    data: requestParam(params)
  })
}

export function querysaveCourseList (params) {
  return request({
    url: requestUrl('/xqcourse/saveCourseInfo'),
    method: 'post',
    data: requestParam(params)
  })
}

export function queryZhuanye3List (params) {
  return request({
    url: requestUrl('/xqcourse/get6CourseBySelType'),
    method: 'post',
    data: requestParam(params)
  })
}
export function queryShixunList (params) {
  return request({
    url: requestUrl('/xqspecialty/list'),
    method: 'post',
    data: requestParam(params)
  })
}


export function getspcou (params) {
  return request({
    url: requestUrl('/xqcertificatebindcourse/info'),
    method: 'post',
    data: requestParam(params)
  })
}


export function getListTree (params) {
  return request({
    url: requestUrl('/xqcoursedir/listTreeWithFiles'),
    method: 'post',
    data: requestParam(params)
  })
}
