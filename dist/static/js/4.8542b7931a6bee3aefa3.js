webpackJsonp([4],{"//Yo":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("QUe6"),i=a("mtWM"),o=a.n(i),l=a("Q5rI"),n=a("T452");var s=a("lbHh"),c=a.n(s),u={data:function(){return{customerNumId:c.a.get("__user__customernumid"),currentPage:1,pageSize:20,curPage:1,pgSize:10,routerDetail:[],searchItem:{routerDetailAliaSearchKey:"",employeeNameSearchKey:""},addItemParam:{routerDetailSeries:"",employeeNumId:""},tableData:[],searching:!1,addDialog:!1,baseCustomers:[],dialogTableVisible:!1,innerVisible:!1}},computed:{totalPage:function(){return this.tableData.length},addTotalPage:function(){return this.baseCustomers.length},tableInlineData:function(){return this.tableData.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)},tablePopData:function(){return this.baseCustomers.slice((this.curPage-1)*this.pgSize,this.curPage*this.pgSize)}},created:function(){this._getRouterAliaList({customerNumId:this.customerNumId}),this._getAllRouterAndEmployee({current:this.currentPage,customerNumId:this.customerNumId,employeeNameSearchKey:this.searchItem.employeeNameSearchKey,pageSize:1e3,routerDetailAliaSearchKey:this.searchItem.routerDetailAliaSearchKey})},methods:{_addRouterToEmployee:function(e){var t=this;Object(r.a)(e).then(function(e){0===e.code&&t.$message({type:"success",message:"添加成功!"})}).catch(function(e){console.log(e)})},_getAllEmployee:function(e){var t=this;(function(e){var t=n.a.HOST+"/getAllEmployee",a=Object(l.e)(),r={sid:Object(l.b)(),timestamp:a,params:Object(l.a)(e),sign:Object(l.c)(e,a)};return o.a.get(t,{params:r})})(e).then(function(e){0===e.code&&(t.baseCustomers=e.baseCustomers)}).catch(function(e){console.log(e)})},_deleteRouterAndEmployee:function(e,t){var a=this;Object(r.b)(e).then(function(e){0===e.code&&(a.$message({type:"success",message:"删除成功!"}),a.tableData.splice(t,1))}).catch(function(e){console.log(e)})},_getAllRouterAndEmployee:function(e){var t=this;this.searching=!0,Object(r.c)(e).then(function(e){0===e.code&&(t.tableData=e.employeeRouterModel,t.searching=!1)}).catch(function(e){console.log(e)})},_getRouterAliaList:function(e){var t=this;Object(r.d)(e).then(function(e){0===e.code&&(t.routerDetail=e.routerDetail)}).catch(function(e){console.log(e)})},onSearch:function(){var e={current:this.currentPage,customerNumId:this.customerNumId,employeeNameSearchKey:this.searchItem.employeeNameSearchKey,pageSize:this.pageSize,routerDetailAliaSearchKey:this.searchItem.routerDetailAliaSearchKey};this._getAllRouterAndEmployee(e)},onAdd:function(){this.addDialog=!0,this._getAllEmployee({current:this.curPage,customerNumId:this.customerNumId,employeeJobNumSearchKey:"",employeeNameSearchKey:"",jobId:0,pageSize:1e3})},onAddRouterToEmployee:function(e){console.log(e),this.innerVisible=!0,this.addItemParam.employeeNumId=e.customerNumId},onAddRouterToEmployeeComfirm:function(){this.innerVisible=!1,this._addRouterToEmployee({customerNumId:this.customerNumId,employeeNumId:this.addItemParam.employeeNumId,routerDetailSeries:this.addItemParam.routerDetailSeries})},onDelete:function(e,t){var a=this;this.$confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a._deleteRouterAndEmployee({customerNumId:a.customerNumId,series:t.series},e)}).catch(function(){console.log("取消删除")})},handleSizeChange:function(e){console.log("每页 "+e+" 条"),this.pageSize=e},handleCurrentChange:function(e){console.log("当前页: "+e),this.currentPage=e},handleSzChange:function(e){this.pgSize=e},handleCurChange:function(e){this.curPage=e}}},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("d2-container",{staticClass:"page",attrs:{type:"full"}},[[a("el-form",{attrs:{inline:!0,model:e.searchItem}},[a("el-form-item",[a("el-select",{attrs:{placeholder:"线路别名"},model:{value:e.searchItem.routerDetailAliaSearchKey,callback:function(t){e.$set(e.searchItem,"routerDetailAliaSearchKey",t)},expression:"searchItem.routerDetailAliaSearchKey"}},e._l(e.routerDetail,function(e,t){return a("el-option",{key:t,attrs:{label:e.routerAlia,value:e.routerAlia}})}))],1),e._v(" "),a("el-form-item",[a("el-input",{attrs:{placeholder:"调度人姓名"},model:{value:e.searchItem.employeeNameSearchKey,callback:function(t){e.$set(e.searchItem,"employeeNameSearchKey",t)},expression:"searchItem.employeeNameSearchKey"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",loading:e.searching},on:{click:e.onSearch}},[e._v("查询")])],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.onAdd}},[e._v("新增")])],1)],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableInlineData,"highlight-current-row":"",height:"480"}},[a("el-table-column",{attrs:{fixed:"",type:"index",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"",prop:"routerAlia",label:"线路别名"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"",prop:"customerName",label:"调度人姓名"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.onDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,50,100],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalPage},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:"新增调度",visible:e.addDialog},on:{"update:visible":function(t){e.addDialog=t}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tablePopData,"highlight-current-row":"",height:"400"}},[a("el-table-column",{attrs:{fixed:"",type:"index",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"customerName",label:"调度人姓名",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"birthday",label:"生日"}}),e._v(" "),a("el-table-column",{attrs:{prop:"jobNum",label:"工号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sexRealName",label:"性别"}}),e._v(" "),a("el-table-column",{attrs:{prop:"jobRealName",label:"职位"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.onAddRouterToEmployee(t.row)}}},[e._v("添加")])]}}])})],1),e._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.curPage,"page-sizes":[10,20,50,100],"page-size":e.pgSize,layout:"total, sizes, prev, pager, next, jumper",total:e.addTotalPage},on:{"size-change":e.handleSzChange,"current-change":e.handleCurChange}})],1),e._v(" "),a("el-dialog",{attrs:{width:"30%",title:"线路别名",visible:e.innerVisible,"append-to-body":""},on:{"update:visible":function(t){e.innerVisible=t}}},[a("el-form",{attrs:{inline:!0,model:e.searchItem}},[a("el-form-item",[a("el-select",{attrs:{placeholder:"线路别名"},model:{value:e.addItemParam.routerDetailSeries,callback:function(t){e.$set(e.addItemParam,"routerDetailSeries",t)},expression:"addItemParam.routerDetailSeries"}},e._l(e.routerDetail,function(e,t){return a("el-option",{key:t,attrs:{label:e.routerAlia,value:e.series}})}))],1),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.onAddRouterToEmployeeComfirm}},[e._v("确定")])],1)],1)],1)]],2)},staticRenderFns:[]};var d=a("VU/8")(u,m,!1,function(e){a("8a4q")},"data-v-224bf6ae",null);t.default=d.exports},"8a4q":function(e,t){},QUe6:function(e,t,a){"use strict";t.d=function(e){var t=l.a.HOST+"/getRouterAliaList",a=Object(o.e)(),r={sid:Object(o.b)(),timestamp:a,params:Object(o.a)(e),sign:Object(o.c)(e,a)};return i.a.get(t,{params:r})},t.c=function(e){var t=l.a.HOST+"/getAllRouterAndEmployee",a=Object(o.e)(),r={sid:Object(o.b)(),timestamp:a,params:Object(o.a)(e),sign:Object(o.c)(e,a)};return i.a.get(t,{params:r})},t.b=function(e){var t=l.a.HOST+"/deleteRouterAndEmployee",a=Object(o.e)(),r={sid:Object(o.b)(),timestamp:a,params:Object(o.a)(e),sign:Object(o.c)(e,a)};return i.a.get(t,{params:r})},t.a=function(e){var t=l.a.HOST+"/addRouterToEmployee",a=Object(o.e)(),r={sid:Object(o.b)(),timestamp:a,params:Object(o.a)(e),sign:Object(o.c)(e,a)};return i.a.get(t,{params:r})};var r=a("mtWM"),i=a.n(r),o=a("Q5rI"),l=a("T452")}});
//# sourceMappingURL=4.8542b7931a6bee3aefa3.js.map