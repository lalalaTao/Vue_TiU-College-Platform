<template>
  <div class="top_location">
    <div style="display: flex;margin-left: 50px;">
      <span class="location_icon">
        <img class="location_icon_style" :src="locationImage" />
      </span>
      <router-link v-for="(item,index) in navList" :key="index" :to="{path:item.url}" style="color:rgba(153,153,153,1);display: flex;font-size: 16px;font-family: PingFang SC, PingFang SC-Regular;">
        <div style="margin-left: 15px;" v-if="item.flag==0">{{item.name}}</div>
        <div style="margin-left: 15px;color:#00BDA5;font-weight: 500;" v-if="item.flag==1">{{item.name}}</div>
        <div style="margin-left: 15px;" v-if="index<(navList.length-1)">&gt;</div>
      </router-link>
    </div>
    <div style="margin-right: 50px;display: flex;align-items: center;cursor: pointer;">
      <div style="margin-right: 15px;" >&lt;</div>
      返回
    </div>
  </div>
</template>

<script>
  export default {
    name: "PersonalCenterNav",
    props: {
      navList:Array
    },
    data () {
      return {
        locationImage: this.$imghost + "/spesource/location_image.png",
      }
    }
  }
</script>

<style scoped>
  @import "../../../assets/css/common/locationnav/personalCenterNav.css";
</style>
