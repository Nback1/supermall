<template>
  <div id="main-tar-bar">
  <tar-bar>
    <tar-bar-item v-for="(item, index) in text" :key="item" :path="path[index]">
      <img slot="item-icon" :src="img[index]" alt="图片">
      <div slot="item-text">{{item}}</div>
    </tar-bar-item>
  </tar-bar>
  </div>
</template>

<script>
import TarBar from '../common/tarbar/TarBar'
import TarBarItem from '../common/tarbar/TarBarItem'

export default{
    name:'MainTarBar',
    data() {
      return {
        text: ['首页','分类','购物车','我的'],//需要修改
        img:[require('assets/img/home.svg'),require('assets/img/classify.svg'),
          require('assets/img/cart.svg'),require('assets/img/mine.svg')],//使用require解决动态绑定图片地址
        path:['/home','/class','/cart','/my']
      }
    },
    components: {
      TarBar,
      TarBarItem
    }
  }
</script>

<style>
  img {
    opacity: 1;
  }
</style>
