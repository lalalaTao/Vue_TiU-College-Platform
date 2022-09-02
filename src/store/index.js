import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    userName: ''|| localStorage.getItem('userName'),
    roleName: ''|| localStorage.getItem('roleName'),
    accessToken: ''|| localStorage.getItem('accessToken'),
    userType: ''|| localStorage.getItem('userType'),
    userId: ''|| localStorage.getItem('userId'),
    mobile: ''|| localStorage.getItem('mobile'),
    questionManage:'' || localStorage.getItem('questionManage'),
    highlight:1,
    flagShowHead:true,//控制页面头部底部使用哪个vue
    flagShowHead1:false,//控制页面头部显示使用的样式
    flagShowHead2:true,//控制页面使用那个头部
    flagShowHead3:false,
    headIsShow:true,//控制是否需要使用头部
    footIsShow: true,//控制是否需要使用底部
    flagshowlogin:false,
    flagshowFoot:false,
}
const mutations = {
  login(state,user){
    //debugger
    state.userName = user.data.userName
    state.roleName = user.data.roleName
    state.mobile = user.data.mobile
    state.accessToken = user.token
    state.userType = user.data.userType
    state.userId = user.data.userId
    if (user.data.questionManagePower!=undefined)
    {
      state.questionManage = user.data.questionManagePower
      localStorage.setItem('questionManage',state.questionManage)
    }
    localStorage.setItem('userName',state.userName)
    localStorage.setItem('roleName',state.roleName)
    localStorage.setItem('mobile',state.mobile)
    localStorage.setItem('accessToken',state.accessToken)
    localStorage.setItem('userType',state.userType)
    localStorage.setItem('userId',state.userId)

  },
  setUsername(state,userName){
    state.userName = userName;
    localStorage.setItem('userName',userName)
  },
  logOut(state){
    state.userName = '';
    state.roleName = '';
    state.userType = '';
    state.accessToken = '';
    state.questionManage = ''
    localStorage.setItem('userName','')
    localStorage.setItem('userId','')
    localStorage.setItem('roleName','')
    localStorage.setItem('mobile','')
    localStorage.setItem('accessToken','')
    localStorage.setItem('userType','')
    localStorage.setItem('questionManage','')
  },
  setHighlight(state,index){
    state.highlight = index
  },
  setaccessToken(state,accessToken){
    //console.log(state.accessToken)
    state.accessToken = accessToken;
    localStorage.setItem('accessToken',accessToken)
  }
}
const actions = {
  /*loginAction({commit},userID,userName,accessToken){
    commit('login',userID,userName,accessToken);
  }*/
}
const  getters={
  /*userId:state=>state.userId,
  mobile:state=>state.mobile,
  userName:state=>state.userName,
  accessToken:state=>state.accessToken,
  refreshaccessToken:state=>state.refreshaccessToken,
  permissions:state=>state.permissions,
  highlight:state=>state.highlight*/
}
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
