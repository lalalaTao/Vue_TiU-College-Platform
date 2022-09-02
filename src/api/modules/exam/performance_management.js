import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";

//获取证书列表
export function queryzslist (params) {
  return request({
    url: requestUrl('/xqcertificate/doGetStudentExamCertificateList'),
    method: 'post',
    data: requestParam(params)
  })
}

//获得成绩列表
export function querycjlist (params) {
  return request({
    url: requestUrl('/xqscore/list'),
    method: 'post',
    data: requestParam(params)
  })
}
