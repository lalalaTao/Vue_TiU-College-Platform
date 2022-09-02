import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";

//获取推荐人申请信息
export function queryMyApplyList (params) {
  return request({
    url: requestUrl('/loan/queryMyApplyList'),
    method: 'post',
    data: requestParam(params)
  })
}


//获取信用卡分享图片
export function getCardInviteImg (bankCode,mobile,bankName,registUrl) {
  return requestUrl('/loan/creditcard/shareImg?bankCode='+bankCode+"&mobile="+mobile+"&bankName="+bankName+"&registUrl="+registUrl)
}

//获取我的分享图片
export function getMyInviteImg (mobile) {
  return requestUrl('/sys/user/shareImg?mobile='+mobile);
}
