import Vue from 'vue'
import Router from 'vue-router'

const Home = r => require.ensure([], () => r(require('../components/Home')), 'Home');
const error = r => require.ensure([], () => r(require('../components/404')), '404');
const PageTest = r => require.ensure([], () => r(require('../components/PageTest')), 'PageTest');
const Login = r => require.ensure([], () => r(require('../components/Login')), 'Login');
const HomeIndex = r => require.ensure([], () => r(require('../components/home/HomeIndex')), 'HomeIndex');
const Skill = r => require.ensure([], () => r(require('../components/skill/Skill')), 'Skill');
const Spestandard = r => require.ensure([], () => r(require('../components/Spestandard/Spestandard')), 'Spestandard');
const Promanage = r => require.ensure([], () => r(require('../components/promanage/Promanage')), 'Promanage');
const Roomresult = r => require.ensure([], () => r(require('../components/roomresult/Roomresult')), 'Roomresult');
const SpeSource = r => require.ensure([], () => r(require('../components/spesource/SpeSource')), 'SpeSource');
const SpeSourceDetail = r => require.ensure([], () => r(require('../components/spesource/SpeSourceDetail')), 'SpeSourceDetail');
const SpeSourceStudy = r => require.ensure([], () => r(require('../components/spesource/SpeSourceStudy')), 'SpeSourceStudy');
const Newpro = r => require.ensure([], () => r(require('../components/promanage/newpro/Newpro')), 'Newpro');
const TeacherRoom = r => require.ensure([], () => r(require('../components/promanage/TeacherRoom/TeacherRoom')), 'TeacherRoom');
const NumPic = r => require.ensure([], () => r(require('../components/promanage/numPic/NumPic')), 'NumPic');
const Practice = r => require.ensure([], () => r(require('../components/skill/Practice/Practice')), 'Practice');
const Mnexam = r => require.ensure([], () => r(require('../components/skill/mnexam/Mnexam')), 'Mnexam');

const pcCourseSource = r => require.ensure([], () => r(require('../components/personalCenter/pcCourseSource')), 'pcCourseSource');//个人中心-专业资源
const pcCourseDirFileExameEdit = r => require.ensure([], () => r(require('../components/personalCenter/pcCourseDirFileExameEdit')), 'pcCourseDirFileExameEdit');//个人中心-专业资源-目录管理

const accountManage = r => require.ensure([], () => r(require('../components/stuPersonalCore/accountManage')), 'accountManage'); // 学生个人中心-账号管理
const myCollection = r => require.ensure([], () => r(require('../components/stuPersonalCore/myCollection')), 'myCollection'); // 学生个人中心-我的收藏

const imgMark = r => require.ensure([], () => r(require('../components/personalCenter/imgMark')), 'imgMark');//demo测试 图片标记
const pcCourseFileMark = r => require.ensure([], () => r(require('../components/personalCenter/pcCourseFileMark')), 'pcCourseFileMark');//demo测试 图片标记
const imgShow = r => require.ensure([], () => r(require('../components/personalCenter/imgShow')), 'imgShow');//demo测试 图片标记

import store from "../store";

