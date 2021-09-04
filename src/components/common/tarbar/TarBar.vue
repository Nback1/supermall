<template>
  <div id="tar-bar">
    <slot></slot>
  </div>
</template>

<style>
  #tar-bar{
    display: flex;
    background-color: pink;
    height: 49px;

    box-shadow: 0px -1px 1px rgba(100,100,100,0.15);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
