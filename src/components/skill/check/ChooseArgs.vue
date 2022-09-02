<template>
  <div class="args_mian">
    <div>{{title}}：</div>
    <div  class="args_mian_content">
      <div @click="onargs(index)" :class="index == active?'active':''" class="args" v-for="(items,index) in argsList" :key="index">
        {{ items.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChooseArgs",
  props:["title","argsList"],

  data(){
    return{
      active:0,
      // argsList:[
      //   {id:0,name:'全部'},
      //   {id:1,name:'物联网学院'},
      //   {id:2,name:'机械工程学院'},
      //   {id:3,name:'计算机工程学院'}
      // ]
    }
  },
  methods:{
    onargs(index){
      this.active = index;
      if(this.title == "院系"){
        this.$emit('schoolchoose',index)
      }else{
        this.$emit('majorchoose',index)
      }
    }
  },
}
</script>

<style scoped>
@import "../../../assets/css/skill/check/checkargs.css";
</style>
