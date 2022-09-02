<template>
    <div>
      <el-timeline style="margin-left: 20px">
        <el-timeline-item
          :color="showactive == i ?'#0bbd87' : ''"
          v-for="i in 10"
          :key="i"
          timestamp="2018/4/12"
          :hide-timestamp="true">
          <div @click="showdetail(i)"  class="room_result_title">2020年3月 职业教育教学能力云上阅读交流</div>
          <div v-show="showactive == i"
               @click="changebg(i,k)"
               :class="active == (i+'-'+k) ? 'active':''"
               class="room_result_content"
               v-for="k in 4"
               :key="k">
            <div class="room_result_content_left">
              <div class="hdcl">活动材料</div>
              <div style="margin-left: 20px">云上阅读活动交流策划案.pdf</div>
            </div>
            <div class="room_result_content_right"> <i class="el-icon-download" style=" color:#00BDA5"></i> 下载</div>
          </div>
        </el-timeline-item>
      </el-timeline>
    </div>
</template>

<script>
export default {
  name: 'RoomResult',
  props: {},
  components: {

  },
  data () {
    return {
      activeName: 'first',
      active:null,
      showactive:1,
      oldnum: null,
      showmore:true,
      showmore2:true,
      pshowactive:0,
    }
  },
  computed: {

  },
  watch: {

  },
  methods: {
    changebg(i,k){
      this.active = i + '-' + k
    },
    showdetail(val){
      this.oldnum = this.showactive
      this.showactive = val
    },
    showpactive(i){
      console.log(i)
      this.showmore2 = this.pshowactive
      if( this.showmore2 == i){
        this.pshowactive = 0
      }else {
        this.pshowactive = i
      }

    }
  },
}
</script>

<style scoped>
@import "../../../assets/css/Spestandard/teacherroom/teacherroom.css";
</style>
