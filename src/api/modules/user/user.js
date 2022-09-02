import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";

// 注册
export function register (params) {
  return request({
    url: requestUrl('/sys/user/register'),
    method: 'post',
    data: requestParam(params)
  })
}
// 修改密码
export function modifyPassword (params) {
  return request({
    url: requestUrl('/sys/user/modifyPassword'),
    method: 'post',
    data: requestParam(params)
  })
}
// 重置密码
export function resetPassword (params) {
  return request({
    url: requestUrl('/sys/user/resetPassword'),
    method: 'post',
    data: requestParam(params)
  })
}
// 微信登陸綁定已有账户
export function bindExistingAccount (params) {
  return request({
    url: requestUrl('/sys/user/bindExistingAccount'),
    method: 'post',
    data: requestParam(params)
  })
}
// 微信登录绑定新注册账户
export function bindNewAccount (params) {
  return request({
    url: requestUrl('/sys/user/bindNewAccount'),
    method: 'post',
    data: requestParam(params)
  })
}
