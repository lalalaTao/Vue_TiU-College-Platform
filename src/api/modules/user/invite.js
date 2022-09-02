import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";

//获取推荐人申请信息
export function queryMyInviterUserApplyList (params) {
  return request({
    url: requestUrl('/sys/user/queryMyInviterUserApplyList'),
    method: 'post',
    data: requestParam(params)
  })
}


//查询我的申请记录
export function queryMyApplyList (params) {
  return request({
    url: requestUrl('/loan/queryMyApplyList'),
    method: 'post',
    data: requestParam(params)
  })
}

export function queryInviteApplyList (params) {
  return request({
    url: requestUrl('/loan/queryInviteApplyList'),
    method: 'post',
    data: requestParam(params)
  })
}
