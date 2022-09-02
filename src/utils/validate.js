import uuidv1 from "uuid/v1";

/**
 * 邮箱
 * @param {*} s
 */
export function isEmail (s) {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}

/**
 * 手机号码
 * @param {*} s
 */
export function isMobile (s) {
  return /^((\+?86)|(\(\+86\)))?(1[0-9]{10})$/.test(s)
}

/**
 * 统一社会信用代码
 * @param {*} s
 */
export function isOrganizationCode (s) {
  return /^[A-Z0-9]{18}$/.test(s)
}

/**
 * 电话号码
 * @param {*} s
 */
export function isPhone (s) {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}

/**
 * 身份证
 * @param {*} s
 */
export function isIdCard (s) {
  return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(s)
}

/**
 * 正整数
 * @param {*} s
 */
export function isPositiveInteger (s) {
  return /^[1-9]\d*$/.test(s)
}

/**
 * 实数
 * @param {*} s
 */
export function isRealNumber (s) {
  return /^\d+(\.\d+)?$/.test(s)
}

/**
 * URL地址
 * @param {*} s
 */
export function isURL (s) {
  return /^http[s]?:\/\/.*/.test(s)
}
/**
 * 全是数字或全是字母 8-16个字符
 * @param {*} s
 */
export function pwdIsAllNumOrLetters(s) {
  return /^[0-9]{8,16}$|^[a-zA-Z]{8,16}$/.test(s)
}

/**
 * 至少包含数字和字母
 * @param {*} s
 */
export function pwdIsContainNumAndLetters(s) {
  return /[a-zA-Z0-9]+/.test(s)
}

/**
 * 至少包含数字和字母
 * @param {*} s
 */
export function isImage(s) {
  return /(?:jpg|gif|png|jpeg)$/.test(s)
}

/**
 * 生成UUID去除横杠字母全部大写
 */
export function doGetUUID() {
  return uuidv1().toUpperCase().replaceAll('-','');
}
