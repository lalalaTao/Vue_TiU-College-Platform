import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";

//根据课程目录附件ID查询附件详情
export function findAccessoryDetailById (id) {
  return request({
    url: requestUrl('/hyskillcoursediraccessory/info/'+id),
    method: 'post'
  })
}

//根据电子书目录附件ID查询附件详情
export function findComAccessoryDetailById (id) {
  return request({
    url: requestUrl('/hycomaccessory/info/'+id),
    method: 'get'
  })
}

//查询笔记列表
export function findSkillCourseNotesByParams (params) {
  return request({
    url: requestUrl('/HySkillCourseNodeNote/findSkillCourseNotesByParams'),
    method: 'post',
    data: requestParam(params)
  })
}

//保存笔记
export function saveNotes (params) {
  return request({
    url: requestUrl('/HySkillCourseNodeNote/save'),
    method: 'post',
    data: requestParam(params)
  })
}

//查询留言列表
export function findMessageList (params) {
  return request({
    url: requestUrl('/HySkillCourseNodeChat/list'),
    method: 'post',
    data: requestParam(params)
  })
}

//保存留言
export function saveMessage (params) {
  return request({
    url: requestUrl('/HySkillCourseNodeChat/save'),
    method: 'post',
    data: requestParam(params)
  })
}

//课程学习进度保存
export function saveOrUpdateStudyTime (params) {
  return request({
    url: requestUrl('/HySkillCourseNodeStudyTime/saveOrUpdateCourseStudyTime'),
    method: 'post',
    data: requestParam(params)
  })
}

//查询学习进度
export function findStudyTimeByParams (params) {
  return request({
    url: requestUrl('/HySkillCourseNodeStudyTime/findCourseStudyTimeByParams'),
    method: 'post',
    data: requestParam(params)
  })
}

// 获取登录的用户信息（主要用于发布留言聊天记录功能）
export function findCurrentUser () {
  return request({
    url: requestUrl('/hyschooluser/findCurrentUser'),
    method: 'get',
  })
}

// 电子书目录保存
export function saveEbookMarkDir (params) {
  return request({
    url: requestUrl('/HySkillResourcesEbookMarkDir/save'),
    method: 'post',
    data: requestParam(params)
  })
}

// 电子书目录修改
export function updateEbookMarkDir (params) {
  return request({
    url: requestUrl('/HySkillResourcesEbookMarkDir/update'),
    method: 'post',
    data: requestParam(params)
  })
}

// 电子书目录列表
export function getEbookMarkDirList (params) {
  return request({
    url: requestUrl('/HySkillResourcesEbookMarkDir/list'),
    method: 'post',
    data: requestParam(params)
  })
}

// 电子书目录删除
export function deleteEbookMarkDir (id) {
  return request({
    url: requestUrl('/HySkillResourcesEbookMarkDir/delete/'+id),
    method: 'delete'
  })
}
