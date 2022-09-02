//获得成绩列表
import request from "../../request";
import requestUrl from "../../requestUrl";
import requestParam from "../../requestParam";

export function querycjlist (params) {
  return request({
    url: requestUrl('/xqexamscore/doGetExamScore'),
    method: 'post',
    data: requestParam(params)
  })
}
