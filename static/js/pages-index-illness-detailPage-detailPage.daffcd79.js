(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-illness-detailPage-detailPage"],{1387:function(t,i,e){var a=e("24bd");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("329953d9",a,!0,{sourceMap:!1,shadowMode:!1})},"24bd":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".mydata[data-v-b8e79814]{padding:%?15?%;-webkit-box-sizing:border-box;box-sizing:border-box;border:%?1?% solid hsla(0,0%,57.6%,.6);-webkit-border-radius:%?30?%;border-radius:%?30?%}.item-title[data-v-b8e79814]{font-size:%?36?%;font-family:楷体;font-weight:700;width:%?200?%}.item-text[data-v-b8e79814]{font-size:%?36?%;font-family:楷体;font-weight:100;margin:%?20?% 0;display:-webkit-box;display:-webkit-flex;display:flex;line-height:%?54?%}.hiddentext[data-v-b8e79814]{font-family:楷体;font-size:%?40?%}",""]),t.exports=i},5821:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{mydata:{}}},onLoad:function(t){console.log(t.id),this.loaddata(t.id)},methods:{loaddata:function(t){var i=this;uni.request({url:"http://dis.ylapi.cn/disease/detail.u",method:"GET",data:{id:t,uid:"11448",appkey:"f5d858f4d4bd9590538aace517f57c63"},success:function(t){i.mydata=t.data.data},fail:function(t){}})}}};i.default=a},"7e36":function(t,i,e){"use strict";e.r(i);var a=e("5821"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},a6f2:function(t,i,e){"use strict";var a=e("1387"),n=e.n(a);n.a},ed43:function(t,i,e){"use strict";e.r(i);var a=e("f8cf"),n=e("7e36");for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("a6f2");var d,u=e("f0c5"),o=Object(u["a"])(n["default"],a["b"],a["c"],!1,null,"b8e79814",null,!1,a["a"],d);i["default"]=o.exports},f8cf:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"mydata"},[e("v-uni-view",{staticClass:"item-text"},[e("v-uni-view",{staticClass:"item-title"},[t._v("疾病名称:")]),e("v-uni-view",{staticClass:"hiddentext"},[t._v(t._s(t.mydata.name))])],1),e("v-uni-view",{staticClass:"item-text"},[e("v-uni-view",{staticClass:"item-title"},[t._v("科室名称:")]),e("v-uni-view",{staticClass:"hiddentext"},[t._v(t._s(t.mydata.typeName))])],1),e("v-uni-view",{staticClass:"item-text"},[e("v-uni-view",{staticClass:"item-title"},[t._v("子科室名:")]),e("v-uni-view",{staticClass:"hiddentext"},[t._v(t._s(t.mydata.subName))])],1),e("v-uni-view",{staticClass:"item-text"},[e("v-uni-view",{staticClass:"item-title"},[t._v("描述:")])],1),e("v-uni-view",{staticClass:"hiddentext",domProps:{innerHTML:t._s(t.mydata.summary)}}),t._l(t.mydata.tagList,(function(i,a){return e("v-uni-view",{key:a},[e("v-uni-view",{staticClass:"item-title"},[t._v(t._s(i.name))]),e("v-uni-view",{staticClass:"hiddentext",domProps:{innerHTML:t._s(i.content)}})],1)}))],2)],1)},s=[]}}]);