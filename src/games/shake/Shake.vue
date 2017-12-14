<template>
    <div id="shake">
        <p>摇一摇游戏</p>
      <div>
        <video loop="" autoplay="" src='http://wemew.oss-cn-qingdao.aliyuncs.com/videos/newds/shakeGame.webm' style="width: 100%; height: 100%;"></video>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'Shake',
        components: {
        }
    }
</script>

<style>
    #shake {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
