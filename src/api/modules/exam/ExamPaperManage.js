import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";



//获取我的，信用卡申请信息
// export function getDir (params) {
//   return request({
//     url: requestUrl('/xqcoursedir/list'),
//     method: 'post',
//     data: requestParam(params)
//   })
// }



// 试卷列表
export function getPaperList(params) {
  return request({
    url: requestUrl('/xqpaper/list'),
    method: 'post',
    data: requestParam(params)
  })
}
// 删除试卷
export function deletePaper(params) {
  return request({
    url: requestUrl('/xqpaper/delete'),
    method: 'post',
    data: requestParam(params)
  })
}
