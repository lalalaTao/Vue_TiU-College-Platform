import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";

// 课程目录-树结构（含附件及试卷）
export function listSkillCourseDirTree (params) {
  return request({
    url: requestUrl('/hyskillcoursedir/listSkillCourseDirTree'),
    method: 'post',
    data: requestParam(params)
  })
}

//课程目录-新增修改
export function saveOrUpdateSkillCourseDir (params) {
  return request({
    url: requestUrl('/hyskillcoursedir/saveOrUpdateSkillCourseDir'),
    method: 'post',
    data: requestParam(params)
  })
}

//课程目录-上移下移
export function upOrDownSkillCourseDir (params) {
  return request({
    url: requestUrl('/hyskillcoursedir/upOrDownSkillCourseDir'),
    method: 'post',
    data: requestParam(params)
  })
}

//目录-删除（子级所有数据都删除）
export function deleteSkillCourseDir (params) {
  return request({
    url: requestUrl('/hyskillcoursedir/deleteSkillCourseDir'),
    method: 'post',
    data: requestParam(params)
  })
}



//附件-新增修改
export function saveOrUpdateSkillCourseAccessory (params) {
  return request({
    url: requestUrl('/hyskillcoursediraccessory/saveOrUpdateSkillCourseAccessory'),
    method: 'post',
    data: requestParam(params)
  })
}
//附件-上移下移
export function sortUpAndDownSkillCourseAccessory (params) {
  return request({
    url: requestUrl('/hyskillcoursediraccessory/sortUpAndDownSkillCourseAccessory'),
    method: 'post',
    data: requestParam(params)
  })
}
//附件-重命名
export function renameSkillCourseAccessory (params) {
  return request({
    url: requestUrl('/hyskillcoursediraccessory/renameSkillCourseAccessory'),
    method: 'post',
    data: requestParam(params)
  })
}
//附件-删除
export function deleteSkillCourseAccessory (params) {
  return request({
    url: requestUrl('/hyskillcoursediraccessory/deleteSkillCourseAccessory'),
    method: 'post',
    data: requestParam(params)
  })
}





// //院系列表
// export function listHyschoolfaculty (params) {
//   return request({
//     url: requestUrl('/hyschoolfaculty/listHyschoolfaculty'),
//     method: 'post',
//     data: requestParam(params)
//   })
// }
// //专业列表
// export function listHyschoolspecialty (params) {
//   return request({
//     url: requestUrl('/hyschoolspecialty/listHyschoolspecialty'),
//     method: 'post',
//     data: requestParam(params)
//   })
// }
//
// //资源管理-新增或修改
// export function saveOrUpdateHySkillResources (params) {
//   return request({
//     url: requestUrl('/hyskillresources/saveOrUpdateHySkillResources'),
//     method: 'post',
//     data: requestParam(params)
//   })
// }
//
//
// //资源管理-班级列表（新增时使用）
// export function listHySchoolClass (params) {
//   return request({
//     url: requestUrl('/hyschoolclass/listHySchoolClass'),
//     method: 'post',
//     data: requestParam(params)
//   })
// }
//
// //资源管理-发布、取消发布接口
// export function unPublishPersonCenterHySkillResources (params) {
//   return request({
//     url: requestUrl('/hyskillresources/unPublishPersonCenterHySkillResources'),
//     method: 'post',
//     data: requestParam(params)
//   })
// }
//
//
// //资源管理-删除接口
// export function deletePersonCenterHySkillResources (params) {
//   return request({
//     url: requestUrl('/hyskillresources/deletePersonCenterHySkillResources'),
//     method: 'post',
//     data: requestParam(params)
//   })
// }
//
//
// //资源权限-学校用户老师查询接口
// export function listSchoolUserTeacher (params) {
//   return request({
//     url: requestUrl('/hyskillresourcesteateam/listSchoolUserTeacher'),
//     method: 'post',
//     data: requestParam(params)
//   })
// }
// // 资源权限-老师新增或修改
// export function saveOrUpdatePersonCenterHySkillResources (params) {
//   return request({
//     url: requestUrl('/hyskillresourcesteateam/saveOrUpdatePersonCenterHySkillResources'),
//     method: 'post',
//     data: requestParam(params)
//   })
// }
