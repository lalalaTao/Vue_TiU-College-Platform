import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";

//获取欣赏和置顶的案例
export function getxsal (params) {
  return request({
    url: requestUrl('/xqinnovationoutcome/getEnjoyAndTop'),
    method: 'post',
    data: requestParam(params)
  })
}
//获取创新成功列表
export function getlist (params) {
  return request({
    url: requestUrl('/xqinnovationoutcome/list'),
    method: 'post',
    data: requestParam(params)
  })
}
//获取教师信息
export function gettealist () {
  return request({
    url: requestUrl('/sys/user/doGetAllTeachers'),
    method: 'get',
  })
}
