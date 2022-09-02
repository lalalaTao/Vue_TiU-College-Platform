
<template>
  <div class="notes_and_messages_main">
    <div class="note_message_close_container">
      <img class="note_message_close_btn" :src="$imghost + '/spesource/colse_icon.png'" @click="handleCloseClick"/>
    </div>
    <el-tabs v-model="activeNoteMessageName" @tab-click="handleClick">
      <el-tab-pane label="课程笔记" name="first">
        <div class="notes_main">
          <div class="notes_content_container">
            <message-content id="note-list" :message-list="noteList" :content-display-rule="false"/>
          </div>
          <div class="editor_bar_container">
            <!--<editor-bar ref="note" @change="onNoteChange"/>-->
            <el-input ref="note" type="textarea" :rows="2" placeholder="请输入内容" clearable v-model="noteValue"></el-input>
          </div>
          <el-button class="note_btn" @click="saveNote">保存</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="留言" name="second">
        <div class="notes_main">
          <div class="messages_content_container">
            <message-content id="message-list" :message-list="messageList" @reply-click="replyClick"/>
          </div>
          <div class="editor_bar_container">
            <!--<editor-bar ref="message" @change="onMessageChange"/>-->
            <el-input ref="message" type="textarea" :rows="2" placeholder="请输入内容" clearable v-model="messageValue"></el-input>
          </div>
          <el-button class="message_btn" @click="sendMessage()">发送</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import EditorBar from '../../common/Editor';
  import MessageContent from './MessageContent';
  import {doGetNowTime} from "../../../utils/common";
  import {sendChatMessage, createWebSocket, closeSock} from "../../../utils/socket";
  import API from '@/api';
  import $ from "jquery";

  export default {
    name: "NoteAndMessage",
    components: {
      EditorBar, MessageContent
    },
    props: {
      accessoryId: {
        type: Number,
        default: null
      },
      skillResourceId: {
        type: Number,
        default: null
      },
      user: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        activeNoteMessageName: "first",
        messageValue: "",
        noteValue: "",
        chatWs: null,//留言连接对象,
        noteList: [],
        messageList: [],
      };
    },
    mounted() {
      closeSock();
      this.checkActiveName(this.activeNoteMessageName);
      const {id, schoolId, userType} = this.user;
      const userLoginId = id + "" + schoolId + "" + userType;
      const roomId = this.skillResourceId + "" + this.accessoryId;
      createWebSocket(this.globalCallback, roomId, userLoginId);
    },
    watch: {
      activeNoteMessageName(val) {
        this.checkActiveName(val);
      },
      noteList() {
        this.$nextTick(() => {
          this.setBottom("notes_content_container", "note-list");
        });
      },
      messageList() {
        this.$nextTick(() => {
          this.setBottom("messages_content_container", "message-list");
        });
      }
    },
    methods: {
      // webSocket的回调函数，msg表示收到的消息
      globalCallback(msg) {
        const {id, send, content, time, headImage, parentId, userId} = msg;
        const message = {
          headImage: headImage,//人物头像
          send: send,//发送者昵称（唯一）
          sendFlag: true,//是否显示发送者昵称
          content: content,//聊天信息内容
          userId: userId,//用户ID，必传
          parentId: parentId,//回复ID
          time: time,
          isMe: false,//信息是否自己所发
          type: 2,//信息类型（1：上线；2:聊天信息）
          id: id,//信息ID
          children: []
        };
        if (parentId !== 0) {
          const replyMessage = this.messageList.find(item => item.id === parentId);
          const {children} = replyMessage;
          children.push(message);
        } else {
          this.messageList.push(message);
        }
      },
      handleClick(tab, event) {
      },
      handleCloseClick() {
        this.$emit("close-note-message-btn");
      },
      checkActiveName(activeName) {
        if (activeName === 'first') {
          this.noteList = [];
          this.findCourseNotes();
        } else {
          this.messageList = [];
          this.findMessageList();
        }
      },
      async findCourseNotes() {
        if (!this.accessoryId || !this.skillResourceId) {
          return;
        }
        const params = {
          "skillResourcesId": this.skillResourceId,
          "accessoryId": this.accessoryId
        };
        const {data: {code, msg, result}} = await API.spesourcestudy.findSkillCourseNotesByParams(params);
        if (code === 0) {
          const { realName } = this.user;
          result.forEach(item => {
            this.noteList.push({
              send: realName,
              sendFlag: false,
              content: item.content,
              time: item.createTime,
              isMe: false
            })
          });
        } else {
          this.$message.error(msg);
        }
      },
      async saveNote() {
        if(!this.noteValue || this.noteValue === '') return;
        const params = {
          "skillResourcesId": this.skillResourceId,
          "accessoryId": this.accessoryId,
          "content": this.noteValue
        };
        const {data: {code, msg}} = await API.spesourcestudy.saveNotes(params);
        if (code !== 0) {
          const FailReason = "提交笔记记录失败，原因：" + msg;
          this.$message.error(FailReason);
        } else {
          const { realName } = this.user;
          this.noteList.push({
            send: realName,
            sendFlag: false,
            content: this.noteValue,
            time: this.getNowTime(),
            isMe: false
          });
          this.$refs.note.clear();
        }
        this.setBottom("notes_content_container", "note-list");
      },
      async findMessageList() {
        if (!this.accessoryId || !this.skillResourceId) {
          return;
        }
        const params = {
          "skillResourcesId": this.skillResourceId,
          "accessoryId": this.accessoryId
        };
        const {data: {code, msg, list}} = await API.spesourcestudy.findMessageList(params);
        if (code === 0) {
          list.forEach(item => {
            this.messageList.push(this.formatMessageInfo(item));
          });
        } else {
          this.$message.error(msg);
        }
      },
      formatMessageInfo(item) {
        let children = [];
        if (item.children) {
          item.children.forEach(item => {
            children.push(this.formatMessageInfo(item));
          });
        }
        return {
          ...item,
          send: item.createUser,
          sendFlag: true,
          content: item.content,
          time: item.createTime,
          isMe: item.self,
          children: children
        };
      },
      async sendMessage(messageContent, replyId = 0) {
        if (!messageContent) {
          messageContent = this.messageValue;
        }
        if(!messageContent || messageContent === '') return;
        const {id, schoolId, realName, headImg} = this.user;
        const message = {
          headImage: headImg,//人物头像
          send: realName,//发送者昵称（唯一）
          sendFlag: true,//是否显示发送者昵称
          content: messageContent,//聊天信息内容
          schoolId: schoolId,//学校ID,必传
          skillResourcesId: this.skillResourceId,//资源课程ID,必传
          accessoryId: this.accessoryId,//专业资源课程附件ID,必传
          userId: id,//用户ID，必传
          parentId: replyId,//回复ID
          time: this.getNowTime(),
          isMe: true,//信息是否自己所发
          type: 2,//信息类型（1：上线；2:聊天信息）
          children: []
        };
        //发送聊天信息
        sendChatMessage(message);
        //清空聊天输入框
        this.$refs.message.clear();
        this.setBottom("messages_content_container", "message-list");
      },
      replyClick(chatInfo) {
        const {id, parentId} = chatInfo;
        const replyId = parentId === 0 ? id : parentId;
        this.open(replyId);
      },
      open(replyId) {
        this.$prompt('请输入回复内容', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputType: 'textarea'
        }).then(({value}) => {
          this.sendMessage(value, replyId);
        }).catch(() => {
          this.$message.info({message: '已取消回复', duration: 1000});
        });
      },
      setBottom(containerMain, scrollContainer) {
        // 发送消息后滚动到底部
        const container = $('.' + containerMain);
        const scroll = $('#' + scrollContainer);
        container.animate({
          scrollTop: scroll[0].scrollHeight - container[0].clientHeight + container.scrollTop() + 100
        });
      },
      getNowTime() {
        return doGetNowTime();
      },
    },
    beforeDestroy() {
      //清除多次执行定时器
      closeSock();
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/css/spespurce/spe-source-study/note-and-message";
</style>
