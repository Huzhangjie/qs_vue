<template>
  <div class="recommend_hd">
    <div class="recommend_type">{{item.name}}</div>
    <div class="recommend_more">更多</div>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style scoped>
.recommend_hd {
  padding: 8px 0;
  display: flex;
  margin: 0 15px;
}
.recommend_type {
  /* 推荐的  本周强推之类的 */
  margin-left: 5px;
  flex :1;
  display: inline;
  text-align: left;
}
.recommend_type:before {
  content: "";
  display: inline-block;
  height: 50%;
  border-left: 3px solid #f99999;
  transform: translateX(-5px)
}
.recommend_more {
  /* 更多 */
  flex: 1;
  text-align: right;
  color: #888888;
  margin: auto;
}
.recommend_more:after {
  /* 更多右侧的箭头 */
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  border-bottom: 2px solid #888888;
  border-right: 2px solid #888888;
  transform: rotate(-45deg);
}
</style>
