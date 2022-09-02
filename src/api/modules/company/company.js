import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";
import request_form from '../../request_form';

//上传宣传图
export function uploadImage(params) {
  return request({
    url: requestUrl('/xqrecruit/uploadImage'),
    method: 'post',
    data: requestParam(params)
  })
}

//公司保存
export function companysave(params) {
  return request({
    url: requestUrl('/xqzpjobcompany/save'),
    method: 'post',
    data: requestParam(params)
  })
}

//公司修改
export function companyupdata(params) {
  return request({
    url: requestUrl('/xqzpjobcompany/update'),
    method: 'post',
    data: requestParam(params)
  })
}

//绑定公司和企业
export function bindCompanyAndUser(params) {
  return request({
    url: requestUrl('/xqzpjobcompany/bindCompanyAndUser'),
    method: 'post',
    data: requestParam(params)
  })
}

//获取招聘公司
export function getCompanyList(params) {
  return request({
    url: requestUrl('/xqzpjobcompany/list'),
    method: 'post',
    data: requestParam(params)
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

//获取职位类型下的招聘岗位数量
export function getJobTypeAndNum() {
  return request({
    url:requestUrl('/xqzpjob/getJobTypeAndNum'),
    method:'post'
  })
}

//根据企业账户id获取公司信息
export function getCompanyByUserId(params) {
  return request({
    url:requestUrl('/xqzpjobcompany/getCompanyByUserId/'+params),
    method:'post'
  })
}

//获取职业类型
export function getJobType() {
  return request({
    url:requestUrl('/xqzpjob/getJobType'),
    method:'post'
  })
}

//保存招聘岗位信息
export function Jobsave(params)
{
  return request({
    url:requestUrl('/xqzpjob/save'),
    method:'post',
    data:requestParam(params)
  })
}

//修改招聘岗位信息
export function Jobupdata(params)
{
  return request({
    url:requestUrl('/xqzpjob/update'),
    method:'post',
    data:requestParam(params)
  })
}

//获取招聘岗位的一级二级专业
export function getJobSpecialty()
{
  return request({
    url:requestUrl('/xqzpjob/getJobSpecialty'),
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

//删除招聘岗位信息
export function jobdelete(params){
  return request({
    url:requestUrl('/xqzpjob/delete'),
    method:'post',
    data:requestParam(params)
  })
}

//获取已投递简历的学生信息
export function getAppliedJobStudent(params){
  return request({
    url:requestUrl('/xqzpjobcompany/getAppliedJobStudent'),
    method:'post',
    data:requestParam(params)
  })
}

