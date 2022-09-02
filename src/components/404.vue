<template>
  <div class="bg">
    <div class="cont">
      <h2>对不起，你查看的页面不存在！</h2>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style >
  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    /*background: url(../assets/images/404/404.jpg) center top #f5f3f4;*/
    background-size:100% 100%;
  }
  .bg .cont{
    color:#666;
    font-family:"PingFang-SC-Medium";
    text-align:center;
  }
  .cont{
    width: 100%;
    height: 100%;
  }
  .bg .cont h2{
    padding-top: 120%;
    font-size:18px; line-height:36px;
  }
</style>
