import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";


//获取产品列表，包括条件筛选
export function findAllWithPage (params) {
  return request({
    url: requestUrl('/loan/findAllWithPage'),
    method: 'post',
    data: requestParam(params)
  })
}
//提交贷款申请
export function submitLoanApply (params) {
  return request({
    url: requestUrl('/loan/submitLoanApply'),
    method: 'post',
    data: requestParam(params)
  })
}
//首页-热门贷款
export function getHotLoanList (params) {
  return request({
    url: requestUrl('/loan/getHotLoanList'),
    method: 'post',
    data: requestParam(params)
  })
}



//产品详情
export function queryLoanById (params) {
  return request({
    url: requestUrl('/loan/queryLoanById'),
    method: 'post',
    data: requestParam(params)
  })
}

//产品详情利率说明表格
export function queryInterestRateById (params) {
  return request({
    url: requestUrl('/loan/queryInterestRateById'),
    method: 'post',
    data: requestParam(params)
  })
}

// 产品详情页面保证方式
export function queryEnsureTypeById (params) {
  return request({
    url: requestUrl('/loan/queryEnsureTypeById'),
    method: 'post',
    data: requestParam(params)
  })
}

// 产品详情页面保证方式
export function queryMaterialById (params) {
  return request({
    url: requestUrl('/loan/queryMaterialById'),
    method: 'post',
    data: requestParam(params)
  })
}


// 产品详情页面申请条件
export function queryContentById (params) {
  return request({
    url: requestUrl('/loan/queryContentById'),
    method: 'post',
    data: requestParam(params)
  })
}

// 产品详情页面申请条件
export function queryNoteById (params) {
  return request({
    url: requestUrl('/loan/queryNoteById'),
    method: 'post',
    data: requestParam(params)
  })
}


//获取Bank(8个一组)
export function getBank (params) {
  return request({
    url: requestUrl('/loan/bank/list'),
    method: 'post',
    data: requestParam(params)
  })
}
//获取Bank
export function getAllBank (params) {
  return request({
    url: requestUrl('/loan/bank/allList'),
    method: 'post',
    data: requestParam(params)
  })
}
//获取信用卡类别列表
export function getAllCardType (params) {
  return request({
    url: requestUrl('/loan/cardType/list'),
    method: 'post',
    data: requestParam(params)
  })
}
//获取Bank
export function getHotCreditCard (params) {
  return request({
    url: requestUrl('/loan/creditcard/hotList'),
    method: 'post',
    data: requestParam(params)
  })
}

//获取产品列表，包括条件筛选
export function findCreditCardListWithPage (params) {
  return request({
    url: requestUrl('/loan/creditcard/findCreditCardListWithPage'),
    method: 'get',
    params: params
  })
}

//获取产品列表，包括条件筛选
export function getCreditCardDetail (params) {
  return request({
    url: requestUrl('/loan/creditcard/getCreditCardDetail'),
    method: 'get',
    params: params
  })
}

export function submitCreditCardApply (params) {
  return request({
    url: requestUrl('/loan/creditcard/submitCreditCardApply'),
    method: 'post',
    data: requestParam(params)
  })
}


//获取我的，信用卡申请信息
export function queryMyApplyList (params) {
  return request({
    url: requestUrl('/loan/creditcard/queryMyApplyList'),
    method: 'post',
    data: requestParam(params)
  })
}


export function queryInviteApplyList (params) {
  return request({
    url: requestUrl('/loan/creditcard/queryInviteApplyList'),
    method: 'post',
    data: requestParam(params)
  })
}

export function queryTop8list (params) {
  return request({
    url: requestUrl('/xqcourse/top8list'),
    method: 'post',
    data: requestParam(params)
  })
}

export function queryShixunList (params) {
  return request({
    url: requestUrl('/xqspecialty/list'),
    method: 'post',
    data: requestParam(params)
  })
}
export function queryMyShixunList (params) {
  return request({
    url: requestUrl('/xqspecialty/doGetUserSpecialities'),
    method: 'post',
    data: requestParam(params)
  })
}


export function queryKaozhengRecommend (params) {
  return request({
    url: requestUrl('/xqcertificate/recommend'),
    method: 'post',
    data: requestParam(params)
  })
}

export function queryZhuanyeList (params) {
  return request({
    url: requestUrl('/xqspecialty/info'),
    method: 'post',
    data: requestParam(params)
  })
}

export function querysaveCourseList (params) {
  return request({
    url: requestUrl('/xqcourse/saveCourseInfo'),
    method: 'post',
    data: requestParam(params)
  })
}

export function queryZhuanye3List (params) {
  return request({
    url: requestUrl('/xqcourse/get6CourseBySelType'),
    method: 'post',
    data: requestParam(params)
  })
}


//测试
export function getLogin (params) {
  return request(
    {
      url: 'http://192.168.0.134:8080/dh_college/sys/login_get?userName=admin&password=admin',
      method: 'get',
      params: params
    }
  )
}



export function getUrl (url) {
  return requestUrl(url)
}

export function getAllSpecialties() {
  return request({
    url: requestUrl('/xqspecialty/queryAllSpecialtiesByZpInfo'),
    method: 'post',
  })
}

// export function saveCourseTest (params) {
//   return request({
//     url: requestUrl('/xqcourse/saveCourseInfo'),
//     method: 'post',
//     data: requestParam(params)
//   })
// }
