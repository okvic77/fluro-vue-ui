(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{491:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("flex-column",[e.loading?[i("fluro-page-preloader",{attrs:{contain:""}})]:i("tabset",{attrs:{justified:!0},scopedSlots:e._u([{key:"menuprefix",fn:function(){return["edit"==e.context&&e.$vuetify.breakpoint.mdAndUp?void 0:e._e()]},proxy:!0}])},[e._v(" "),i("tab",{attrs:{heading:"Card Details"}},[i("flex-row",[i("v-flex",{staticClass:"main",attrs:{xs12:"",sm8:""}},[i("flex-column-body",{staticStyle:{background:"#fafafa"}},[i("v-container",[i("constrain",{attrs:{sm:""}},[e.reference?[i("fluro-panel",[i("fluro-panel-body",{staticStyle:{padding:"0"}},[i("flex-column-body",{staticStyle:{"max-height":"50vh"}},[i("fluro-content-view",{attrs:{id:e.reference,embedded:!0,definition:e.reference.definition,type:e.reference._type}})],1)],1)],1)]:e.definition&&e.definition.fields&&e.definition.fields.length?[i("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.title},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}}),e._v(" "),i("fluro-content-form",{attrs:{options:e.options,fields:e.definition.fields},model:{value:e.model.data,callback:function(t){e.$set(e.model,"data",t)},expression:"model.data"}})]:[i("h3",{attrs:{margin:""}},[e._v(e._s(e.title))]),e._v(" "),i("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.referenceItemField},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],e._v(" "),e.model.forms&&e.model.forms.length?[e.receivedForms&&e.receivedForms.length?i("v-input",{staticClass:"no-flex"},[i("v-label",[e._v("Received "+e._s(e.receivedForms.length)+" Form Responses")]),e._v(" "),i("p",{staticClass:"help-block"},[e._v("These forms have not yet been submitted")]),e._v(" "),i("list-group",e._l(e.receivedForms,(function(t){return i("list-group-item",[i("strong",[i("fluro-icon",{attrs:{type:"form"}}),e._v(" "+e._s(t.form.title)+"\n                                                ")],1),e._v(" "),i("div",{staticClass:"sm"},[i("span",{staticClass:"status-label active"},[i("fluro-icon",{attrs:{icon:"check"}}),e._v(" Received ")],1),e._v(" "+e._s(e._f("formatDate")(t.received,"h:mma ddd MMM YYYY"))+" "),i("span",{staticClass:"muted"},[e._v(e._s(e._f("timeago")(t.received)))])])])})),1)],1):e._e(),e._v(" "),e.awaitingForms&&e.awaitingForms.length?i("v-input",{staticClass:"no-flex"},[i("v-label",[e._v("Awaiting "+e._s(e.awaitingForms.length)+" Form Responses")]),e._v(" "),i("p",{staticClass:"help-block"},[e._v("These forms have not yet been submitted")]),e._v(" "),i("list-group",e._l(e.awaitingForms,(function(t){return i("list-group-item",{scopedSlots:e._u([{key:"right",fn:function(){return[i("v-btn",{attrs:{small:"",color:"primary",loading:e.resending[t.form._id]},on:{click:function(i){return e.resend(t)}}},[e._v("\n                                                        Resend\n                                                        "),i("fluro-icon",{attrs:{right:"",icon:"paper-plane"}})],1)]},proxy:!0}],null,!0)},[i("strong",[i("fluro-icon",{attrs:{type:"form"}}),e._v(" "+e._s(t.form.title)+"\n                                                ")],1),e._v(" "),i("div",{staticClass:"sm"},[e._v("\n                                                    Sent "+e._s(e._f("timeago")(t.sent))+" - "),i("span",{staticClass:"status-label draft"},[i("fluro-icon",{attrs:{icon:"clock"}}),e._v(" Awaiting form response")],1)])])})),1)],1):e._e()]:e._e(),e._v(" "),[e._l(e.model.taskLists,(function(t,s){return i("fluro-task-list",{attrs:{card:e.model,state:e.model.state,definition:e.definition},on:{remove:function(t){return e.removeTaskList(s)},input:e.dispatchUpdate},model:{value:e.model.taskLists[s],callback:function(t){e.$set(e.model.taskLists,s,t)},expression:"model.taskLists[index]"}})})),e._v(" "),i("span",{staticClass:"horizontal-rule"}),e._v(" "),i("v-btn",{staticClass:"ml-0",on:{click:function(t){return e.addTaskList()}}},[e._v("\n                                        Add Task List\n                                        "),i("fluro-icon",{attrs:{right:"",icon:"plus"}})],1)]],2)],1)],1)],1),e._v(" "),i("v-flex",{staticClass:"sidebar",attrs:{xs12:"",sm4:""}},[i("flex-column-body",[i("v-container",[i("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.dueDate},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}}),e._v(" "),i("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.state},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}}),e._v(" "),i("v-input",{staticClass:"no-flex"},[i("v-label",[e._v("Key Contacts")]),e._v(" "),i("p",{staticClass:"help-block"},[e._v("This card does not reference a contact, Here you can specify who should be sent Automated SMS and Mailouts as this card progresses")]),e._v(" "),i("fluro-content-form-field",{attrs:{"form-fields":e.formFields,showLabel:!1,outline:e.showOutline,options:e.options,field:e.fieldHash.contacts},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1),e._v(" "),i("v-input",{staticClass:"no-flex"},[i("v-label",[e._v("Assigned To")]),e._v(" "),i("p",{staticClass:"help-block"},[e._v("Assign who is in charge of this card")]),e._v(" "),i("fluro-content-form-field",{attrs:{"form-fields":e.formFields,showLabel:!1,outline:e.showOutline,options:e.options,field:e.fieldHash.assignedTo},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1)],1)],1)],1)],1)],1)],1)],2)};s._withStripped=!0;var o=i(512),n=i(175),a=i(182),r=(i(7),i(38)),l={props:{},created(){this.model.data||(this.model.data={})},mixins:[o.a],components:{FluroContentView:n.a,FluroTaskList:a.a},methods:{removeTaskList(e){var t=this.model.taskLists;this.$delete(t,e),this.$set(this.model,"taskLists",t.slice()),this.dispatchUpdate()},addTaskList(){this.model.taskLists||this.$set(this.model,"taskLists",[]);var e,t={autofocus:!0,tasks:[]},i=this.currentState;i&&i.title&&(e=i.title+" tasks",t.state=i.key);var s=_.find(this.model.taskLists,{title:e});e&&e.length&&!s||(e=this.user.firstName+"'s tasks"),(s=_.find(this.model.taskLists,{title:e}))&&(e="Additional Tasks"),t.title=e,this.model.taskLists.push(t),this.dispatchUpdate()},resend(e){var t=this,i=t.$fluro.utils.getStringID(t.model),s=t.$fluro.utils.getStringID(e.form);return t.$set(t.resending,s,!0),t.$fluro.api.put(`/process/resend/${i}/${s}`).then((function(e){t.$fluro.notify("Form was resent"),t.$set(t.resending,s,!1)})).catch((function(e){t.$fluro.error(e),t.$set(t.resending,s,!1)}))},dispatchUpdate(e){this.update(this.model)}},asyncComputed:{},computed:{...Object(r.mapFields)("fluro",["application","user"]),fieldsOutput(){var e=[];function t(t,i){i.key=t,e.push(i)}return t("title",{title:"Title",minimum:1,maximum:1,type:"string",placeholder:""}),t("contacts",{title:"Key Contacts",minimum:0,maximum:0,type:"reference",params:{restrictType:"contact"}}),t("dueDate",{title:"Due Date",minimum:0,maximum:1,type:"date",directive:"datetime-select",params:{}}),t("state",{title:"Current State",minimum:0,maximum:1,type:"string",directive:"select",options:_.map(this.states,(function(e){return{name:e.title,value:e.key}}))}),t("assignedTo",{title:"Assigned To",minimum:0,maximum:0,type:"reference",params:{restrictType:"contact"}}),e},referenceItemField(){var e=this;_.chain(this.definition).get("data.processTypes").map((function(t){return{name:e.$fluro.types.readable(t),value:t}})).value();return{key:"item",title:"Referenced Item",description:"Select an item to add to this process",minimum:0,maximum:1,type:"reference"}},currentStateName(){return this.model.state},currentState(){return _.find(this.states,{key:this.currentStateName})},reference(){return this.model.item},title(){if(this.model){if(this.model.title&&this.model.title.length)return this.model.title;if(this.model.item&&this.model.item.title)return this.model.item.title}return"New Card"},states(){return _.get(this.definition,"data.states")},awaitingForms(){return _.filter(this.model.forms,(function(e){return!e.interaction}))},receivedForms(){return _.filter(this.model.forms,(function(e){return e.interaction}))},showOutline:()=>!1},data:()=>({resending:{}})},d=(i(731),i(0)),m=Object(d.a)(l,s,[],!1,null,"4b10627e",null);m.options.__file="src/components/content/edit/panels/process.vue";t.default=m.exports},512:function(e,t,i){"use strict";var s=i(10);t.a={props:{config:{type:Object,required:!0},context:{type:String,default:"new"}},data:()=>({loading:!1}),mounted(){this.$set(this.model,"_type",this.config.type.definitionName)},extends:s.default,components:{FluroContentForm:s.default,FluroContentFormField:()=>Promise.resolve().then(i.bind(null,11)),FluroPrivacySelect:()=>i.e(54).then(i.bind(null,513))},computed:{type(){return this.config.type},typeName(){return this.type?this.type.definitionName:""},itemID(){return this.model._id},definition(){return this.config.definition},definedFields(){return this.definition&&this.definition.fields&&this.definition.fields.length?this.definition.fields:[]},readableContentType(){return this.$fluro.types.readable(this.config.definition?this.config.definition.definitionName:this.config.type.definitionName)},fullBody(){return this.definition&&this.definition.data&&this.definition.data.fullBody},hideBody(){return this.definition&&this.definition.data&&this.definition.data.hideBody},titleLabel:()=>"Title",bodyLabel:()=>"Body"},methods:{}}},592:function(e,t,i){var s=i(732);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,i(3).default)("050d6df5",s,!1,{})},731:function(e,t,i){"use strict";var s=i(592);i.n(s).a},732:function(e,t,i){(e.exports=i(2)(!1)).push([e.i,".hint[data-v-4b10627e]{font-size:10px;opacity:0.5;color:inherit;display:block}.sidebar[data-v-4b10627e],.main[data-v-4b10627e]{flex:1;overflow:hidden;display:flex;flex-direction:column}.horizontal-rule[data-v-4b10627e]{display:block;border-radius:20px;height:3px;background:rgba(0,0,0,0.1);margin:10px 0}.sidebar[data-v-4b10627e]{background:rgba(0,0,0,0.02)}@media (min-width: 769px){.sidebar[data-v-4b10627e]{border-left:1px solid rgba(0,0,0,0.05)}}.bordered[data-v-4b10627e]{border:1px solid rgba(0,0,0,0.1);box-shadow:0 2px 4px rgba(0,0,0,0.1)}.bordered[data-v-4b10627e] .tabset-menu{background:#eee}\n",""])}}]);