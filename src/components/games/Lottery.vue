<template>
  <div id="lottery">
    <p>抽奖游戏</p>
    <div id="container">
      <img src="http://img.wemew.com/wemew/admin/images/onWallBg.jpg" class="onWallBg">
    </div>
    <div id="all" style="zoom: 1.07198;">


      <img class="onWallBg" src="http://img.wemew.com/wemew/admin/images/onWallBg.jpg">


      <div class="all">

        <div class="onWallHead">
          <!--logo-->
          <img src="http://img.wemew.com//wemew/images/bardefatulLogo.png" class="logo">
          <div>夜乐酒吧现场抽奖<a class="voteSelect" onclick="cjSelBox.show()">设置参与资格<i></i></a></div>
        </div>

        <div class="onWallMain">
          <div class="wallLeft">
            <span class="wallCover"></span>
            <div class="leftHead">
              <span class="leftHeadCover"></span>

              <span class="leftHeadText"><img class="leftHeadText_img"
                                              src="http://img.wemew.com/wemew/images/weionwalljiangping.png">微上墙6小时内霸屏用户参与抽奖</span>
            </div>
            <div class="table userTitle">
              <span class="tableSpan" id="userNumber">当前一共&nbsp;0&nbsp;名用户，无法进行抽奖</span>
            </div>
            <div class="allUser">
              <div class="coverDiv">
                <img src="http://img.wemew.com/wemew/admin/images/headCover.png">
              </div>
              <div class="ul" id="theUL"></div>
            </div>
            <div class="tButton">
              <a id="btn" class="animate" onclick="control.run()">开始抽奖(Enter)</a>
              <a id="btn2" class="btnNotUse" onclick="control.stop()">停止(Enter)</a>
            </div>
          </div>

          <div class="wallRight">
            <span class="wallCover"></span>
            <div class="rightHead">
              <span class="rightHeadText">获奖名单</span>
            </div>
            <div class="theListHead">
              <span class="theListHeadCover"></span>
              <div class="t1">序号</div>
              <div class="t2">头像</div>
              <div class="t3">昵称</div>
            </div>
            <div class="theList" id="box">
              <div class="tOne" id="hide">
                <div class="userNumber">0</div>
                <div class="userHead"><img src=""></div>
                <div class="userName"></div>
                <div class="userLine"></div>
              </div>
            </div>
          </div>
          <div style="clear:both"></div>
        </div>

        <div class="foot">
          <div>©wemew 微喵</div>
        </div>

      </div>
      <a class="toBack" href="/weionwallmsg?barid=dfeb2062-fd78-4f1a-a0c6-bc71c648d391">返<br>回<br>上<br>墙<br>1</a>

      <div id="cjSelBox" style="visibility: visible; display: none;">
        <div class="cjSelBox" style="margin-left: -241px; margin-top: -115.5px;">
          <div class="cjSelBox_head">
            <div class="cjSelBox_title">设置抽奖资格</div>
            <span class="cjSelBox_close" title="关闭" onclick="cjSelBox.close()">×</span></div>
          <div class="cjSelBox_main">
            <div class="cjSelBox_row">抽奖资格设置条件：<tt>至少选择一项，可多选</tt><br>
              <div id="cj_type">
                <div class="WM_checkBox WM_all" id="WM0141678086260757621513237941767"><span
                  class="WM_check_span"><a index="0" class="WM_check WM_check_noUse"></a><span
                  class="WM_check_txt">所有上墙消息</span></span><span class="WM_check_span"><a
                  index="1" class="WM_check WM_check_noUse WM_check_use"></a><span
                  class="WM_check_txt">霸屏</span></span><span class="WM_check_span"><a index="2"
                                                                                      class="WM_check WM_check_noUse"></a><span
                  class="WM_check_txt">打赏</span></span></div>
              </div>
              <div id="cj_sel_tj">附加条件：单次霸屏或打赏不低于<input class="valInput" id="cjSelBox_input" value="0"
                                                        maxlength="8" type="text">元
              </div>
            </div>
            <div class="cjSelBox_foot"><a class="WM_button WM_button_n" style="margin-right:5px"
                                          onclick="cjSelBox.close()">取消</a><a class="WM_button WM_button_y">确定</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'lottery',
    components: {},
    data: function () {
      return {}
    },
    mounted() {
      this.$nextTick(function () {
      })
    }
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

  * {
    padding: 0;
    margin: 0;
    list-style: none;
    font-family: '微软雅黑';
    font-size: 13px;
    outline: none;
    border: none;
    color: #5f7288;
  }

  body {
    word-wrap: break-word;
    background: #f4f6f9;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
  }

  html {
    overflow: auto;
    overflow-x: hidden;
    -webkit-text-size-adjust: none;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  b {
    font-size: inherit;
  }

  img {
    border: none;
  }

  .table {
    display: table;
    height: 100%;
  }

  .tableSpan {
    display: table-cell;
    vertical-align: middle;
  }

  .all {
    width: 94%;
    height: 97%;
    position: absolute;
    left: 3%;
    top: 1.5%;
  }

  .allCover {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #000;
    filter: alpha(opacity=30);
    -moz-opacity: 0.3;
    opacity: 0.3;
  }

  .onWallBg {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .onWallHead {
    width: 100%;
    height: 10%;
    position: absolute;
    left: 2%;
    top: 0;
    width: 96%;
  }

  .logo {
    height: 50px;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -25px;
  }

  .onWallHead div {
    text-align: center;
    width: 100%;
    text-shadow: 0 0 5px #000;
    font-size: 36px;
    color: #fff;
    height: 36px;
    line-height: 36px;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -18px;
  }

  .foot {
    position: absolute;
    left: 2%;
    width: 96%;
    bottom: 0;
    height: 5%
  }

  .foot div {
    position: absolute;
    width: 100%;
    height: 18px;
    line-height: 18px;
    font-size: 18px;
    top: 50%;
    margin-top: -8px;
    left: 0;
    color: #fff;
    text-align: center
  }

  .onWallMain {
    position: absolute;
    left: 2%;
    width: 96%;
    top: 11%;
    height: 84%;
  }

  .wallLeft {
    height: 100%;
    width: 55%;
    float: left;
    margin-right: 5%;
    position: relative;
    overflow: hidden;
  }

  .wallCover {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: #000;
    filter: alpha(opacity=80);
    -moz-opacity: 0.8;
    opacity: 0.8;
  }

  .leftHead, .rightHead {
    height: 12%;
    z-index: 1;
    text-align: center;
    width: 100%;
    position: relative
  }

  .leftHead img {
    height: 50px;
    width: 50px;
    position: absolute;
    left: 0px;
    top: 50%;
    margin-top: -25px
  }

  .leftHeadText {
    display: inline-block;
    color: #fff;
    font-size: 22px;
    height: 34px;
    line-height: 34px;
    width: 560px;
    padding-left: 50px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -300px;
    margin-top: -17px;
  }

  .allUser {
    width: 100%;
    height: 53%;
    position: relative;
    z-index: 1
  }

  .leftHeadCover {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: #fff;
    filter: alpha(opacity=10);
    -moz-opacity: 0.1;
    opacity: 0.1;
  }

  .wallRight {
    height: 100%;
    width: 40%;
    float: left;
    position: relative
  }

  .allUser {
    display: table;
  }

  .tButton {
    width: 100%;
    height: 15%;
    text-align: center;
    position: relative;
    z-index: 1
  }

  .tButton a {
    width: 30%;
    height: 40px;
    margin: 30px auto;
    background: #F60;
    line-height: 40px;
    moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    border-radius: 20px;
    color: #fff;
    font-size: 20px;
    display: inline-block;
    margin-right: 20px;
    text-align: center
  }

  .ul {
    width: 100%;
    position: absolute;
    left: 0;
    height: 70%;
    top: 15%;
  }

  .li {
    width: 30%;
    margin: auto;
    display: none
  }

  .li img {
    width: 100%;
    moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    border: 0;
  }

  .li div {
    text-align: center;
    margin-top: 10px;
    color: #fff;
    font-size: 24px;
    line-height: 30px;
    height: 30px;
    overflow: hidden;
    width: 100%;
  }

  .ul .li div {
    visibility: hidden;
  }

  a.btnNotUse {
    background: #999;
    color: #fff
  }

  .coverDiv {
    width: 30%;
    position: absolute;
    left: 35%;
    top: 15%;
    z-index: 10;
  }

  .coverDiv img {
    width: 100%;
    moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    border: 0;
  }

  .coverDiv div {
    text-align: center;
    margin-top: 8px;
    color: #fff;
    font-size: 20px;
    background: #000;
    padding: 5px 0;
    height: 22px;
  }

  .wallRight {
    height: 100%;
    width: 40%;
    float: left;
    position: relative;
    overflow: hidden;
  }

  .rightHeadText {
    display: inline-block;
    color: #fff;
    font-size: 34px;
    position: relative;
    height: 34px;
    line-height: 34px;
    width: 100%;
    text-align: center;
    position: absolute;
    left: 0px;
    top: 50%;
    margin-top: -17px;
  }

  .theList {
    width: 100%;
    height: 75%;
    position: relative;
    z-index: 1;
    overflow: auto;
  }

  .theListHead {
    width: 100%;
    height: 10%;
    position: relative;
    z-index: 1;
  }

  .theListHead div {
    position: absolute;
    height: 30px;
    line-height: 30px;
    top: 50%;
    margin-top: -15px;
    font-size: 24px;
    color: #fff;
    text-align: center
  }

  .theListHeadCover {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: #fff;
    filter: alpha(opacity=10);
    -moz-opacity: 0.1;
    opacity: 0.1;
  }

  .theListHead .t1 {
    width: 25%;
    left: 0;
  }

  .theListHead .t2 {
    width: 30%;
    left: 25%
  }

  .theListHead .t3 {
    width: 45%;
    left: 55%
  }

  .tOne {
    width: 100%;
    height: 71px;
    position: relative;
    z-index: 1;
  }

  .tOne div {
    position: absolute;
    top: 0;
    height: 100%;
    line-height: 70px;
    overflow: hidden;
    font-size: 22px;
    color: #fff;
    text-align: center
  }

  .tOne .userNumber {
    left: 0;
    width: 25%;
  }

  .tOne .userHead {
    left: 25%;
    width: 30%;
  }

  .tOne .userHead img {
    height: 50px;
    width: 50px;
    margin: 10px auto;
    moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
  }

  .tOne .userName {
    left: 55%;
    width: 45%;
  }

  .tOne .userLine {
    height: 1px;
    width: 90%;
    left: 5%;
    top: auto;
    bottom: 0;
    background: #fff;
    filter: alpha(opacity=30);
    -moz-opacity: 0.3;
    opacity: 0.3;
  }

  .tButton a.animate {
    -webkit-animation: btnAnimate 1.5s infinite;
    -moz-animation: btnAnimate 1.5s infinite;
    -o-animation: btnAnimate 1.5s infinite;
  }

  @-webkit-keyframes btnAnimate {
    0% {
      -webkit-transform: scale(1);
    }
    55% {
      -webkit-transform: scale(1.1);
    }
    100% {
      -webkit-transform: scale(1);
    }
  }

  @-moz-keyframes btnAnimate {
    0% {
      -moz-transform: scale(1);
    }
    55% {
      -moz-transform: scale(1.1);
    }
    100% {
      -moz-transform: scale(1);
    }
  }

  @-o-keyframes btnAnimate {
    0% {
      -o-transform: scale(1);
    }
    55% {
      -o-transform: scale(1.1);
    }
    100% {
      -o-transform: scale(1);
    }
  }

  .userTitle {
    height: 15%;
    width: 100%;
    position: relative;
    text-align: center
  }

  #userNumber {
    color: #fff;
    font-size: 24px;
  }

  #hide {
    visibility: hidden
  }

  .toBack {
    position: absolute;
    bottom: 6.35%;
    right: 0;
    background: #F60;
    padding: 15px 10px;
    color: #fff;
    font-size: 16px;
    -moz-border-radius: 3px 0px 0px 3px;
    -webkit-border-radius: 3px 0px 0px 3px;
    border-radius: 3px 0px 0px 3px;
    z-index: 99;
    text-align: center
  }

  .element {
    width: 120px;
    height: 120px;
    box-shadow: 0px 0px 12px #fff;
    /*border: 1px solid rgba(127,255,255,0.25);*/
    text-align: center;
    cursor: default;
  }

  .element:hover {
    box-shadow: 0px 0px 12px rgba(0, 255, 255, 0.75);
    border: 1px solid rgba(127, 255, 255, 0.75);
  }

  .element img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  #container {
    background: rgba(0, 0, 0, 1);
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  #container.hide {
    visibility: hidden
  }

  .onWallBg.hide {
    visibility: hidden
  }

  #all {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1
  }

  .cBg {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .voteSelect {
    height: 34px;
    line-height: 34px;
    text-align: center;
    color: #fff;
    font-size: 22px;
    border: solid 1px #fff;
    opacity: 0.7;
    border-radius: 2px;
    padding: 0 20px 0 10px;
    display: inline-block;
    position: relative;
    font-weight: normal;
    top: -4px;
    margin-right: 25px;
    margin-left: 20px;
  }

  .voteSelect i {
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 8px solid #fff;
    position: absolute;
    right: 7px;
    top: 14px
  }

  /*新的*/
  #cjSelBox {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    visibility: hidden;
  }

  .cjSelBox {
    border-radius: 2px;
    width: 480px;
    max-width: 1200px;
    position: absolute;
    background: #fff;
    border: solid 1px #bbbbbb;
    box-shadow: 0px 0px 10px #bbbbbb;
    z-index: 999;
    left: 50%;
    top: 50%;
  }

  .cjSelBox .cjSelBox_head {
    width: 100%;
    height: 40px;
    line-height: 40px;
    position: relative;
    text-indent: 0px;
    color: #a79d96;
    border-bottom: solid 1px #eee;
    padding-left: 10px;
    box-sizing: border-box;
  }

  .cjSelBox .cjSelBox_title {
    height: 40px;
    line-height: 42px;
    color: #333;
    display: inline-block;
    font-size: 15px;
    letter-spacing: 1px
  }

  .cjSelBox_close {
    position: absolute;
    right: 10px;
    top: 8px;
    display: block;
    height: 25px;
    cursor: pointer;
    width: 35px;
    text-indent: 0;
    text-align: center;
    font-size: 26px;
    line-height: 20px;
    color: #444;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  }

  .cjSelBox_main {
    padding: 5px 20px 15px 20px;
    font-size: 12px;
    position: relative;
    color: #444;
  }

  .cjSelBox_row {
    font-size: 14px;
    padding: 20px 0 20px 10px;
    letter-spacing: 1px;
    position: relative;
    color: #333;
    border-bottom: solid 1px #eee;
    line-height: 24px;
  }

  .cjSelBox_row i {
    color: #ff4b69;
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -12px
  }

  .cjSelBox_btn {
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -12px;
    padding: 2px 10px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    user-select: none;
    line-height: 22px;
    color: #fff;
    background: #1ab700;
  }

  .cjSelBox_sel {
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -12px;
    padding: 2px 5px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    font-size: 12px;
    font-weight: bold;
    cursor: default;
    text-align: center;
    user-select: none;
    line-height: 22px;
    color: #ff4b69;
  }

  .cjSelBox_row input {
    width: 80px;
    height: 20px;
    border: none;
    border-bottom: solid 1px #ddd;
    text-align: center;
    font-size: 14px;
    color: #333;
  }

  .cjSelBox_row input:focus {
    border-bottom: solid 1px #333;
  }

  .cjSelBox_row .valInput {
    width: 80px;
    height: 20px;
    border: none;
    border-bottom: solid 1px #ddd;
    text-align: center;
    font-size: 14px;
    color: #333;
  }

  .dsInput {
    position: relative;
    top: 2px;
    margin-right: 4px;
  }

  .cjSelBox_foot {
    margin: 20px 0 0 0;
    text-align: center
  }
</style>
