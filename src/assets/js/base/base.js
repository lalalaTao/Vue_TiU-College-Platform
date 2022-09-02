exports.install = function (Vue, options) {
  Vue.prototype.isLogin = function (){
    if(!this.$store.state.accessToken || !/\S/.test(this.$store.state.accessToken)){
      return false;
    }else{
      return true;
    }
  };
};
