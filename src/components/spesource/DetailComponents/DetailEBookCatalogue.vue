<template>
  <div class="e_book_catalogue_main">
    <el-tabs class="e_book_catalog_tabs" v-model="activeName">
      <el-tab-pane label="课程目录" name="first">
        <el-tree class="e_book_catalogue_tree" :data="catalogueTreeList" :props="defaultProps"
                 :default-expand-all="true"
                 @node-click="handleNodeClick">
          <div class="custom_node_container" slot-scope="{ node, data }">
            <span class="custom_node_content" :style="{height:data.level===1?'48px':''}">
              {{data.nodeNum}}.&nbsp;&nbsp;{{data.name}}
            </span>
          </div>
        </el-tree>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    name: "DetailEBookCatalogue",
    props: {
      catalogueTreeList: {
        type: Array,
        default: []
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
        selectedNodes: [],
      }
    },
    methods: {
      handleNodeClick(data) {
        const {children, fileComAccessoryId, fileImgIndex} = data;
        if (children == null || children.length <= 0) {
          const query = {
            skillResourceId: this.$parent.skillResourceId,
            skillResourceType: this.$parent.skillResourceType,  //1:组合资源，2：电子书
            index: fileImgIndex,
            id: fileComAccessoryId,
          };
          const newPage = this.$router.resolve({path: '/SpeSourceStudy', query: query});
          window.open(newPage.href, '_blank');
        }
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
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/css/spespurce/detailebookcatalogue";
</style>
