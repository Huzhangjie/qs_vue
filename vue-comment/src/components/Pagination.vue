<template>
  <div>
    <el-col :span="24" class="pagination">
      <el-pagination layout="prev, pager, next" :current-page="currentPage" 
        :page-size="pageSize" :total="totalCount" style="float: right"
        @current-change="handleCurrentPage"></el-pagination>
    </el-col>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        pageSize: 3
      }
    },
    methods: {
      handleCurrentPage (val) {
        console.log("val"+val)
        this.$emit('transferPage', val)
      }
    },
    props: ['totalCount', 'currentPage']
  }
</script>
<style>
.toolbar {
  background: #f2f2f2;
  padding: 10px;
  margin: 10px 0px;
}
.el-form-item {
  margin-bottom: 10px;
}

</style>