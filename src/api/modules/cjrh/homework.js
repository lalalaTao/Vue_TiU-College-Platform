import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";

// 作业列表
export function getPaperList(params) {
  return request({
    url: requestUrl('/xqlessonpaper/getCoursePaperByCreator'),
    method: 'post',
    data: requestParam(params)
  })
}
// 删除试卷
export function deletePaper(params) {
  return request({
    url: requestUrl('/xqpaper/delete'),
    method: 'post',
    data: requestParam(params)
  })
}
// 试卷列表
export function paperlist(params) {
  return request({
    url:requestUrl('/xqlessonpaper/list'),
    method:'post',
    data:requestParam(params)
  })
}

