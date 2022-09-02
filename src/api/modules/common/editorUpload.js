import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";
import request_form from '../../request_form';


/**保存编辑器内容*/
export function saveEditorContent (params) {
  return request({
    url: requestUrl('/xqCommon/saveContent'),
    method: 'post',
    //params:params
    data: requestParam(params)
  })
}

/**更新编辑器内容*/
export function updataEditorContent (params) {
  return request({
    url: requestUrl('/xqCommon/updateContent'),
    method: 'post',
    data: requestParam(params)
  })
}

/**保存编辑器图片*/
export function uploadImg(params) {
  return request_form({
    url:requestUrl('/xqCommon/saveImage'),
    method:'post',
    data:params
  })
}

/**保存编辑器视频*/
export function uploadVideo(params) {
  return request_form({
    url:requestUrl('/xqCommon/saveVideo'),
    method:'post',
    data:params
  })
}

/**获取content*/
export function getContentByPid (params) {
  return request({
    url: requestUrl('/xqCommon/getContentByPid'),
    method: 'post',
    data: requestParam(params)
  })
}


/**xiazai*/
/*export function downlExcel(params) {
  return request({
    url:requestUrl('/xqrecruit/downloadAcceptExcel'),
    method:'get',
    data:requestParam(params),
  })
}*/
export function downlExcel(params) {
  return request({
    url:requestUrl('/xqrecruit/downLoad'),
    method:'get',
    //data:requestParam(params),
    responseType: 'blob'
  })
}

/**xiazai*/
export function downlExcelUrl(params) {
  return requestUrl(params)
}

