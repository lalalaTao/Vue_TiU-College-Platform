import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";
import request_form from '../../request_form';

export function getH5(params) {
  return request({
    url: requestUrl('/xqcoursedir/listTreeWithFiles'),
    method: 'post',
    data: requestParam(params)
  })
}
export function getclassstudy(params) {
  return request({
    url: requestUrl('/xqlessoncontent/info2'),
    method: 'post',
    data: requestParam(params)
  })
}
export function getclasslist(params) {
  return request({
    url: requestUrl('/xqcoursedir/list'),
    method: 'post',
    data: requestParam(params)
  })
}
export function getread(params) {
  return request({
    url:requestUrl('/xqwatchschedule/info'),
    method:'post',
    data:requestParam(params)
  })
}
export function getinstall(params) {
  return request({
    url:requestUrl('/xqwatchschedule/saveOrUpdate'),
    method:'post',
    data:requestParam(params)
  })
}
export function getsavestu(params) {
  return request({
      url:requestUrl('/xqcourse/saveStudySchedule'),
      method:'post',
      data:requestParam(params)
    })
}

export function getsavestu_cx(params) {
  return request({
    url:requestUrl('/xqcxproject/saveStudySchedule'),
    method:'post',
    data:requestParam(params)
  })
}

export function gettea() {
  return request({
    url:requestUrl('/sys/user/doGetAllTeachers'),
    method:'get',
  })
}

export function getcomment(params) {
  return request({
    url:requestUrl('/xqlessonchat/save'),
    method:'post',
    data:requestParam(params)
  })
}
export function getcommentdata(params) {
  return request({
    url:requestUrl('/xqlessonchat/doGetCommentData'),
    method:'post',
    data:requestParam(params)
  })
}

export function getstumblist(params) {
  return request({
    url:requestUrl('/xqcourse/doGetStudentList'),
    method:'post',
    data:requestParam(params)
  })
}

export  function getstumblist_cx(params) {
  return request({
    url:requestUrl('/xqcxproject/doGetStudentList'),
    method:'post',
    data:requestParam(params)
  })
}

export  function setgood(params) {
  return request({
    url:requestUrl('/xqlessonaccessoryvideomark/doScDz'),
    method:'post',
    data:requestParam(params)
  })
}

export  function getbj(params) {
  return request({
    url:requestUrl('/xqcoursenote/list'),
    method:'post',
    data:requestParam(params)
  })
}

export  function setbj(params) {
  return request({
    url:requestUrl('/xqcoursenote/save'),
    method:'post',
    data:requestParam(params)
  })
}

export function getCourseStuSave(params) {
  return request({
    url:requestUrl('/xqlessonaccessorystudytime/saveOrUpdate'),
    method:'post',
    data:requestParam(params)
  })
}

export function notedelete(params) {
  return request({
    url:requestUrl('/xqcoursenote/delete'),
    method: 'post',
    data:requestParam(params)
  })
}

//合并接口
export function getmergeclassstudy(params) {
  return request({
    url: requestUrl('/xqcoursedir/listTreeWithFiles'),
    method: 'post',
    data: requestParam(params)
  })
}
