import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";

//获取最新课程列表信息
export function queryTop8list (params) {
  return request({
    url: requestUrl('/xqcourse/top8list'),
    method: 'post',
    data: requestParam(params)
  })
}
//获取实训平台列表信息
export function queryShixunList (params) {
  return request({
    url: requestUrl('/xqspecialty/list'),
    method: 'post',
    data: requestParam(params)
  })
}
//获取技能考核信息
export function queryKaozhengRecommend (params) {
  return request({
    url: requestUrl('/xqcertificate/recommend'),
    method: 'post',
    data: requestParam(params)
  })
}

//获取创新成果TOP5
export function doGetInnovationOutComeTop5 () {
  return request({
    url: requestUrl('/xqinnovationoutcome/top5list'),
    method: 'Get'
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
  //return 'http://114.55.101.39:8192/info_college' + url;
  return requestUrl(url);
}

//获取banner
export function getbanner (params) {
  return request({
    url: requestUrl('/xqvrbanner/listNoToken'),
    method: 'post',
    data: requestParam(params)
  })
}
//获取仿真资源 top4
export function getfangzhen (params) {
  return request({
    url: requestUrl('/xqvrsource/listTop4NoToken'),
    method: 'post',
    data: requestParam(params)
  })
}

//获取仿真资源 top5
export function getfangzhenTop5 (params) {
  return request({
    url: requestUrl('/xqvrsource/listTop5NoToken'),
    method: 'post',
    data: requestParam(params)
  })
}

//获取院系
export function getyx (params) {
  return request({
    url: requestUrl('/xqfaculty/listPageNoToken'),
    method: 'post',
    data: requestParam(params)
  })
}
//获取专业
export function getzy (params) {
  return request({
    url: requestUrl('/xqspecialty/listNoToken'),
    method: 'post',
    data: requestParam(params)
  })
}
//获取时间
export function getinfotime (params) {
  return request({
    url: requestUrl('/xqvryear/listNoToken'),
    method: 'post',
    data: requestParam(params)
  })
}
