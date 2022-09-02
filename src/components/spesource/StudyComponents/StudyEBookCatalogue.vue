<template>
  <div class="study_e_book_catalog_main">
    <el-tree v-if="catalogueTreeList.length>0" class="study_e_book_catalog_tree" :data="catalogueTreeList"
             :props="defaultProps" :default-expand-all="true" highlight-current
             @node-click="handleNodeClick">
      <div class="custom_node_container" slot-scope="{ node, data }">
        <div class="custom_content_container">
          <span class="custom_node_content">
          {{data.nodeNum}}.<span>&nbsp;</span>{{data.name}}
          </span>
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
    name: "StudyEBookCatalogue",
    components: {NoData},
    props: {
      catalogueTreeList: {
        type: Array,
        default: [],
        required: true
      },
    },
    data() {
      return {
        defaultProps: {
          label: 'numName',
          children: 'children',
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
        selectedNodes: []
      }
    },
    methods: {
      handleNodeClick(node, data) {
        this.$emit("change-catalog", node, data);
      },
      handleAccessoryClick(data) {
        const {id, fileType, urlJump} = data;
        const key = this.formatAccessoryNodeKey(data);
        this.addSelectedNode(key);
        if (fileType === 2) {
          window.open(urlJump, '_blank');
        } else {
          const query = {
            skillResourceId: this.$parent.skillResourceId,
            id: id
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
    },
  }
</script>

<style scoped lang="scss">
  .study_e_book_catalog_main {
    width: 307px;
    height: 100%;
    min-height: 969px;
    background: #ffffff;
    border-radius: 4px;
    box-shadow: 0px 4px 8px 0px rgba(118, 118, 118, 0.30);
    font-size: 14px;
    /deep/ .study_e_book_catalog_tree {
      width: 100%;
      .custom_node_container {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .custom_node_content {
          height: 28px;
          font-size: 18px;
          font-family: PingFang SC, PingFang SC-Medium;
          font-weight: 500;
          text-align: left;
          color: #282828;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
      }
      .el-tree-node__content {
        height: auto;
        padding: 5px 0px 5px 0px;
        border-bottom: 1px solid #f8f8f8;
      }
    }
  }
</style>
