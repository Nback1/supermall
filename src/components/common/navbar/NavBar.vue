<template>
  <div class="nav-bar">
    <div class="left"><slot name="left">left</slot></div>
    <div class="center"><slot name="center">center</slot></div>
    <div class="right"><slot name="right">right</slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style>
  .nav-bar {
    display: flex;
    line-height: 44px;
    background-color: pink;
    text-align: center;
  }
  .left , .right {
    width: 60px;
  }

  .center {
    flex: 1;
  }

</style>