Vue.use(Router)
const myRouter =new Router({
  // 使用hash模式
  mode:'hash',
  routes: [
    //创新平台
    //登录
    {path: '/',
      name: 'Login',
      component:Login,
      beforeEnter(to,from,next) {
        const tokenStr = store.state.accessToken
        if (!tokenStr) return next('/login')
        next("/homeindex")
      }
    },

    {path: '/login',
      name: 'Login',
      component:Login,
     },
    //首页   meta: { requiresAuth: true }需登录才能访问该页面，根据Cookie中accessToken是否有值
    {path: '/homeindex',name: 'HomeIndex',component: HomeIndex,meta: { requiresAuth: true }},//首页
    {
      path: '/skill',
      name: 'Skill',
      component: Skill,
      meta: { requiresAuth: true },
      // children: [
      //   {
      //     path: "mnexam",
      //     name: 'mnexam',
      //     meta: {title: "模拟考试",requiresAuth: true},
      //     component: Mnexam
      //   },
      // ]
    },//技能考核
    {path: '/practice',name: 'practice',component: Practice,meta: { requiresAuth: true }},//练习题
    {
      path: '/mnexam',
      name: 'mnexam',
      component: Mnexam,
      meta: { requiresAuth: true },
      children:[
          {
            path: "Examenter",
            name: 'Examenter',
            meta: {title: "模拟考试",requiresAuth: true},
            component: () => import("../components/skill/mnexam/examenter/Examenter")
          },
          {
            path: "Examtable",
            name: 'Examtable',
            meta: {title: "模拟考试",requiresAuth: true},
            component: () => import("../components/skill/mnexam/examtable/Examtable"),
          },
          {
            path: "Examresult",
            name: 'Examresult',
            meta: {title: "模拟考试",requiresAuth: true},
            component: () => import("../components/skill/mnexam/examresult/Examresult")
          },
          {
            path: "Examdo",
            name: 'Examdo',
            meta: {title: "模拟考试",requiresAuth: true},
            component: () => import("../components/skill/mnexam/examdo/Examdo")
          },
      ]
    },//练习题
    {path: '/Spestandard',name: 'Spestandard',component: Spestandard,meta: { requiresAuth: true }},//练习题
    {path: '/Promanage',name: 'Promanage',component: Promanage,meta: { requiresAuth: true }},//练习题
    {path: '/Roomresult',name: 'Roomresult',component: Roomresult,meta: { requiresAuth: true }},//练习题
    {path: '/SpeSource',name: 'SpeSource',component: SpeSource,meta: { requiresAuth: true }},//专业资源首页
    {path: '/SpeSourceDetail',name: 'SpeSourceDetail',component: SpeSourceDetail,meta: { requiresAuth: true }},//专业资源详情
    {path: '/SpeSourceStudy',name: 'SpeSourceStudy',component: SpeSourceStudy,meta: { requiresAuth: true }},//专业资源-学习课程
    {path: '/Newpro',name: 'Newpro',component: Newpro,meta: { requiresAuth: true }},//新页面
    {path: '/TeacherRoom',name: 'TeacherRoom',component: TeacherRoom,meta: { requiresAuth: TeacherRoom }},//
    {path: '/NumPic',name: 'NumPic',component: NumPic,meta: { requiresAuth: NumPic }},//

    {path: '/pcCourseSource',name: 'pcCourseSource',component: pcCourseSource,meta: { requiresAuth: pcCourseSource }},//个人中心-专业资源
    {path: '/pcCourseDirFileExameEdit',name: 'pcCourseDirFileExameEdit',component: pcCourseDirFileExameEdit,meta: { requiresAuth: pcCourseDirFileExameEdit }},//个人中心-专业资源-目录管理

    {path: '/imgMark',name: 'imgMark',component: imgMark,meta: { requiresAuth: imgMark }},//
    {path: '/pcCourseFileMark',name: 'pcCourseFileMark',component: pcCourseFileMark,meta: { requiresAuth: pcCourseFileMark }},//附件新增批注
    {path: '/imgShow',name: 'imgShow',component: imgShow,meta: { requiresAuth: imgShow }},//

    {path: '/accountManage',name: 'accountManage',component: accountManage,meta: { requiresAuth: accountManage }},//个人中心-学生-账号管理
    {path: '/myCollection',name: 'myCollection',component: myCollection,meta: { requiresAuth: myCollection }},//个人中心-学生-我的收藏
    {path: '/404',name: '404',component: error},
    {path: '/PageTest',name: 'PageTest',component: PageTest},
  ],
  scrollBehavior(to,from,saveTop){
    if(saveTop){
      return saveTop;
    }else{
      return {x:0,y:0}
    }
  },
})

export function setCookie(c_name,value,expire) {
  var date=new Date()
  date.setSeconds(date.getSeconds()+expire)
  document.cookie=c_name+ "="+escape(value)+"; expires="+date.toGMTString()
  //console.log(document.cookie)
}

