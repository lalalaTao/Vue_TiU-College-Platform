<template>
  <!-- Video组件 -->
  <div id="common-video" class="h-100">
    <video
      ref="myVideo"
      preload="auto"
      :poster="poster"
      :src="src"
      :controls="controls"
      :autoplay="autoPlay"
      oncontextmenu="return false"
      @timeupdate="timeUpdate"
      controlslist="nodownload"
      class="video-box"
    ></video>
    <img
      v-show="playBtn"
      :src="$imghost+'/spesource/video_play_btn.png'"
      alt=""
      @click="operateVideo"
      class="pointer operate-btn"
      :class="{ 'fade-out': videoState }"
    />
  </div>
</template>

<script>
  export default {
    name: "CommonVideo",
    data() {
      return {
        videoState: false, // 视频播放状态
        // 学时
        studyTime: {
          currentTime: 0, // 当前已学时长
          duration: 0 // 总时长
        },
        timer: {}, // 定时器
        pauseTimer: {} // 暂停定时器
      };
    },
    /**
     * @param poster 展示图
     * @param src 视频资源
     * @param controls 是否显示控件
     * @param videoData 视频基础数据
     * @param playBtn 是否现实播放按钮
     */
    props: {
      poster: {
        type: String,
        default: ""
      },
      src: {
        type: String,
        required: true
      },
      controls: {
        type: Boolean,
        default: true
      },
      videoData: {
        type: Object
      },
      playBtn: {
        type: Boolean,
        default: true
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
    },
    mounted() {
      // 监听视频播放
      this.$refs.myVideo.addEventListener("play", () => {
        this.openTimer();
      });
      // 监听视频暂停
      this.$refs.myVideo.addEventListener("pause", () => {
        this.closeTimer();
      });
    },
    methods: {
      // 开启定时器
      openTimer() {
        this.timer = setInterval(() => {
          this.$emit("videoStudyTime", this.studyTime);
        }, 5000);
      },
      // 关闭定时器
      closeTimer() {
        clearInterval(this.timer);
        this.$emit("video-study-time", this.studyTime);
      },
      // 开启暂停定时器
      openPauseTimer() {
        this.pauseTimer = setInterval(() => {
          this.hintOperate();
        }, 600000);
      },
      setVideoCurrentTime(currentTime) {
        this.$refs.myVideo.currentTime = currentTime;
      },
      // 关闭暂停定时器
      closePauseTimer() {
        clearInterval(this.pauseTimer);
      },
      // 提示操作
      hintOperate() {
        this.operateVideo();
        this.$alert("请点击确认继续学习", "提示", {
          confirmButtonText: "确定",
          confirmButtonClass: "hint-btn",
          showClose: false,
          callback: action => {
            this.$refs.myVideo.currentTime = this.videoData.currentTime;
            this.operateVideo();
            this.openPauseTimer();
          }
        });
      },
      // 获取当前播放位置
      timeUpdate(e) {
        this.studyTime.currentTime = e.target.currentTime;
        this.studyTime.duration = e.target.duration ? e.target.duration : 0;
        this.$emit("time-update", this.studyTime);
      },
      // 操作视频播放、暂停
      operateVideo() {
        if (!this.src) {
          this.$message({message: "暂无视频资源，请查看其他视频！"});
          return false;
        }
        if (this.$refs.myVideo.paused) {
          this.$refs.myVideo.play();
          this.videoState = true;
        } else {
          this.$refs.myVideo.pause();
          this.videoState = false;
        }
      }
    },
    watch: {
      // 监听操作
      videoData(val, oldVal) {
        const {currentTime, duration} = val;
        this.setVideoCurrentTime(currentTime);
        if (currentTime && duration && currentTime < duration) {
          this.hintOperate();
        }
      }
    },
    beforeDestroy() {
      this.$emit("video-destroyed", this.studyTime, this.videoData.accessoryId);
    }
  };
</script>

<style scoped lang="scss">
  #common-video {
    width: 100%;
    height: 100%;
    position: relative;
    .video-box {
      box-sizing: border-box;
      border: 0;
      display: block;
      width: 100%;
      height: 100%;
      outline: none;
      object-fit: fill; //填充满父容器
      border-radius: 4px;
    }
    .isShow {
      //进度条
      video::-webkit-media-controls-timeline {
        display: none;
      }
    }
    //控制器播放暂停按钮
    /*video::-webkit-media-controls-play-button {*/
    /*visibility: hidden;//*/
    /*}*/
    .operate-btn {
      display: block;
      width: 60px;
      height: 60px;
      position: absolute;
      top: calc(50% - 30px);
      left: calc(50% - 30px);
      cursor: pointer;
    }
    .operate-btn:hover {
      opacity: 0.8;
    }
    .fade-out {
      opacity: 0;
    }
  }
</style>
