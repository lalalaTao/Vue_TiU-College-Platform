import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";

//获取技能考核类型
export function listAllHyskillassessmenttype (params) {
  return request({
    url: requestUrl('/hyskillassessmenttype/listAllHyskillassessmenttype'),
    method: 'post',
    data: requestParam(params)
  })
}

//资源

export function listHyskillresources (params) {
  return request({
    url: requestUrl('/hyskillresources/listHyskillresources'),
    method: 'post',
    data: requestParam(params)
  })
}
