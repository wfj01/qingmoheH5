(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-address-edit-index"],{4510:function(e,t,i){"use strict";var a=i("4ea4");i("d81d"),i("d3b7"),i("ac1f"),i("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("2c6c")),s={components:{YjCityPicker:n.default},data:function(){return{city:"",cityCode:"",province:"",pickerValueDefault:[0,0,1],addressShow:!1,form:{province:"130000",city:"",area:""},addressDTO:{addressid:0,county:"",detail:"",contact:"",contactinfo:"",checkdefault:""},ischecked:!1,dot_do_it:!1,addressdcounty:""}},methods:{showCityPicker:function(){this.$refs.mpvueCityPicker.show()},onNavigationBarButtonTap:function(){var e=this;console.log("521",e.addressDTO.addressid),uni.showModal({title:"提示",content:"是否删除地址",success:function(t){if(t.confirm)return console.log("用户点击确定"),console.log("521",e.addressDTO.addressid),new Promise((function(t,i){var a={url:e.$api.bid.deleteAddress+"?pkids="+e.addressDTO.addressid,method:"POST"};e.$fetch(a).then((function(t){console.log("res",t),uni.showToast({title:"删除地址成功",icon:"none"}),e.$Router.back(1)})).catch((function(){}))}));t.cancel&&console.log("用户点击取消")}})},onChange:function(e){console.log(e)},onCancel:function(e){console.log(e)},onConfirm:function(e){console.log(e),this.city=e.label,this.cityCode=e.cityCode,console.log("我获得了城市"+this.city),console.log("我获得了城市id"+this.cityCode)},code_consignee:function(e){this.addressDTO.contact=e.target.value,console.log("this.consignee",this.addressDTO.contact)},code_phone:function(e){this.addressDTO.contactinfo=e.target.value,console.log("this.phone",this.addressDTO.contactinfo)},code_Detailedaddress:function(e){this.addressDTO.detail=e.target.value,console.log("this.Detailedaddress",this.addressDTO.detail)},dot_set_it:function(){this.dot_do_it&&uni.showToast({title:"必须要有一个默认地址",duration:2e3,icon:"none"})},switch1Change:function(e){this.dot_do_it||(this.addressDTO.checkdefault=e.target.value,console.log("switch1 发生 change 事件，携带值为",this.addressDTO.checkdefault))},addresspick:function(e){var t=this,i=["province","city","area"],a="";i.map((function(i){t.form[i]=e[i].dqcode,a+=e[i].dqname+"     "})),this.addressdcounty=a,this.addressDTO.county=e["area"].dqcode,console.log("console.logkey)",e["area"].dqcode)},saveClick:function(){var e=this,t=e.city.split("-");console.log("arr",t),this.http({url:"/api/Address/UpdateAddress",method:"POST",data:{addressid:e.addressDTO.addressid,userName:"wangfujun",contact:e.addressDTO.contact,contactinfo:e.addressDTO.contactinfo,detail:e.addressDTO.detail,cityCode:e.cityCode,provincename:t[0],cityname:t[1],countyname:t[2],isdefault:0},success:function(e){uni.showToast({title:"保存地址成功",icon:"none"},2e3),setTimeout((function(){uni.navigateBack({delta:1})}),2e3)}})}},onLoad:function(e){var t=this;t.addressDTO=JSON.parse(e.item),console.log("ceshi",t.addressDTO),t.city=t.addressDTO.provincename+"-"+t.addressDTO.cityname+"-"+t.addressDTO.countyname,console.log("获取的城市获取的城市获取的城市"+t.city),t.cityCode=t.addressDTO.cityCode,"1"===t.addressDTO.checkdefault?(t.dot_do_it=!0,t.ischecked=!0,console.log("ceshi1",t.ischecked)):(t.dot_do_it=!1,t.ischecked=!1,console.log("ceshi2",t.ischecked))}};t.default=s},5856:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return a}));var a={yjCityPicker:i("2c6c").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"view"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"content_list"},[i("v-uni-view",{staticClass:"L0"},[i("v-uni-view",{staticClass:"L0-consignee"},[e._v("收货人")]),i("v-uni-input",{staticClass:"L0-right",attrs:{type:"text",placeholder:"请输入收货人姓名"},model:{value:e.addressDTO.contact,callback:function(t){e.$set(e.addressDTO,"contact",t)},expression:"addressDTO.contact"}})],1),i("v-uni-view",{staticClass:"L0"},[i("v-uni-view",{staticClass:"L0-consignee"},[e._v("手机号码")]),i("v-uni-input",{staticClass:"L0-right",attrs:{type:"text",placeholder:"请输入手机号码"},model:{value:e.addressDTO.contactinfo,callback:function(t){e.$set(e.addressDTO,"contactinfo",t)},expression:"addressDTO.contactinfo"}})],1),i("v-uni-view",{staticClass:"L0",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addressShow=!0}}},[i("v-uni-view",{staticClass:"L0-consignee"},[e._v("所在地区")]),i("v-uni-view",{staticClass:"L0-right"},[i("v-uni-view",{staticClass:"right-view"},[i("v-uni-view",[i("v-uni-view",{class:""==e.city?"placeholder":"input",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showCityPicker.apply(void 0,arguments)}}},[e._v(e._s(""==e.city?"例如：陕西省/西安市/碑林区":e.city))]),i("yj-city-picker",{ref:"mpvueCityPicker",attrs:{pickerValueDefault:e.pickerValueDefault},on:{onChange:function(t){arguments[0]=t=e.$handleEvent(t),e.onChange.apply(void 0,arguments)},onCancel:function(t){arguments[0]=t=e.$handleEvent(t),e.onCancel.apply(void 0,arguments)},onConfirm:function(t){arguments[0]=t=e.$handleEvent(t),e.onConfirm.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"iconfont icon-arrowr right_icon"})],1)],1)],1),i("v-uni-view",{staticClass:"L0"},[i("v-uni-view",{staticClass:"L0-consignee"},[e._v("详细地址")]),i("v-uni-input",{staticClass:"L0-right",attrs:{type:"text",placeholder:"请输入详细地址"},model:{value:e.addressDTO.detail,callback:function(t){e.$set(e.addressDTO,"detail",t)},expression:"addressDTO.detail"}})],1)],1)],1),i("v-uni-view",{staticClass:" defaultaddress"},[i("v-uni-view",{staticClass:"isdefault"},[i("v-uni-view",{staticClass:"defaulttitle"},[e._v("设为默认")]),i("v-uni-switch",{staticClass:"defaultchecked",staticStyle:{transform:"scale(0.7,0.7)"},attrs:{disabled:e.dot_do_it,checked:e.ischecked},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.switch1Change.apply(void 0,arguments)},click:function(t){arguments[0]=t=e.$handleEvent(t),e.dot_set_it.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"saveaddress"},[i("v-uni-view",{staticClass:"save-addaddress"},[i("v-uni-view",{staticClass:"save-addresstext",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.saveClick()}}},[e._v("保存")])],1)],1)],1)},s=[]},"7f4a":function(e,t,i){var a=i("e17b");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("d4d54e10",a,!0,{sourceMap:!1,shadowMode:!1})},"86a1":function(e,t,i){"use strict";i.r(t);var a=i("4510"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,(function(){return a[e]}))}(s);t["default"]=n.a},c560:function(e,t,i){"use strict";i.r(t);var a=i("5856"),n=i("86a1");for(var s in n)"default"!==s&&function(e){i.d(t,e,(function(){return n[e]}))}(s);i("d498");var o,d=i("f0c5"),c=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"517a5b6e",null,!1,a["a"],o);t["default"]=c.exports},d498:function(e,t,i){"use strict";var a=i("7f4a"),n=i.n(a);n.a},e17b:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.placeholder[data-v-517a5b6e]{height:%?80?%;font-size:%?28?%;font-weight:400;color:#888;line-height:%?80?%}.input[data-v-517a5b6e]{height:%?80?%;font-size:%?28?%;font-weight:400;color:#333;line-height:%?80?%}uni-page-body[data-v-517a5b6e]{background-color:#f2f2f2}.view[data-v-517a5b6e]{width:%?750?%}.view .content[data-v-517a5b6e]{width:100%;height:%?448?%;padding:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box}.view .content .content_list[data-v-517a5b6e]{background:#fff;height:%?408?%;-webkit-border-radius:%?14?%;border-radius:%?14?%}.view .content .content_list .L0[data-v-517a5b6e]{margin-left:%?20?%;width:%?690?%;height:%?102?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:%?1?% solid hsla(0,0%,88.6%,.8)}.view .content .content_list .L0 .L0-consignee[data-v-517a5b6e]{margin-left:%?11?%;width:%?130?%;font-size:%?28?%;margin-left:%?11?%;font-weight:400;color:#666;font-family:SourceHanSansSC-Regular}.view .content .content_list .L0 .L0-right[data-v-517a5b6e]{margin-left:%?60?%;font-size:%?28?%;font-family:Source Han Sans SC;font-weight:400;color:#333;width:%?450?%}.view .content .content_list .L0 .L0-right .right-view[data-v-517a5b6e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.view .defaultaddress[data-v-517a5b6e]{width:%?750?%}.view .defaultaddress .isdefault[data-v-517a5b6e]{width:%?710?%;height:%?102?%;background:#fff;-webkit-border-radius:%?5?%;border-radius:%?5?%;margin-left:%?20?%;margin-right:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.view .defaultaddress .isdefault .defaulttitle[data-v-517a5b6e]{display:block;margin-left:%?30?%;margin-top:%?37?%;margin-bottom:%?37?%;font-size:%?28?%;font-family:Source Han Sans SC;font-weight:400;color:#333}.view .defaultaddress .isdefault .defaultchecked[data-v-517a5b6e]{display:block;padding-right:%?30?%;padding-top:%?27?%;padding-bottom:%?27?%}.view .saveaddress[data-v-517a5b6e]{width:%?750?%;height:%?162?%;background:#fff;-webkit-box-shadow:%?0?% %?3?% %?5?% %?0?% hsla(0,0%,78.8%,.15);box-shadow:%?0?% %?3?% %?5?% %?0?% hsla(0,0%,78.8%,.15);position:relative;left:0;position:fixed;bottom:0;width:100%;z-index:100}.view .saveaddress .save-addaddress[data-v-517a5b6e]{width:%?710?%;height:%?80?%;background:-webkit-gradient(linear,left top,right top,from(#eb891b),to(#bb2822));background:-webkit-linear-gradient(left,#eb891b,#bb2822);background:linear-gradient(90deg,#eb891b,#bb2822);-webkit-border-radius:%?40?%;border-radius:%?40?%;margin:%?14?% %?20?% %?68?% %?20?%;text-align:center;position:absolute}.view .saveaddress .save-addaddress .save-addresstext[data-v-517a5b6e]{font-size:%?32?%;font-family:Source Han Sans SC;font-weight:400;color:#fff;line-height:%?70?%}body.?%PAGE?%[data-v-517a5b6e]{background-color:#f2f2f2}',""]),e.exports=t}}]);