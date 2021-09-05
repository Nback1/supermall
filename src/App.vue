<template>
  <div id="app">
    <router-view/>
    <main-tar-bar/>
  </div>
</template>

<script>
import MainTarBar from 'components/content/MainTarBar'

export default {
  name: 'App',
  components: {
    MainTarBar
  }
}
</script>

<style>

@import "assets/css/base.css";

.tar-bar-item img {
  width: 30px;
  height: 30px;
  vertical-align: middle;
}

</style>
