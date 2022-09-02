import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";

//资源管理-列表或查询单个
export function listPersonCenterHySkillResources (params) {
  return request({
    url: requestUrl('/hyskillresources/listPersonCenterHySkillResources'),
    method: 'post',
    data: requestParam(params)
  })
}
//院系列表
export function listHyschoolfaculty (params) {
  return request({
    url: requestUrl('/hyschoolfaculty/listHyschoolfaculty'),
    method: 'post',
    data: requestParam(params)
  })
}
//专业列表
export function listHyschoolspecialty (params) {
  return request({
    url: requestUrl('/hyschoolspecialty/listHyschoolspecialty'),
    method: 'post',
    data: requestParam(params)
  })
}

//资源管理-新增或修改
export function saveOrUpdateHySkillResources (params) {
  return request({
    url: requestUrl('/hyskillresources/saveOrUpdateHySkillResources'),
    method: 'post',
    data: requestParam(params)
  })
}


//资源管理-班级列表（新增时使用）
export function listHySchoolClass (params) {
  return request({
    url: requestUrl('/hyschoolclass/listHySchoolClass'),
    method: 'post',
    data: requestParam(params)
  })
}

//资源管理-发布、取消发布接口
export function unPublishPersonCenterHySkillResources (params) {
  return request({
    url: requestUrl('/hyskillresources/unPublishPersonCenterHySkillResources'),
    method: 'post',
    data: requestParam(params)
  })
}


//资源管理-删除接口
export function deletePersonCenterHySkillResources (params) {
  return request({
    url: requestUrl('/hyskillresources/deletePersonCenterHySkillResources'),
    method: 'post',
    data: requestParam(params)
  })
}


//资源权限-学校用户老师查询接口
export function listSchoolUserTeacher (params) {
  return request({
    url: requestUrl('/hyskillresourcesteateam/listSchoolUserTeacher'),
    method: 'post',
    data: requestParam(params)
  })
}
// 资源权限-老师新增或修改
export function saveOrUpdatePersonCenterHySkillResources (params) {
  return request({
    url: requestUrl('/hyskillresourcesteateam/saveOrUpdatePersonCenterHySkillResources'),
    method: 'post',
    data: requestParam(params)
  })
}
