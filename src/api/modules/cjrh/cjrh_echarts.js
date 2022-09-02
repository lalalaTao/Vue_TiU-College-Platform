import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";

//文件数量分析
export function documentQuantityAnalysis (params) {
  return request({
    url: requestUrl('/xqproductionoeducationfile/documentQuantityAnalysis'),
    method: 'post',
    data: requestParam(params)
  })
}

//项目数量分析
export function projectAnalysis (params) {
  return request({
    url: requestUrl('/xqproductionoeducationfile/projectAnalysis'),
    method: 'post',
    data: requestParam(params)
  })
}


//文件上传趋势分析
export function uploadAnalysis (params) {
  return request({
    url: requestUrl('/xqproductionoeducationfile/uploadAnalysis'),
    method: 'post',
    data: requestParam(params)
  })
}