export function getCookie(c_name){

  let cookieArr = document.cookie.split(";");
  let cookieMap = new Map();
  if(cookieArr.length>0){
    for(let i=0;i<cookieArr.length;i++){
      let tmpCkA = cookieArr[i].trim();
      let tmpCkA2 = tmpCkA.split("=");
      if(tmpCkA2[0]==c_name){
        return unescape(tmpCkA2[1]);
      }
    }
  }

  // console.log("document.cookie:",document.cookie)
  // if (document.cookie.length>0){
  //   let c_start=document.cookie.indexOf(c_name + "=")
  //   if (c_start!=-1){
  //     c_start=c_start + c_name.length+1
  //     let c_end=document.cookie.indexOf(";",c_start)
  //     if (c_end==-1) c_end=document.cookie.length
  //     return unescape(document.cookie.substring(c_start,c_end))
  //   }
  // }
  return ""


  // if (document.cookie.length==0){
  //   return '';
  // }
  // c_name = c_name.trim();
  // let ckArr = document.cookie.split(';');
  // let ckMap = new Map();
  //
  // for (let i = 0; i < ckArr.length; i++) {
  //   let ckObj = ckArr[i];
  //   let ckObjArr = ckObj.split('=');
  //   ckMap.set(ckObjArr[0].trim(),ckObjArr[1]);
  // }
  // let cjObjTmp = ckMap.get(c_name);
  // if(cjObjTmp){
  //   return cjObjTmp;
  // }
  // return "";

}


myRouter.beforeEach((to,from,next) => {
  //console.log("flagShowHead:",store.state.flagShowHead,to)
  //登录和非登录使用不同的头部
  if((to.name=="Login"||to.name=="regiester"||
    to.name == "Newpro" || to.name == "TeacherRoom" || to.name == "Roomresult"
    || to.name == "NumPic")){
    store.state.flagShowHead=true;
    store.state.flagshowFoot = true;
    // console.log(1)
  }else{
    store.state.flagShowHead=false;
    store.state.flagshowFoot = false;
    // console.log(2)
  }
  //如课程编辑页面，如果用户是学生，则强制跳转到首页
  // console.log("login_user_type:"+store.state.userType)


  if (to.matched.some(record => record.meta.requiresAuth)) {

    store.commit('logOut')//强制退出

    // if (!store.state.accessToken  || !/\S/.test(store.state.accessToken)) {
    //   console.log(to,to.fullPath)
    // console.log()

    let ck_accessToken = getCookie("access_Token");
    // console.log(11111111,ck_accessToken)
    if (!ck_accessToken || !/\S/.test(ck_accessToken)) {

      // console.log(2222222222,ck_accessToken)
      next({
        path: '/login',
        query: { redirectUrl: to.fullPath }
      })
    }else{
      // console.log("登陆信息，从cookie中取出，并装到store中")//add by szg  2019年4月15日15:37:54【如果store信息丢失，cookie信息还在，在恢复cookie信息到store中】
      let reLoginParams = {
        'data':{
          'userType': getCookie("user_Type"),
          'userName': getCookie("user_Name"),
          'mobile': getCookie("mobile"),
        },
        'token': getCookie("access_Token"),
      }
      store.commit('login',reLoginParams);

      next();
    }
    // } else {
    //   next()
    // }
  } else {
    next()
  }

  if(to.path=="/"){//如果用户登陆了，则输入域名或ip+端口号，默认访问首页。2020年8月24日13:29:14
    console.log(store.state.accessToken,(!store.state.accessToken==false) ,  /\S/.test(store.state.accessToken==true))
    if ((!store.state.accessToken==false)  &&  /\S/.test(store.state.accessToken==true)) {
      next({
        path: '/homeindex'
      })
      return
    }
  }
})

//路由重复问题解决。（同一个地址，连续多次点击）https://blog.csdn.net/m0_45025997/article/details/107252926
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default myRouter
