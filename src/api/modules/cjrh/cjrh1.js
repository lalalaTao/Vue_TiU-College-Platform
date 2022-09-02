import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";

export function cjrh_head() {
  return request({
    url: requestUrl('/xqcjeducationalmode/doGetAllModes'),
    method: 'post'
  })
}

export function cjrkinfo(params) {
  return request({
    url: requestUrl('/xqcjproject/info'),
    method: 'post',
    data: requestParam(params)
  })
}

export function cjrhlist(params) {
  return request({
    url: requestUrl('/xqcjproject/doGetProjectsByModeId'),
    method: 'post',
    data: requestParam(params)
  })
}

export function cjrhlist1(params) {
  return request({
    url: requestUrl('/cjprojectdir/listTree'),
    method: 'post',
    data: requestParam(params)
  })
}

export function cjrhproj(params) {
  return request({
    url: requestUrl('/xqcjprojuser/listByProjId'),
    method: 'post',
    data: requestParam(params)
  })
}

export function cjrhfilelist(params) {
  return request({
    url: requestUrl('/xqcjlessoncontent/info'),
    method: 'post',
    data: requestParam(params)
  })
}

export function cxcylist(params) {
  return request({
    url: requestUrl('/xqcxeducationalmode/doGetAllModes'),
    method: 'post',
    data: requestParam(params)
  })
}

export function cxcylist2(params) {
  return request({
    url: requestUrl('/xqcxproject/doGetProjectsByModeId'),
    method: 'post',
    data: requestParam(params)
  })
}

export function cxrkinfo(params) {
  return request({
    url: requestUrl('/xqcxproject/info'),
    method: 'post',
    data: requestParam(params)
  })
}

export function cxcyproj(params) {
  return request({
    url: requestUrl('/xqcxprojuser/listByProjId'),
    method: 'post',
    data: requestParam(params)
  })
}

export function cxcylist1(params) {
  return request({
    url: requestUrl('/cxcyprojectdir/listTree'),
    method: 'post',
    data: requestParam(params)
  })
}

export function cxcyfilelist(params) {
  return request({
    url: requestUrl('/xqcxlessoncontent/info'),
    method: 'post',
    data: requestParam(params)
  })
}

export function cxcyprolist(params) {
  return request({
    url: requestUrl('/xqcxproject/list'),
    method: 'post',
    data: requestParam(params)
  })
}

export function canjiaolist(params) {
  return request({
    url: requestUrl('/xqcjnotice/list'),
    method: 'post',
    data: requestParam(params)
  })
}

export function getcxcylist(params) {
  return request({
    url: requestUrl('/xqcxcyinfo/list'),
    method: 'post',
    data: requestParam(params)
  })
}

export function getapplylist(params) {
  return request({
    url: requestUrl('/xqcxcyinfo/applyList'),
    method: 'post',
    data: requestParam(params)
  })
}

export function getdetail(params) {
  return request({
    url: requestUrl('/xqcxcyinfo/info/'+params),
    method: 'post',
    // data: requestParam(params)
  })
}

export function uploadimg(params) {
  return request({
    url: requestUrl('/xqcxcyinfo/saveBgImg'),
    method: 'post',
    data: requestParam(params)
  })
}

export function setemail(params) {
  return request({
    url: requestUrl('/xqcxcyinfo/applyByInfoId'),
    method: 'post',
    data: requestParam(params)
  })
}

export function setemailzp(params) {
  return request({
    url: requestUrl('/xqzpinfo/applyByInfoId'),
    method: 'post',
    data: requestParam(params)
  })
}

export function getStudentOneReport(params) {
  return request({
    url: requestUrl('/xqCommon/getStudentOneReport'),
    method: 'post',
    data: requestParam(params)
  })
}

export function doGetStudentPaperList(params) {
  return request({
    url: requestUrl('/xqlessonpaper/doGetStudentPaperList'),
    method: 'post',
    data: requestParam(params)
  })
}
