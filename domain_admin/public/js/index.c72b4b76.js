import{_ as C,d as j,r as E}from"./index.9f2c71b0.js";import{a5 as i,ak as B,S as $,o as w,c as S,Y as t,R as l,a as u,W as g,Q as k,V as z,X as p,aa as q}from"./vendor-vue.6a3d94bb.js";import{C as T}from"./ConnectStatus.2908622b.js";import{F as N}from"./vendor-lib.55369672.js";import{a as P}from"./element-plus.ff3f2c9d.js";import"./element-icon.ce1f4739.js";const H={domain:[{message:"\u57DF\u540D\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}]},K={name:"",props:{row:{type:Object,default:null}},components:{},data(){return{loading:!1,rules:H,form:{domain:"",alias:""}}},computed:{},methods:{async getData(){if(this.loading=!0,this.row){let o={id:this.row.id},s=(await this.$http.getDomainById(o)).data;this.form.domain=s.domain,this.form.alias=s.alias}this.loading=!1},handleCancel(){this.$emit("on-cancel")},handleSubmit(){this.$refs.form.validate(o=>{if(o)this.confirmSubmit();else return!1})},async confirmSubmit(){let o=this.$loading({fullscreen:!0}),a={domain:this.form.domain.trim(),alias:this.form.alias.trim()},s=null;this.row?(a.id=this.row.id,s=await this.$http.updateDomainById(a)):s=await this.$http.addDomain(a),s.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(s.msg),this.$nextTick(()=>{o.close()})}},created(){this.getData()}},L={class:"text-center"};function M(o,a,s,h,n,r){const _=i("el-input"),d=i("el-form-item"),m=i("el-form"),b=i("el-button"),y=B("loading");return $((w(),S("div",null,[t(m,{ref:"form",model:n.form,rules:n.rules,"label-width":"80px"},{default:l(()=>[t(d,{label:"\u57DF\u540D",prop:"domain"},{default:l(()=>[t(_,{type:"text",modelValue:n.form.domain,"onUpdate:modelValue":a[0]||(a[0]=f=>n.form.domain=f),placeholder:"\u8BF7\u8F93\u5165\u57DF\u540D"},null,8,["modelValue"])]),_:1}),t(d,{label:"\u5907\u6CE8",prop:"alias"},{default:l(()=>[t(_,{type:"textarea",modelValue:n.form.alias,"onUpdate:modelValue":a[1]||(a[1]=f=>n.form.alias=f),rows:3,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),u("div",L,[t(b,{onClick:r.handleCancel},{default:l(()=>[g("\u53D6 \u6D88")]),_:1},8,["onClick"]),t(b,{type:"primary",onClick:r.handleSubmit},{default:l(()=>[g("\u786E \u5B9A")]),_:1},8,["onClick"])])])),[[y,n.loading]])}const Q=C(K,[["render",M]]),W={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:Q},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91":"\u6DFB\u52A0"},dialogVisible:{get(){return this.visible},set(o){this.$emit("update:visible",o)}}},methods:{handleClose(){this.$emit("update:visible",!1)},handleOpen(){this.$emit("update:visible",!0)},handleSuccess(){this.handleClose(),this.$emit("on-success")}},created(){}};function X(o,a,s,h,n,r){const _=i("DataForm"),d=i("el-dialog");return w(),k(d,{title:r.dialogTitle,modelValue:r.dialogVisible,"onUpdate:modelValue":a[0]||(a[0]=m=>r.dialogVisible=m),width:"400px",center:"","append-to-body":"","lock-scroll":!1},{default:l(()=>[r.dialogVisible?(w(),k(_,{key:0,row:s.row,onOnCancel:r.handleClose,onOnSuccess:r.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):z("",!0)]),_:1},8,["title","modelValue"])}const A=C(W,[["render",X]]),Y={name:"",props:{row:{type:Object,default:null}},components:{ConnectStatus:T},data(){return{form:{domain:"",domain_url:"",ip:"",start_time:"",expire_time:"",check_time:"",connect_status:"",total_days:"",expire_days:"",create_time:"",update_time:"",detail:{issuer:{},subject:{}}},ipInfo:{isp:""}}},computed:{},methods:{async getData(){if(this.row){let o={id:this.row.id};const a=await this.$http.getDomainById(o);if(a.code!=0)return;let s=a.data;this.form.domain=s.domain,this.form.domain_url=s.domain_url,this.form.ip=s.ip,this.form.start_time=s.start_time,this.form.expire_time=s.expire_time,this.form.check_time=s.check_time,this.form.connect_status=s.connect_status,this.form.total_days=s.total_days,this.form.expire_days=s.expire_days,this.form.create_time=s.create_time,this.form.update_time=s.update_time,this.form.detail={issuer:s.detail.issuer||{},subject:s.detail.subject||{}},this.getIpInfo()}},handleCancel(){this.$emit("on-cancel")},async handleUpdateRowDomainInfo(){let o=this.$loading({lock:!0,text:"\u66F4\u65B0\u4E2D"}),a={id:this.row.id};(await this.$http.updateDomainCertInfoById(a)).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.getData()),o.close()},async getIpInfo(){let o={ip:this.form.ip};const a=await this.$http.getIpInfo(o);a.code==0&&(this.ipInfo=a.data)}},created(){this.getData()}},G={class:"domain-detail"},J={class:"mo-form-detail grid grid-cols-2 mt-sm"},Z={class:"truncate"},ee={class:"truncate"},te={class:"truncate"},le=u("span",null,"\xA0",-1),ae=u("span",null,"\xA0",-1),se={class:"flex justify-between flex-1"},ne=u("span",null," \u66F4\u65B0",-1),oe={class:"el-text-color-primary"},ie={class:"truncate"},re={class:"truncate"},ce={class:"truncate"},de={class:"truncate"},ue={class:"text-center mt-md"};function me(o,a,s,h,n,r){const _=i("el-link"),d=i("el-form-item"),m=i("ConnectStatus"),b=i("el-form"),y=i("Refresh"),f=i("el-icon"),x=i("el-button");return w(),S("div",G,[u("div",J,[t(b,{ref:"form",model:n.form,"label-width":"130px"},{default:l(()=>[t(d,{label:"\u57DF\u540D",prop:"domain"},{default:l(()=>[t(_,{underline:!1,href:n.form.domain_url,target:"_blank"},{default:l(()=>[g(p(n.form.domain),1)]),_:1},8,["href"])]),_:1}),t(d,{label:"ip",prop:"ip"},{default:l(()=>[u("span",null,p(n.form.ip||"-"),1)]),_:1}),t(d,{label:"\u57DF\u540D\u8FDE\u63A5\u72B6\u6001",prop:"connect_status"},{default:l(()=>[t(m,{value:n.form.connect_status},null,8,["value"])]),_:1}),t(d,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"create_time"},{default:l(()=>[u("span",null,p(n.form.create_time||"-"),1)]),_:1}),t(d,{label:"\u66F4\u65B0\u65F6\u95F4",prop:"create_time"},{default:l(()=>[u("span",null,p(n.form.update_time||"-"),1)]),_:1}),t(d,{label:"\u9881\u53D1\u8005.\u516C\u7528\u540D",prop:"expire_days"},{default:l(()=>[u("span",Z,p(n.form.detail.issuer.CN||"-"),1)]),_:1}),t(d,{label:"\u9881\u53D1\u8005.\u7EC4\u7EC7",prop:"expire_days"},{default:l(()=>[u("span",ee,p(n.form.detail.issuer.O||"-"),1)]),_:1}),t(d,{label:"\u9881\u53D1\u8005.\u7EC4\u7EC7\u5355\u4F4D",prop:"expire_days"},{default:l(()=>[u("span",te,p(n.form.detail.issuer.OU||"-"),1)]),_:1}),t(d,{label:"\u7269\u7406\u4F4D\u7F6E",prop:"isp"},{default:l(()=>[u("span",null,p(n.ipInfo.country||"-"),1),le,u("span",null,p(n.ipInfo.city||"-"),1),ae,u("span",null,p(n.ipInfo.county||"-"),1)]),_:1})]),_:1},8,["model"]),t(b,{ref:"form",model:n.form,"label-width":"130px"},{default:l(()=>[t(d,{label:"\u8BC1\u4E66\u9881\u53D1\u65F6\u95F4",prop:"start_time"},{default:l(()=>[u("span",null,p(n.form.start_time||"-"),1)]),_:1}),t(d,{label:"\u8BC1\u4E66\u8FC7\u671F\u65F6\u95F4",prop:"expire_time"},{default:l(()=>[u("span",null,p(n.form.expire_time||"-"),1)]),_:1}),t(d,{label:"\u8BC1\u4E66\u68C0\u67E5\u65F6\u95F4",prop:"check_time"},{default:l(()=>[u("div",se,[u("span",null,p(n.form.check_time||"-"),1),t(_,{underline:!1,type:"primary",onClick:r.handleUpdateRowDomainInfo},{default:l(()=>[t(f,null,{default:l(()=>[t(y)]),_:1}),ne]),_:1},8,["onClick"])])]),_:1}),t(d,{label:"\u6709\u6548\u671F\u603B\u5929\u6570",prop:"total_days"},{default:l(()=>[u("span",null,p(n.form.total_days||"-"),1)]),_:1}),t(d,{label:"\u8FC7\u671F\u5269\u4F59\u5929\u6570",prop:"real_time_expire_days"},{default:l(()=>[u("span",oe,p(n.form.real_time_expire_days||n.form.expire_days||"-"),1)]),_:1}),t(d,{label:"\u9881\u53D1\u5BF9\u8C61.\u516C\u7528\u540D",prop:"subject"},{default:l(()=>[u("span",ie,p(n.form.detail.subject.CN||"-"),1)]),_:1}),t(d,{label:"\u9881\u53D1\u5BF9\u8C61.\u7EC4\u7EC7",prop:"subject"},{default:l(()=>[u("span",re,p(n.form.detail.subject.O||"-"),1)]),_:1}),t(d,{label:"\u9881\u53D1\u5BF9\u8C61.\u7EC4\u7EC7\u5355\u4F4D",prop:"subject"},{default:l(()=>[u("span",ce,p(n.form.detail.subject.OU||"-"),1)]),_:1}),t(d,{label:"\u7F51\u7EDC\u4E1A\u52A1\u63D0\u4F9B\u5546",prop:"isp"},{default:l(()=>[u("span",de,p(n.ipInfo.isp||"-"),1)]),_:1})]),_:1},8,["model"])]),u("div",ue,[t(x,{type:"primary",onClick:r.handleCancel},{default:l(()=>[g("\u5173 \u95ED")]),_:1},8,["onClick"])])])}const pe=C(Y,[["render",me]]),_e={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:pe},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91":"\u6DFB\u52A0"},dialogVisible:{get(){return this.visible},set(o){this.$emit("update:visible",o)}}},methods:{handleClose(){this.dialogVisible=!1},handleOpen(){this.dialogVisible=!0},handleSuccess(){this.handleClose()},handleDialogClose(){this.$emit("on-success")}},created(){}};function he(o,a,s,h,n,r){const _=i("DataForm"),d=i("el-dialog");return w(),k(d,{title:"\u57DF\u540D\u8BE6\u60C5",modelValue:r.dialogVisible,"onUpdate:modelValue":a[0]||(a[0]=m=>r.dialogVisible=m),width:"900px",center:"","append-to-body":"","lock-scroll":!1,onClose:r.handleDialogClose},{default:l(()=>[r.dialogVisible?(w(),k(_,{key:0,row:s.row,onOnCancel:r.handleClose,onOnSuccess:r.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):z("",!0)]),_:1},8,["modelValue","onClose"])}const fe=C(_e,[["render",he]]),ge={name:"",components:{DataFormDialog:A,DataDetailDialog:fe,ConnectStatus:T},props:{list:{type:Array}},computed:{},data(){return{currentRow:null,dialogVisible:!1,dialogDetailVisible:!1}},methods:{handleEditRow(o){this.currentRow=o,this.dialogVisible=!0},async handleDeleteClick(o){let a={id:o.id};const s=await this.$http.deleteDomainById(a);s.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(s.msg)},async handleStatusChange(o){let a={id:o.id};const s=await this.$Http.function(a);s.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(s.msg)},async handleMonitorStatusChange(o,a){let s={id:o.id,is_monitor:a};const h=await this.$http.updateDomainById(s);h.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(h.msg)},async handleUpdateRowDomainInfo(o){let a=this.$loading({lock:!0,text:"\u66F4\u65B0\u4E2D"}),s={id:o.id};(await this.$http.updateDomainCertInfoById(s)).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")),a.close()},handleUpdateSuccess(){this.$emit("on-success")},handleDetailSuccess(){this.$emit("on-success")},handleShowDetail(o){this.currentRow=o,this.dialogDetailVisible=!0}},created(){}},be={class:"el-text-color-primary"},we=u("span",null," / ",-1),ye={class:"el-text-color-secondary"};function De(o,a,s,h,n,r){const _=i("el-link"),d=i("el-tooltip"),m=i("el-table-column"),b=i("el-progress"),y=i("Refresh"),f=i("el-icon"),x=i("ConnectStatus"),v=i("el-switch"),V=i("Edit"),I=i("Delete"),O=i("el-popconfirm"),U=i("el-table"),R=i("DataFormDialog"),F=i("DataDetailDialog");return w(),S("div",null,[t(U,{data:s.list,stripe:"",border:""},{default:l(()=>[t(m,{label:"\u57DF\u540D","header-align":"center",align:"center",prop:"domain"},{default:l(c=>[t(d,{disabled:!c.row.alias,content:c.row.alias},{default:l(()=>[t(_,{underline:!1,href:c.row.domain_url,target:"_blank"},{default:l(()=>[g(p(c.row.domain),1)]),_:2},1032,["href"])]),_:2},1032,["disabled","content"])]),_:1}),t(m,{label:"ip\u5730\u5740","header-align":"center",align:"center",width:"140",prop:"ip"},{default:l(c=>[u("span",null,p(c.row.ip||"-"),1)]),_:1}),t(m,{label:"\u6709\u6548\u671F\u5929\u6570","header-align":"center",align:"center",width:"180",prop:"total_days"},{default:l(c=>[c.row.percentage?(w(),k(b,{key:0,percentage:c.row.percentage,"show-text":!1,status:c.row.percentage_status},null,8,["percentage","status"])):z("",!0),u("div",null,[u("span",be,p(c.row.real_time_expire_days||c.row.expire_days||"-"),1),we,u("span",ye,p(c.row.total_days||"-"),1)])]),_:1}),t(m,{label:"\u66F4\u65B0\u65F6\u95F4","header-align":"center",align:"center",width:"120",prop:"check_time"},{default:l(c=>[u("span",null,p(c.row.check_time_label||"-"),1)]),_:1}),t(m,{label:"\u66F4\u65B0",width:"60","header-align":"center",align:"center"},{default:l(c=>[t(_,{underline:!1,type:"primary",onClick:D=>r.handleUpdateRowDomainInfo(c.row)},{default:l(()=>[t(f,null,{default:l(()=>[t(y)]),_:1})]),_:2},1032,["onClick"])]),_:1}),t(m,{label:"\u72B6\u6001","header-align":"center",align:"center",width:"60",prop:"connect_status"},{default:l(c=>[t(x,{value:c.row.connect_status,onOnClick:D=>r.handleShowDetail(c.row)},null,8,["value","onOnClick"])]),_:1}),t(m,{label:"\u76D1\u6D4B",width:"66","header-align":"center",align:"center"},{default:l(c=>[t(v,{modelValue:c.row.is_monitor,"onUpdate:modelValue":D=>c.row.is_monitor=D,onChange:D=>r.handleMonitorStatusChange(c.row,D)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),t(m,{label:"\u7F16\u8F91",width:"60","header-align":"center",align:"center"},{default:l(c=>[t(_,{underline:!1,type:"primary",onClick:D=>r.handleEditRow(c.row)},{default:l(()=>[t(f,null,{default:l(()=>[t(V)]),_:1})]),_:2},1032,["onClick"])]),_:1}),t(m,{label:"\u5220\u9664",width:"60",align:"center",prop:"tag"},{default:l(({row:c})=>[t(O,{title:"\u786E\u5B9A\u5220\u9664\uFF1F",onConfirm:D=>r.handleDeleteClick(c)},{reference:l(()=>[t(_,{underline:!1,type:"danger"},{default:l(()=>[t(f,null,{default:l(()=>[t(I)]),_:1})]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"]),t(R,{visible:n.dialogVisible,"onUpdate:visible":a[0]||(a[0]=c=>n.dialogVisible=c),row:n.currentRow,onOnSuccess:r.handleUpdateSuccess},null,8,["visible","row","onOnSuccess"]),t(F,{row:n.currentRow,visible:n.dialogDetailVisible,"onUpdate:visible":a[1]||(a[1]=c=>n.dialogDetailVisible=c),onOnSuccess:r.handleDetailSuccess},null,8,["row","visible","onOnSuccess"])])}const Ce=C(ge,[["render",De]]),xe={name:"domain-list",props:{},components:{DataFormDialog:A,DataTable:Ce},data(){return{dataApi:j,list:[],total:0,page:1,size:20,keyword:"",pageSizeCachekey:"pageSize",loading:!0,dialogVisible:!1,export_to_file_url:E(j.exportDomainToFile)}},computed:{},methods:{resetData(){this.page=1,this.getData()},refreshData(){this.getData()},async getData(){this.loading=!0;let o={page:this.page,size:this.size,keyword:this.keyword.trim()};const a=await this.$http.getDomainList(o);a.code==0?(this.list=a.data.list.map(s=>(s.expire_days&&s.total_days?s.percentage=s.expire_days/s.total_days*100:s.percentage=null,s.percentage_status="exception",s.expire_days>=30?s.percentage_status="":s.expire_days>=3&&(s.percentage_status="warning"),s)),this.total=a.data.total):this.$msg.error(e.msg),this.loading=!1},async updateAllDomainCertInfoOfUser(){let o=this.$loading({fullscreen:!0});(await this.$http.updateAllDomainCertInfoOfUser()).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.resetData()),o.close()},async handleHttpRequest(o){let a=this.$loading({fullscreen:!0}),s=new FormData;s.append("file",o.file),(await this.$http.importDomainFromFile(s)).code==0&&(this.$msg.success("\u4E0A\u4F20\u6210\u529F\uFF0C\u540E\u53F0\u5BFC\u5165\u4E2D"),this.resetData()),a.close()},handleAddRow(){this.dialogVisible=!0},handleAddSuccess(){this.resetData()},async handleExportToFile(){let a=(await this.$http.getAllDomainListOfUser()).data.list.map(h=>h.domain).join(`
`);var s=new Blob([a],{type:"text/plain;charset=utf-8"});N.saveAs(s,"domain.txt")},handleSearch(){this.resetData()},async checkDomainCert(){let o=this.$loading({fullscreen:!0});try{(await this.$http.checkDomainCert()).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success"))}catch{}finally{this.$nextTick(()=>{o.close()})}},handleSizeChange(o){localStorage.setItem(this.pageSizeCachekey,o),this.resetData()},loadPageSize(){let o=localStorage.getItem(this.pageSizeCachekey);o&&(this.size=parseInt(o))},handleExceed(o){this.$refs.upload.clearFiles();const a=o[0];a.uid=P(),this.handleHttpRequest({file:a})}},created(){this.loadPageSize(),this.getData()}},ke={class:"app-container"},Se={class:"flex justify-between"},ve={class:"flex"};function Ve(o,a,s,h,n,r){const _=i("Plus"),d=i("el-icon"),m=i("el-button"),b=i("Search"),y=i("el-input"),f=i("Refresh"),x=i("Position"),v=i("Upload"),V=i("el-upload"),I=i("Download"),O=i("DataTable"),U=i("el-pagination"),R=i("DataFormDialog"),F=B("loading");return w(),S("div",ke,[u("div",Se,[u("div",null,[t(m,{type:"primary",onClick:r.handleAddRow},{default:l(()=>[t(d,null,{default:l(()=>[t(_)]),_:1}),g("\u6DFB\u52A0")]),_:1},8,["onClick"]),t(y,{class:"ml-sm",style:{width:"260px"},modelValue:n.keyword,"onUpdate:modelValue":a[0]||(a[0]=c=>n.keyword=c),placeholder:"\u641C\u7D22\u57DF\u540D",clearable:"",onKeypress:q(r.handleSearch,["enter"]),onClear:r.handleSearch},{append:l(()=>[t(m,{onClick:r.handleSearch},{default:l(()=>[t(d,null,{default:l(()=>[t(b)]),_:1})]),_:1},8,["onClick"])]),_:1},8,["modelValue","onKeypress","onClear"])]),u("div",ve,[t(m,{onClick:r.updateAllDomainCertInfoOfUser},{default:l(()=>[t(d,null,{default:l(()=>[t(f)]),_:1}),g("\u5168\u90E8\u66F4\u65B0")]),_:1},8,["onClick"]),t(m,{class:"margin-left--auto",onClick:r.checkDomainCert},{default:l(()=>[t(d,null,{default:l(()=>[t(x)]),_:1}),g("\u8BC1\u4E66\u68C0\u67E5")]),_:1},8,["onClick"]),t(V,{class:"ml-sm",ref:"upload",action:"action",accept:".txt",limit:1,"on-exceed":r.handleExceed,"show-file-list":!1,"http-request":r.handleHttpRequest},{default:l(()=>[t(m,null,{default:l(()=>[t(d,null,{default:l(()=>[t(v)]),_:1}),g("\u5BFC\u5165")]),_:1})]),_:1},8,["on-exceed","http-request"]),t(m,{class:"ml-sm",onClick:r.handleExportToFile},{default:l(()=>[t(d,null,{default:l(()=>[t(I)]),_:1}),g("\u5BFC\u51FA")]),_:1},8,["onClick"])])]),$(t(O,{class:"mt-md",list:n.list,onOnSuccess:r.resetData},null,8,["list","onOnSuccess"]),[[F,n.loading]]),t(U,{class:"mt-md justify-center",background:"",layout:"total, sizes, prev, pager, next",total:n.total,"page-size":n.size,"onUpdate:page-size":a[1]||(a[1]=c=>n.size=c),"current-page":n.page,"onUpdate:current-page":a[2]||(a[2]=c=>n.page=c),onCurrentChange:r.getData,onSizeChange:r.handleSizeChange},null,8,["total","page-size","current-page","onCurrentChange","onSizeChange"]),t(R,{visible:n.dialogVisible,"onUpdate:visible":a[3]||(a[3]=c=>n.dialogVisible=c),onOnSuccess:r.handleAddSuccess},null,8,["visible","onOnSuccess"])])}const je=C(xe,[["render",Ve]]);export{je as default};
