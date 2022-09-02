<template>
  <div class="character_card_main" v-if="members && members.length>0">
    <div class="character_card_title">
      <span class="title_text">{{title}}</span>
      <div class="dividing_line"></div>
    </div>
    <div class="member_card_container" v-for="item in members">
      <div class="member_image_name_container">
        <div class="member_image_container" v-if="checkImage(item.headImage)">
          <img class="member_image_content" :src="getImageUrl(item.headImage)">
        </div>
        <div class="member_image_container" v-else-if="!checkImage(item.headImage)&&item.name">
          <span class="member_image_text">{{item.name.slice(item.name.length-2,item.name.length)}}</span>
        </div>
        <div class="member_name_container">{{item.name}}</div>
      </div>

      <div class="card_introduction_container">
        <div class="bl-top-jj" :id="'bl-top-jj'+item.id">{{getfont1(showCount,item.introduction)}}</div>
        <div class="bl-top-gd" :id="'bl-top-gd'+item.id" @click="reasongd(item.introduction,item.id)" v-if="panduan(showCount,item.introduction)">
            <span class="introduction_show_btn">展开</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { isImage } from "../../../utils/validate";
  import $ from "jquery";
  export default {
    name: "SpeCoursePersonCharge",
    props:{
      title:{
        type: String,
        default: "",
      },
      members:{
        type: Array,
        default: [],
      },
    },
    data(){
      return{
        showCount: 66
      }
    },
    methods:{
      checkImage(url){
        return isImage(url);
      },
      getImageUrl(url){
        return this.$imghost + url;
      },
      reasongd(txt,id){
        if ($('#bl-top-gd'+id).text()=='展开')
        {
          $('#bl-top-jj'+id).text(txt);
          $('#bl-top-gd'+id).text('收起')
        }
        else {
          txt=this.getfont1(this.showCount,txt);
          $('#bl-top-jj'+id).text(txt);
          $('#bl-top-gd'+id).text('展开')
        }
      },
      getfont1(index,txt){
        if (txt) {
          let c1 = txt
          let a1 = []
          let nr1 = ''
          if (c1) {
            c1 = c1.replace(/\s+/g, "")
            var num1 = 0
            for (let i = 0; i < c1.length; i++) {
              if (num1 >= index) {
                txt = nr1+'...';
                return txt
              }
              if (isNaN(c1.charAt(i))) {
                if (c1.charCodeAt(i) < 0 || c1.charCodeAt(i) > 255) {
                  a1[i] = 1
                  if (a1[i - 1] == 2 && i != 0 || a1[i - 1] == 3 && i != 0) {
                    num1 = num1 + 1
                  }
                  num1 += 1
                } else {
                  a1[i] = 3
                }
              } else {
                a1[i] = 2
              }
              if (i == c1.length - 1) {
                if (a1[i - 1] == 2 || a1[i - 1] == 3) {
                  num1 += 1
                }
              }
              nr1 = nr1 + c1.charAt(i)
            }
            if (num1 == 1 && c1.length > index || num1 <= index && c1.length > index) {
              txt = txt.slice(0, index + 3) + '...'
            }
          }
        }
        return txt
      },
      panduan(index,txt){
        try {
          var c1 = txt
          var a1 = []
          var nr1 = ''
          if (c1) {
            c1 = c1.replace(/\s+/g, "")
            var num1 = 0
            for (let i = 0; i < c1.length; i++) {
              if (num1 >= index) {
                return true
              }
              if (isNaN(c1.charAt(i))) {
                if (c1.charCodeAt(i) < 0 || c1.charCodeAt(i) > 255) {
                  a1[i] = 1
                  if (a1[i - 1] == 2 && i != 0 || a1[i - 1] == 3 && i != 0) {
                    num1 = num1 + 1
                  }
                  num1 += 1
                } else {
                  a1[i] = 3
                }
              } else {
                a1[i] = 2
              }
              if (i == c1.length - 1) {
                if (a1[i - 1] == 2 || a1[i - 1] == 3) {
                  num1 += 1
                }
              }
              nr1 = nr1 + c1.charAt(i)
            }
            if (num1 == 1 && c1.length > index || num1 <= index && c1.length > index) {
              txt = txt.slice(0, index + 3) + '...'
            }

          }
        }catch (e) {
        }
        return false
      },
    }
  }
</script>

<style scoped>
  @import "../../../assets/css/spespurce/charactercard.css";
</style>
