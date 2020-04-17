(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1026:function(e,t,i){"use strict";var o=i(882);i.n(o).a},1027:function(e,t,i){(e.exports=i(3)(!1)).push([e.i,".chip{font-weight:500}\n",""])},778:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("flex-column",[e.loading?[i("fluro-page-preloader",{attrs:{contain:""}})]:[i("flex-column-body",{staticStyle:{background:"#fafafa"}},[i("v-container",{attrs:{fluid:"","grid-list-xl":""}},[i("constrain",{attrs:{sm:""}},[i("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.title},on:{input:e.update},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}}),e._v(" "),i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs12:"",sm12:""}},[i("h4",[e._v("Realm Colors")]),e._v(" "),i("p",{staticClass:"muted mb-0"},[e._v("Select colors for the realm below")]),e._v(" "),i("v-chip",{staticClass:"chip",attrs:{label:"",small:"",disabled:"",color:e.model.bgColor,"text-color":e.model.color}},[e._v(e._s(e.model.title||"Realm Title"))])],1),e._v(" "),i("v-flex",{attrs:{xs6:"",sm3:""}},[i("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.color},on:{input:e.update},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1),e._v(" "),i("v-flex",{attrs:{xs6:"",sm3:""}},[i("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.bgColor},on:{input:e.update},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1),e._v(" "),i("v-flex",{attrs:{xs12:"",sm6:""}},[i("h4",[e._v("Example Colors")]),e._v(" "),e._l(e.exampleColors,(function(t){return i("v-chip",{staticClass:"chip",attrs:{label:"",small:"",color:t.bgColor,"text-color":t.color},on:{click:function(i){return e.setColor(t)}}},[e._v(e._s(t.title))])}))],2)],1),e._v(" "),e.definition&&e.definition.fields&&e.definition.fields.length?[i("h3",{attrs:{margin:""}},[e._v(e._s(e.definition.title)+" Information")]),e._v(" "),i("fluro-content-form",{attrs:{options:e.options,fields:e.definition.fields},model:{value:e.model.data,callback:function(t){e.$set(e.model,"data",t)},expression:"model.data"}})]:e._e()],2)],1)],1)]],2)};o._withStripped=!0;var n=i(798),l=(i(25),{components:{},created:function(){},mixins:[n.a],computed:{fieldsOutput:function(){var e=[];function t(t,i){i.key=t,e.push(i)}return t("title",{title:"Title",minimum:1,maximum:1,type:"string"}),t("color",{title:"Text Color",minimum:0,maximum:1,type:"string",directive:"color"}),t("bgColor",{title:"Background Color",minimum:0,maximum:1,type:"string",directive:"color"}),e},exampleColors:function(){var e=[];function t(t,i,o){e.push({title:t,color:i,bgColor:o})}return t("Black","#eee","#555"),t("Red","#8f0f0f","#ffb5ba"),t("Pink","#b3125f","#ffa3c4"),t("Purple","#7f12b3","#e7b3ff"),t("Deep Purple","#7f12b3","#e2a3ff"),t("Deep Blue","#433aab","#a5a3ff"),t("Baby Blue","#174b99","#a6caff"),t("Light Blue","#1366a3","#9ee2ff"),t("Cyan","#008b94","#97f0ed"),t("Medical Green","#007357","#97f0cb"),t("Light Green","#00703a","#97f0a5"),t("Lime Green","#00783e","#a8ed87"),t("Banana Green","#306b13","#dbe37f"),t("Desert Camo","#6b5813","#e3cd7f"),t("Amber","#966639","#ffe175"),t("Fluro Yellow","#695e00","#faff00"),e}},methods:{setColor:function(e){this.model.color=e.color,this.model.bgColor=e.bgColor}},data:function(){return{}}}),r=(i(1026),i(0)),f=Object(r.a)(l,o,[],!1,null,null,null);f.options.__file="src/components/content/edit/panels/realm.vue";t.default=f.exports},798:function(e,t,i){"use strict";var o=i(35);t.a={props:{config:{type:Object,required:!0},context:{type:String,default:"new"}},data:function(){return{loading:!1}},mounted:function(){this.$set(this.model,"_type",this.config.type.definitionName)},extends:o.default,components:{FluroContentForm:o.default,FluroContentFormField:function(){return Promise.resolve().then(i.bind(null,47))},FluroPrivacySelect:function(){return i.e(55).then(i.bind(null,799))}},computed:{type:function(){return this.config.type},typeName:function(){return this.type?this.type.definitionName:""},itemID:function(){return this.model._id},definition:function(){return this.config.definition},definedFields:function(){return this.definition&&this.definition.fields&&this.definition.fields.length?this.definition.fields:[]},readableContentType:function(){return this.$fluro.types.readable(this.config.definition?this.config.definition.definitionName:this.config.type.definitionName)},fullBody:function(){return this.definition&&this.definition.data&&this.definition.data.fullBody},hideBody:function(){return this.definition&&this.definition.data&&this.definition.data.hideBody},titleLabel:function(){return"Title"},bodyLabel:function(){return"Body"}},methods:{}}},882:function(e,t,i){var o=i(1027);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,i(4).default)("7b6a03ad",o,!1,{})}}]);