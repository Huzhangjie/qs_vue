<template>
  <div class="comment">
    <comment-form @addComment="addComment"></comment-form>
    <comment-list :List="List"></comment-list>
    <pagination @transferPage="getPage" :totalCount="totalCount" :currentPage="currentPage"></pagination>
  </div>
</template>
<script>
  import CommentForm from "./CommentForm"
  import Pagination from "./Pagination"
  import CommentList from './CommentList'
  export default {
    data() {
      return {
        totalCount: 0,
        currentPage: 1,
        pageSize: 3,
        totalData: [],
        List: []
      }
    },
    components: {
      CommentForm,
      CommentList,
      Pagination
    },
    methods: {
      addComment (msg) {
        this.totalData.push({text: msg})
        this.totalCount = this.totalData.length
        // 数据驱动界面 数据单向绑定 v-bind:(数据)="" data->template
        // 双向数据绑定 input -> data  data<=>template 性能差些
        if(this.totalCount <= this.pageSize) {
          this.List = this.totalData
        } else {
          this.List = this.totalData.slice(this.totalCount - this.pageSize)
        }
        this.currentPage = 1
        this.List.reverse()
      },
      getPage (curr, size) {
        console.log(curr+ ' and '+ size)
        this.currentPage = curr
        if(this.totalCount <= this.pageSize) {
          this.List = this.totalData;
        } else {
          let pages = Math.ceil(this.totalCount / this.pageSize)
          let res = this.totalCount % this.pageSize
          let start = this.totalCount - this.currentPage * this.pageSize
          if (start < 0) start = 0
          this.List = this.totalData.slice(start, start + this.pageSize)
        }
        this.List.reverse()
      }
    }
  }
</script>
<style></style>