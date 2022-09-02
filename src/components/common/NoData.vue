<template>
  <div class="no_data_container_main">
    <div class="no_data_main">
      <img class="image_content" :src="$imghost + '/spesource/no_data.png'"/>
      <span class="no_data_text">暂无资源</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NoData",
    props: {
      imagePath: {
        type: String,
        default: ""
      }
    }
  }
</script>

<style scoped lang="scss">
.no_data_container_main{
  width: 100%;
  height: 100%;
  .no_data_main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .image_content{
      width: 145px;
      height: 115px;
    }
    .no_data_text{
      font-size: 14px;
      font-family: PingFang SC, PingFang SC-Regular;
      font-weight: 400;
      text-align: center;
      color: #393939;
      line-height: 36px;
    }
  }
}
</style>
