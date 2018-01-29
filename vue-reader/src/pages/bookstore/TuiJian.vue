<template>
  <div class="store-wrapper">
    <div class="tuijian-type-item" v-for="item in tuijianTypes" :key="item.name">
      <!-- 本周强推和更多 上面的一条 -->
      <recommend-hd :item="item" />
      <div class="books-wrapper">
        <div v-for="book in item.books" :key="book.id">
          <book-item :book="book"/>
        </div>
      </div>
      <div class="recommend-ft">
        <span>换一换</span>
        <i class="iconfont icon-icon--1"></i>
      </div>
    </div>
  </div>
</template>

<script>
import RecommendHd from "@/components/RecommendHd"
import BookItem from "@/components/BookItem"
import {mapGetters, mapActions} from 'vuex'
export default {
  computed: mapGetters({
    tuijianTypes: 'getBooks'
  }),
  created () {
    this.$store.dispatch('getRecomendBooks')
  },
  // data()  {
    // return {
    //   tuijianTypes: [
    //     {
    //       name: '本周强推',
    //       books: [
    //         {
    //           id: "000001",
    //           title: "元尊",
    //           image: "https://easyreadfs.nosdn.127.net/OzxWHpOo570v4K3YhxC-xA==/8796093023794341611?param=200x0&type=1.jpg",
    //           author: "天蚕土豆",
    //         },{
    //           id: "000002",
    //           title: "美女总裁的贴身保镖",
    //           image: "https://easyreadfs.nosdn.127.net/BmadJuo77KjsCY4dsaSrnQ==/8796093022757381116",
    //           author: "松海听涛",
    //         },{
    //           id: "000003",
    //           title: "夜行者:平妖二十年",
    //           image: "https://easyreadfs.nosdn.127.net/z5V2IxawI2_VQ_JJ3XQuTA==/8796093023793847094",
    //           author: "南无袈裟理科佛",
    //         },{
    //           id: "000004",
    //           title: "元尊",
    //           image: "https://easyreadfs.nosdn.127.net/OzxWHpOo570v4K3YhxC-xA==/8796093023794341611?param=200x0&type=1.jpg",
    //           author: "天蚕土豆",
    //         },{
    //           id: "000005",
    //           title: "美女总裁的贴身保镖",
    //           image: "https://easyreadfs.nosdn.127.net/BmadJuo77KjsCY4dsaSrnQ==/8796093022757381116",
    //           author: "松海听涛",
    //         },{
    //           id: "000006",
    //           title: "夜行者:平妖二十年",
    //           image: "https://easyreadfs.nosdn.127.net/z5V2IxawI2_VQ_JJ3XQuTA==/8796093023793847094",
    //           author: "南无袈裟理科佛",
    //         }
    //       ]
    //     },
    //     {
    //       name: '新书抢鲜',
    //       books: []
    //     },
    //     {
    //       name: '火热连载',
    //       books: []
    //     }
    //   ]
    // }
  // },
  components: {
    RecommendHd,
    BookItem
  }
}
</script>

<style scoped>
.tuijian-type-item {
  margin-bottom:3.26vh;
  border-bottom: 8px solid #f5f5f5;
}
.books-wrapper {
  display: grid; 
  grid-template-columns: repeat(3,1fr);
}
.recommend-ft {
  margin: 0 15px;
  padding: 5px;
  position: relative;
  text-align: center;
}
.recommend-ft:before {
  content: '';
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  height: 1px;
  border-top: 1px solid #888888;
  transform: scaleY(.3);
}
</style>
