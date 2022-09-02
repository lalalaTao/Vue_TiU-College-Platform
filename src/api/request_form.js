import Vue from 'vue'
import axios from 'axios'
import router from '@/router'
import store from "../store";

// 创建axios实例
const service = axios.create({
  timeout: 1000 * 30,
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})

// request拦截器
service.interceptors.request.use(config => {
  if(store.state.accessToken){
    config.headers.token = store.state.accessToken
  }
  return config
}, error => {
  return Promise.reject(error)
})

//console.log(response.headers.authorization)

// response拦截器
service.interceptors.response.use(response => {
  if (response.data && response.data.code === 401) { // 401, token失效
    store.commit('logOut')
    router.push({ name: 'Login' })
  }
  return response
}, error => {
  return Promise.reject(error)
})

export default service
