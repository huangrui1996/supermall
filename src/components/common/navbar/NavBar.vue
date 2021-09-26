<template>
  <div class="nav-bar">
    <div class="nav-left"><slot name="nav-left"></slot></div>
    <div class="nav-center"><slot name="nav-center"></slot></div>
    <div class="nav-right"><slot name="nav-right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.1);
  text-align: center;
}

.nav-left,
.nav-right {
  width: 50px;
}

.nav-center {
  flex: 1;
}
</style>
