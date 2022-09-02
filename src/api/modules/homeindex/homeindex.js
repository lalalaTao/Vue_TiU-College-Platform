import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";

//获取最新课程列表信息
export function listSettingBanner (params) {
  return request({
    url: requestUrl('/hysettingbanner/listSettingBanner'),
    method: 'post',
    data: requestParam(params)
  })
}
