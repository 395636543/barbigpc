<template>
  <div id="rightui">
    <div id="right" class="right">
      <div>
        <img style="height: 300px" :src="imgwall"/>
      </div>
      <div id="qrcode-wrap" style="left:30%;top:30%">
        <img style="height: 250px;" :src="qrcode"/>
      </div>
      <div class="row clearfix">
        <div class="col-md-12 column">
          <button type="button" class="btn btn-lg btn-info" style="width: 200px;margin-top:50px">设置
          </button>
        </div>
      </div>
      <div class="row clearfix">
        <!--<div class="col-md-12 column">-->
          <!--<router-link :to="gameui_route">-->
          <!--<button type="button" class="btn btn-lg btn-info" style="width: 200px;margin-top:15px"-->
                  <!--@click="showGameui">-->
            <!--游戏-->
          <!--</button>-->
          <!--</router-link>-->
        <!--</div>-->
      </div>
      <div class="row clearfix">
        <div class="col-md-12 column">
          <button type="button" class="btn btn-lg btn-info" style="width: 200px;margin-top:15px"
                  @click="showPascreen">霸屏测试
          </button>
        </div>
      </div>
    </div>
    <!--<router-view :class="{show:isrouter}" @closeAllui="closeAllui"></router-view>-->
  </div>

</template>

<script>
  import {Routeurls} from '@/api/Configrouter'
    export default {
      name: "",
      props:['walldata'],
      data:()=>{
        return{
          qrcode: '',
          imgwall: '',
          isrouter:false,
          gameui_route:Routeurls.gameui_route
        }
      },
      mounted() {
        this.$nextTick(function () {
          this.httpData();
          // 获取窗口高度
          var winHeight = 800;
          if (window.innerHeight) {
            winHeight = window.innerHeight
          } else if ((document.body) && (document.body.clientHeight)) {
            winHeight = document.body.clientHeight
          }
          winHeight = winHeight - 100
          document.getElementById('rightui').style.height = winHeight + 'px'
        })
      },
      methods: {
        httpData: function () {
          this.qrcode = this.walldata.qrcode
          this.imgwall = this.walldata.imgwall
        },
        showGameui:function(){
          // this.$emit("showGameui")
          this.isrouter = !this.isrouter;
        },
        showPascreen:function(){
          this.$emit("showPascreen")
        },
        closeAllui:function(gameid){
          //当前正在游戏中，需要关闭其他UI
          console.log("-------------gameid:"+gameid)
          this.$emit("closeAllui",gameid)
        }
      }
    }
</script>

<style>
  #rightui{
    float: right;
    width: 30%;
  }
  .right {
    background-color: #000000;
    width: 30%;
    text-align: center;
    position: fixed;
    right: 0px;
    height: 100%;
    /*z-index: 1;*/
  }
  #qrcode-wrap{
    position: fixed;
    padding: 10px;
    background-color: #5bc0de;
    cursor: move;
    z-index: 1;
  }
</style>
