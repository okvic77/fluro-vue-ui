(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{479:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("flex-column",[t.loading?[e("fluro-page-preloader",{attrs:{contain:""}})]:e("tabset",{attrs:{justified:!0,vertical:!0}},[e("tab",[e("flex-column-body",{staticStyle:{background:"#fafafa"}},[e("v-container",[e("constrain",{attrs:{sm:""}},[e("div",{staticClass:"grid-list-xl"},[e("fluro-content-form-field",{attrs:{"form-fields":t.formFields,outline:t.showOutline,options:t.options,field:t.fieldHash.title},on:{input:t.update},model:{value:t.model,callback:function(i){t.model=i},expression:"model"}}),t._v(" "),t.definition&&t.definition.fields&&t.definition.fields.length?e("div",[e("fluro-content-form",{attrs:{options:t.options,fields:t.definition.fields},model:{value:t.model.data,callback:function(i){t.$set(t.model,"data",i)},expression:"model.data"}})],1):t._e()],1)])],1)],1)],1)],1)],2)};n._withStripped=!0;var o=e(512),d=(e(7),{mixins:[o.a],components:{},methods:{modelUpdated(){this.update(this.model)}},created(){},asyncComputed:{},computed:{showOutline:()=>!1,fieldsOutput(){var t,i=[];return(t={title:"Title",minimum:1,maximum:1,type:"string"}).key="title",i.push(t),i}},data:()=>({})}),s=(e(661),e(0)),l=Object(s.a)(d,n,[],!1,null,"f485194e",null);l.options.__file="src/components/content/edit/panels/capability.vue";i.default=l.exports},512:function(t,i,e){"use strict";var n=e(10);i.a={props:{config:{type:Object,required:!0},context:{type:String,default:"new"}},data:()=>({loading:!1}),mounted(){this.$set(this.model,"_type",this.config.type.definitionName)},extends:n.default,components:{FluroContentForm:n.default,FluroContentFormField:()=>Promise.resolve().then(e.bind(null,11)),FluroPrivacySelect:()=>e.e(54).then(e.bind(null,513))},computed:{type(){return this.config.type},typeName(){return this.type?this.type.definitionName:""},itemID(){return this.model._id},definition(){return this.config.definition},definedFields(){return this.definition&&this.definition.fields&&this.definition.fields.length?this.definition.fields:[]},readableContentType(){return this.$fluro.types.readable(this.config.definition?this.config.definition.definitionName:this.config.type.definitionName)},fullBody(){return this.definition&&this.definition.data&&this.definition.data.fullBody},hideBody(){return this.definition&&this.definition.data&&this.definition.data.hideBody},titleLabel:()=>"Title",bodyLabel:()=>"Body"},methods:{}}},551:function(t,i,e){var n=e(662);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,e(3).default)("1067c818",n,!1,{})},661:function(t,i,e){"use strict";var n=e(551);e.n(n).a},662:function(t,i,e){(t.exports=e(2)(!1)).push([t.i,".hint[data-v-f485194e]{font-size:10px;opacity:0.5;color:inherit;display:block}\n",""])}}]);