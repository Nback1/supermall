<template>
  <div id="home">
    <nav-bar>
      <div slot="center">首页</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name:"Home",
  components: {
    NavBar
  }
}
</script>
