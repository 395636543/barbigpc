<template>
    <div id="shake">
        <!--入口-->
        <div id="_container">
            <!-- 头部logo -->
            <div class="shakeTop">
                <div class="horseTopBar">
                    <span class="horseTop_leftBox"><i class="horseTop_left"></i></span>
                    <span class="horseTop_rightBox"><i class="horseTop_right"></i></span>
                    <div class="topStep1">
                        <tt>{{barname}}</tt>
                    </div>
                </div>
            </div>
            <div id="page1" class="page page1" style="display: block;" :style="classGameStart">
                <div class="pageAllBox">
                    <div class="shakeLeft">
                        <img class="shakeMain" src="http://img.wemew.com/wemew/admin/images/shakeMain.png" alt="">
                        <div class="joinNumber">当前参与人数
                            <span>
                                <a class="animateNum" id="joinNumber">{{count}}</a>
                            <a class="animateNum" id="joinNumber2">{{count}}</a>
                        </span>人
                        </div>
                    </div>
                    <div class="shakeCode">
                        <a class="joinBtn" id="start" @click="startgame">点击开始 <span class="gameEnter">Enter</span></a>
                    </div>
                </div>
            </div>
            <div id="page2" class="page page2">
                    <div class="countDown scaleImages cy_animateNum" style="display:block">
                       <span class="cy_num">30</span>
                    </div>
                    <div class="gameBox">
                        <div class="oneBox">
                            <!--
                        <div class="oneUser">
                            <div class="userMove animate">
                                <img src="http://img.wemew.com/wemew/admin/images/head4.jpg" alt="">
                                <span>我是名字</span>
                            </div>
                        </div>
                        <div class="oneColumn">
                            <div class="columnBox">
                                <div class="columnMove">
                                    <img src="http://img.wemew.com/wemew/admin/images/ranking1.gif" alt="">
                                </div>
                            </div>
                            <div class="columnBottom"></div>
                        </div>
                        -->
                        </div>
                    </div>
                </div>
                <div id="page3" class="page page3">
                        <div class="winnerBox">
                            <div class="winnerPos">
                                <img class="winnerStar winnerBG" src="http://img.wemew.com/wemew/admin/images/shake_star.png" alt="">
                                <img class="winnerEnd winnerBG" src="http://img.wemew.com/wemew/admin/images/shake_end_bg.png" alt="">
                                <div class="winnerThree"><div class="winner winnerOne"><img src="http://wemew.oss-cn-qingdao.aliyuncs.com/2017-12-09-22/151282988605653855.jpg" alt=""><span>樱小丸</span><span>冠军</span></div></div>
                                <div class="winnerList"></div>
                            </div>
                        </div>
                        <a class="newGame" id="newGame" onclick="step.step3()">再玩一次&nbsp;<span class="gameEnter">Enter</span></a>
                    </div>
            <div class="videoSwitch" :class="classSwitchObject" title="开启背景乐" @click="closemusic"></div>
        </div>
        <div class="wemewFullVideo">
            <video :muted="ismuted" id="wemewFullVideoInner" style="width: 100%;height: 100%" loop="" autoplay=""
                   :src="videourl"></video>
        </div>
        <div class="WM_QR" id="1513236286810" :style="classGameStart">
            <div class="WM_QR_mini" style="display: none;" title="点击放大"><span></span></div>
            <div class="_WM_QR"><a class="WM_QR_hide" title="隐藏"><span></span></a>
                <div class="WM_QR_main" title="按住左键可拖动，滚轮可以放大缩小">
                    <div class="WM_QR_box" style="width:280px;height:280px"><img
                            src="http://img.wemew.com/wemew/imgFile/2017-11-21-21/1511272324025-1.jpg" width="100%">
                    </div>
                    <div class="WM_QR_foot" style="font-size: 18px;">扫描二维码参赛</div>
                </div>
            </div>
        </div>
        <!--点击开始后控制游戏UI，在Shakecomponent。vue里面写游戏逻辑-->
        <Shakecomponent></Shakecomponent>
    </div>
