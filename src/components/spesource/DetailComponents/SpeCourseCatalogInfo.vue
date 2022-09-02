<template>
  <div class="course_catalog_info_main">
    <el-tabs class="course_catalog_info_tabs" v-model="activeName">
      <el-tab-pane label="课程目录" name="first">
        <el-tree class="course_catalog_tree" :data="courseCatalogList" :props="defaultProps" :default-expand-all="true"
                 @node-click="handleNodeClick">
          <div class="custom_node_container" slot-scope="{ node, data }">
            <span :class="'custom_node_content_'+data.level">
              {{data.nodeNum}}.
              <span>&nbsp;</span>
              {{data.name}}
            </span>
            <div class="course_accessory_container_main" :style="{marginTop:data.level!=1?'8px':''}">
              <div class="course_accessory_container" v-if="data.fileList && data.fileList.length>0"
                   v-for="item in data.fileList">
                <div class="file_icon_name_container">
                  <div class="file_icon_container">
                    <img v-show="findFileIcon(item)" :src="findFileIcon(item)"/>
                  </div>
                  <div class="course_accessory_file_name_container">
                    <a class="course_accessory_link"
                       :class="checkNodeSelected(formatAccessoryNodeKey(item))?'selected':''"
                       @click="handleAccessoryClick(item)" v-if="item.fileType !== 1">{{item.urlName}}</a>
                    <span v-else class="course_accessory_file_name"
                          :class="checkNodeSelected(formatAccessoryNodeKey(item))?'selected':''"
                          @click="handleAccessoryClick(item)">{{item.comAccessoryEntity.fileName}}</span>
                  </div>
                </div>
                <div class="file_down_container" v-if="item.fileDownFlag != null && item.fileDownFlag == 1"
                     @click="downLoadFile(item.comAccessoryEntity.filePath)">
                  <img :src="downLoadImage"/>
                  <span class="down_load_text">下载</span>
                </div>
              </div>
              <div class="course_accessory_container" v-if="data.paperList && data.paperList.length>0"
                   v-for="item in data.paperList">
                <div class="file_icon_name_container">
                  <div class="file_icon_container">
                    <img :src="$imghost + '/spesource/txt.png'"/>
                  </div>
                  <div class="course_accessory_file_name_container">
                  <span class="course_accessory_file_name"
                        :class="checkNodeSelected(formatPaperNodeKey(item))?'selected':''"
                        @click="handlePaperClick(item)">{{item.paperName}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tree>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import {downloadFile} from "../../../utils/common";

  export default {
    name: "SpeCourseCatalogInfo",
    props: {
      courseCatalogList: {
        type: Array,
        default: [],
        required: true
      },
    },
    data() {
      return {
        defaultProps: {
          label: 'numName',
          children: 'childList',
        },
        activeName: "first",
        fileTypeList: [
          {type: 1, value: this.$imghost + "/spesource/video.png"},
          {type: 2, value: this.$imghost + "/spesource/word.png"},
          {type: 3, value: this.$imghost + "/spesource/ppt.png"},
          {type: 4, value: this.$imghost + "/spesource/excel.png"},
          {type: 5, value: this.$imghost + "/spesource/pdf.png"},
          {type: 6, value: this.$imghost + "/spesource/pic.png"},
          {type: 7, value: this.$imghost + "/spesource/package.png"},
          {type: 8, value: this.$imghost + "/spesource/txt.png"},
          {type: 9, value: this.$imghost + "/spesource/MP3.png"},
          {type: 10, value: this.$imghost + "/spesource/mark.png"},
          {type: 11, value: this.$imghost + "/spesource/link.png"}],
        downLoadImage: this.$imghost + "/spesource/down_load_icon.png",
        selectedNodes: [],
      }
    },
    methods: {
      handleNodeClick(data) {
        //console.log("handleNodeClick",data);
      },
      handleAccessoryClick(data) {
        const {id, fileType, urlJump} = data;
        const key = this.formatAccessoryNodeKey(data);
        if (fileType === 2) {
          this.addSelectedNode(key);
          window.open(urlJump, '_blank');
        } else {
          this.addSelectedNode(key);
          const query = {
            skillResourceId: this.$parent.skillResourceId,
            id: id,
            skillResourceType: this.$parent.skillResourceType  //1:组合资源，2：电子书
          };
          const newPage = this.$router.resolve({path: '/SpeSourceStudy', query: query});
          window.open(newPage.href, '_blank');
        }
      },
      handlePaperClick(item) {
        //跳转至课程测试页面
        console.log("jump to paper page", item);
        const key = this.formatPaperNodeKey(item);
        this.addSelectedNode(key);
      },
      downLoadFile(url) {
        if (url == null || url == "") {
          this.$message.error({message: '请上传exe文件', center: true, duration: 2000});
          return;
        }
        downloadFile(this.$imghost + url, url.split('/')[url.split('/').length - 1]);
      },
      findFileIcon(item) {
        const fileType = item.fileType;
        let type;
        if (fileType == null || fileType === 2) {
          type = 11;
        } else {
          type = item.comAccessoryEntity.fileType;
        }
        const fileIcon = this.fileTypeList.find(item => item.type === type);
        return fileIcon.value;
      },
      addSelectedNode(key) {
        if (this.selectedNodes.includes(key)) {
          return;
        }
        this.selectedNodes.push(key);
      },
      checkNodeSelected(val) {
        const node = this.selectedNodes.find(item => item === val);
        if (node) {
          return true;
        } else {
          return false;
        }
      },
      formatAccessoryNodeKey(item) {
        const {fileType, id, urlName, comAccessoryEntity} = item;
        let key;
        if (fileType === 2) {
          key = fileType + "_" + id + "_" + urlName;
        } else {
          const {id, fileName} = comAccessoryEntity;
          key = fileType + "_" + id + "_" + fileName;
        }
        return key;
      },
      formatPaperNodeKey(item) {
        const {id, paperId, paperName} = item;
        return id + "_" + paperId + "_" + paperName;
      }
    }
  }
</script>

<style scoped>
  @import "../../../assets/css/spespurce/course-catalog-info/specoursecataloginfo.css";
</style>
<style>
  @import "../../../assets/css/spespurce/course-catalog-info/course-catalog-tree.css";
</style>
