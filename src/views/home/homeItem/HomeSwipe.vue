<template>
  <van-swipe class="my-swipe" :autoplay="3000">
    <van-swipe-item v-for="(item, i) in banners" :key="'banner' + i">
      <a :href="item.link"><img class="swipeImgSize" :src="item.image"/></a>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: 'HomeSwipe',
  props: {
    banners: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style></style>
