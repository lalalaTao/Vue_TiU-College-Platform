import request from '../../request'
import requestUrl from '../../requestUrl'
import requestParam from '../../requestParam'
import requestParam2 from '../../requestParam2'
import * as axios from "axios";
import API from "../../index";
import request_form from '../../request_form';


// 获取验证码
// export function validimg (uuid) {
//   return requestUrl(`/sys/user/getValidImg?t=${uuid}`)
// }
//
// // 忘记密码-验证图片验证码成功后发送手机验证码
// export function VerificationImg (params) {
//   return request({
//     url: requestUrl('/VerificationImg'),
//     method: 'get',
//     params: requestParam(params, 'get')
//   })
// }
//
// // 忘记密码-验证图片验证码并发送手机验证码
// export function ValidatePhoneFromGetPwd (params) {
//   return request({
//     url: requestUrl('/ValidatePhoneFromGetPwd'),
//     method: 'get',
//     params: requestParam(params, 'get')
//   })
// }
// // 忘记密码-重新发送验证码
// export function getPwdCode (params) {
//   return request({
//     url: requestUrl('/user/getPwdCode'),
//     method: 'get',
//     params: requestParam(params, 'get')
//   })
// }
// // 注册-发送验证码
// export function getPhoneCodeByReg (params) {
//   return request({
//     url: requestUrl('/sys/user/getPhoneCodeByReg'),
//     method: 'get',
//     params: requestParam(params, 'get')
//   })
// }
// // 忘记密码-发送验证码
// export function getPhoneCodeByReset (params) {
//   return request({
//     url: requestUrl('/sys/user/getPhoneCodeByReset'),
//     method: 'get',
//     params: requestParam(params, 'get')
//   })
// }
// // 忘记密码-发送验证码
// export function getPhoneCodeByApplyCreditCard (params) {
//   return request({
//     url: requestUrl('/sys/user/getPhoneCodeByApplyCreditCard'),
//     method: 'get',
//     params: requestParam(params, 'get')
//   })
// }
//
//
// // 登陆注册-发送验证码
// export function getPhoneCodeByLoginOrReg (params) {
//   return request({
//     url: requestUrl('/sys/user/getPhoneCodeByLoginOrReg'),
//     method: 'get',
//     params: requestParam(params, 'get')
//   })
// }
//
// // 登录
// export function login (params) {
//   return request({
//     url: requestUrl('/login'),
//     method: 'post',
//     data: requestParam(params)
//   })
// }
//
// // 登录或注册
// export function loginOrReg (params) {
//   return request({
//     url: requestUrl('/loginOrReg'),
//     method: 'post',
//     data: requestParam(params)
//   })
// }
//
// // refreshToken
// export function refreshToken (params) {
//   return request({
//     url: requestUrl('/refreshToken'),
//     method: 'post',
//     data: requestParam(params)
//   })
// }
//
// // 退出
// export function logout () {
//   return request({
//     url: requestUrl('/sys/logout'),
//     method: 'post',
//     data: requestParam()
//   })
// }
//
// // 获取首页轮播图
// export function getHomeSlideshow () {
//   return request({
//     url: requestUrl('/sys/site/getHomeSlideshow'),
//     method: 'post',
//     data: requestParam()
//   })
// }
//
// // 获取微信第三方登录url
// export function getAccreditUrl () {
//   return request({
//     url: requestUrl('/wx/accredit'),
//     method: 'post',
//     data: requestParam()
//   })
// }
//
// // 实名认证
// export function Identity (params) {
//   return request({
//     url: requestUrl('/sys/useridentity/update'),
//     method: 'post',
//     data: requestParam(params)
//   })
// }

export function Login1(params) {
  return request({
    url: requestUrl('/hyschooluser/login'),
    method: 'post',
    data: requestParam(params)
  })
}


export function getFileImgUrl(url) {//获取接口ip或域名地址
  return requestUrl(url)
}

// let Base64 = {
//   _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
//   encode: function(e) {
//     var t = "";
//     var n, r, i, s, o, u, a;
//     var f = 0;
//     e = Base64._utf8_encode(e);
//     while (f < e.length) {
//       n = e.charCodeAt(f++);
//       r = e.charCodeAt(f++);
//       i = e.charCodeAt(f++);
//       s = n >> 2;
//       o = (n & 3) << 4 | r >> 4;
//       u = (r & 15) << 2 | i >> 6;
//       a = i & 63;
//       if (isNaN(r)) {
//         u = a = 64
//       } else if (isNaN(i)) {
//         a = 64
//       }
//       t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
//     }
//     return t
//   },
//   _utf8_encode: function(e) {
//     e = e.replace(/rn/g, "n");
//     var t = "";
//     for (var n = 0; n < e.length; n++) {
//       var r = e.charCodeAt(n);
//       if (r < 128) {
//         t += String.fromCharCode(r)
//       } else if (r > 127 && r < 2048) {
//         t += String.fromCharCode(r >> 6 | 192);
//         t += String.fromCharCode(r & 63 | 128)
//       } else {
//         t += String.fromCharCode(r >> 12 | 224);
//         t += String.fromCharCode(r >> 6 & 63 | 128);
//         t += String.fromCharCode(r & 63 | 128)
//       }
//     }
//     return t
//   }
// }

export function getPreviewFileUrl(url) {//获取预览地址
  //url = "http://192.168.0.140:8092/onlinePreview?url="+encodeURIComponent(Base64.encode(url));

  //url = "http://114.55.101.39:9712/onlinePreview?url="+encodeURIComponent(url)+"&officePreviewType=pdf";

  // url = "http://123.57.205.53:8092/onlinePreview?url="+encodeURIComponent(Base64.encode(url))+"&officePreviewType=pdf";
  let Base64 = require('js-base64').Base64
  url = "http://123.57.205.53:8092/onlinePreview?url=" + encodeURIComponent(Base64.encode(url));

  // url = "https://edu.shitac.net:8092/onlinePreview?url="+encodeURIComponent(Base64.encode(url))+"&officePreviewType=pdf";

  return url;
}

