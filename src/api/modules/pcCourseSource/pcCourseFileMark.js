import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";

// 标记-新增修改
export function saveOrUpdateCourseFileMark (params) {
  return request({
    url: requestUrl('/hycoursefilemark/saveOrUpdateCourseFileMark'),
    method: 'post',
    data: requestParam(params)
  })
}
//标注查询（列表或单个）
export function listCourseFileMarkByParam (params) {
  return request({
    url: requestUrl('/hycoursefilemark/listCourseFileMarkByParam'),
    method: 'post',
    data: requestParam(params)
  })
}

// //课程目录-新增修改
// export function saveOrUpdateSkillCourseDir (params) {
//   return request({
//     url: requestUrl('/hyskillcoursedir/saveOrUpdateSkillCourseDir'),
//     method: 'post',
//     data: requestParam(params)
//   })
// }
//
// //课程目录-上移下移
// export function upOrDownSkillCourseDir (params) {
//   return request({
//     url: requestUrl('/hyskillcoursedir/upOrDownSkillCourseDir'),
//     method: 'post',
//     data: requestParam(params)
//   })
// }
//
// //目录-删除（子级所有数据都删除）
// export function deleteSkillCourseDir (params) {
//   return request({
//     url: requestUrl('/hyskillcoursedir/deleteSkillCourseDir'),
//     method: 'post',
//     data: requestParam(params)
//   })
// }
//
//
//
// //附件-新增修改
// export function saveOrUpdateSkillCourseAccessory (params) {
//   return request({
//     url: requestUrl('/hyskillcoursediraccessory/saveOrUpdateSkillCourseAccessory'),
//     method: 'post',
//     data: requestParam(params)
//   })
// }
// //附件-上移下移
// export function sortUpAndDownSkillCourseAccessory (params) {
//   return request({
//     url: requestUrl('/hyskillcoursediraccessory/sortUpAndDownSkillCourseAccessory'),
//     method: 'post',
//     data: requestParam(params)
//   })
// }
// //附件-重命名
// export function renameSkillCourseAccessory (params) {
//   return request({
//     url: requestUrl('/hyskillcoursediraccessory/renameSkillCourseAccessory'),
//     method: 'post',
//     data: requestParam(params)
//   })
// }
// //附件-删除
// export function deleteSkillCourseAccessory (params) {
//   return request({
//     url: requestUrl('/hyskillcoursediraccessory/deleteSkillCourseAccessory'),
//     method: 'post',
//     data: requestParam(params)
//   })
// }




