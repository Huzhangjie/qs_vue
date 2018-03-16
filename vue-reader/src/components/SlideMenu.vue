<template>
  <div class="menu-wrapper">
    <div class="menu-header">
      <img class="avatar" src="http://img4.imgtn.bdimg.com/it/u=509650182,3592322080&fm=27&gp=0.jpg">
      <div class="userInfo">
        <p>Huzj0511</p>
        <p>Lv 9</p>
      </div>
    </div>
    <div class="menu-content">
      <div class="content_part1 part">
        <div class="content_item">余额 充值送红包 充值</div>
        <div class="content_item">红包 9 阅点 兑换</div>
        <div class="content_item">积分商城 39积分 兑换</div>
      </div>
      <div class="content_part2 part">
        <div class="content_item"><i class="iconfont icon-xinxi"></i>我的消息</div>
        <div class="content_item"><i class="iconfont icon-calendar_icon"></i>每日签到</div>
        <div class="content_item"><i class="iconfont icon-wenzhang"></i>订阅</div>
        <div class="content_item"><i class="iconfont icon-printer"></i>阅读圈</div>
      </div>
      <div class="content_part3 part">
        <div class="content_item"><i class="iconfont icon-mian"></i>在线看书免流量</div>
        <div class="content_item"><i class="iconfont icon-cloud"></i>已购和上传</div>
        <div class="content_item"><i class="iconfont icon-calendar_icon"></i>笔记</div>
        <div class="content_item"><i class="iconfont icon-shijian"></i>阅读历史</div>
        <div class="content_item"><i class="iconfont icon-bookmark-add"></i>文章收藏</div>
      </div>
      <div class="content_part4 part">
        <div class="content_item"><i class="iconfont icon-liwu"></i>精彩活动</div>
        <div class="content_item"><i class="iconfont icon-bangzhu"></i>帮助与反馈</div>
      </div>
    </div>
    <div class="menu-footer">
      <div class="footer_item setting"><i class="iconfont icon-yingyongshezhi"></i>设置</div>
      <div class="footer_item night"><i class="iconfont icon-moonyueliang"></i>夜间</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.menu-wrapper {
  height: 100vh;
  width: 100%;
  background-color: #fff;
}
.menu-header {
  height: 15.0134vh;
  box-shadow: -2px 3px 10px #f9f9f9;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.menu-header .avatar {
  height: 50%;
  border-radius: 50%;
  margin: 0 5%;
}
.menu-content {
  height: 77.9088vh;
  overflow: scroll;
}
.menu-content .part {
  position: relative;
}
.menu-content .part:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  border-bottom: 1px solid #f5f5f5;
  transform: scaleY(.5);
  transform-origin: 100% 0;
}
.content_item {
  padding: 20px;
}
.menu-footer {
  background-color: #f5f5f5;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 7.0778vh;
  bottom: 0;
  line-height: 100%;
}
.menu-footer .footer_item {
  flex: 1;
  font-size: 20px;
  text-align: center;
  line-height: 7.0778vh;
}

</style>
