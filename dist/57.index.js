(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{769:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("flex-column",[e.loading?[i("fluro-page-preloader",{attrs:{contain:""}})]:[i("tabset",{attrs:{justified:!0,vertical:!0}},[i("tab",{attrs:{heading:"Information"}},[i("flex-column-body",{staticStyle:{background:"#fafafa"}},[i("v-container",{attrs:{fluid:""}},[i("constrain",{attrs:{sm:""}},[i("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.title},on:{input:e.update},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}}),e._v(" "),i("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.description},on:{input:e.update},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}}),e._v(" "),e.definition&&e.definition.fields&&e.definition.fields.length?[i("h4",{attrs:{margin:""}},[e._v(e._s(e.definition.title)+" Information")]),e._v(" "),i("fluro-content-form",{attrs:{options:e.options,fields:e.definition.fields},model:{value:e.model.data,callback:function(t){e.$set(e.model,"data",t)},expression:"model.data"}})]:e._e(),e._v(" "),i("v-layout",[i("v-flex",{attrs:{xs4:""}},[i("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.count},on:{input:e.update},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1),e._v(" "),i("v-flex",{attrs:{xs8:""}},[i("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.measure},on:{input:e.update},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1)],1),e._v(" "),"months"==e.model.measure?i("v-layout",[i("v-flex",{attrs:{xs4:""}},[i("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.nth},on:{input:e.update},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1),e._v(" "),i("v-flex",{attrs:{xs8:""}},[i("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.weekday},on:{input:e.update},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1)],1):e._e(),e._v(" "),"hours"!=e.model.measure&&"minutes"!=e.model.measure?i("v-layout",[i("v-flex",{attrs:{xs4:""}},[i("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.timestamp},on:{input:e.update},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1),e._v(" "),i("v-flex",{attrs:{xs8:""}},[i("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.timezone},on:{input:e.update},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1)],1):e._e(),e._v(" "),i("v-layout",[i("v-flex",{attrs:{xs12:"",sm4:""}},[i("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.nextDate},on:{input:e.update},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1)],1),e._v(" "),i("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.reactions},on:{input:e.update},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],2)],1)],1)],1)],1)]],2)};n._withStripped=!0;var o=i(791),l=(i(20),{components:{},created:function(){},data:function(){return{}},mixins:[o.a],methods:{},asyncComputed:{},computed:{measureOptions:function(){return 1==this.model.count?[{title:"Minute",value:"minutes"},{title:"Hour",value:"hours"},{title:"Day",value:"days"},{title:"Week",value:"weeks"},{title:"Month",value:"months"},{title:"Year",value:"years"}]:[{title:"Minutes",value:"minutes"},{title:"Hours",value:"hours"},{title:"Days",value:"days"},{title:"Weeks",value:"weeks"},{title:"Months",value:"months"},{title:"Years",value:"years"}]},fieldsOutput:function(){var e=this,t=[];function i(e,i){i.key=e,t.push(i)}return i("title",{title:"Title",minimum:1,maximum:1,type:"string"}),i("description",{title:"Description",minimum:0,maximum:1,type:"string"}),i("count",{title:"Recur every",minimum:0,maximum:1,type:"integer"}),i("measure",{title:"",minimum:0,maximum:1,type:"select",options:e.measureOptions,directive:"select"}),i("nth",{title:"On the",minimum:0,maximum:1,type:"string",directive:"select",expressions:{hide:function(){return"months"!=e.model.measure}},options:[{title:"Same Date",value:"date"},{title:"First",value:"1"},{title:"Second",value:"2"},{title:"Third",value:"3"},{title:"Fourth",value:"4"},{title:"Fifth",value:"5"}]}),i("weekday",{title:"Weekday",minimum:0,maximum:1,type:"string",directive:"select",expressions:{hide:function(){return"date"==e.model.nth}},options:[{title:"Sunday",value:"sunday"},{title:"Monday",value:"monday"},{title:"Tuesday",value:"tuesday"},{title:"Wednesday",value:"wednesday"},{title:"Thursday",value:"thursday"},{title:"Friday",value:"friday"},{title:"Saturday",value:"saturday"}]}),i("timestamp",{title:"At time",minimum:0,maximum:1,type:"string",directive:"select",expressions:{hide:function(){if("hours"==e.model.measure||"minutes"==e.model.measure)return!0}},options:[{title:"12am (Midnight)",value:"0000"},{title:"1am",value:"0100"},{title:"2am",value:"0200"},{title:"3am",value:"0300"},{title:"4am",value:"0400"},{title:"5am",value:"0500"},{title:"6am",value:"0600"},{title:"7am",value:"0700"},{title:"8am",value:"0800"},{title:"9am",value:"0900"},{title:"10am",value:"1000"},{title:"11am",value:"1100"},{title:"12am",value:"1200"},{title:"1pm",value:"1300"},{title:"2pm",value:"1400"},{title:"3pm",value:"1500"},{title:"4pm",value:"1600"},{title:"5pm",value:"1700"},{title:"6pm",value:"1800"},{title:"7pm",value:"1900"},{title:"8pm",value:"2000"},{title:"9pm",value:"2100"},{title:"10pm",value:"2200"},{title:"11pm",value:"2300"}]}),i("timezone",{title:"Timezone",minimum:0,maximum:1,type:"string",directive:"timezone-select",expressions:{hide:function(){if("hours"==e.model.measure||"minutes"==e.model.measure)return!0}}}),i("nextDate",{title:"Next activation",description:"When is the next time this trigger should fire?",minimum:0,maximum:1,type:"date",directive:"datetimepicker"}),i("reactions",{title:"Reactions",description:"Select reactions that will spark when this trigger is activated",minimum:0,maximum:0,type:"reference",params:{restrictType:"reaction"}}),t}}}),a=i(0),s=Object(a.a)(l,n,[],!1,null,"3f9454da",null);s.options.__file="src/components/content/edit/panels/timetrigger.vue";t.default=s.exports},791:function(e,t,i){"use strict";var n=i(27);t.a={props:{config:{type:Object,required:!0},context:{type:String,default:"new"}},data:function(){return{loading:!1}},mounted:function(){this.$set(this.model,"_type",this.config.type.definitionName)},extends:n.default,components:{FluroContentForm:n.default,FluroContentFormField:function(){return Promise.resolve().then(i.bind(null,39))},FluroPrivacySelect:function(){return i.e(55).then(i.bind(null,792))}},computed:{type:function(){return this.config.type},typeName:function(){return this.type?this.type.definitionName:""},itemID:function(){return this.model._id},definition:function(){return this.config.definition},definedFields:function(){return this.definition&&this.definition.fields&&this.definition.fields.length?this.definition.fields:[]},readableContentType:function(){return this.$fluro.types.readable(this.config.definition?this.config.definition.definitionName:this.config.type.definitionName)},fullBody:function(){return this.definition&&this.definition.data&&this.definition.data.fullBody},hideBody:function(){return this.definition&&this.definition.data&&this.definition.data.hideBody},titleLabel:function(){return"Title"},bodyLabel:function(){return"Body"}},methods:{}}}}]);