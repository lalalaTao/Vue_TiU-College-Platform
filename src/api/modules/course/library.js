import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";

//获取标准库左侧菜单导航树
export function getMenuList (params) {
  return request({
    url: requestUrl('/xqresourcestandard/listTree'),
    method: 'post',
    data: requestParam(params)
  })
}
//获取标准库查询值
export function getLibList (params) {
  return request({
    url: requestUrl('/xqresourcefile/list'),
    method: 'post',
    data: requestParam(params)
  })
}
//获取课程列表
export function getListBySpecialty (params) {
  return request({
    url: requestUrl('/xqcourse/listBySpecialty'),
    method: 'post',
    data: requestParam(params)
  })
}

export function deleteCourseById (params) {
  return request({
    url: requestUrl('/xqcourse/delete'),
    method: 'post',
    data: requestParam(params)
  })
}

export function updateCourseInfo (params) {
  return request({
    url: requestUrl('/xqcourse/update'),
    method: 'post',
    data: requestParam(params)
  })
}


