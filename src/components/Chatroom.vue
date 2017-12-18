<template>
  <div id="chatroom">
    <div id="main" class="main">
      <div id="left" class="left">
        <!-- <hr size=1 style="COLOR:#ff9999;border-style:double;width:100%"> -->
        <div v-for="(item, index) in items">

          <div
            style="background-color: rgba(0,0,0,.3);padding: 20px;display: flex;display: -webkit-flex;margin-bottom:10px">
            <div>
              <img :src='item.headimg'
                   style="width:100px; height:100px; border-radius:50%; overflow:hidden;border:2px solid #4a78ff"/>
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
          <!-- <hr size=1 style="COLOR:#ff9999;border-style:double;width:100%"> -->

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    props:['chatdata'],
    data: () => {
      return {
        setIntervalID:0,
        items: []
      }
    },
    mounted() {
      this.httpData();
      this.$nextTick(function () {
        // 获取窗口高度
        var winHeight = 800;
        if (window.innerHeight) {
          winHeight = window.innerHeight
        } else if ((document.body) && (document.body.clientHeight)) {
          winHeight = document.body.clientHeight
        }
        winHeight = winHeight - 100
        document.getElementById('main').style.height = winHeight + 'px'
        this.setIntervalID = setInterval(this.createDom, 2000)
        this.setscroll()
      })
    },
    methods: {
      httpData: function () {
        this.items = this.chatdata.items
      },
      createDom: function () {
        if(this.items==null) return
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
        try{
          var div = document.getElementById('left')
          div.scrollTop = div.scrollHeight
        }catch(err){
          console.log(err);
        }
      },
      clearIntervalID:function (val) {
        if(val==true){
          //  关闭心跳
          clearInterval(this.setIntervalID);
        }else{
          clearInterval(this.setIntervalID);
          this.setIntervalID = setInterval(this.createDom, 2000)
        }
      }
    }
  }
</script>

<style>
  #chatroom {
    margin-top: 0px;
    margin-bottom: 0px;
    float: left;
    width: 70%;
  }
  .main {
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
        flex-direction: row;
    overflow: auto;
    overflow-x: hidden;
    padding-left: 40px;
    /*height: 800px;*/
  }
  #chatroom h4{
    font-size: 24px;
    color: #fff;
  }
  #chatroom h6{
    font-size: 24px;
    color: #fff;
    opacity: .5;
  }
  #chatroom p{
    margin-top: 15px;
    font-size:1.4rem; 
    color:#8bd7ff; 
    line-height:125%; 
    font-weight:bold; 
    letter-spacing:2px;
  }

  .left {
    width: 100%;
    /*height: 800px;*/
    overflow: hidden;
    overflow-x: hidden;
  }
</style>
