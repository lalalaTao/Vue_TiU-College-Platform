// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import indexcss from './assets/css/layout/index.css'
//import layoutCommoncss from './assets/css/layout/信息学院'
import commoncss from './assets/css/common/common.css'
import 'element-ui/lib/theme-chalk/index.css';
import vueSwiper from 'vue-awesome-swiper'  //引入vue-awesome-swiper
import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css' //引入样式
import Vue from 'vue'
import App from './App'
import  store from './store'
import VueCookie from 'vue-cookie'
import '@/element-ui'
import rem from './assets/js/rem'
import base from './assets/js/base/base.js'
import  {setCookie,getCookie,delCookie} from "./assets/cookie";
import router from './router'
 import tree from "vue-giant-tree";
import BaiduMap from 'vue-baidu-map'

import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

import '@/utils/protocolcheck'

import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'

//import font from "./assets/iconfont/font.css"
//import lazyload from "vue-lazyload"
/*import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';*/
/*Vue.use(ViewUI)*/
Vue.use(VueCookie)
Vue.use(base)
Vue.use(vueSwiper)

/**
 * 图片显示
 */
Vue.use(Viewer);
Viewer.setDefaults({
  Options: { "inline": true, "button": true, "navbar": true, "title": true, "toolbar": true, "tooltip": true, "movable": true, "zoomable": true, "rotatable": true, "scalable": true, "transition": true, "fullscreen": true, "keyboard": true, "url": "data-source" }
});

/**
 * 轮播
 */
import VueImageSwipe from 'vue-image-swipe'
import 'vue-image-swipe/dist/vue-image-swipe.css'

Vue.use(VueImageSwipe)

Vue.use(BaiduMap, {
  ak: 'KDzIGwiVvuoRI7tNEXtGNsZpGNNGI8yR'
})
// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.prototype.$imghost = 'https://hy-tiyou-dev-public.oss-cn-beijing.aliyuncs.com/tiyou/video/tiyou_dev';// 静态资源（图片）路径，前半部分
Vue.prototype.$ossFileHost = 'https://hy-tiyou-file-img-public.oss-cn-beijing.aliyuncs.com';//接口返回图片路径，前半部分
Vue.prototype.$apiImgHost = 'http://192.168.0.32:9091/info_college'//接口返回图片路径，前半部分
Vue.prototype.$headstyle = 2//配置导航栏样式   1代表透明，2代表白色

Vue.config.productionTip = false
Vue.config.devtools = true;
Vue.prototype.$getFileFlag = true;
Vue.prototype.$cookieStore={
  setCookie,
  getCookie,
  delCookie
}
Vue.use(tree)

// Vue.directive('focus', function (el) {
//   el.focus()
// })
// Vue.directive('focus1', function (el) {
//   el.querySelector('input').focus()
// })
//el-input 获得焦点。参考：https://vuetechworld.com/blog/detail/aee1949f1a7f7067e7a87e0f94012b80
Vue.directive('fo', {
  inserted (el, binding, vnode) {
    // 聚焦元素
    el.querySelector('input').focus()
  }
})

//vue-preview 开始
import VuePreview from 'vue-preview';

// defalut install
Vue.use(VuePreview)

//vue-preview 结束
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

/**
 * 站长统计代码，https://www.jb51.net/article/134123.htm
 * <span id='cnzz_stat_icon_1276896071'></span><script src='http://s23.cnzz.com/z_stat.php?id=1276896071' type='text/javascript'></script>
 */
router.afterEach( ( to, from, next ) => {
  setTimeout(()=>{
    var _hmt = _hmt || [];
/*    (function() {
      //原始代码。有问题，会清除页面其他文本
      //var cnzz_protocol = (("https:" == document.location.protocol) ? "https://" : "http://");
      //let tmpYm = unescape("%3Cspan id='cnzz_stat_icon_1276896071'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s23.cnzz.com/z_stat.php%3Fid%3D1276896071' type='text/javascript'%3E%3C/script%3E");
      //alert(tmpYm);
      // document.write();

      //每次执行前，先移除上次插入的代码
      document.getElementById('ym_tj') && document.getElementById('ym_tj').remove();
      //移除不干净，得遍历移除。
      let tmp_scripts = document.getElementsByTagName("script");
      for (var i = tmp_scripts.length-1;i >=0;i--) {
        if(tmp_scripts[i].src.indexOf("1276896071")!=-1){
          tmp_scripts[i].remove();
        }
      }

      var hm = document.createElement("script");
      hm.src = "http://s23.cnzz.com/z_stat.php?id=1276896071";
      hm.id = "ym_tj"
      var s = document.getElementsByTagName("script")[0];

      s.parentNode.insertBefore(hm, s);

    })();*/
  },0);
} );

