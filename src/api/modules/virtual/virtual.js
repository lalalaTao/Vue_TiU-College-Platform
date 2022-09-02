import requestUrl from '../../requestUrl';
import request from '../../request';
import requestParam from '../../requestParam';

export function getxqvrsourceList(params) {
  return request({
    url: requestUrl('/xqvrsource/list'),
    method: 'post',
    data: requestParam(params),
  });
}

export function getxqvrsourcescorelist(params) {
  return request({
    url: requestUrl('/xqvrsourcescore/list'),
    method: 'post',
    data: requestParam(params),
  });
}
export function getteacherlist(params) {
  return request({
    url: requestUrl('/xqvrsourceuser/listUserByVrId'),
    method: 'post',
    data: requestParam(params),
  });
}

export function getaccessorylist(params) {
  return request({
    url: requestUrl('/xqvrsourceaccessory/list'),
    method: 'post',
    data: requestParam(params),
  });
}

export function getsaveOrUpdate(params) {
  return request({
    url: requestUrl('/xqvrsourcescore/saveOrUpdate'),
    method: 'post',
    data: requestParam(params),
  });
}
export function getUrl(url) {
  return requestUrl(url);
}
export function getEncryptUserInfo(params) {
  return request({
    url: requestUrl('/sys/user/getEncryptUserInfo'),
    method: 'get',
    params,
  });
}
/** 获取所有院系列表*/
export function fetchFacultyList() {
  return request({
    url: requestUrl('/xqfaculty/list'),
    method: 'post',
  });
}
/** 获取所有专业列表*/
export function fetchSpecialtyList(params) {
  return request({
    url: requestUrl('/xqspecialty/doGetSpecialties'),
    method: 'post',
    data: requestParam(params),
  });
}
/** 获取vr list*/
export function fetchVrList(params) {
  return request({
    url: requestUrl('/xqvrsource/list'),
    method: 'post',
    data: requestParam(params),
  });
}
/** 获取vr文件列表*/
export function fetchFileSourceList(params) {
  return request({
    url: requestUrl('/xqvrsourceaccessory/list'),
    method: 'post',
    data: requestParam(params),
  });
}
