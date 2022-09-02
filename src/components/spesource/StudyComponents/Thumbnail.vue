<template>
  <div class="thumbnail_container_main">
    <div class="thumbnail_content_container">
      <div class="thumbnail_image_container" v-for="(item,index) in images">
        <div :class="item.id==(currentPage)?'selected':''" @click="handleChangeImage(index)"><img :src="item.path"/>
        </div>
        <span>{{index+1}}</span>
      </div>
      <div v-if="images.length <= 0">
        <no-data :image-path="$imghost + '/spesource/no_data.png'" />
      </div>
    </div>
  </div>
</template>

<script>
  import NoData from "../../common/NoData";

  export default {
    name: "Thumbnail",
    components: {
      NoData
    },
    props: {
      images: {
        type: Array,
        default: []
      },
      currentPage: {
        type: Number,
        default: 1
      }
    },
    watch: {
      currentPage(val) {
        //console.log("当前为第" + (val + 1) + "页");
      }
    },
    methods: {
      handleChangeImage(index) {
        this.$emit("change-image", index);
      },
    },
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/css/spespurce/spe-source-study/thumbnail";
</style>
