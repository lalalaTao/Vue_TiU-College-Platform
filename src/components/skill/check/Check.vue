<template>
  <div class="check_main">
    <ChooseArgs @schoolchoose = "schoolchoose" :title="title1" :argsList = "listfaculty"></ChooseArgs>
    <ChooseArgs @majorchoose = "majorchoose" :title="title2" :argsList="listspecialty"></ChooseArgs>
  </div>
</template>

<script>
import ChooseArgs from "./ChooseArgs";
import {listHyschoolfaculty, listHyschoolspecialty} from "../../../api/modules/skill/check/check";
import API from '@/api'

export default {
  name: "Check",
  components:{
    ChooseArgs,
  },
  data(){
    return{
      title1:"院系",
      title2:"专业",
      listfaculty:[],//院系
      listspecialty:[],//专业
    }
  },
  created() {
    this.listHyschoolfaculty();//获取专业
    this.listHyschoolspecialty(null);//获取专业
  },
  methods:{
    async listHyschoolfaculty(){
      const {data} =  await API.check.listHyschoolfaculty({})
      let schoolList =  data.list
      if (schoolList.length > 0 ){
        //this.listHyschoolspecialty(schoolList[0].id)
        schoolList.unshift({createTime: null,
          createUserId: null,
          id: null,
          leaderUserId: null,
          modifiedTime: null,
          modifiedUserId: null,
          name: "全部",
          orderId: null,
          phone: null,
          remark: null,
          schoolId: null})

        this.listfaculty = schoolList;
      }



    },

    async listHyschoolspecialty(schoolid){
      let params = {

      }
      if(schoolid != null){
        params.facultyId = schoolid
      }

      const {data} =  await API.check.listHyschoolspecialty(params)
      let specialList = data.list;
      if(specialList.length > 0){
        specialList.unshift({
          id:null,
          name:"全部"
        })
        this.listspecialty =specialList
      }
    },

    schoolchoose(index){
      this.listHyschoolspecialty(this.listfaculty[index].id);

      //传到父页面skill 调用刷新
      this.$emit("school",index)
    },
    majorchoose(index){
      //传到父页面skill 调用刷新
      this.$emit("major",index)
    }
  }

}
</script>

<style scoped>
@import "../../../assets/css/skill/check/check.css";
</style>
