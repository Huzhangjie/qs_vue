<template>
  <div class="book-item">
    <img class="book-item_cover" :src="book.image" mode="aspectFit">
    <div class="book-item_title">{{book.title}}</div>
    <div class="book-item_author">{{book.author}}</div>
  </div>
</template>

<script>
export default {
  props: ['book']
}
</script>

<style scoped>
.book-item {
  overflow: hidden;
  margin: 0 3.3333vw;
  margin-bottom: 3vh;
}
.book-item_cover {
  width: 26.6385vw;
}
.book-item_title {
  width: 26.6385vw;
  color: black;
}
.book-item_author {
  color: #888888;
  font-size: 12px;
}
</style>
