import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";


/**获取练习题*/
export function doGetQuestions(params) {
  return request({
    url: requestUrl('/xqquestion/doGetQuestions'),
    method: 'post',
    data: requestParam(params)
  })
}

/**记录答错试题*/
export function saveWrongQuestion(params) {
  return request({
    url: requestUrl('/xqwrongquestion/saveOrUpdate'),
    method: 'post',
    data: requestParam(params)
  })
}
