webpackJsonp([6],{U3an:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Dd8w"),n=a.n(s),i=a("oqQY"),r=a.n(i),d=a("NYxO"),u={data:function(){return{dayjs:r.a}},computed:n()({},Object(d.d)({version:function(t){return t.d2admin.version},releases:function(t){return t.d2admin.releases},update:function(t){return t.d2admin.update},updateNotify:function(t){return t.d2admin.updateNotify}})),methods:n()({},Object(d.c)(["d2adminUpdateNotifySet"]))},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("d2-container",{staticClass:"page",attrs:{type:"full"}},[a("template",{slot:"header"},[t._v("D2Admin 版本检查")]),t._v(" "),a("div",{staticClass:"banner"},[a("img",{attrs:{src:t.$assetsPublicPath+"static/image/icon/500/d2admin.png"}})]),t._v(" "),t.update?a("div",{staticClass:"releases"},[a("h1",[t._v("有新版本 "+t._s(t.releases.tag_name))]),t._v(" "),a("p",[t._v("更新日期 "+t._s(t.dayjs(t.releases.created_at).format("YYYY年M月D日")))]),t._v(" "),a("a",{staticClass:"el-button el-button--primary d2-mb",attrs:{href:t.releases.html_url}},[t._v(t._s(t.releases.html_url))])]):a("div",{staticClass:"up2date"},[t._v("\n    已经是最新版本\n    "),a("p",{staticClass:"d2-mb-0"},[a("a",{staticClass:"el-button el-button--primary",attrs:{href:"https://github.com/d2-projects/d2-admin",target:"blank"}},[a("d2-icon",{staticClass:"d2-mr-5",attrs:{name:"github"}}),t._v("\n        D2Admin on Github\n      ")],1)])]),t._v(" "),a("template",{slot:"footer"},[a("el-button",{attrs:{type:t.updateNotify?"primary":"default",size:"mini"},on:{click:function(e){t.d2adminUpdateNotifySet(!t.updateNotify)}}},[t._v("\n      "+t._s(t.updateNotify?"关闭更新提醒 (当前:打开)":"打开更新提醒 (当前:关闭)")+"\n    ")])],1)],2)},staticRenderFns:[]};var l=a("VU/8")(u,o,!1,function(t){a("kEs7")},"data-v-78118725",null);e.default=l.exports},kEs7:function(t,e){}});
//# sourceMappingURL=6.eed94738593c1a7c919c.js.map