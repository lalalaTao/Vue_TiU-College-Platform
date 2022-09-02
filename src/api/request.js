import Vue from 'vue';
import axios from 'axios';
import router from '@/router';
import store from '../store';
import { setCookie, getCookie, delCookie } from '../assets/cookie';

// 创建axios实例
const service = axios.create({
  timeout: 1000 * 30,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

// let respUrl = '';
// request拦截器
service.interceptors.request.use((config) => {
  // console.log("store.state.accessToken:"+store.state.accessToken)
  // 从cookie中取token，解决：跨标签页，登录信息共享
  // console.log(getCookie("accessToken"),":cookie")
  const cookieToken = getCookie('access_Token');
  if (cookieToken) {
    config.headers.token = cookieToken;
  }

  // if(store.state.accessToken){
  //   config.headers.token = store.state.accessToken
  // }


  return config;
}, (error) => {
  return Promise.reject(error);
});

// console.log(response.headers.authorization)

// response拦截器
service.interceptors.response.use((response) => {
  // console.log("response拦截器",response)

  if (response && response.data && response.data.code === 401) { // 401, token失效
    const oldUrl = window.location.href.split('#')[1];

    // console.log("asd:",oldUrl)

    store.commit('logOut');
    router.replace({
      path: '/login', // 到登录页重新获取token
      query: { redirectUrl: oldUrl },
    });
    return;

    // router.replace({
    //       path: '/login' // 到登录页重新获取token
    //     })

    // store.state.accessToken='';

    // console.log(response);
    // token失效，请重新登录
    // {msg: "token失效，请重新登录", code: 401}
    // console.log("response拦截器",response.data)
    // this.$message.error({message:'token失效，请重新登录！',center: true});
    // store.commit('logOut')
    // router.push({ name: 'login' })
    // router.replace({
    //   path: '/login' // 到登录页重新获取token
    // })
    // return;
  }
  return response;
}, (error) => {
  return Promise.reject(error);
});

export default service;
