import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";
import request_form from '../../request_form';
import requestParam2 from "../../requestParam2";
//获取创新创业列表
export function getcxcylist(params) {
  return request({
    url: requestUrl('/xqcxcyinfo/list'),
    method: 'post',
    data: requestParam(params)
  })
}
//获取创新创业信息
export function getcxcyinfo(params) {
  return request({
    url:requestUrl('/xqcxcyinfo/info/'+params),
    method:'post'
  })
}
//获取招聘列表
export function getzpjylist(params) {
  return request({
    url:requestUrl('/xqzpinfo/list'),
    method:'post',
    data:requestParam(params)
  })
}
//获取招聘信息
export function getzpjyinfo(params) {
  return request({
    url:requestUrl('/xqzpinfo/info/'+params),
    method:'post'
  })
}

//获取职位类型
export function getJobType() {
  return request({
    url:requestUrl('/xqzpjob/getJobType'),
    method:'post'
  })
}

//获取招聘岗位信息
export function getJobinfo(params) {
  return request({
    url:requestUrl('/xqzpjob/info/'+params),
    method:'post'
  })
}

//获取招聘岗位的一级二级专业
export function getJobSpecialty() {
  return request({
    url:requestUrl('/xqzpjob/getJobSpecialty'),
    method:'post'
  })
}

//获取招聘岗位信息list
export function getJobList(params) {
  return request({
    url:requestUrl('/xqzpjob/list'),
    method:'post',
    data:requestParam(params)
  })
}

//获取招聘公司信息
export function getCompanyJobs(params) {
  return request({
    url:requestUrl('/xqzpjob/getCompanyJobs'),
    method:'post',
    data:requestParam(params)
  })
}

//获取招聘公司信息
export function getJobsCompany(params) {
  return request({
    url:requestUrl('/xqzpjobcompany/info/'+params),
    method:'post'
  })
}

//获取职位类型下的招聘岗位数量
export function getJobTypeAndNum() {
  return request({
    url:requestUrl('/xqzpjob/getJobTypeAndNum'),
    method:'post'
  })
}

//获取已经浏览过的招聘岗位
export function getBrowseJobRecords() {
  return request({
    url:requestUrl('/xqzpjob/getBrowseJobRecords'),
    method:'post'
  })
}

//上传简历附件
export function uploadAttachment(params) {
  return request({
    url:requestUrl('/xqzpjob/uploadAttachment'),
    method:'post',
    data:requestParam(params)
  })
}

//上传简历附件
export function jobApply(params) {
  return request({
    url:requestUrl('/xqzpjob/jobApply'),
    method:'post',
    data:requestParam(params)
  })
}

