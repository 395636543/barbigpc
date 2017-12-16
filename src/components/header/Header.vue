<template>
  <div class="headdiv">
    <div>
      <img :src="headimgurl"
           style="border-radius:50%; overflow:hidden;height: 80px;width: 80px; align-content: center;display: -webkit-flex;margin-left: 10px">
    </div>
    <div style="width: 100%">
      <marquee style="margin:0px;margin-right: 0px;width: 100%" id="ptext" hspace="100" direction="left"
               behavior="alternate"
               scrollamount="100" scrolldelay="1000" loop="5" onmouseover="this.stop()"
               onmouseout="this.start();">
        {{placard}}
      </marquee>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    props:['headerdata'],
    data: function () {
      return {
        headimgurl: 'http://static.runoob.com/images/mix/paris.jpg',
        placard: '欢迎来到峰子酒吧'
      }
    },
    mounted() {
      this.$nextTick(function () {
        this.httpData();
      })
    },
    methods: {
      httpData: function () {
        this.headimgurl = this.headerdata.headimgurl
        this.placard = this.headerdata.placard
      }
    }
  }
</script>

<style>
  .headdiv {
    display: -webkit-flex;
    display: flex;
    align-items: center;
    font-size: 28px;
    color: #0bb4a6;
    /*line-height: 80px;*/
  }

</style>
