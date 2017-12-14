<template>
    <div>
        <table style="text-align: center;background: #FFFFFF">
            <tr>
                <th v-for="game in games">
                    <a :href="game.href" :target="game.href">
                    <img :src="game.gameimgurl" v-bind:class="classObject">
                    </a>
                </th>
            </tr>
            <tr>
                <td v-bind:class="classObject" style="font-size: 15px;color: #337ab7" v-for="game in games">{{game.gamename}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'Gameui',
        // props:['callme'],//在APP里面的属性
        data() {
            return {
                msg: '游戏界面',
                classObject:{
                    th:true
                },
                games: [
                    {
                        gameimgurl: 'https://dpm.yeba.im/static/images/games/common/goddess.png',
                        gamename: '票选大赛',
                        href:"lottery.html"
                    },
                    {
                        gameimgurl: 'https://dpm.yeba.im/static/images/games/common/dart.png',
                        gamename: '酒吧飞镖',
                        href:"https://www.baidu.com/"
                    },
                    {
                        gameimgurl: 'https://dpm.yeba.im/static/images/games/common/dice.png',
                        gamename: '大话骰',
                        href:"https://www.baidu.com/"
                    },
                    {
                        gameimgurl: 'https://dpm.yeba.im/static/images/games/common/shake.png',
                        gamename: '摇一摇',
                        href:"shake.html"
                    },
                    {
                        gameimgurl: 'https://dpm.yeba.im/static/images/games/common/magic-cube.png',
                        gamename: '转动魔方',
                        href:"https://www.baidu.com/"
                    },
                    {
                        gameimgurl: 'https://dpm.yeba.im/static/images/games/common/lottery.png',
                        gamename: '现场抽奖',
                        href:"https://www.baidu.com/"
                    }
                ]
            }
        },
        methods: {
            // funcallme: function () {
            //
            // }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .th{
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
</style>