</template>
<script>
    import Shakecomponent from '@/games/shake/Shakecomponent'
    export default {
        name: 'Shake',
        data: function () {
            return {
                ismuted: false,
                barname: '',
                count: 0,
                videourl: '',
                classSwitchObject: {
                    videoOff: false,
                    videoOn: true,
                },
                classGameStart: {
                    display: 'inline'
                }
            }
        },
        mounted() {
            this.httpData();
            this.$nextTick(function () {

            })
        },
        methods: {
            closemusic: function () {
                this.ismuted = !this.ismuted
                this.classSwitchObject.videoOff = !this.classSwitchObject.videoOff
                this.classSwitchObject.videoOn = !this.classSwitchObject.videoOn
            },
            httpData: function () {
                var configdata;
                this.$http.get('http://localhost:8080/config/shakedata.json').then(function (res) {
                    //请求成功函数
                    configdata = JSON.parse(res['bodyText'])
                    console.log(JSON.parse(res['bodyText']))
                    this.barname = configdata.barname
                    this.count = configdata.count
                    this.videourl = configdata.videourl
                }, function () {
                    //请求失败函数
                })
            },
            startgame: function () {
                if (this.count > 0) {
                    this.classGameStart.display = 'none';
                    console.log("关闭")
                } else {
                    alert("当前人数少于1人，再等等")
                }
            }
        },
        components: {
            Shakecomponent
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
        /*line-height: 0;*/
    }

    * {
        margin: 0;
        padding: 0;
        font-family: 'Microsoft YaHei';
    }

    body, html {
        word-wrap: break-word;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        overflow: hidden;
        background: #999;
    }

    a {
        text-decoration: none;
    }

    .table {
        display: table;
    }

    .tableSpan {
        display: table-cell;
        vertical-align: middle
    }

    #box {
        width: 1366px;
        height: 768px;
        border: 1px solid #f00;
        margin: 0 auto;
        position: relative;
        background: #fff;
    }

    .shakeTop {
        width: 100%;
        position: absolute;
        z-index: 12;
        text-align: center;
        top: 0;
        transform: translate3d(0, 0, 0);
        transition: all 0.4s;
    }

    .horseTopBar {
        display: inline-block;
        height: 90px;
        position: relative;
    }

    .horseTop_leftBox {
        position: absolute;
        left: -10px;
        top: 0;
        overflow: hidden;
    }

    .horseTop_left {
        background: url(http://img.wemew.com/wemew/admin/images/left.png) center center/100% 100%;
        width: 10px;
        height: 90px;
        display: inline-block;
    }

    .horseTop_rightBox {
        position: absolute;
        right: -42px;
        top: 0;
        overflow: hidden;
    }

    .horseTop_right {
        background: url(http://img.wemew.com/wemew/admin/images/right.png) center center/100% 100%;
        width: 42px;
        height: 90px;
        display: inline-block;
    }

    .horseTopBar div {
        display: inline-block;
        background: url(http://img.wemew.com/wemew/admin/images/center.png);
        background-size: auto 90px;
        min-width: 260px;
        height: 90px;
        position: relative;
        z-index: 2;
        padding: 0 10px;
    }

    .topStep1 tt {
        line-height: 85px;
        font-size: 30px;
        color: #fff;
    }

    .page {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 12;
        display: none;
    }

    /* page1 */
    .pageAllBox {
        width: 90%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }

    @media screen and (min-width: 1710px) {
        .pageAllBox {
            width: 80%;
        }
    }

    @media screen and (min-width: 1300px) and (max-width: 1700px) {
        .pageAllBox {
            width: 75%;
        }
    }

    .shakeLeft {
        position: absolute;
        left: -90px;
        top: 50%;
        transform: translateY(-50%);
    }

    .shakeMain {
        width: 700px;
        height: 300px;
        margin-left: -20px;
    }

    .shakeCode {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
    }

    .joinBox {
        background: #fff;
    }

    .codeImage {
        width: 300px;
        height: auto;
    }

    .joinNumber {
        font-size: 50px;
        font-weight: bold;
        color: #fff;
        transform: rotate(-10deg) skew(-10deg);
        -webkit-transform: rotate(-10deg) skew(-10deg);
        margin-top: -75px;
        margin-left: 75px;
    }

    .joinNumber {
        font-size: 50px;
        font-weight: bold;
        color: #fff;
        transform: rotate(-10deg) skew(-10deg);
        -webkit-transform: rotate(-10deg) skew(-10deg);
        margin-top: -50px;
        margin-left: 75px;
    }

    .joinNumber span {
        display: inline-block;
        height: 100px;
        color: #fff;
        position: relative;
        width: 150px;
        vertical-align: middle;
        margin-top: -26px;
    }

    .animateNum {
        width: 175px;
        height: 100px;
        position: absolute;
        top: 0;
        left: 0;
        line-height: 100px;
        font-size: 80px;
        font-weight: bold;
        color: #fff;
        text-align: center;
    }

    .animateNum:nth-of-type(1) {
        z-index: 4;
    }

    .animateNum:nth-of-type(2) {
        z-index: 1;
        animation: animateNumber 1s infinite linear;
    }

    @keyframes animateNumber {
        0% {
            transform: scale(1);
            opacity: 0.3;
        }
        100% {
            transform: scale(30);
            opacity: 0
        }
    }

    .shakeCode p {
        text-align: center;
        font-size: 25px;
        padding: 15px 0 20px 0;
        color: #000;
        font-weight: bold;
        background: #fff;
    }

    .joinBtn, .once {
        display: block;
        width: 100%;
        height: 75px;
        text-align: center;
        line-height: 75px;
        background: #ff4b69;
        color: #fff;
        padding: 0 10px;
        font-size: 32px;
        font-weight: bold;
        border-radius: 50px;
        margin-top: 20px;
        cursor: pointer;
    }

    .joinBtn {
        margin-top: 280px;
    }

    @media screen and (max-width: 1690px) {
        .shakeCode {
            right: 12px;
        }
    }

    @media screen and (max-width: 1480px) {
        .shakeCode {
            right: 49px;
        }
    }

    @media screen and (max-width: 1450px) {
        .shakeCode {
            right: 7px;
        }
    }

    @media screen and (max-width: 1280px) {
        .joinBtn {
            margin-right: 12%;
        }

        .shakeCode {
            right: 40px;
        }
    }

    @media screen and (max-width: 1080px) {
        .joinBtn {
            margin-right: 12%;
        }
    }

    .once {
        width: 300px;
        position: absolute;
        bottom: 90px;
        margin-top: 0;
        left: 50%;
        transform: translateX(-50%);
    }

    /* page2 */
    .gameBox {
        width: 100%;
        height: 500px;
        text-align: center;
        position: absolute;
        top: 90px;
        left: 0;
        z-index: 20;
        /*background:#fff;*/
    }

    .oneBox {
        display: inline-block;
        width: 90px;
        height: 100%;
        position: relative;
        margin: 0 10px;
    }

    .oneUser {
        transform: translate3d(0, 350px, 0);
        transition: all 0.7s;
    }

    .userMove {
        margin-top: 20px;
    }

    .animate {
        animation: animate1 1.5s infinite linear;
    }

    .stopAnimate {
        animation-play-state: paused;
    }

    @keyframes animate1 {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-20px);
        }
        100% {
            transform: translateY(0px);
        }
    }

    @keyframes animateNoMove {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(0px);
        }
        100% {
            transform: translateY(0px);
        }
    }

    .oneUser img {
        display: block;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin: 0 auto;
        border: 2px solid #fff;
    }

    .oneUser span {
        display: block;
        width: 100%;
        text-align: center;
        font-size: 20px;
        color: #fff;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 5px auto;
    }

    .oneColumn {
        width: 70px;
        height: 380px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }

    .columnBox {
        width: 100%;
        height: 395px;
        position: absolute;
        bottom: 13px;
        left: 0;
        overflow: hidden;
    }

    .columnMove {
        width: 100%;
        height: 380px;
        position: absolute;
        bottom: -15px;
        left: 0;
        transform: translate3d(0, 350px, 0);
        transition: all 0.7s;
    }

    .columnMove img {
        display: block;
        width: 100%;
        height: 100%;
    }

    .columnBottom {
        width: 100%;
        height: 15px;
        background: url('http://img.wemew.com/wemew/admin/images/rankBottom1.png') no-repeat center center/100% auto;
        position: absolute;
        bottom: 0;
        left: 0;
    }

    /* 倒计时 */
    .countDown {
        width: 640px;
        height: 530px;
        position: absolute;
        top: 100px;
        left: 50%;
        margin-left: -322px;
        z-index: 12;
        transform: scale(8);
        transition: all 1s;
        display: none;
    }

    .countDown img {
        display: block;
        width: 100%;
        height: 100%;
        opacity: 0.3;
    }

    .scaleImages {
        animation: animate2 1s infinite;
    }

    .scaleOnce {
        animation: once 0.5s forwards;
    }

    @keyframes animate2 {
        0% {
            transform: scale(10);
            opacity: 0
        }
        50% {
            transform: scale(1);
            opacity: 1
        }
        100% {
            transform: scale(10);
            opacity: 0
        }
    }

    @keyframes once {
        0% {
            transform: scale(10);
            opacity: 0
        }
        100% {
            transform: scale(1);
            opacity: 1
        }
    }

    /*数字倒计时*/
    #beforeGame {
        text-align: center;
        display: table;
        z-index: 35;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }

    #beforeGame.start {
        animation: beforeGameAnimate 0.3s forwards;
        transform: scale(1.8);
        opacity: 0;
    }

    #beforeGame * {
        font-size: 100px;
        font-weight: bold;
        letter-spacing: 4px;
        color: #fff
    }

    #beforeGame tt {
        border-radius: 50%;
        width: 200px;
        height: 200px;
        display: inline-block;
        line-height: 200px;
        text-align: center;
        opacity: 0.4;
        font-family: "Times New Roman", Times, serif;
        border: solid 2px #fff;
    }

    @keyframes beforeGameAnimate {
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    #beforeGame.end {
        animation: endAnimate 0.3s forwards;
        transform: scale(1);
        opacity: 1;
    }

    @keyframes endAnimate {
        100% {
            opacity: 0;
            transform: scale(3);
        }
    }

    /* page3 */
    .winnerBox {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    .winnerPos {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        padding-top: 100px;
    }

    .winnerStar {
        width: 670px;
        height: 190px;
        top: -55px;
        left: 50%;
        margin-left: -335px;
    }

    .winnerBG {
        display: block;
        position: absolute;
    }

    .winnerEnd {
        width: 800px;
        height: 415px;
        top: -125px;
        left: 50%;
        margin-left: -400px;
    }

    .winner {
        display: inline-block;
        position: relative;
        vertical-align: bottom;
        width: 180px;
        height: 90px;
        background: url(http://img.wemew.com/wemew/admin/images/shake_other.png) center center/100% 100%;
        margin: 0 15px;
    }

    .winner.winnerOne {
        height: 110px;
        background: url(http://img.wemew.com/wemew/admin/images/shake_first.png) center center/100% 100%;
    }

    .winner img {
        display: block;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border: 2px solid #ff4b69;
        position: absolute;
        left: 50%;
        top: -120px;
        transform: translateX(-50%);
    }

    .winner span {
        display: block;
        width: 100%;
        color: #fff;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .winner.winnerOne span:nth-of-type(1) {
        margin-top: 30px;
    }

    .winner span:nth-of-type(1) {
        margin-top: 24px;
        font-size: 20px;
    }

    .winner span:nth-of-type(2) {
        position: absolute;
        left: 0;
        bottom: 10px;
        text-align: center;
        font-size: 22px;
        font-weight: bold;
    }

    .oneWinner {
        display: inline-block;
        vertical-align: middle;
        width: 110px;
        margin: 35px 10px 0;
    }

    .oneWinner img {
        display: block;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin: 0 auto;
    }

    .oneWinner span {
        display: block;
        text-align: center;
        font-size: 20px;
        margin-top: 10px;
        color: #fff;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    div.sideButton, a.backOnWall {
        z-index: 40
    }

    .videoCover {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 11;
        background: #000;
        opacity: 0.5;
    }

    .newGame {
        width: 220px;
        height: 55px;
        line-height: 55px;
        font-size: 25px;
        background: #ff4b69;
        border-radius: 55px;
        position: absolute;
        bottom: 70px;
        margin-top: 0;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        text-align: center;
        cursor: pointer;
    }

    .gameEnter {
        font-size: 22px;
        display: inline-block;
        position: relative;
        top: 0;
        color: #fff;
    }

    .countCover {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        z-index: 50;
    }

    .countShow {
        width: 800px;
        height: 40px;
        font-size: 50px;
        line-height: 40px;
        text-align: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        color: #fff;
        z-index: 55;
    }

    .countStart {
        animation: beforeGameAnimate 0.3s forwards;
        transform: scale(1.8);
        opacity: 0;
    }

    @keyframes beforeGameAnimate {
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    .countEnd {
        animation: endAnimate 0.3s forwards;
        transform: scale(1);
        opacity: 1;
    }

    @keyframes endAnimate {
        100% {
            opacity: 0;
            transform: scale(3);
        }
    }

    /* switch */
    .videoSwitch {
        width: 50px;
        height: 40px;
        position: absolute;
        top: 30px;
        right: 30px;
        z-index: 55;
        cursor: pointer;
    }

    .videoOn {
        background: url('http://img.wemew.com/wemew/admin/images/videoOn.png') center center/100% 100%;
    }

    .videoOff {
        background: url('http://img.wemew.com/wemew/admin/images/videoOff.png') center center/100% 100%;
    }

    .cy_animateNum > span {
        display: inline-block;
        padding: 20px 0;
        border: 4px solid #fff;
        width: 80px;
        text-align: center;
        border-radius: 50%;
        position: absolute;
        top: 39%;
        right: 43%;
        z-index: 1;
        color: #fff;
        font-size: 32px;
        font-weight: bolder;
        animation: cy_animateNumber 1s infinite linear;
    }

    @keyframes cy_animateNumber {
        0% {
            transform: scale(1.3);
            opacity: 1;
        }
        100% {
            transform: scale(1);
            opacity: 0
        }
    }

    .WM_QR {
        background: rgba(0, 0, 0, 0.6);
        border: solid 1px #ff4b69;
        border-radius: 10px;
        position: absolute;
        text-align: center;
        z-index: 9;
        cursor: move;
        right: 0;
        top: 15%;
    }

    .WM_QR.hidden {
        visibility: hidden;
        opacity: 0;
    }

    .WM_QR.onHide {
        border: 0;
        overflow: hidden
    }

    .WM_QR_mini {
        display: none;
        width: 50px;
        height: 50px;
        padding: 5px;
        box-sizing: border-box;
        cursor: pointer;
        background: rgba(255, 255, 255, 0.8)
    }

    .WM_QR_mini img {
        width: 100%;
        height: 100%
    }

    .WM_QR_mini span {
        width: 40px;
        height: 40px;
        background: url(http://img.wemew.com/wemew/admin/images/WM_QR_mini.png);
        background-size: cover;
        display: inline-block;
    }

    /*._WM_QR{width:260px; height:280px; background:#fff; border-radius:4px;}*/
    /*.WM_QR_main{width:100%; height:100%; position:absolute; left:0; top:0; cursor:move;padding:20px 10px; box-sizing:border-box;}*/
    .WM_QR_box {
        width: 100%;
        padding: 20px 15px 2px;
    }

    .WM_QR_box img {
        width: 100%;
        height: 100%
    }

    .WM_QR_foot {
        width: 100%;
        height: 30px;
        line-height: 30px;
        padding: 0 0 5px 0;
        font-size: 22px !important;
        font-weight: bolder;
        letter-spacing: 1px;
        color: #ff4b69;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-text-overflow: ellipsis;
        white-space: nowrap;
    }

    .WM_QR_hide {
        position: absolute;
        right: 10px;
        top: -2px;
        width: 30px;
        height: 20px;
        display: inline-block;
        text-align: center;
        z-index: 1
    }

    .WM_QR_hide span {
        width: 18px;
        height: 3px;
        background: #ff4b69;
        display: inline-block;
        cursor: pointer;
        margin-top: 10px
    }
</style>
