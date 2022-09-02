<template>
  <div class="top_location">
    <span class="location_icon">
      <slot></slot>
    </span>
    <router-link :to="{path:'/'+path}" style="color:rgba(153,153,153,1);">
      {{location}}
    </router-link>
      > {{courseName}}
  </div>
</template>

<script>
  export default {
    name: "LocationNav",
    props: {
      location: {
        type: String,
        default: "",
      },
      path: {
        type: String,
        default: "",
      },
      courseName: {
        type: String,
        default: '',
      }
    }
  }
</script>

<style scoped>
  @import "../../../assets/css/common/locationnav/locationnav.css";
</style>
