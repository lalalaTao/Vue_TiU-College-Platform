<template>
  <el-dialog
    style="font-size: 0.146rem"
    :title="title"
    :visible.sync="dialogVisible"
    width="8.598rem"
    :destroy-on-close="true"
    :before-close="handleClose"
  >
    <div style="width: 37.5px;
      height: 3px;
      margin-left: 0;
      background: #00bda5;
      margin-top: -0.22rem;
      border-radius: 1.5px;">
    </div>
    <el-table
      :cell-style="cellStyle"
      :data="gridData">
      <el-table-column property="date" label="课程名称"></el-table-column>
      <el-table-column property="name" label="专业" width="200"></el-table-column>
      <el-table-column property="address" label="操作"  width="150"></el-table-column>
    </el-table>
  </el-dialog>
</template>

<script>
export default {
name: 'DetailTable',
props: {
  title: {
    type: String,
    default: "资源详情"
  },
  dialogVisible: {
    type: Boolean,
    default: false,
  }
},
  components: {
  },
  data () {
    return {
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '去学习'
      }],
    }
  },
  computed: {

  },
  watch: {
  },
  mounted() {
  },
  methods: {
    handleClose(){
      this.$confirm('确认关闭？')
        .then(_ => {
          this.dialogVisible = false
        })
        .catch(_ => {});
    },
    cellStyle({ row, column, rowIndex, columnIndex }) {
      if(column.label == '操作'){
        debugger
        return 'color:#42C7B3';
      }else{
        return '';
      }

    },
  },

}
</script>

<style scoped>
@import "../../assets/css/common/Detail.css";

.el-dialog__wrapper /deep/ .el-dialog__body{
  padding: 0.22rem 20px 0.402rem;
}

.el-dialog__wrapper /deep/ .el-dialog__header{
  padding: 20px 20px 10px;
}

.el-table /deep/ th{
  background-color: #F3FAF9;
  text-align: center;
}
.el-table /deep/ .cell{
  text-align: center;
}

.el-table{
  margin-top: 0.22rem;
  margin-bottom: 0.402rem;
}

/*.el-table__row /deep/ td:nth-child(2) {*/
/*  color: red;*/
/*}*/
.ccc{
  color: red;
}
</style>
