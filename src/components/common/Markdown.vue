<template>
  <div class="markdown_main">
    <div class="markdown_body" v-html="markdown"></div>
  </div>
</template>
<script>
  import MarkdownIt from "markdown-it";
  export default {
    name: "Markdown",
    props:{
      content:{
        type: String,
        default: ""
      }
    },
    computed:{
      markdown(){
        const md = new MarkdownIt();
        return md.render(this.content);
      }
    }
  }
</script>

<style scoped lang="scss">

.markdown_main{
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .markdown_body{
    overflow-y: auto;
  }
}
</style>
