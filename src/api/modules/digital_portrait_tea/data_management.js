import request from "../../request";
import requestUrl from "../../requestUrl";
import requestParam from "../../requestParam";
import requestParam2 from "../../requestParam2";

export function getteadata (params) {
  return request({
    url: requestUrl('/xqteacher/doGetTeacherData'),
    method: 'post',
    data: requestParam(params)
  })
}

export function delteadata(params) {
  return request({
    url:requestUrl('/xqteacher/deleteTeacherData'),
    method:'post',
    params:requestParam2(params)
  })
}

export function downloadtea(params) {
  return request({
    url:requestUrl('/xqteacher/downloadTeacherData'),
    method:'post',
    params:requestParam2(params)
  })
}

