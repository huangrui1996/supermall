<template>
  <div id="home">
    <van-nav-bar class="home-nav" title="主页">
      <!-- <van-icon name="search" slot="right" /> -->
    </van-nav-bar>

    <home-swipe :banners="banners" />
  </div>
</template>

<script>
//import NavBar from '@/components/common/navbar/NavBar'
import NavBar from '../../components/common/navbar/NavBar.vue'
import HomeSwipe from './homeItem/HomeSwipe.vue'

import { getHomeMultidata } from '../../network/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwipe,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    }
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  },
}
</script>

<style>
.home-nav {
  color: #fff;
  background-color: white;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.swipeImgSize {
  background-size: contain;

  width: 100%;

  height: auto;
}
</style>
