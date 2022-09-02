<template>
  <div class="args_mian">
    <div>{{title}}：</div>
    <div class="args_mian_content">
      <div @click="onargs(index,items.id)" :class="index == active?'active':''" class="args"
           v-for="(items,index) in argsList" :key="index">
        {{ items.name }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ChooseArgs",
    props: ["title", "argsList"],

    data() {
      return {
        active: 0,
      }
    },
    methods: {
      onargs(index, id) {
        this.active = index;
        if (this.title == "院系") {
          this.$emit('schoolchoose', index, id)
        } else {
          this.$emit('majorchoose', index, id)
        }
      }
    },
  }
</script>

<style scoped>
  @import "../../../assets/css/skill/check/checkargs.css";
</style>
