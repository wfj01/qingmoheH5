(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-solarterms-solarterms"],{"4ab2":function(i,t,e){"use strict";var a;e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return a}));var n=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",[e("v-uni-view",{staticClass:"topview"},[e("v-uni-view",{staticClass:"topview-title"},[i._v("节气歌")]),e("v-uni-view",{staticClass:"topview-text"},[i._v("春雨惊春清谷天， 夏满芒夏暑相连。")]),e("v-uni-view",{staticClass:"topview-text"},[i._v("秋处露秋寒霜降， 冬雪雪冬小大寒。")])],1),e("v-uni-view",{staticClass:"grid"},i._l(i.mydata,(function(t,a){return e("v-uni-view",{key:a,staticClass:"grid-item-4",on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.goDetailPage(t.jqid)}}},[e("v-uni-view",{},[e("v-uni-image",{attrs:{src:t.pic,mode:""}})],1),e("v-uni-view",{},[i._v(i._s(t.name))]),e("v-uni-view",{},[i._v(i._s(t.time))])],1)})),1)],1)},r=[]},5748:function(i,t,e){"use strict";var a=e("a329"),n=e.n(a);n.a},a329:function(i,t,e){var a=e("e3f8");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var n=e("4f06").default;n("5e02d780",a,!0,{sourceMap:!1,shadowMode:!1})},a698:function(i,t,e){"use strict";e.r(t);var a=e("4ab2"),n=e("b69e");for(var r in n)"default"!==r&&function(i){e.d(t,i,(function(){return n[i]}))}(r);e("5748");var d,o=e("f0c5"),s=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"1141e0d2",null,!1,a["a"],d);t["default"]=s.exports},ab0a:function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{mydata:[]}},onLoad:function(){this.funs(),this.loaddata()},methods:{goDetailPage:function(i){uni.navigateTo({url:"/pages/index/solarterms/detailPage/detailPage?jqid="+i})},loaddata:function(){var i=this;uni.request({url:"http://jq.ylapi.cn/jq24/querylist.u",method:"GET",data:{uid:"11448",appkey:"bd0a7dfc379074454f65ef0af94e3a13"},success:function(t){console.log("res",t),i.mydata=t.data.datas},fail:function(i){console.log(i)}})}}};t.default=a},b69e:function(i,t,e){"use strict";e.r(t);var a=e("ab0a"),n=e.n(a);for(var r in a)"default"!==r&&function(i){e.d(t,i,(function(){return a[i]}))}(r);t["default"]=n.a},e3f8:function(i,t,e){var a=e("24fb");t=a(!1),t.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.topview[data-v-1141e0d2]{text-align:center}.topview-title[data-v-1141e0d2]{font-size:%?44?%;font-weight:700;font-family:楷体;line-height:%?50?%;margin:%?15?% 0}.topview-text[data-v-1141e0d2]{font-size:%?36?%;font-family:楷体;line-height:%?40?%;margin:%?20?% 0}.grid[data-v-1141e0d2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;border-top:%?2?% solid hsla(0,0%,67.5%,.2)}.grid .grid-item-3[data-v-1141e0d2],\r\n.grid .grid-item-4[data-v-1141e0d2]{-webkit-box-sizing:border-box;box-sizing:border-box;width:calc(100% / 3);border-bottom:%?2?% solid hsla(0,0%,67.5%,.2);border-right:%?2?% solid hsla(0,0%,67.5%,.2);text-align:center;padding:%?30?% 0;position:relative}.grid .grid-item-3 uni-image[data-v-1141e0d2],\r\n.grid .grid-item-4 uni-image[data-v-1141e0d2]{width:%?130?%;height:%?130?%}.grid .grid-item-3 uni-view[data-v-1141e0d2],\r\n.grid .grid-item-4 uni-view[data-v-1141e0d2]{font-size:%?28?%;margin-top:%?16?%;color:rgba(0,0,0,.53)}.grid .grid-item-3 uni-text[data-v-1141e0d2],\r\n.grid .grid-item-4 uni-text[data-v-1141e0d2]{display:block;padding:%?4?% %?8?%;text-align:center;-webkit-border-radius:%?36?%;border-radius:%?36?%;font-size:%?24?%;background-color:#ff5241;color:#fff;position:absolute;right:%?6?%;top:%?6?%}.grid .grid-item-3[data-v-1141e0d2]:nth-child(3n + 3),\r\n.grid .grid-item-4[data-v-1141e0d2]:nth-child(4n + 4){border-right:none}.grid .grid-item-4[data-v-1141e0d2]{width:calc(100% / 3)}',""]),i.exports=t}}]);