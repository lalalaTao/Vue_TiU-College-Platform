/**
 * 是否有权限
 * @param {*} key
 */
export function isAuth (key) {
  return JSON.parse(localStorage.getItem('permissions') || '[]').indexOf(key) !== -1 || false
}
