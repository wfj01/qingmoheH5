(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-todayinhistory-detailPage-detailPage"],{"278c":function(t,e,i){"use strict";i.r(e);var a=i("acff"),n=i("8b34");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("790b");var s,r=i("f0c5"),d=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"9bdf35b2",null,!1,a["a"],s);e["default"]=d.exports},"790b":function(t,e,i){"use strict";var a=i("9147"),n=i.n(a);n.a},"8b34":function(t,e,i){"use strict";i.r(e);var a=i("e7ec"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},9147:function(t,e,i){var a=i("a92c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("4654c818",a,!0,{sourceMap:!1,shadowMode:!1})},a92c:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".title[data-v-9bdf35b2]{padding:%?20?% %?40?%;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;font-size:%?50?%;font-weight:700;line-height:%?50?%;font-family:楷体}.text-box[data-v-9bdf35b2]{padding:0 %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box}.text[data-v-9bdf35b2]{font-size:%?38?%;line-height:%?54?%;font-family:fangsong}.imagestyle[data-v-9bdf35b2]{width:100%;padding:%?20?% %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box}.imagestyle-title[data-v-9bdf35b2]{text-align:center;font-size:%?38?%;line-height:%?54?%;font-family:fangsong;font-weight:700}.image[data-v-9bdf35b2]{width:100%;height:%?450?%}",""]),t.exports=e},acff:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{},t._l(t.mydata,(function(e,a){return i("v-uni-view",{key:a},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"text-box"},[i("v-uni-text",{staticClass:"text"},[t._v(t._s(e.content.replace(/\\n/,"\n")))])],1),t._l(e.picUrl,(function(e,a){return i("v-uni-view",{key:a,staticClass:"imagestyle"},[i("v-uni-image",{staticClass:"image",attrs:{src:e.url,mode:""}}),i("v-uni-view",{staticClass:"imagestyle-title"},[t._v(t._s(e.pic_title))])],1)}))],2)})),1)],1)},o=[]},e7ec:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{mydata:[]}},onLoad:function(t){console.log(t.id);var e=t.id;this.loaddata(e)},methods:{loaddata:function(t){var e=this;this.http({url:"/api/TodayOnhistory/GetTodaydetail",data:{key:"505e0c9256aac754f0f7224f030d6ad2",e_id:t},method:"GET",success:function(t){e.mydata=t.result},fail:function(t){console.log(t)}})}}};e.default=a}}]);