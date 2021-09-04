<template>
  <div class="tar-bar-item" @click="click1">
      <slot name="item-icon"></slot>
      <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name: 'TarBarItem',
  props: {
    path: String
  },
  methods: {
    click1() {
      this.$router.replace(this.path)
    }
  },
  data() {
    return {

    }
  },
  computed: {

  }


}
</script>

<style>

.tar-bar-item {
  flex: 1;
  text-align: center;
  font-size: 10px;
}


</style>
