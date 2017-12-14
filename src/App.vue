<template>
  <div id="app">
    <link rel="stylesheet" href="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css">

    <div id="headdiv" class="headdiv">
      <div style="width: 100px">
        <img :src="imgurl"
             style="border-radius:50%; overflow:hidden;height: 80px;width: 80px; align-content: center;display: -webkit-flex;margin-left: 10px">
      </div>
      <div style="width: 100%">
        <marquee style="margin-left: 0px;margin-right: 0px;width: 135%" id="ptext" hspace="100" direction="left"
                 behavior="alternate"
                 scrollamount="100" scrolldelay="1000" loop="5" onmouseover="this.stop()"
                 onmouseout="this.start();">
          {{placard}}
        </marquee>
      </div>
    </div>
    <div id="main" class="main">
      <div id="left" class="left">
        <hr size=1 style="COLOR:#ff9999;border-style:double;width:100%">
        <div v-for="(item, index) in items">
          <div
            style="background-color: #FFFFFF;padding-left: 10px;display: flex;display: -webkit-flex;">
            <div>
              <img :src='item.headimg'
                   style="width:100px; height:100px; border-radius:50%; overflow:hidden;"/>
            </div>
            <div>
              <div style="display: flex;display: -webkit-flex;justify-content: flex-start;height: 30px">
                <h4>&nbsp;&nbsp;&nbsp;{{item.nickname}}</h4>
                <h6>&nbsp;&nbsp;&nbsp;{{item.sendtime}}</h6>
              </div>
              <p>&nbsp;&nbsp;&nbsp;{{item.msg}}</p>
              &nbsp;&nbsp;&nbsp;<img :src="item.imgurl" style="height: 200px" v-if="item.imgurl!=''"/>
            </div>
          </div>
          <hr size=1 style="COLOR:#ff9999;border-style:double;width:100%">
        </div>
      </div>
      <div id="right" class="right">
        <div>
          <img style="height: 300px" :src="imgwall"/>
        </div>
        <div>
          <img style="height: 250px;" :src="qrcode"/>
        </div>
        <div class="row clearfix">
          <div class="col-md-12 column">
            <button type="button" class="btn btn-lg btn-info" style="width: 200px;margin-top:15px">设置
            </button>
          </div>
        </div>
        <div class="row clearfix">
          <div class="col-md-12 column">
            <button type="button" class="btn btn-lg btn-info" style="width: 200px;margin-top:15px" @click="showGameui">
              游戏
            </button>
          </div>
        </div>
        <div class="row clearfix">
          <div class="col-md-12 column">
            <button type="button" class="btn btn-lg btn-info" style="width: 200px;margin-top:15px"
                    @click="showPascreen">霸屏测试
            </button>
          </div>
        </div>
      </div>
    </div>
    <Gameui v-if="isshowgame" style="position: absolute;right: 300px;top: 80%;"></Gameui>
    <Pascreenui v-if="isshowPascreen"
                style="position: absolute;top: 0px;width: 100%;height: 100%;background-color: #1ab700"
                @hidPascreen="showPascreen"></Pascreenui>
    <Shake v-if="ishowShake"></Shake>
  </div>
</template>
<script src="http://cdn.static.runoob.com/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="http://cdnjsnet.b0.upaiyun.com/vue-resource/0.1.9/vue-resource.min.js"></script>
<script>
  import Gameui from './components/Gameui'//需要引用Gameui才可以使用
  import Pascreenui from './components/Pascreenui'
  import Shake from './games/shake/Shake.vue'

  export default {
    name: 'App',
    data: function () {
      return {
        isshowgame: false,
        isshowPascreen: false,
        ishowShake:false,
        placard: '',
        imgurl: '',
        qrcode: '',
        imgwall: '',
        items: [],
      }
    },
    beforeCreate:function(){
      console.log("组件实例化之前")
    },
    created:function(){
      console.log("组件实例化了")
    },
    beforeMount:function(){
      console.log("组件写入dom结构之前")
    },
    // mounted:function(){},//组件写入dom结构了
    beforeUpdate:function(){
      // console.log("组件更新前")
      // this.createDom();
    },
    updated:function(){},//组件更新比如修改了文案
    beforeDestroy:function(){},//组件销毁之前
    destroyed:function(){},//组件已经销毁
    mounted() {
      this.httpData();
      console.log("页面加载完成")
      this.$nextTick(function () {
        // 获取窗口高度
        var winHeight = 800;
        if (window.innerHeight) {
          winHeight = window.innerHeight
        } else if ((document.body) && (document.body.clientHeight)) {
          winHeight = document.body.clientHeight
        }
        winHeight = winHeight - document.getElementById("headdiv").clientHeight
        document.getElementById('main').style.height = winHeight + 'px'
        document.getElementById('left').style.height = winHeight + 'px'
        document.getElementById('right').style.height = winHeight + 'px'
        setInterval(this.createDom, 2000)
        this.setscroll()
      })
    },
    methods: {
      httpData: function () {
        var configdata;
        this.$http.get('http://localhost:8080/config/data.json').then(function (res) {
          //请求成功函数
          configdata = JSON.parse(res['bodyText'])
          console.log(JSON.parse(res['bodyText']))
          this.placard = configdata.placard
          this.imgurl = configdata.imgurl
          this.qrcode = configdata.qrcode
          this.imgwall = configdata.imgwall
          this.items = configdata.items
          // console.log("----------->>>"+configdata.items[0].headimg);
        }, function () {
          //请求失败函数
        })
      },
      createDom: function () {
        this.items.splice(0, 1)
        this.items.push({
          headimg: 'http://i3.letvimg.com/lc06_lecloud/201608/14/17/35/banner.jpg',//头像
          nickname: '昵称-大料',//昵称
          sendtime: '2017.10.22 11:55 26',//发送的时间
          msg: '开干、开干......',//发送的内容
          imgurl: ""//发送的图片
        })
        this.items.push({
          headimg: 'http://i3.letvimg.com/lc06_isvrs/201712/06/09/39/f838d185-5b5f-4467-882e-e0e1013df45a/thumb/2_180_101.jpg',
          nickname: '峰子' + Math.random(),
          sendtime: '2017.10.28-11:25 23',
          msg: '真棒......',
          imgurl: 'http://pre.ih5.cn/v3/files/2258589/17499/vng1kOEp.jpg'
        })
        this.setscroll()
      },
      setscroll: function () {
        var div = document.getElementById('left')
        div.scrollTop = div.scrollHeight
      },
      showPascreen: function () {
        //
        this.isshowPascreen = !this.isshowPascreen
        this.isshowgame = false
      },
      showGameui: function () {
        this.isshowgame = !this.isshowgame
        this.isshowPascreen = false
      }
    },
    watch: {
      // chatroom_height: function () {
      // }
    },
    components: {
      Gameui,
      Pascreenui,
      Shake
    }
  }
</script>

<style>
  #ptext {
    font-size: 28px;
    color: #0bb4a6;
  }

  .headdiv {
    background-color: #0f0f0f;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    height: 10%;
  }

  .main {
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    overflow: auto;
    overflow-x: hidden;
    /*height: 800px;*/
  }

  .left {
    width: 70%;
    /*height: 800px;*/
    overflow: hidden;
    overflow-x: hidden;
  }

  .right {
    background-color: #000000;
    width: 30%;
    text-align: center;
    position: fixed;
    right: 0px;
    /*height: 800px;*/
  }

</style>
