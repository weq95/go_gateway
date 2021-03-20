(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c81f54c"],{"22ce":function(e,t,r){"use strict";r.d(t,"f",(function(){return i})),r.d(t,"d",(function(){return l})),r.d(t,"b",(function(){return s})),r.d(t,"i",(function(){return o})),r.d(t,"e",(function(){return c})),r.d(t,"g",(function(){return n})),r.d(t,"c",(function(){return u})),r.d(t,"j",(function(){return _})),r.d(t,"a",(function(){return m})),r.d(t,"h",(function(){return d}));var a=r("b775");function i(e){return Object(a["a"])({url:"/service/service_list",method:"get",params:e})}function l(e){return Object(a["a"])({url:"/service/service_delete",method:"get",params:e})}function s(e){return Object(a["a"])({url:"/service/service_add_http",method:"post",data:e})}function o(e){return Object(a["a"])({url:"/service/service_update_http",method:"post",data:e})}function c(e){return Object(a["a"])({url:"/service/service_detail",method:"get",params:e})}function n(e){return Object(a["a"])({url:"/service/service_stat",method:"get",params:e})}function u(e){return Object(a["a"])({url:"/service/service_add_tcp",method:"post",data:e})}function _(e){return Object(a["a"])({url:"/service/service_update_tcp",method:"post",data:e})}function m(e){return Object(a["a"])({url:"/service/service_add_grpc",method:"post",data:e})}function d(e){return Object(a["a"])({url:"/service/service_update_grpc",method:"post",data:e})}},7207:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mixin-components-container"},[r("el-row",[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[!1===e.isEdit?r("span",[e._v("创建HTTP服务")]):e._e(),e._v(" "),!0===e.isEdit?r("span",[e._v("修改HTTP服务")]):e._e()]),e._v(" "),r("div",{staticStyle:{"margin-bottom":"50px"}},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"140px"}},[r("el-form-item",{staticClass:"is-required",attrs:{label:"服务名称"}},[r("el-input",{attrs:{placeholder:"6-128位字母数字下划线",disabled:!0===e.isEdit},model:{value:e.form.service_name,callback:function(t){e.$set(e.form,"service_name",t)},expression:"form.service_name"}})],1),e._v(" "),r("el-form-item",{staticClass:"is-required",attrs:{label:"服务描述"}},[r("el-input",{attrs:{placeholder:"最多255字符，必填"},model:{value:e.form.service_desc,callback:function(t){e.$set(e.form,"service_desc",t)},expression:"form.service_desc"}})],1),e._v(" "),r("el-form-item",{staticClass:"is-required",attrs:{label:"接入类型"}},[r("el-input",{staticClass:"input-with-select",attrs:{disabled:!0===e.isEdit,placeholder:"路径格式：/user/,域名格式：www.test.com"},model:{value:e.form.rule,callback:function(t){e.$set(e.form,"rule",t)},expression:"form.rule"}},[r("el-select",{staticStyle:{width:"80px"},attrs:{slot:"prepend",placeholder:"请选择",disabled:!0===e.isEdit},slot:"prepend",model:{value:e.form.rule_type,callback:function(t){e.$set(e.form,"rule_type",t)},expression:"form.rule_type"}},[r("el-option",{attrs:{label:"路径",value:0}}),e._v(" "),r("el-option",{attrs:{label:"域名",value:1}})],1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"支持https"}},[r("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.form.need_https,callback:function(t){e.$set(e.form,"need_https",t)},expression:"form.need_https"}}),e._v(" "),r("span",{staticStyle:{color:"#606266","font-weight":"700"}},[e._v("   支持strip_uri  ")]),e._v(" "),r("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.form.need_strip_uri,callback:function(t){e.$set(e.form,"need_strip_uri",t)},expression:"form.need_strip_uri"}}),e._v(" "),r("span",{staticStyle:{color:"#606266","font-weight":"700"}},[e._v("   支持websocket  ")]),e._v(" "),r("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.form.need_websocket,callback:function(t){e.$set(e.form,"need_websocket",t)},expression:"form.need_websocket"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"URL重写"}},[r("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"格式：^/gateway/test_service(.*) $1 多条换行"},model:{value:e.form.url_rewrite,callback:function(t){e.$set(e.form,"url_rewrite",t)},expression:"form.url_rewrite"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Header转换"}},[r("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"header转换支持 add(增加)/del(删除)/edit(修改) 格式：add headerName headValue"},model:{value:e.form.header_transfor,callback:function(t){e.$set(e.form,"header_transfor",t)},expression:"form.header_transfor"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"开启验证"}},[r("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.form.open_auth,callback:function(t){e.$set(e.form,"open_auth",t)},expression:"form.open_auth"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"IP白名单"}},[r("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"格式：127.0.0.1 多条换行，白名单优先于黑名单"},model:{value:e.form.white_list,callback:function(t){e.$set(e.form,"white_list",t)},expression:"form.white_list"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"IP黑名单"}},[r("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"格式：127.0.0.1 多条换行，白名单优先于黑名单"},model:{value:e.form.black_list,callback:function(t){e.$set(e.form,"black_list",t)},expression:"form.black_list"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"客户端限流"}},[r("el-input",{attrs:{placeholder:"0表示无限制"},model:{value:e.form.clientip_flow_limit,callback:function(t){e.$set(e.form,"clientip_flow_limit",t)},expression:"form.clientip_flow_limit"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"服务端限流"}},[r("el-input",{attrs:{placeholder:"0表示无限制"},model:{value:e.form.service_flow_limit,callback:function(t){e.$set(e.form,"service_flow_limit",t)},expression:"form.service_flow_limit"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"轮询方式"}},[r("el-radio-group",{model:{value:e.form.round_type,callback:function(t){e.$set(e.form,"round_type",t)},expression:"form.round_type"}},[r("el-radio",{attrs:{label:0}},[e._v("random")]),e._v(" "),r("el-radio",{attrs:{label:1}},[e._v("round-robin")]),e._v(" "),r("el-radio",{attrs:{label:2}},[e._v("weight_round-robin")]),e._v(" "),r("el-radio",{attrs:{label:3}},[e._v("ip_hash")])],1)],1),e._v(" "),r("el-form-item",{staticClass:"is-required",attrs:{label:"IP列表"}},[r("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"格式：127.0.0.1:80 多条换行"},model:{value:e.form.ip_list,callback:function(t){e.$set(e.form,"ip_list",t)},expression:"form.ip_list"}})],1),e._v(" "),r("el-form-item",{staticClass:"is-required",attrs:{label:"权重列表"}},[r("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"格式：50 多条换行"},model:{value:e.form.weight_list,callback:function(t){e.$set(e.form,"weight_list",t)},expression:"form.weight_list"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"建立连接超时"}},[r("el-input",{attrs:{placeholder:"单位s，0表示无限制"},model:{value:e.form.upstream_connect_timeout,callback:function(t){e.$set(e.form,"upstream_connect_timeout",t)},expression:"form.upstream_connect_timeout"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"获取header超时"}},[r("el-input",{attrs:{placeholder:"单位s，0表示无限制"},model:{value:e.form.upstream_header_timeout,callback:function(t){e.$set(e.form,"upstream_header_timeout",t)},expression:"form.upstream_header_timeout"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"链接最大空闲时间"}},[r("el-input",{attrs:{placeholder:"单位s，0表示无限制"},model:{value:e.form.upstream_idle_timeout,callback:function(t){e.$set(e.form,"upstream_idle_timeout",t)},expression:"form.upstream_idle_timeout"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"最大空闲链接数"}},[r("el-input",{attrs:{placeholder:"0表示无限制"},model:{value:e.form.upstream_max_idle,callback:function(t){e.$set(e.form,"upstream_max_idle",t)},expression:"form.upstream_max_idle"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary",disabled:e.submitButDisabled},on:{click:e.handleSubmit}},[e._v("立即提交")])],1)],1)],1)])],1)],1)},i=[],l=(r("c5f6"),r("a481"),r("22ce")),s={name:"ServiceCreateHttp",data:function(){return{isEdit:!1,submitButDisabled:!1,form:{service_name:"",service_desc:"",rule_type:0,rule:"",need_https:0,need_websocket:0,need_strip_uri:1,url_rewrite:"",header_transfor:"",round_type:2,ip_list:"",weight_list:"",upstream_connect_timeout:"",upstream_header_timeout:"",upstream_idle_timeout:"",upstream_max_idle:"",open_auth:0,black_list:"",white_list:"",clientip_flow_limit:"",service_flow_limit:""}}},created:function(){var e=this.$route.params&&this.$route.params.id;e>0&&(this.isEdit=!0,this.fetchData(e))},methods:{fetchData:function(e){var t=this,r={id:e};Object(l["e"])(r).then((function(e){t.form.id=e.data.info.id,t.form.load_type=e.data.info.load_type,t.form.service_name=e.data.info.service_name,t.form.service_desc=e.data.info.service_desc,t.form.rule_type=e.data.http_rule.rule_type,t.form.rule=e.data.http_rule.rule,t.form.need_https=e.data.http_rule.need_https,t.form.need_websocket=e.data.http_rule.need_websocket,t.form.need_strip_uri=e.data.http_rule.need_strip_uri,t.form.url_rewrite=e.data.http_rule.url_rewrite.replace(/,/g,"\n"),t.form.header_transfor=e.data.http_rule.header_transfor.replace(/,/g,"\n"),t.form.round_type=e.data.load_balance.round_type,t.form.round_type=e.data.load_balance.round_type,t.form.ip_list=e.data.load_balance.ip_list.replace(/,/g,"\n"),t.form.weight_list=e.data.load_balance.weight_list.replace(/,/g,"\n"),t.form.upstream_connect_timeout=e.data.load_balance.upstream_connect_timeout,t.form.upstream_header_timeout=e.data.load_balance.upstream_header_timeout,t.form.upstream_idle_timeout=e.data.load_balance.upstream_idle_timeout,t.form.upstream_max_idle=e.data.load_balance.upstream_max_idle,t.form.upstream_max_idle=e.data.load_balance.upstream_max_idle,t.form.open_auth=e.data.access_control.open_auth,t.form.black_list=e.data.access_control.black_list.replace(/,/g,"\n"),t.form.white_list=e.data.access_control.white_list.replace(/,/g,"\n"),t.form.clientip_flow_limit=e.data.access_control.clientip_flow_limit,t.form.service_flow_limit=e.data.access_control.service_flow_limit})).catch((function(){}))},handleSubmit:function(){var e=this;this.submitButDisabled=!0;var t=Object.assign({},this.form);console.log(t),t.url_rewrite=t.url_rewrite.replace(/\n/g,","),t.header_transfor=t.header_transfor.replace(/\n/g,","),t.ip_list=t.ip_list.replace(/\n/g,","),t.weight_list=t.weight_list.replace(/\n/g,","),t.black_list=t.black_list.replace(/\n/g,","),t.white_list=t.white_list.replace(/\n/g,","),t.service_flow_limit=Number(t.service_flow_limit),t.clientip_flow_limit=Number(t.clientip_flow_limit),t.upstream_connect_timeout=Number(t.upstream_connect_timeout),t.upstream_header_timeout=Number(t.upstream_header_timeout),t.upstream_idle_timeout=Number(t.upstream_idle_timeout),t.upstream_max_idle=Number(t.upstream_max_idle),this.isEdit?Object(l["i"])(t).then((function(t){e.submitButDisabled=!1,e.$notify({title:"Success",message:"修改成功",type:"success",duration:2e3})})).catch((function(){e.submitButDisabled=!1})):Object(l["b"])(t).then((function(t){e.submitButDisabled=!1,e.$notify({title:"Success",message:"添加成功",type:"success",duration:2e3})})).catch((function(){e.submitButDisabled=!1}))}}},o=s,c=(r("c683"),r("2877")),n=Object(c["a"])(o,a,i,!1,null,"78a66be8",null);t["default"]=n.exports},b521:function(e,t,r){},c683:function(e,t,r){"use strict";var a=r("b521"),i=r.n(a);i.a}}]);