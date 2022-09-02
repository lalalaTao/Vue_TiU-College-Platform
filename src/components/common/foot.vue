<template>
  <div class="foot_main">
    <div class="foot_content">
      <div class="foot_content_info">
        <div class="foot_content_info_title">
          友情链接
        </div>

        <div  class="foot_content_info_all">
          <div class="school">
            上海城建职业学院
          </div>
          <div  class="school">
            上海城建职业学院
          </div>
          <div class="school">
            上海城建职业学院
          </div>
        </div>
      </div>

      <div class="foot_content_info">
        <div class="foot_content_info_title">
          关于我们
        </div>
        <div  class="foot_content_info_all">
          <div class="school">
            公司介绍
          </div>
          <div class="school">
            新闻中心
          </div>
          <div class="school">
            加入我们
          </div>
        </div>
      </div>

      <div class="foot_content_info">
        <div class="foot_content_info_title">
          联系我们
        </div>

        <div style="margin-top: 0.2rem"  class="foot_content_info_all">
          <div class="foot_content_info_all_img school" style="display:flex;">
            <img v-for="i in 4" :src="imgsrc + '/foot/foot' +i + '.png'" alt="">
          </div>
          <div class="school">
            红亚教育科技（上海）有限公司
          </div>
          <div class="school">
            电话：17269338375
          </div>
        </div>
      </div>

      <div class="foot_content_info">
        <div class="foot_content_info_title">
          更多信息
        </div>

        <div  class="foot_content_info_all">
          <div style="height: 0.732rem;width: 0.732rem;background-color:#d7dbdb;margin-top: -0.122rem"></div>
        </div>
      </div>
    </div>
    <div class="foot_bottom">
      <div class="foot_bottom_content">
        <div class="foot_bottom_content_left">{{bq}} <div style="width: 0.244rem"></div> {{bb}}</div>
        <div class="foot_bottom_content_right">
          <span>{{ys}}</span> |
          <span>{{zs}}</span> |
          <span>{{xy}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import API from '@/api'
    export default {
        name: "Foot",
        data(){
          return {
            bq:'版权所有：红亚教育科技（上海）有限公司',
            bb:'沪ICP备2020031101号-1',
            ys:"隐私条款",
            zs:'知识产权说明',
            xy:'用户协议',
            imgsrc: this.$imghost
          }
        },
        methods:{

        }
    }
</script>

<style scoped>
@import "../../assets/css/common/foot.css";
</style>
