import request from "../../request";
import requestUrl from "../../requestUrl";
import requestParam from "../../requestParam";

export function outstandingtreelist (params) {
  return request({
    url: requestUrl('/xqCommon/getStudentTree'),
    method: 'post',
    data: requestParam(params)
  })
}
