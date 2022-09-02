import request from "../../request";
import requestUrl from "../../requestUrl";
import requestParam from "../../requestParam";

export function gettreelist1 (params) {
  return request({
    url: requestUrl('/xqCommon/getTreeList'),
    method: 'post',
    data: requestParam(params)
  })
}
