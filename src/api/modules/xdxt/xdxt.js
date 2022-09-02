import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";
import request_form from '../../request_form';
import requestParam2 from "../../requestParam2";


/**获取学生简历所有信息*/
export function getData() {
  return request({
    url: requestUrl('/xqproductionoeducationmenu/list'),
    method: 'post',
    //data: requestParam(params)
  })
}

/**新增或修改目录或项目*/
export function saveOrUpdate (params) {
  return request({
    url: requestUrl('/xqproductionoeducationmenu/saveOrUpdate'),
    method: 'post',
    data: requestParam(params)
  })
}
/**获取文件列表*/
export function list(params) {
  return request({
    url: requestUrl('/xqproductionoeducationfile/list'),
    method: 'post',
    data: requestParam(params)
  })
}

/**上传文件*/
export function uploadFile(params) {
  return request_form({
    url:requestUrl('/xqproductionoeducationfile/uploadFile'),
    method:'post',
    data:params
  })
}

/**删除文件*/
export function deleteDir(params) {
  return request({
    url: requestUrl('/xqproductionoeducationmenu/delete?id='+params.id),
    method: 'post',
    //data: requestParam2(params)
  })
}
/**删除文件*/
export function deleteFiles(params) {
  return request({
    url:requestUrl('/xqproductionoeducationfile/deleteFiles'),
    method:'post',
    params:requestParam2(params)
  })
}







