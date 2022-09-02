import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";

//资源列表
export function listHyskillresources (params) {
  return request({
    url: requestUrl('/hyskillresources/queryHySkillResources'),
    method: 'post',
    data: requestParam(params)
  })
}

//资源详情
export function findHySkillResourceDetailsById (params) {
  return request({
    url: requestUrl('/hyskillresources/findHySkillResourceDetailsById'),
    method: 'post',
    data: requestParam(params)
  })
}

//收藏课程
export function collectSkillResource (params) {
  return request({
    url: requestUrl('/HySkillCourseCollection/collect'),
    method: 'post',
    data: requestParam(params)
  })
}

//取消收藏
export function cancelcCurseCollection (params) {
  return request({
    url: requestUrl('/HySkillCourseCollection/cancel'),
    method: 'post',
    data: requestParam(params)
  })
}
