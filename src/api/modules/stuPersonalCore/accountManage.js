import requestParam from "../../requestParam";
import request from "../../request";
import requestUrl from "../../requestUrl";

export function getPersonalMes (params) {
  return request({
    url: requestUrl('/hyschooluser/selectHySchoolUserToPersonalMessage'),
    method: 'post',
    data: requestParam(params)
  })
}

export function sureForm (params) {
  return request({
    url: requestUrl('/hyschooluser/updateHySchoolUserToPersonalPwd'),
    method: 'post',
    data: requestParam(params)
  })
}

