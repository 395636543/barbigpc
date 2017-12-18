<template>
    <div id="bgControl" style="z-index: -1">
        <div id="BgVideoBox">
            <video mode="play" loop="" autoplay="" width="100%" height="100%"
                   :src="videourl"></video>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        data: () => {
            return {
                isswap: false,
                videourl: "http://wemew.oss-cn-qingdao.aliyuncs.com/videos/newds/wemewDefault5.webm?r=1"
            }
        },
        methods: {
            swap: function () {
                this.isswap = !this.isswap
                if (this.isswap) {
                    this.videourl = "http://wemew.oss-cn-qingdao.aliyuncs.com/videos/newds/wemewDefault1.webm?r=1"
                } else {
                    this.videourl = "http://wemew.oss-cn-qingdao.aliyuncs.com/videos/newds/wemewDefault5.webm?r=1"
                }
            },
            clearIntervalID: function (val) {
                if (!val) {
                    //  关闭心跳
                    clearInterval(this.setIntervalID);
                } else {
                    clearInterval(this.setIntervalID);
                    this.setIntervalID = setInterval(this.swap, 5000)
                }
            }
        },
        mounted() {
            this.$nextTick(function () {
                this.clearIntervalID(true)
            })
        }
    }
</script>

<style scoped>

</style>