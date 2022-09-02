<template>
  <div class="course_catalog_info_main" :class="courseCatalogList.length>0?'':'no_data_flex_style'">
    <el-tree v-if="courseCatalogList.length>0" class="course_catalog_tree" :data="courseCatalogList" :props="defaultProps" :default-expand-all="true"
             @node-click="handleNodeClick">
      <div class="custom_node_container" slot-scope="{ node, data }">
        <div class="custom_content_container">
          <span class="custom_node_content">
          {{data.nodeNum}}.<span>&nbsp;</span>{{data.name}}
          </span>
          <div class="course_accessory_container" :style="{marginTop:index===0?'10px':''}"
               v-if="data.fileList && data.fileList.length>0"
               v-for="(item,index) in data.fileList">
            <div class="file_icon_name_container">
              <div class="file_icon_container">
                <img v-show="findFileIcon(item)" :src="findFileIcon(item)"/>
              </div>
              <div class="course_accessory_file_name_container">
                <a class="course_accessory_link" :class="checkNodeSelected(formatAccessoryNodeKey(item))?'selected':''"
                   @click="handleAccessoryClick(item)" v-if="item.fileType !== 1">{{item.urlName}}</a>
                <span v-else class="course_accessory_file_name"
                      :class="checkNodeSelected(formatAccessoryNodeKey(item))?'selected':''"
                      @click="handleAccessoryClick(item)">{{item.comAccessoryEntity.fileName}}</span>
              </div>
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
    <div v-else>
      <no-data :image-path="$imghost + '/spesource/no_data.png'"/>
    </div>
  </div>
</template>

<script>
  import NoData from "../../common/NoData";
  export default {
    name: "CatalogTree",
    components:{
      NoData
    },
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
        selectedNodes: [],
      }
    },
    methods: {
      handleNodeClick(data) {
        //console.log("handleNodeClick",data);
      },
      handleAccessoryClick(data) {
        const {fileType} = data;
        const key = this.formatAccessoryNodeKey(data);
        if (fileType === 2) {
          this.addSelectedNode(key);
        } else {
          this.addSelectedNode(key);
        }
        this.$emit("change-catalog", data);
      },
      handlePaperClick(item) {
        //跳转至课程测试页面
        console.log("jump to paper page");
        const key = this.formatPaperNodeKey(item);
        this.addSelectedNode(key);
      },
      findFileIcon(item) {
        const fileType = item.fileType;
        let type;
        if (fileType == null || fileType === 2) {
          type = 11;
        } else {
          const {comAccessoryEntity: {fileType}} = item;
          type = fileType;
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
  @import "../../../assets/css/spespurce/spe-source-study/catalog-tree.css";
</style>
