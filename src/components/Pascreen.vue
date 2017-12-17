<template>
    <div @click="hidediv">
        <div>
            <video id="wemewFullVideoInner" loop="" autoplay=""
                   src="http://wemew.oss-cn-qingdao.aliyuncs.com/videos/newds/shakeGame.webm"
                   style="width: 100%; height: 100%;">
            </video>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Pascreen',
        data() {
            return {
                msg: '霸屏动画',
                ishide: true,
                showtime: 5000
            }
        },
        mounted() {
            setTimeout(this.hidediv, this.showtime)
        },
        methods: {
            hidediv: function () {
                //倒计时结束，隐藏霸屏
                this.$emit('closePascreen');
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

    #myDIV {
        width: 300px;
        height: 200px;
        background: red;
        position: relative;
        /*top: 50%;*/
        /*left: 50%;*/
        animation: mymove 5s infinite;
        /*Safari 和 Chrome:*/
        -webkit-animation: mymove 5s infinite;
    }

    @keyframes mymove {
        from {
            background-color: red;
            width: 200px;
            height: 100px
        }
        to {
            background-color: blue;
        }
    }

    /*Safari 和 Chrome:*/
    @-webkit-keyframes mymove {
        from {
            background-color: red;
        }
        to {
            background-color: blue;
        }
    }

    /*div {*/
    /*color: #ff75b3;*/
    /*background-color: #65ffcf;*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*}*/
</style>
