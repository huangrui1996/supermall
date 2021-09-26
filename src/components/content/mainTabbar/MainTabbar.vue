<template
  ><tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="@/assets/img/tabbar/首页.png" />
      <img slot="item-icon-active" src="@/assets/img/tabbar/首页-fill.png" />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category"
      ><img slot="item-icon" src="@/assets/img/tabbar/店铺.png" />
      <img slot="item-icon-active" src="@/assets/img/tabbar/店铺-fill.png" />
      <div slot="item-text">店铺</div>
    </tab-bar-item>
    <tab-bar-item path="/cart"
      ><img slot="item-icon" src="@/assets/img/tabbar/购物车.png" />
      <img slot="item-icon-active" src="@/assets/img/tabbar/购物车-fill.png" />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile"
      ><img slot="item-icon" src="@/assets/img/tabbar/我的.png" />
      <img slot="item-icon-active" src="@/assets/img/tabbar/我的-fill.png" />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar.vue'
import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'
export default {
  name: 'MainTabbar',
  components: {
    TabBar,
    TabBarItem,
  },
}
</script>

<style></style>
