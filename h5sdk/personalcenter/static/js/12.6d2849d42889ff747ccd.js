webpackJsonp([12,32],{441:function(e,o,t){t(545);var i=t(119)(t(487),t(622),null,null);e.exports=i.exports},462:function(e,o,t){"use strict";var i="@@clickoutsideContext";o.a={bind:function(e,o,t){var s=function(o){t.context&&!e.contains(o.target)&&t.context[e[i].methodName]()};e[i]={documentHandler:s,methodName:o.expression,arg:o.arg||"click"},document.addEventListener(e[i].arg,s)},update:function(e,o){e[i].methodName=o.expression},unbind:function(e){document.removeEventListener(e[i].arg,e[i].documentHandler)},install:function(e){e.directive("clickoutside",{bind:this.bind,unbind:this.unbind})}}},487:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var i=t(120),s=t.n(i),n=t(77),d=t(462);o.default={name:"changePhoneNew",data:function(){return{newMobile:"",stepMobiCode:{title:"",imgCode:"",tips:"",mobiCode:"",sCodeSrc:"",sCodeIdentity:"",isGetCode:!1,disableGetCode:!0},mobileActive:!1,imgCodeActive:!1,mobiCodeActive:!1,countDown:60}},computed:{stepMobiCodeSrc:function(){return this.stepMobiCode.sCodeSrc?"data:image/jpg;base64,"+this.stepMobiCode.sCodeSrc:""}},directives:{Clickoutside:d.a},created:function(){common.setPageTitle("1药网手机修改"),this.getImgCode()},methods:{mobileCloseActive:function(){this.mobileActive=!1},imgCodeCloseActive:function(){this.imgCodeActive=!1},mobiCodeCloseActive:function(){this.mobiCodeActive=!1},goback:function(){common.isApp()?jsBridge.shutDown({},function(e){}):this.$router.back()},countMobileCode:function(e){var o=this;if(console.log(e),0==this.countDown)return this.stepMobiCode.disableGetCode=!1,e.innerText="获取验证码",void(this.countDown=60);this.stepMobiCode.disableGetCode=!0,e.innerText=this.countDown+"s后重新发送",this.countDown--,setTimeout(function(){o.countMobileCode(e)},1e3)},onPicCodeInput:function(){this.stepMobiCode.isGetCode||(this.stepMobiCode.disableGetCode=!(this.stepMobiCode.imgCode.length>0))},getImgCode:function(){var e=this,o={};this.requestNetUtil("get","dev","xpassport/getPicCode",o,function(o){var t=o;t&&(e.stepMobiCode.sCodeSrc=t.imgsrc,e.stepMobiCode.sCodeIdentity=t.identity)},function(e){console.log("failed net: "+e)})},getMobiCode:function(e){if(this.stepMobiCode.tips="",this.newMobile.length<=0)return void(this.stepMobiCode.tips="请输入新手机号码");if(this.stepMobiCode.imgCode.length<=0)return void(this.stepMobiCode.tips="请输入图片验证码");if(0==/^1[3-9][0-9]{9}$/.test(this.newMobile))return void(this.stepMobiCode.tips="手机号码格式不对");var o={identity:this.stepMobiCode.sCodeIdentity,code:this.stepMobiCode.imgCode,mobile:this.newMobile,type:3},t=this,o={identity:this.stepMobiCode.sCodeIdentity,code:this.stepMobiCode.imgCode,mobile:this.newMobile,type:3};this.requestNetUtil("post","dev","xpassport/sendSms",o,function(o){t.stepMobiCode.isGetCode=!0,t.stepMobiCode.disableGetCode=!0,t.countMobileCode(e.target)},function(e){console.log("failed net: "+e)})},sureChangeMobile:function(){if(this.stepMobiCode.tips="",this.newMobile.length<=0)return void(this.stepMobiCode.tips="请输入新手机号码");if(0==/^1[3-9][0-9]{9}$/.test(this.newMobile))return void(this.stepMobiCode.tips="手机号码格式不对");if(this.stepMobiCode.imgCode.length<=0)return void(this.stepMobiCode.tips="请输入图片验证码");if(this.stepMobiCode.mobiCode.length<=0)return void(this.stepMobiCode.tips="请输入手机验证码");var e=this,o={smscode:this.stepMobiCode.mobiCode,mobile:this.newMobile};this.requestNetUtil("post","dev","xpassport/updateLoginMobile",o,function(o){common.msgShow("修改手机号码成功"),common.isApp()?(common.versionCode()>=604&&jsBridge.updateLoginInfo({loginMobile:e.newMobile},function(e){console.log("update mobile:"+s()(e))}),setTimeout(function(){jsBridge.shutDown({},function(e){})},2e3)):setTimeout(function(){e.$router.push({path:"/"})},2e3)},function(e){console.log("failed net: "+e)})},requestNetUtil:function(e,o,t,i,s,d){var c=this;n.c.http({showLoad:!0,method:e,urlPrefix:o,url:t,params:i,_timeout:1e4}).then(function(e){console.info("rtn_111: "+e.body.rtn_ext),console.info("datas: "+e.body.data);var o=c;"0"===e.body.rtn_code?s&&s(e.body.data):1*e.body.rtn_code==2?common.isApp()?jsBridge.toNativedetail({topage:"login"},function(e){}):window.location.href="//m.111.com.cn/yyw/wap/login/#/?returnUrl="+encodeURIComponent("//m.111.com.cn/yyw/wap/personalcenter/#/accountCenter"):("xpassport/getPicCode"==t?common.msgShow("抱歉，请求失败，请稍候重试"):(o.stepMobiCode.isGetCode=!1,o.stepMobiCode.disableGetCode=!1,o.stepMobiCode.mobiCode="",o.stepMobiCode.imgCode="",o.stepMobiCode.tips=e.body.rtn_tip),o.getImgCode())},function(e){common.msgShow("网络开小差了，请稍候重试"),d&&d(e)})}}}},545:function(e,o){},622:function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"main"},[t("div",{staticStyle:{position:"fixed",width:"100%",background:"#fff",height:"100%","z-index":"0"}}),e._v(" "),t("header",{staticClass:"bar bar_nav"},[t("a",{staticClass:"top_icon icon_back fl",attrs:{href:"javascript:;"}},[t("i",{staticClass:"icon iconfont icon_leftarrow",on:{click:e.goback}})]),e._v(" "),t("div",{staticClass:"top_title"},[e._v("手机修改")])]),e._v(" "),t("div",{staticClass:"content login_page"},[t("div",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:e.mobileCloseActive,expression:"mobileCloseActive"}],staticClass:"item_control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.newMobile,expression:"newMobile"}],staticClass:"item_input",attrs:{type:"tel",placeholder:"请输入新的手机号",maxlength:"11",autocomplete:"off"},domProps:{value:e._s(e.newMobile)},on:{focus:function(o){e.mobileActive=!0},input:function(o){o.target.composing||(e.newMobile=o.target.value)}}}),e._v(" "),t("i",{directives:[{name:"show",rawName:"v-show",value:e.newMobile&&e.mobileActive,expression:"newMobile && mobileActive"}],staticClass:"icon_clear show",on:{click:function(o){e.newMobile=""}}})]),e._v(" "),t("div",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:e.imgCodeCloseActive,expression:"imgCodeCloseActive"}],staticClass:"item_control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.stepMobiCode.imgCode,expression:"stepMobiCode.imgCode"}],staticClass:"item_input img_code",attrs:{type:"text",placeholder:"图片验证码",autocomplete:"off",maxlength:"4"},domProps:{value:e._s(e.stepMobiCode.imgCode)},on:{focus:function(o){e.imgCodeActive=!0},keyup:e.onPicCodeInput,input:function(o){o.target.composing||(e.stepMobiCode.imgCode=o.target.value)}}}),e._v(" "),t("i",{directives:[{name:"show",rawName:"v-show",value:e.stepMobiCode.imgCode&&e.imgCodeActive,expression:"stepMobiCode.imgCode && imgCodeActive"}],staticClass:"icon_clear show",on:{click:function(o){e.stepMobiCode.imgCode=""}}}),e._v(" "),t("div",{staticClass:"code_box code_text",on:{click:e.getImgCode}},[t("img",{attrs:{src:e.stepMobiCodeSrc}}),e._v(" "),t("div",{staticClass:"change_code"},[e._v("换一张")])])]),e._v(" "),t("div",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:e.mobiCodeCloseActive,expression:"mobiCodeCloseActive"}],staticClass:"item_control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.stepMobiCode.mobiCode,expression:"stepMobiCode.mobiCode"}],staticClass:"item_input img_code",attrs:{type:"text",placeholder:"手机验证码",autocomplete:"off",maxlength:"6"},domProps:{value:e._s(e.stepMobiCode.mobiCode)},on:{focus:function(o){e.mobiCodeActive=!0},input:function(o){o.target.composing||(e.stepMobiCode.mobiCode=o.target.value)}}}),e._v(" "),t("i",{directives:[{name:"show",rawName:"v-show",value:e.stepMobiCode.mobiCode&&e.mobiCodeActive,expression:"stepMobiCode.mobiCode && mobiCodeActive"}],staticClass:"icon_clear show",on:{click:function(o){e.stepMobiCode.mobiCode=""}}}),e._v(" "),t("button",{staticClass:"btn_code",attrs:{disabled:e.stepMobiCode.disableGetCode},on:{click:e.getMobiCode}},[e._v("获取验证码")])]),e._v(" "),t("div",{staticClass:"item_tips"},[t("p",[e._v(e._s(e.stepMobiCode.tips))])]),e._v(" "),t("button",{staticClass:"btn_default btn_red btn_block mt20",attrs:{id:"btn_submit"},on:{click:e.sureChangeMobile}},[e._v("确定")])])])},staticRenderFns:[]}}});
//# sourceMappingURL=12.6d2849d42889ff747ccd.js.map