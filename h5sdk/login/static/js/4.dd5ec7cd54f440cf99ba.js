webpackJsonp([4],{411:function(t,i,s){"use strict";function n(t){s(436)}Object.defineProperty(i,"__esModule",{value:!0});var a=s(424),c=s(437),o=s(110),e=n,l=o(a.a,c.a,!1,e,null,null);i.default=l.exports},424:function(t,i,s){"use strict";s(159);i.a={name:"noMobileAndMail",methods:{telclick:function(){jsBridge.call4Phone({phoneNumber:"4000070958",tel:"4000070958"},function(t){})},goBackClick:function(){common.isApp()?jsBridge.shutDown({},function(t){}):history.go(-1)},goAsk:function(){window.openCustomerServiceCenter()}}}},436:function(t,i){},437:function(t,i,s){"use strict";var n=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"main"},[s("header",{staticClass:"bar bar_nav"},[s("a",{staticClass:"top_icon icon_back fl",attrs:{href:"javascript:;"},on:{click:t.goBackClick}},[s("i",{staticClass:"icon iconfont icon_leftarrow"})]),t._v(" "),s("div",{staticClass:"top_title"},[t._v("找回密码")])]),t._v(" "),s("div",{staticClass:"content login_page"},[s("div",{staticClass:"list_block"},[s("div",{staticClass:"list_top"},[t._v("由于您未完成邮箱或手机认证，请联系客服找回密码")]),t._v(" "),s("div",{staticClass:"list_box"},[s("a",{on:{click:function(i){return i.stopPropagation(),t.goAsk(i)}}},[t._v("在线咨询")]),t._v(" "),t.isApptag?s("div",{staticClass:"btn_white",on:{click:t.telclick}},[t._v("拨打电话")]):s("a",{staticClass:"btn_white",attrs:{href:"tel:4000070958"}},[t._v("拨打电话")])])])])])},a=[],c={render:n,staticRenderFns:a};i.a=c}});