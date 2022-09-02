//考试
import request from "../../request";
import requestUrl from "../../requestUrl";
import requestParam from "../../requestParam";

//获取考试详细信息
export function queryksdetails (params) {
  return request({
    url: requestUrl('/xqquestion/doGetExamQuestions'),
    method: 'post',
    data: requestParam(params)
  })
}
