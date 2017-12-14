<template>
  <div id="lottery">
    <p>抽奖游戏</p>
    <div id="container" >
      <img src="http://img.wemew.com/wemew/admin/images/onWallBg.jpg" class="onWallBg">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'lottery',
    components: {}
  }
</script>

<style>
  #lottery {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .onWallBg {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
</style>
