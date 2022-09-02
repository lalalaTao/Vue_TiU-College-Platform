<template>
  <div class="editor" ref="editor"></div>
</template>

<script>
  import API from '@/api'
  import E from 'wangeditor'
  export default {
    name: "Editor",
    data() {
      return {
        editor: null,
        info_: null,
      }
    },
    mounted() {
      this.setEditor();
    },
    methods: {
      setEditor() {
        this.editor = new E(this.$refs.editor);
        // 配置全屏功能按钮是否展示
        this.editor.config.showFullScreen = true;
        this.editor.config.uploadImgShowBase64 = false; // base 64 存储图片
        //this.editor.config.uploadImgServer = 'http://123.57.205.53:8090/info_college/video/editorUploadImgs';
        this.editor.config.uploadImgHeaders = {};// 自定义 header
        this.editor.config.uploadFileName = 'file';// 后端接受上传文件的参数名
        this.editor.config.uploadImgMaxSize = 2 * 1024 * 1024;// 将图片大小限制为 2M
        this.editor.config.uploadImgMaxLength = 6; // 限制一次最多上传 6 张图片
        this.editor.config.uploadImgTimeout = 3 * 60 * 1000; // 设置超时时间
        //this.editor.config.uploadVideoServer = 'http://123.57.205.53:8090/info_college/video/editorUploadVideo'; // 上传接口
        //this.editor.config.uploadVideoMaxSize = 500 * 1024 * 1024;//视频大小限制为500M
        const that = this;
        this.editor.txt.eventHooks.enterUpEvents.push(function () {
          if (that.value == '') return;
          console.log(that.value);
        });

        // 配置菜单
        this.editor.config.menus = [
          'head', // 标题
          'bold', // 粗体
          'fontSize', // 字号
          'fontName', // 字体
          //'italic', // 斜体
          'underline', // 下划线
          'strikeThrough', // 删除线
          //'indent',
          //'lineHeight',
          'foreColor', // 文字颜色
          'backColor', // 背景颜色
          'link', // 插入链接
          'list', // 列表
          'justify', // 对齐方式
          'quote', // 引用
          'emoticon', // 表情
          //'image', // 插入图片
          //'table', // 表格
          //'video', // 插入视频
          //'code', // 插入代码
          //'splitLine',
          //'undo', // 撤销
          //'redo', // 重复
          'fullScreen' // 全屏
        ];

        this.editor.config.customUploadImg = function (files, insert) {
          console.log(files);
          // let fd = new FormData();
          // fd.append("file", files[0]);
          // console.log("image data",fd);
        };

        this.editor.config.customUploadVideo = function (files, insert) {
          console.log("customUploadVideo",files);
          let fd = new FormData();
          fd.append("file", files[0]);
          console.log("video data",fd);
        };

        this.editor.config.uploadImgHooks = {
          fail: (xhr, editor, result) => {
            // 插入图片失败回调
          },
          success: (xhr, editor, result) => {
            // 图片上传成功回调
          },
          timeout: (xhr, editor) => {
            // 网络超时的回调
          },
          error: (xhr, editor) => {
            // 图片上传错误的回调
          },
          customInsert: (files, insertImg, result, editor) => {
            // 图片上传成功，插入图片的回调
            // result为上传图片成功的时候返回的数据，这里我打印了一下发现后台返回的是data：[{url:"路径的形式"},...]
            // console.log(result.data[0].url)
            // insertImg()为插入图片的函数
            // 循环插入图片
            // for (let i = 0; i < 1; i++) {
            let url = API.common.getFileImgUrl("/video/editorUploadImgs" + result.url)
            // }
          }
        };

        this.editor.config.onchange = (html) => {
          this.info_ = html; // 绑定当前逐渐地值
          this.$emit('change', this.info_) // 将内容同步到父组件中
        };

        this.editor.fullScreen();// 全屏
        this.editor.unFullScreen();// 取消全屏
        // 创建富文本编辑器
        this.editor.create()
      },
      clearEditorText(){
        this.editor.txt.clear();
      }
    }
  }
</script>

<style scoped>
  * {
    font-size: 14px;
  }

  .editor {
    width: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 0;
    overflow-y: auto;
  }

  .toolbar {
    border: 1px solid #ccc;
  }

  .text {
    border: 1px solid #ccc;
    min-height: 500px;
  }

  /deep/ .w-e-menu{
    width: 24px;
    height: 20px;
  }
</style>
