<template>
  <div id="class">
    <nav-bar>
      <div slot="left" class="div1">
        <a class="icon">
          <span>bbbbbb</span>
        </a>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"

export default {
  name: "Class",
  components: {
    NavBar
  }
}
</script>

<style scoped>
  .div1 {
    /*position: relative;*/
    height: 44px;
    width: 30px;
  }
  a {
    position: relative;
    display: inline-block;
    background-image: url("../../assets/img/return.svg");
    background-size: 30px 44px;
    background-repeat: no-repeat;
    background-position: top 0px left 10px;
    width: 30px;
    height: 44px;
  }
  span{
    position: absolute;
    clip: rect(1px,1px,1px,1px);
  }
</style>
