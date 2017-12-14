<template>
  <!--聊天室界面-->
  <div>
    <link rel="stylesheet" href="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css">
    <div class='media well' v-for="item in items">
      <a class='pull-left'>
        <img class='media-object' :src='item.headimg'
             style="width:100px; height:100px; border-radius:50%; overflow:hidden;"/>
      </a>
      <div class='media-body'>
        <h4 class='media-heading'>{{item.nickname+"\t"+item.sendtime}}</h4>
        <p class='media-heading'>{{item.msg}}</p></br>
        <img :src="item.imgurl" style="height: 200px" v-if="item.imgurl!=''"/>
      </div>
    </div>
  </div>
</template>
<script src="http://cdn.static.runoob.com/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script>
  import Gameui from './Gameui'
  import Pascreen from './Pascreenui'
  export default {
    name: 'Chatroom',
    data() {
      return {
        isshowgame:false,
        isshowPascreen:false,
        items: [
          {
            headimg: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=91006869,903430490&fm=27&gp=0.jpg",//头像
            nickname: "昵称-大料",//昵称
            sendtime: "2017.10.22 11:55 26",//发送的时间
            msg: "开干、开干......",//发送的内容
            imgurl: ""//发送的图片
          },
          {
            headimg: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=166816841,1833450565&fm=27&gp=0.jpg",
            nickname: "昵称-峰子",
            sendtime: "2017.10.25 11:51 28",
            msg: "收到、收到......",
            imgurl: "http://pre.ih5.cn/v3/files/2258589/17499/vng1kOEp.jpg"
          },
          {
            headimg: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1787963819,2576318143&fm=27&gp=0.jpg",
            nickname: "昵称-龙美女",
            sendtime: "2017.10.28-11:25 23",
            msg: "真棒......",
            imgurl: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2345971653,3233410575&fm=200&gp=0.jpg"
          },
          {
            headimg: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=91006869,903430490&fm=27&gp=0.jpg",//头像
            nickname: "昵称-大料",//昵称
            sendtime: "2017.10.22 11:55 26",//发送的时间
            msg: "开干、开干......",//发送的内容
            imgurl: ""//发送的图片
          },
          {
            headimg: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=166816841,1833450565&fm=27&gp=0.jpg",
            nickname: "昵称-峰子",
            sendtime: "2017.10.25 11:51 28",
            msg: "收到、收到......",
            imgurl: "http://pre.ih5.cn/v3/files/2258589/17499/vng1kOEp.jpg"
          },
          {
            headimg: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1787963819,2576318143&fm=27&gp=0.jpg",
            nickname: "昵称-龙美女",
            sendtime: "2017.10.28-11:25 23",
            msg: "真棒......",
            imgurl: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2345971653,3233410575&fm=200&gp=0.jpg"
          }
        ]
      }
    },
    watch: {
      // right: {
      //   handler: function () {
      //     right +=100;
      //   },
      //   deep: true
      // }
    }
  }
</script>

<style>
</style>
