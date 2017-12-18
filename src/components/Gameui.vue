<template>
    <div class="Gameui-wrap">
        <div class="tag">游<br/>戏</div>
        <table style="text-align: center;background: rgba(0,104,2,.6)">
            <tr>
                <th v-for="game in games">
                    <router-link :to="{path:game.href}" @click.native="clickgame(game.gameid)">
                        <img :src="game.gameimgurl" :class="classObject">
                    </router-link>
                </th>
            </tr>
            <tr>
                <td :class="classObject" style="font-size: 15px;color: #fff" v-for="game in games">{{game.gamename}}
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
    import {Routeurls} from '@/api/Configrouter'
    import {GameID} from '@/api/Configgame'

    export default {
        name: 'Gameui',
        // props:['callme'],//在APP里面的属性
        data() {
            return {
                msg: '游戏界面',
                // isshow:false,
                classObject: {
                    th: true,
                },
                games: [
                    {
                        gameimgurl: 'https://dpm.yeba.im/static/images/games/common/goddess.png',
                        gamename: '现场抽奖',
                        href: Routeurls.lottery_route,
                        gameid: GameID.LOTTERY_ID
                    },
                    {
                        gameimgurl: 'https://dpm.yeba.im/static/images/games/common/shake.png',
                        gamename: '摇一摇',
                        href: Routeurls.shake_route,
                        gameid: GameID.SHAKE_ID
                    },
                    {
                        gameimgurl: 'https://dpm.yeba.im/static/images/games/common/dart.png',
                        gamename: '酒吧飞镖',
                        href: "https://www.baidu.com/",
                        gameid: GameID.DARTS_ID
                    },
                    {
                        gameimgurl: 'https://dpm.yeba.im/static/images/games/common/dice.png',
                        gamename: '大话骰',
                        href: "https://www.baidu.com/",
                        gameid: GameID.DICE_ROLL_ID
                    },

                    {
                        gameimgurl: 'https://dpm.yeba.im/static/images/games/common/magic-cube.png',
                        gamename: '转动魔方',
                        href: "https://www.baidu.com/",
                        gameid: GameID.RUN_CUBE_ID
                    }
                ]
            }
        },
        methods: {
            clickgame: function (gameid) {
                this.$emit('closeAllui', gameid)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .th {
        width: 100px;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
        padding-top: 10px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .Gameui-wrap {
        position: fixed;
        right: 0;
        bottom: 20px;
        transform: translate(100%, 0);
        transition: transform 0.5s;
    }

    .Gameui-wrap.show {
        transform: translate(0, 0);
    }

    .Gameui-wrap .tag {
        position: absolute;
        width: 40px;
        height: 140px;
        left: -40px;
        top: 0;
        text-align: center;
        color: #fff;
        padding-top: 50px;
        border-radius: 5px 0 0 5px;
        background-color: rgba(0, 104, 2, .6)
    }
</style>
