<template>
    <div id="app">
        <link rel="stylesheet" href="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" href="http://img.wemew.com/wemew/admin/style/wemewOnWall.css?r=1513510629726">
        <HeaderTop id="headerTop" v-if="isheadertop" :headertopdata="headertopdata"></HeaderTop>
        <Chatroom id="chatroom" ref="chatroom" v-if="ischatroom" :chatdata="chatdata"></Chatroom>
        <RightWall id="rightui" v-if="isRightWall" :walldata="walldata" @showPascreen="showPascreen"
                   @closeAllui="closeAllui"></RightWall>
        <Pascreen id="pascreen" v-if="isPascreen" @closePascreen="closePascreen"></Pascreen>

        <APPbg></APPbg>
        <Gameui id="gameui" @closeAllui="closeAllui" :class="{show:isshowgameui}" style="z-index: 20"></Gameui>
        <Shake id="shake" v-if="isShake"></Shake>
        <Lottery id="lottery" v-if="isLottery"></Lottery>
    </div>
</template>

<script>
    import HeaderTop from '@/components/HeaderTop'
    import Chatroom from '@/components/Chatroom'
    import RightWall from '@/components/RightWall'
    import Pascreen from '@/components/Pascreen'
    import Gameui from '@/components/Gameui'
    import APPbg from '@/components/APPbg'


    import Shake from '@/components/games/Shake'
    import Lottery from '@/components/games/Lottery'
    import {GameID} from '@/api/Configgame'

    export default {
        name: 'App',
        data: function () {
            return {
                isheadertop: false,
                ischatroom: false,
                isRightWall: false,
                isPascreen: false,
                isShake: false,
                isLottery: false,
                walldata: {},//墙上右侧数据
                chatdata: {},//聊天室数据
                headertopdata: {},//头部数据
                isshowgameui: false
            }
        },
        beforeCreate: function () {
            console.log("组件实例化之前")
        },
        created: function () {
            console.log("组件实例化了")
        },
        beforeMount: function () {
            console.log("组件写入dom结构之前")
            this.httpData('./src/api/chat.json');
        },
        updated: function () {
        },//组件更新比如修改了文案
        beforeDestroy: function () {
        },//组件销毁之前
        destroyed: function () {
        },//组件已经销毁
        mounted() {
            console.log('页面加载完成')
            this.$nextTick(function () {
                var gamesuiID = document.getElementById("gameui");
                gamesuiID.addEventListener("mouseout", this.onmouseoutgames)
                gamesuiID.addEventListener("mouseover", this.onmouseovergames)
            })
        },
        methods: {
            httpData: function (url) {
                this.$http.get(url).then(function (res) {
                    //请求成功后渲染组件
                    var configdata;
                    configdata = JSON.parse(res['bodyText']);
                    this.chatdata = configdata.data;
                    this.walldata = configdata.data;
                    this.headertopdata = configdata.data;
                    this.showmainui(true)
                }, function () {
                    //请求失败函数
                })
            },
            onmouseovergames: function () {
                this.isshowgameui = true;
                console.log("鼠标经过........")
            },
            onmouseoutgames: function () {
                this.isshowgameui = false;
                console.log("鼠标离开........")
            },
            showPascreen: function () {
                this.showmainui(false)
                this.isPascreen = true;
            },
            closePascreen: function () {
                this.showmainui(true)
                this.isPascreen = false;
            },
            //显示主界面
            showmainui: function (isShow) {
                this.ischatroom = isShow
                this.isRightWall = isShow
                this.isheadertop = isShow
                //非主界面关闭
                this.closepopui()
                var chatroom = this.$refs.chatroom

                if (chatroom) {
                    chatroom.clearIntervalID(isShow)//关闭聊天室数据
                }
                var appbg = this.$refs.appbg
                if (appbg) {
                    appbg.clearIntervalID(isShow)//关闭聊天室数据
                }
            },
            //关闭非主界面
            closepopui:function () {
                this.isPascreen = false
                this.isShake = false
                this.isLottery = false
                this.isPascreen = false
            },
            //显示某个游戏
            closeAllui: function (gameid) {
                this.showmainui(false)
                switch (gameid) {
                    case GameID.SHAKE_ID:
                        this.isShake = true;

                        break;
                    case GameID.LOTTERY_ID:
                        this.isLottery = true;
                        break;
                }
            }
        },
        components: {
            HeaderTop,
            Chatroom,
            RightWall,
            Pascreen,
            Gameui,
            Lottery,
            Shake,
            APPbg
        }
    }
</script>

<style>
    #app {
        /*background-color: #0f0f0f;*/
    }
</style>
