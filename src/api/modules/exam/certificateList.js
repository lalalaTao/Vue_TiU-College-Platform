import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam"

/**获取证书列表*/
export function doGetCertificates (params) {
  return request({
    url: requestUrl('/xqcertificate/selectStudentCertificates'),
    method: 'post',
    data: requestParam(params)
  })
}

/**获取证书详情（含证书学习人数）*/
export function doGetCertificateDetails (params) {
  return request({
    url: requestUrl('/xqcertificate/info'),
    method: 'post',
    data: requestParam(params)
  })
}
/**获取证书课程列表*/
export function doGetcourselist (params) {
  return request({
    url: requestUrl('/xqcourse/listByCertificate'),
    method: 'post',
    data: requestParam(params)
  })
}

export function gettealist(params) {
  return request({
    url:requestUrl('/xqXzclassController/doGetXzClassByParams'),
    method:'post',
    data:requestParam(params)
  })
}
