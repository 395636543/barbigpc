webpackJsonp([0],{0:function(t,s){},"6tmX":function(t,s){},"7NKU":function(t,s){},C2vV:function(t,s){},FAsz:function(t,s){},NHnr:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("7+uW"),a={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"headdiv"},[s("div",[s("img",{staticStyle:{"border-radius":"50%",overflow:"hidden",height:"80px",width:"80px","align-content":"center",display:"-webkit-flex","margin-left":"10px"},attrs:{src:this.headimgurl}})]),this._v(" "),s("div",{staticStyle:{width:"100%"}},[s("marquee",{staticStyle:{margin:"0px","margin-right":"0px",width:"100%"},attrs:{id:"ptext",hspace:"100",direction:"left",behavior:"alternate",scrollamount:"100",scrolldelay:"1000",loop:"5",onmouseover:"this.stop()",onmouseout:"this.start();"}},[this._v("\n      "+this._s(this.placard)+"\n    ")])],1)])},staticRenderFns:[]},n=i("VU/8")({name:"",props:["headerdata"],data:function(){return{headimgurl:"http://static.runoob.com/images/mix/paris.jpg",placard:"欢迎来到峰子酒吧"}},mounted:function(){this.$nextTick(function(){this.httpData()})},methods:{httpData:function(){this.headimgurl=this.headerdata.headimgurl,this.placard=this.headerdata.placard}}},a,!1,function(t){i("6tmX")},null,null).exports,c={name:"",props:["chatdata"],data:function(){return{items:[]}},mounted:function(){this.httpData(),this.$nextTick(function(){var t=800;window.innerHeight?t=window.innerHeight:document.body&&document.body.clientHeight&&(t=document.body.clientHeight),t-=100,document.getElementById("main").style.height=t+"px",setInterval(this.createDom,2e3),this.setscroll()})},methods:{httpData:function(){this.items=this.chatdata.items},createDom:function(){null!=this.items&&(this.items.splice(0,1),this.items.push({headimg:"http://i3.letvimg.com/lc06_lecloud/201608/14/17/35/banner.jpg",nickname:"昵称-大料",sendtime:"2017.10.22 11:55 26",msg:"开干、开干......",imgurl:""}),this.items.push({headimg:"http://i3.letvimg.com/lc06_isvrs/201712/06/09/39/f838d185-5b5f-4467-882e-e0e1013df45a/thumb/2_180_101.jpg",nickname:"峰子"+Math.random(),sendtime:"2017.10.28-11:25 23",msg:"真棒......",imgurl:"http://pre.ih5.cn/v3/files/2258589/17499/vng1kOEp.jpg"}),this.setscroll())},setscroll:function(){try{var t=document.getElementById("left");t.scrollTop=t.scrollHeight}catch(t){console.log(t)}}}},r={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"chatroom"}},[i("div",{staticClass:"main",attrs:{id:"main"}},[i("div",{staticClass:"left",attrs:{id:"left"}},[i("hr",{staticStyle:{COLOR:"#ff9999","border-style":"double",width:"100%"},attrs:{size:"1"}}),t._v(" "),t._l(t.items,function(s,e){return i("div",[i("div",{staticStyle:{"background-color":"#FFFFFF","padding-left":"10px",display:"-webkit-flex"}},[i("div",[i("img",{staticStyle:{width:"100px",height:"100px","border-radius":"50%",overflow:"hidden"},attrs:{src:s.headimg}})]),t._v(" "),i("div",[i("div",{staticStyle:{display:"-webkit-flex","justify-content":"flex-start",height:"30px"}},[i("h4",[t._v("   "+t._s(s.nickname))]),t._v(" "),i("h6",[t._v("   "+t._s(s.sendtime))])]),t._v(" "),i("p",[t._v("   "+t._s(s.msg))]),t._v("\n               "),""!=s.imgurl?i("img",{staticStyle:{height:"200px"},attrs:{src:s.imgurl}}):t._e()])]),t._v(" "),i("hr",{staticStyle:{COLOR:"#ff9999","border-style":"double",width:"100%"},attrs:{size:"1"}})])})],2)])])},staticRenderFns:[]},l=i("VU/8")(c,r,!1,function(t){i("C2vV")},null,null).exports,o="/gameui",h="/lottery",d="/shake",m={name:"",props:["walldata"],data:function(){return{qrcode:"",imgwall:"",isrouter:!1,gameui_route:o}},mounted:function(){this.$nextTick(function(){this.httpData();var t=800;window.innerHeight?t=window.innerHeight:document.body&&document.body.clientHeight&&(t=document.body.clientHeight),t-=100,document.getElementById("rightui").style.height=t+"px"})},methods:{httpData:function(){this.qrcode=this.walldata.qrcode,this.imgwall=this.walldata.imgwall},showGameui:function(){this.$emit("showGameui"),this.isrouter=!this.isrouter},showPascreen:function(){this.$emit("showPascreen")}}},u={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"rightui"}},[i("div",{staticClass:"right",attrs:{id:"right"}},[i("div",[i("img",{staticStyle:{height:"300px"},attrs:{src:t.imgwall}})]),t._v(" "),i("div",{attrs:{id:"qrcode-wrap"}},[i("img",{staticStyle:{height:"250px"},attrs:{src:t.qrcode}})]),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"row clearfix"},[i("div",{staticClass:"col-md-12 column"},[i("router-link",{attrs:{to:t.gameui_route}},[i("button",{staticClass:"btn btn-lg btn-info",staticStyle:{width:"200px","margin-top":"15px"},attrs:{type:"button"},on:{click:t.showGameui}},[t._v("\n          游戏\n        ")])])],1)]),t._v(" "),i("div",{staticClass:"row clearfix"},[i("div",{staticClass:"col-md-12 column"},[i("button",{staticClass:"btn btn-lg btn-info",staticStyle:{width:"200px","margin-top":"15px"},attrs:{type:"button"},on:{click:t.showPascreen}},[t._v("霸屏测试\n        ")])])])]),t._v(" "),t.isrouter?i("router-view",{staticStyle:{position:"absolute",float:"bottom",right:"300px",bottom:"40px"}}):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row clearfix"},[s("div",{staticClass:"col-md-12 column"},[s("button",{staticClass:"btn btn-lg btn-info",staticStyle:{width:"200px","margin-top":"50px"},attrs:{type:"button"}},[this._v("设置\n        ")])])])}]},v=i("VU/8")(m,u,!1,function(t){i("7NKU")},null,null).exports,_={name:"Pascreen",data:function(){return{msg:"霸屏动画",ishide:!0,showtime:5e3}},mounted:function(){setTimeout(this.hidediv,this.showtime)},methods:{hidediv:function(){this.$emit("closePascreen")}}},p={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{on:{click:this.hidediv}},[this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("video",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"wemewFullVideoInner",loop:"",autoplay:"",src:"http://wemew.oss-cn-qingdao.aliyuncs.com/videos/newds/shakeGame.webm"}})])}]},g=i("VU/8")(_,p,!1,function(t){i("kdrz")},"data-v-715577c3",null).exports,f={name:"Gameui",data:function(){return{msg:"游戏界面",classObject:{th:!0},games:[{gameimgurl:"https://dpm.yeba.im/static/images/games/common/goddess.png",gamename:"票选大赛",href:h},{gameimgurl:"https://dpm.yeba.im/static/images/games/common/shake.png",gamename:"摇一摇",href:d},{gameimgurl:"https://dpm.yeba.im/static/images/games/common/dart.png",gamename:"酒吧飞镖",href:"https://www.baidu.com/"},{gameimgurl:"https://dpm.yeba.im/static/images/games/common/dice.png",gamename:"大话骰",href:"https://www.baidu.com/"},{gameimgurl:"https://dpm.yeba.im/static/images/games/common/magic-cube.png",gamename:"转动魔方",href:"https://www.baidu.com/"},{gameimgurl:"https://dpm.yeba.im/static/images/games/common/lottery.png",gamename:"现场抽奖",href:"https://www.baidu.com/"}]}},methods:{clickgame:function(t){console.log("单击"+t)}}},w={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("table",{staticStyle:{"text-align":"center",background:"rgba(0,0,0,.8)"}},[i("tr",t._l(t.games,function(s,e){return i("th",[i("router-link",{attrs:{to:s.href},on:{click:function(t){"clickgame(index)"}}},[i("img",{class:t.classObject,attrs:{src:s.gameimgurl}})])],1)})),t._v(" "),i("tr",t._l(t.games,function(s){return i("td",{class:t.classObject,staticStyle:{"font-size":"15px",color:"#337ab7"}},[t._v(t._s(s.gamename))])}))]),t._v(" "),i("router-view",{staticStyle:{position:"fixed",top:"0px",left:"0px",width:"100%",height:"100%"}})],1)},staticRenderFns:[]},C=i("VU/8")(f,w,!1,function(t){i("wkvX")},"data-v-bfc99dfc",null).exports,b={name:"Shake",data:function(){return{ismuted:!1,barname:"",count:0,videourl:"",classSwitchObject:{videoOff:!1,videoOn:!0},classGameStart:{display:"inline"}}},mounted:function(){this.httpData(),this.$nextTick(function(){})},methods:{closemusic:function(){this.ismuted=!this.ismuted,this.classSwitchObject.videoOff=!this.classSwitchObject.videoOff,this.classSwitchObject.videoOn=!this.classSwitchObject.videoOn},httpData:function(){var t;this.$http.get("./src/api/shakedata.json").then(function(s){t=JSON.parse(s.bodyText),console.log(JSON.parse(s.bodyText)),this.barname=t.data.barname,this.count=t.data.count,this.videourl=t.data.videourl},function(){})},startgame:function(){this.count>0?(this.classGameStart.display="none",console.log("关闭")):alert("当前人数少于1人，再等等")}},components:{}},x={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"shake"}},[s("div",{attrs:{id:"_container"}},[s("div",{staticClass:"shakeTop"},[s("div",{staticClass:"horseTopBar"},[this._m(0),this._v(" "),this._m(1),this._v(" "),s("div",{staticClass:"topStep1"},[s("tt",[this._v(this._s(this.barname))])],1)])]),this._v(" "),s("div",{staticClass:"page page1",staticStyle:{display:"block"},style:this.classGameStart,attrs:{id:"page1"}},[s("div",{staticClass:"pageAllBox"},[s("div",{staticClass:"shakeLeft"},[s("img",{staticClass:"shakeMain",attrs:{src:"http://img.wemew.com/wemew/admin/images/shakeMain.png",alt:""}}),this._v(" "),s("div",{staticClass:"joinNumber"},[this._v("当前参与人数\n            "),s("span",[s("a",{staticClass:"animateNum",attrs:{id:"joinNumber"}},[this._v(this._s(this.count))]),this._v(" "),s("a",{staticClass:"animateNum",attrs:{id:"joinNumber2"}},[this._v(this._s(this.count))])]),this._v("人\n          ")])]),this._v(" "),s("div",{staticClass:"shakeCode"},[s("a",{staticClass:"joinBtn",attrs:{id:"start"},on:{click:this.startgame}},[this._v("点击开始 "),s("span",{staticClass:"gameEnter"},[this._v("Enter")])])])])]),this._v(" "),this._m(2),this._v(" "),this._m(3),this._v(" "),s("div",{staticClass:"videoSwitch",class:this.classSwitchObject,attrs:{title:"开启背景乐"},on:{click:this.closemusic}})]),this._v(" "),s("div",{staticClass:"wemewFullVideo"},[s("video",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"wemewFullVideoInner",loop:"",autoplay:"",src:this.videourl},domProps:{muted:this.ismuted}})]),this._v(" "),s("div",{staticClass:"WM_QR",style:this.classGameStart,attrs:{id:"1513236286810"}},[this._m(4),this._v(" "),this._m(5)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"horseTop_leftBox"},[s("i",{staticClass:"horseTop_left"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"horseTop_rightBox"},[s("i",{staticClass:"horseTop_right"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"page page2",attrs:{id:"page2"}},[s("div",{staticClass:"countDown scaleImages cy_animateNum",staticStyle:{display:"block"}},[s("span",{staticClass:"cy_num"},[this._v("30")])]),this._v(" "),s("div",{staticClass:"gameBox"},[s("div",{staticClass:"oneBox"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"page page3",attrs:{id:"page3"}},[s("div",{staticClass:"winnerBox"},[s("div",{staticClass:"winnerPos"},[s("img",{staticClass:"winnerStar winnerBG",attrs:{src:"http://img.wemew.com/wemew/admin/images/shake_star.png",alt:""}}),this._v(" "),s("img",{staticClass:"winnerEnd winnerBG",attrs:{src:"http://img.wemew.com/wemew/admin/images/shake_end_bg.png",alt:""}}),this._v(" "),s("div",{staticClass:"winnerThree"},[s("div",{staticClass:"winner winnerOne"},[s("img",{attrs:{src:"http://wemew.oss-cn-qingdao.aliyuncs.com/2017-12-09-22/151282988605653855.jpg",alt:""}}),s("span",[this._v("樱小丸")]),s("span",[this._v("冠军")])])]),this._v(" "),s("div",{staticClass:"winnerList"})])]),this._v(" "),s("a",{staticClass:"newGame",attrs:{id:"newGame",onclick:"step.step3()"}},[this._v("再玩一次 "),s("span",{staticClass:"gameEnter"},[this._v("Enter")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"WM_QR_mini",staticStyle:{display:"none"},attrs:{title:"点击放大"}},[s("span")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"_WM_QR"},[s("a",{staticClass:"WM_QR_hide",attrs:{title:"隐藏"}},[s("span")]),this._v(" "),s("div",{staticClass:"WM_QR_main",attrs:{title:"按住左键可拖动，滚轮可以放大缩小"}},[s("div",{staticClass:"WM_QR_box",staticStyle:{width:"280px",height:"280px"}},[s("img",{attrs:{src:"http://img.wemew.com/wemew/imgFile/2017-11-21-21/1511272324025-1.jpg",width:"100%"}})]),this._v(" "),s("div",{staticClass:"WM_QR_foot",staticStyle:{"font-size":"18px"}},[this._v("扫描二维码参赛")])])])}]},y=i("VU/8")(b,x,!1,function(t){i("WBoM")},null,null).exports,k={name:"App",data:function(){return{isheader:!1,ischatroom:!1,isRightWall:!1,isPascreen:!1,isGameui:!1,isShake:!1,walldata:{},chatdata:{},headerdata:{}}},beforeCreate:function(){console.log("组件实例化之前")},created:function(){console.log("组件实例化了")},beforeMount:function(){console.log("组件写入dom结构之前"),this.httpData("./src/api/chat.json")},updated:function(){},beforeDestroy:function(){},destroyed:function(){},mounted:function(){console.log("页面加载完成"),this.$nextTick(function(){})},methods:{httpData:function(t){this.$http.get(t).then(function(t){var s;s=JSON.parse(t.bodyText),this.chatdata=s.data,this.walldata=s.data,this.headerdata=s.data,this.showmainui(!0)},function(){})},showPascreen:function(){this.showmainui(!1),this.isPascreen=!0},closePascreen:function(){this.showmainui(!0),this.isPascreen=!1},showmainui:function(t){this.ischatroom=t,this.isRightWall=t,this.isheader=t,this.isPascreen=!t,this.isGameui=!t},showGameui:function(){}},components:{Header:n,Chatroom:l,RightWall:v,Pascreen:g,Gameui:C,Shake:y}},S={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("link",{attrs:{rel:"stylesheet",href:"http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css"}}),this._v(" "),this.isheader?s("Header",{attrs:{id:"header",headerdata:this.headerdata}}):this._e(),this._v(" "),this.ischatroom?s("Chatroom",{attrs:{id:"chatroom",chatdata:this.chatdata}}):this._e(),this._v(" "),this.isRightWall?s("RightWall",{attrs:{id:"rightui",walldata:this.walldata},on:{showPascreen:this.showPascreen,showGameui:this.showGameui}}):this._e(),this._v(" "),this.isPascreen?s("Pascreen",{attrs:{id:"pascreen"},on:{closePascreen:this.closePascreen}}):this._e(),this._v(" "),this.isGameui?s("Gameui",{attrs:{id:"gameui"}}):this._e(),this._v(" "),this.isShake?s("Shake",{attrs:{id:"shake"}}):this._e()],1)},staticRenderFns:[]},j=i("VU/8")(k,S,!1,function(t){i("mzCm")},null,null).exports,W=i("zO6J"),M={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"lottery"}},[s("p",[this._v("抽奖游戏")]),this._v(" "),this._m(0),this._v(" "),s("div",{staticStyle:{zoom:"1.07198"},attrs:{id:"all"}},[s("img",{staticClass:"onWallBg",attrs:{src:"http://img.wemew.com/wemew/admin/images/onWallBg.jpg"}}),this._v(" "),this._m(1),this._v(" "),this._m(2),this._v(" "),s("div",{staticStyle:{visibility:"visible",display:"none"},attrs:{id:"cjSelBox"}},[s("div",{staticClass:"cjSelBox",staticStyle:{"margin-left":"-241px","margin-top":"-115.5px"}},[this._m(3),this._v(" "),s("div",{staticClass:"cjSelBox_main"},[s("div",{staticClass:"cjSelBox_row"},[this._v("抽奖资格设置条件："),s("tt",[this._v("至少选择一项，可多选")]),s("br"),this._v(" "),this._m(4),this._v(" "),this._m(5)],1),this._v(" "),this._m(6)])])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"container"}},[s("img",{staticClass:"onWallBg",attrs:{src:"http://img.wemew.com/wemew/admin/images/onWallBg.jpg"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"all"},[s("div",{staticClass:"onWallHead"},[s("img",{staticClass:"logo",attrs:{src:"http://img.wemew.com//wemew/images/bardefatulLogo.png"}}),this._v(" "),s("div",[this._v("夜乐酒吧现场抽奖"),s("a",{staticClass:"voteSelect",attrs:{onclick:"cjSelBox.show()"}},[this._v("设置参与资格"),s("i")])])]),this._v(" "),s("div",{staticClass:"onWallMain"},[s("div",{staticClass:"wallLeft"},[s("span",{staticClass:"wallCover"}),this._v(" "),s("div",{staticClass:"leftHead"},[s("span",{staticClass:"leftHeadCover"}),this._v(" "),s("span",{staticClass:"leftHeadText"},[s("img",{staticClass:"leftHeadText_img",attrs:{src:"http://img.wemew.com/wemew/images/weionwalljiangping.png"}}),this._v("微上墙6小时内霸屏用户参与抽奖")])]),this._v(" "),s("div",{staticClass:"table userTitle"},[s("span",{staticClass:"tableSpan",attrs:{id:"userNumber"}},[this._v("当前一共 0 名用户，无法进行抽奖")])]),this._v(" "),s("div",{staticClass:"allUser"},[s("div",{staticClass:"coverDiv"},[s("img",{attrs:{src:"http://img.wemew.com/wemew/admin/images/headCover.png"}})]),this._v(" "),s("div",{staticClass:"ul",attrs:{id:"theUL"}})]),this._v(" "),s("div",{staticClass:"tButton"},[s("a",{staticClass:"animate",attrs:{id:"btn",onclick:"control.run()"}},[this._v("开始抽奖(Enter)")]),this._v(" "),s("a",{staticClass:"btnNotUse",attrs:{id:"btn2",onclick:"control.stop()"}},[this._v("停止(Enter)")])])]),this._v(" "),s("div",{staticClass:"wallRight"},[s("span",{staticClass:"wallCover"}),this._v(" "),s("div",{staticClass:"rightHead"},[s("span",{staticClass:"rightHeadText"},[this._v("获奖名单")])]),this._v(" "),s("div",{staticClass:"theListHead"},[s("span",{staticClass:"theListHeadCover"}),this._v(" "),s("div",{staticClass:"t1"},[this._v("序号")]),this._v(" "),s("div",{staticClass:"t2"},[this._v("头像")]),this._v(" "),s("div",{staticClass:"t3"},[this._v("昵称")])]),this._v(" "),s("div",{staticClass:"theList",attrs:{id:"box"}},[s("div",{staticClass:"tOne",attrs:{id:"hide"}},[s("div",{staticClass:"userNumber"},[this._v("0")]),this._v(" "),s("div",{staticClass:"userHead"},[s("img",{attrs:{src:""}})]),this._v(" "),s("div",{staticClass:"userName"}),this._v(" "),s("div",{staticClass:"userLine"})])])]),this._v(" "),s("div",{staticStyle:{clear:"both"}})]),this._v(" "),s("div",{staticClass:"foot"},[s("div",[this._v("©wemew 微喵")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"toBack",attrs:{href:"/weionwallmsg?barid=dfeb2062-fd78-4f1a-a0c6-bc71c648d391"}},[this._v("返"),s("br"),this._v("回"),s("br"),this._v("上"),s("br"),this._v("墙"),s("br"),this._v("1")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cjSelBox_head"},[s("div",{staticClass:"cjSelBox_title"},[this._v("设置抽奖资格")]),this._v(" "),s("span",{staticClass:"cjSelBox_close",attrs:{title:"关闭",onclick:"cjSelBox.close()"}},[this._v("×")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"cj_type"}},[s("div",{staticClass:"WM_checkBox WM_all",attrs:{id:"WM0141678086260757621513237941767"}},[s("span",{staticClass:"WM_check_span"},[s("a",{staticClass:"WM_check WM_check_noUse",attrs:{index:"0"}}),s("span",{staticClass:"WM_check_txt"},[this._v("所有上墙消息")])]),s("span",{staticClass:"WM_check_span"},[s("a",{staticClass:"WM_check WM_check_noUse WM_check_use",attrs:{index:"1"}}),s("span",{staticClass:"WM_check_txt"},[this._v("霸屏")])]),s("span",{staticClass:"WM_check_span"},[s("a",{staticClass:"WM_check WM_check_noUse",attrs:{index:"2"}}),s("span",{staticClass:"WM_check_txt"},[this._v("打赏")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"cj_sel_tj"}},[this._v("附加条件：单次霸屏或打赏不低于"),s("input",{staticClass:"valInput",attrs:{id:"cjSelBox_input",value:"0",maxlength:"8",type:"text"}}),this._v("元\n            ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cjSelBox_foot"},[s("a",{staticClass:"WM_button WM_button_n",staticStyle:{"margin-right":"5px"},attrs:{onclick:"cjSelBox.close()"}},[this._v("取消")]),s("a",{staticClass:"WM_button WM_button_y"},[this._v("确定")])])}]},B=i("VU/8")({name:"lottery",components:{},data:function(){return{}},mounted:function(){this.$nextTick(function(){})}},M,!1,function(t){i("FAsz")},null,null).exports;e.a.use(W.a);var E=new W.a({routes:[{path:o,name:"Gameui",component:C},{path:h,name:"Lottery",component:B},{path:d,name:"Shake",component:y}]}),$=i("y0Fx");e.a.use($.a),e.a.config.productionTip=!1,new e.a({el:"#app",router:E,template:"<App/>",components:{App:j}})},WBoM:function(t,s){},kdrz:function(t,s){},mzCm:function(t,s){},wkvX:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.dadc153b6f8286863224.js.map