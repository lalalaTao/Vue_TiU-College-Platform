import requestUrl from "../../../requestUrl";
import request from "../../../request";
import requestParam from "../../../requestParam";

//获取院系
export function listHyschoolfaculty (params) {
  return request({
    url: requestUrl('/hyschoolfaculty/listHyschoolfaculty'),
    method: 'post',
    data: requestParam(params)
  })
}
//获取专业
export function listHyschoolspecialty (params) {
  return request({
    url: requestUrl('/hyschoolspecialty/listHyschoolspecialty'),
    method: 'post',
    data: requestParam(params)
  })
}
