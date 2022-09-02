import requestUrl from "../../../requestUrl";
import request from "../../../request";
import requestParam from "../../../requestParam";

//获取我的考试列表
export function doGetMySkillResourcePaperList (params) {
  return request({
    url: requestUrl('/hyskillresourcemockexamrolue/doGetMySkillResourcePaperList'),
    method: 'post',
    data: requestParam(params)
  })
}
//获取答题详情
export function doGetSkillResourcePaperByScoreId (params) {
  return request({
    url: requestUrl('/hyskillresourcemockexamrolue/doGetSkillResourcePaperByScoreId'),
    method: 'post',
    data: requestParam(params)
  })
}
//获取试卷
export function doGetSkillResourceExamQuestions (params) {
  return request({
    url: requestUrl('/hyskillresourcemockexamrolue/doGetSkillResourceExamQuestions'),
    method: 'post',
    data: requestParam(params)
  })
}
//获取系统时间
export function doGetTime (params) {
  return request({
    url: requestUrl('/sys/config/doGetTime'),
    method: 'get',
    data: requestParam(params)
  })
}


//交卷
export function doSubmitSkillResourcePaper (params) {
  return request({
    url: requestUrl('/hyskillresourcemockexamrolue/doSubmitSkillResourcePaper'),
    method: 'post',
    data: requestParam(params)
  })
}