//文件下载
export function downloadFile(url, fileName) {
  const x = new XMLHttpRequest();
  x.open("GET", url, true);
  x.responseType = 'blob';
  x.onload = function () {
    const url = window.URL.createObjectURL(x.response)
    const a = document.createElement('a');
    a.href = url
    a.download = fileName;
    a.target = "_blank"
    a.click()
  }
  x.send();
}

/*export function formatTimer(value) {
  let date = new Date(value);
  let y = date.getFullYear();
  let MM = date.getMonth() + 1;
  MM = MM < 10 ? "0" + MM : MM;
  let d = date.getDate();
  d = d < 10 ? "0" + d : d;
  let h = date.getHours();
  h = h < 10 ? "0" + h : h;
  let m = date.getMinutes();
  m = m < 10 ? "0" + m : m;
  let s = date.getSeconds();
  s = s < 10 ? "0" + s : s;
  return y + "-" + MM + "-" + d + " " + h + ":" + m;
}*/


export function getCertificateInfo(params) {
  return request({
    url: requestUrl('/xqcertificate/info'),
    method: 'post',
    data: requestParam(params)
  })
}

//实训-检查是否注册
export function sx_checkReg(params) {
  return request({
    url: requestUrl('/sys/config/sx_checkReg'),
    method: 'post',
    data: requestParam(params)
  })
}

//实训-检查是否注册
export function sx_checkReg2(params) {
  return request({
    url: requestUrl('/sys/config/sx_createUser'),
    method: 'post',
    data: requestParam(params)
  })
}

//web课程实训
export function sx_open(userName, pageType) {

  // window.open('http://202.120.20.4:9527/dist/#/login?username=1001&password=123456')
  let specialtyParam = [];
  if (pageType == 1) {
    specialtyParam = {"username": userName, "password": userName, "pageType": "1"}
  } else {
    specialtyParam = {"username": userName, "password": userName}
  }

  this.sx_checkReg(specialtyParam).then(({data}) => {

    if (data.url == null || data.url == "") {
      window.open('http://202.120.20.4:9527/dist/#/login?username=1001&password=123456')
    } else {
      window.open(data.url);
    }
  })

}

//考证1实训
export function sx_open2(userName, mobile) {

  // window.open('http://202.120.20.4:9527/dist/#/login?username=1001&password=123456')

  let specialtyParam = {"nikename": userName, "phone": mobile}
  this.sx_checkReg2(specialtyParam).then(({data}) => {
    if (data.url == null || data.url == "") {
      window.open('http://202.120.20.4:60880/#/login2?username=18654100005&password=123456')
    } else {
      window.open(data.url);
    }
  })
}

export function downloadTeacherData(params) {
  return request({
    url: requestUrl('/xqteacher/downloadTeacherData'),
    method: 'post',
    params: requestParam(params)
  })
}

//实训-注册
// export function sx_reg(params) {
//   return request({
//     url: 'http://202.120.20.4:9527/edup/createUser',
//     method: 'post',
//     data: requestParam(params)
//   })
// }
// //实训-获取登录地址
// export function sx_login(username,password) {
//   return "http://202.120.20.4:9527/dist/#/login?username="+username+"&password="+password;
// }

//获取短信验证码
export function getphonecode(params) {
  return request({
    url: requestUrl('/xqphonecode/sendPhoneMsg'),
    method: 'post',
    data: requestParam(params)
  })
}

//获取短信验证码
export function getxy(params) {
  return request({
    url: requestUrl('/xqfaculty/list'),
    method: 'post',
    // data: requestParam(params)
  })
}

//获取短信验证码
export function getzy(params) {
  return request({
    url: requestUrl('/xqspecialty/list'),
    method: 'post',
    // data: requestParam(params)
  })
}

//注册接口
export function regi(params) {
  return request({
    url: requestUrl('/sys/user/wxRegister'),
    method: 'post',
    data: requestParam(params)
  })
}

//
export function yzcode(params) {
  return request({
    url: requestUrl('/sys/user/checkPhoneCode'),
    method: 'post',
    data: requestParam(params)
  })
}

/**
 * 树形数据转换
 * @param {*} data
 * @param {*} id
 * @param {*} pid
 */
export function treeDataTranslate(data, id = 'id', pid = 'parentId') {
  var res = []
  var temp = {}
  for (var i = 0; i < data.length; i++) {
    temp[data[i][id]] = data[i]
  }
  for (var k = 0; k < data.length; k++) {
    if (temp[data[k][pid]] && data[k][id] !== data[k][pid]) {
      if (!temp[data[k][pid]]['children']) {
        temp[data[k][pid]]['children'] = []
      }
      if (!temp[data[k][pid]]['_level']) {
        temp[data[k][pid]]['_level'] = 1
      }
      data[k]['_level'] = temp[data[k][pid]]._level + 1
      temp[data[k][pid]]['children'].push(data[k])
    } else {
      res.push(data[k])
    }
  }
  return res
}

export function comUploadFile(params) {
  return request_form({
    url: requestUrl('/hyossfilelist/comUploadFile'),
    method: 'post',
    data: params
  })
}

export function comUploadImage(params) {
  return request_form({
    url: requestUrl('/hyossfilelist/comUploadImage'),
    method: 'post',
    data: params
  })
}

export function getUrl(url) {
  return requestUrl(url);
}

export function getMarkDownText(url) {
  return request({
    url: requestUrl(url),
    method: 'get'
  })
}
