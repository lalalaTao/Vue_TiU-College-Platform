<template>
  <ul class="message_ul_container">
    <li class="active" v-for="(item,index) in messageList">
      <div class="message_content_main">
        <div class="user_image_head_container">
          <el-badge :is-dot="contentDisplayRule && isDotRule(item)">
            <div class="user_image_head">
              <img v-if="checkImage(item.headImage)" :src="getImageUrl(item.headImage)">
              <span v-else class="member_image_text">{{item.send.slice(item.send.length-2,item.send.length)}}</span>
            </div>
          </el-badge>
        </div>
        <div class="message_content_container">
          <div class="send_date_container">
            <div class="message_content_user_name" v-show="item.sendFlag">{{item.send}}</div>
            <div class="message_date_text">{{item.time}}</div>
          </div>
          <div class="message_content_text" v-html="item.content"></div>
          <div class="comment_reply_btn_container" v-if="contentDisplayRule">
            <div class="comment_content_container" v-if="item.courseFileMark != null">
              <img :src="getCommentTypeIconPath(item)">
              <span class="comment_content_text" @click="fileMarkDisplay(item.courseFileMark)">{{getCommentDescribe(item)}}</span>
            </div>
            <span class="reply_btn" @click="replyClick(item)" v-show="replyBtnDisplayRule(item,index)">回复</span>
          </div>
          <div class="children_message_container" v-if="contentDisplayRule">
            <message-content :message-list="item.children" @reply-click="replyClick"/>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
  import MessageContent from './MessageContent';
  import {isImage} from "../../../utils/validate";

  const markTypeIconMap = {
    1:"https://hy-tiyou-dev-public.oss-cn-beijing.aliyuncs.com/tiyou/video/tiyou_dev/spesource/comment/comment_bubble_icon.png"
  };
  const multiMediaTypeIconMap = {
    1:"https://hy-tiyou-dev-public.oss-cn-beijing.aliyuncs.com/tiyou/video/tiyou_dev/spesource/comment/comment_image_icon.png",
    2:"https://hy-tiyou-dev-public.oss-cn-beijing.aliyuncs.com/tiyou/video/tiyou_dev/spesource/comment/comment_video_icon.png",
    3:"https://hy-tiyou-dev-public.oss-cn-beijing.aliyuncs.com/tiyou/video/tiyou_dev/spesource/comment/comment_audio_icon.png",
  };

  export default {
    name: "MessageContent",
    components: {MessageContent},
    props: {
      messageList: {
        type: Array,
        default: [],
        required: true
      },
      contentDisplayRule:{
        type: Boolean,
        default: true
      }
    },
    methods: {
      getCommentTypeIconPath(item){
        const { courseFileMark } = item;
        if(courseFileMark == null){
          return "";
        }
        const { markType,multiMediaType } = courseFileMark;
        if(markType === 2){
          return multiMediaTypeIconMap[multiMediaType];
        }
        return markTypeIconMap[markType];
      },
      getCommentDescribe(item){
        const { courseFileMark } = item;
        if(courseFileMark == null){
          return "";
        }
        const { markType, multiMediaTitle } = courseFileMark;
        if(markType === 1){
          return "气泡批注";
        }else if(markType === 2){
          return multiMediaTitle;
        }else{
          return "其他批注";
        }
      },
      fileMarkDisplay(fileMark){
        console.log("fileMark",fileMark);
      },
      checkImage(url) {
        return isImage(url);
      },
      getImageUrl(url) {
        return this.$imghost + url;
      },
      replyClick(chatInfo) {
        this.$emit("reply-click", chatInfo);
      },
      isDotRule(item) {
        const {children, parentId} = item;
        return (children.length <= 0 && parentId === 0);
      },
      replyBtnDisplayRule(item, index) {
        const {children, parentId} = item;
        if (children.length <= 0 && parentId === 0) return true;
        else if (children.length >= 0 && index === this.messageList.length - 1) {
          return !(children.length >= 0 && parentId === 0);
        }
        return false;
      },
    }
  }
</script>

<style scoped lang="scss">
  .message_ul_container {
    width: 100%;
    .message_content_main {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: row;
      .user_image_head_container {
        margin-left: 8px;
        margin-right: 8px;
        margin-top: 12px;
        .user_image_head {
          width: 40px;
          height: 40px;
          background: #98d2cb;
          border-radius: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 100%;
            height: 100%;
            border-radius: 4px;
          }
          .member_image_text {
            font-size: 16px;
            font-family: PingFang SC, PingFang SC-Medium;
            font-weight: 500;
            text-align: center;
            color: #fefefe;
          }
        }
      }
      .message_content_container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-top: 8px;
        padding: 0 5px 0 10px;
        .send_date_container {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }
        .comment_reply_btn_container{
          width: 100%;
          margin-top: 10px;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
          .comment_content_container {
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: row;
            .comment_content_text{
              font-size: 14px;
              font-family: PingFang SC, PingFang SC-Medium;
              font-weight: 500;
              text-align: left;
              color: #00bda5;
              line-height: 22px;
              margin-left: 11px;
              &:hover{
                cursor: pointer;
                /*background: #00bda5;*/
                /*border-radius: 4px;*/
                /*color: #FFFFFF;*/
              }
            }
          }
          .reply_btn {
            width: 45px;
            font-size: 14px;
            font-family: PingFang SC, PingFang SC-Medium;
            font-weight: 500;
            text-align: right;
            color: #00bda5;
            line-height: 22px;
            padding-right: 10px;
          }
          .reply_btn:hover {
            cursor: pointer;
            color: #64c7e0
          }
        }

        .children_message_container {
          width: 110%;
          background: #f9f9f9;
          border-radius: 4px;
          margin-left: -40px;
          margin-top: 10px;
        }
      }
    }
  }
</style>
