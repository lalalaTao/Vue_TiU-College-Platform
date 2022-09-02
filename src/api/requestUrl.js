/**
 * 请求地址统一处理／组装
 * @param {*} actionName action方法名称
 */
export default function (actionName) {
  //tiyou2发布地址
  return (process.env.NODE_ENV !== 'production' ? (`http://121.196.223.168:8896/info_college${actionName}`) : (`http://121.196.223.168:8896/info_college${actionName}`));
  // return (process.env.NODE_ENV !== 'production' ? (`http://127.0.0.1:9091/info_college${actionName}`) : (`http://127.0.0.1:9091/info_college${actionName}`));
}
