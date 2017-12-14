<template>
    <div id="app">
        <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
        <p v-if="isHelloVue">现在你看到我了</p>
        <button @click="show = !show">
            Toggle render
        </button>
        <transition
                name="custom-classes-transition"
                v-on:before-enter="beforeEnter"
                enter-active-class="animated tada"
                leave-active-class="animated bounceOutRight"
        >
            <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at
                lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
        </transition>
        <!--<HelloVue callme="你好啊！！！！！！HelloVue&#45;&#45;&#45;&#45;" v-on:click-hellovue="hellovue" v-if="isHelloVue"></HelloVue>-->

        <p>{{sayHelloVue}}</p>
        <p>{{sayHelloVue1}}</p>
        <router-view/>
        <img v-bind:src="imgurl" height="100">
        <img :src="imgurl" height="100">
        <br>
        <input v-model="newitem" @keyup.13="addnewitem"/>
        <li v-for="item in inputitems" v-bind:class="{finished:item.finished}">
            {{item}}
        </li>
        <h2>获取输入值：{{newitem}}</h2>
        <h3 v-text="msg2"></h3>
        <h1 v-text="msg3"></h1>
        <h1 v-html="msg3"></h1>
        <ul>
            <li v-for="item in items" v-bind:class="{finished:item.finished}">
                {{item.name}},{{item.age}}
            </li>
            <li :class="classObject">
                {{msg3}}
            </li>
            <li :class="[AClass,BClass]">
                是否被删除msg1{{msg1}}
            </li>
        </ul>
        <div :class="{ color: activeColor, fontSize: fontSize + 'px' }">style样式设定</div>
        <button v-on:click="greet(msg1)">单击调用methods</button>
    </div>
</template>
<script>
    import Store from './store'
    // import HelloVue from './components/HelloVue'//需要引用HelloVue才可以使用

    export default {
        name: 'app',
        data: function () {
            return {
                isHelloVue: true,
                show: true,
                newitem: "",
                sayHelloVue1: '',
                sayHelloVue: '',
                activeColor: '#ff75b3',
                fontSize: 30,
                imgurl: "http://pre.ih5.cn/v3/files/2258589/17499/vng1kOEp.jpg",
                classObject: {
                    active: true,
                    'text-danger': true
                },
                AClass: "finished",
                BClass: "text-danger",
                isshow: true,
                msg1: "文字信息",
                msg2: "msg2",
                msg3: "<span>test v-text和v=html</span>",
                items: [
                    {name: "张三", age: 5, finished: true},
                    {name: "李四", age: 15, finished: false},
                    {name: "王五", age: 20, finished: true}
                ],
                inputitems: [Store.fetch()]
            }
        },
        // components: {HelloVue},//声明组件，调用HelloVue(已经修改为Gameui）
        methods: {
            beforeEnter: function () {
                console.log("动画进入......");
            },
            greet: function (event) {
                //this在方法里指当前 Vue 实例
                alert('Hello ' + this.AClass + '!' + event)
                // `event` 是原生 DOM 事件
            },
            hellovue: function (msg) {
                console.log("监听事件....");
                this.sayHelloVue = msg;
            },
            addnewitem: function () {
                if (this.newitem != "") {
                    this.inputitems.push(this.newitem);
                    this.msg1 = this.newitem;
                    this.newitem = '';
                }
            }
        },
        watch: {
            inputitems: {
                handler: function (inputitems) {
                    Store.save(inputitems)
                },
                deep: true
            }
        },
        events: {
            'click-hellovue': function (msg) {
                this.sayHelloVue1 = msg;
            }
        }
    }
</script>

<style>
    .bounce-enter-active {
        animation: bounce-in .5s;
    }

    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }

    .finished {
        text-decoration: underline;
        color: #501305;
    }

    .active {
        text-decoration: underline;
    }

    .text-danger {
        background: red;
    }

    .active {
        width: 100%;
        height: 50px;
        background: green;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
