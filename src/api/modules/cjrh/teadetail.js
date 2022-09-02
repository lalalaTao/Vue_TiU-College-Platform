import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";

export function getcor() {
  return request({
    url: requestUrl('/xqcourse/doGetCourseStudyInfo'),
    method: 'post'
  })
}

export function getEchartsData(params) {
  return request({
    url:requestUrl('/xqcourse/doGetCourseEchartsData'),
    method:'post',
    data:requestParam(params)
  })
}

export function getAccessoryStudyInfo(params) {
  return request({
    url:requestUrl('/xqtag2/getCourseAllItemNum'),
    method:'post',
    data:requestParam(params)
  })
}

export function getClassAvgStudyTime(params) {
  return request({
    url:requestUrl('/xqtag2/getClassAvgStudyTime'),
    method:'post',
    data:requestParam(params)
  })
}

export function getClassAvgHomework(params) {
  return request({
    url:requestUrl('/xqtag2/getClassAvgHomework'),
    method:'post',
    data:requestParam(params)
  })
}

export function getClassAvgSubmitRate(params) {
  return request({
    url:requestUrl('/xqtag2/getClassAvgSubmitRate'),
    method:'post',
    data:requestParam(params)
  })
}

export function doGetCourseEchartsData(params) {
  return request({
    url:requestUrl('/xqcourse/doGetCourseEchartsData'),
    method:'post',
    data:requestParam(params)
  })
}

export function getTeacherCourseCount(params) {
  return request({
    url:requestUrl('/xqtag2/getTeacherCourseCount'),
    method:'post',
    data:requestParam(params)
  })
}

export function getclass(params) {
  return request({
    url:requestUrl('/xqXzclassController/doGetXzClassByParams'),
    method:'post',
    data:requestParam(params)
  })
}

export function teacherSpecialtyData(params) {
  return request({
    url:requestUrl('/xqtag2/teacherSpecialtyData'),
    method:'post',
    data:requestParam(params)
  })
}

export function getClassBrowseByCourseId(params) {
  return request({
    url:requestUrl('/xqtag2/getClassBrowseByCourseId'),
    method:'post',
    data:requestParam(params)
  })
}

export function getCourseDimensionData(params) {
  return request({
    url:requestUrl('/xqtag2/getCourseDimensionData'),
    method:'post',
    data:requestParam(params)
  })
}

export function getSpecialtyBrowseNum(params) {
  return request({
    url:requestUrl('/xqtag2/getSpecialtyBrowseNum'),
    method:'post',
    data:requestParam(params)
  })
}

export function getScorePerData(params) {
  return request({
    url:requestUrl('/xqtag2/getScorePerData'),
    method:'post',
    data:requestParam(params)
  })
}

export function getClassScore(params) {
  return request({
    url:requestUrl('/xqtag2/getClassScore'),
    method:'post',
    data:requestParam(params)
  })
}

export function getTop10StudentsBrowse(params) {
  return request({
    url:requestUrl('/xqtag2/getTop10StudentsBrowse'),
    method:'post',
    data:requestParam(params)
  })
}
