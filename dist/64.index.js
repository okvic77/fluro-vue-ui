(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{781:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("flex-column-body",[i("v-container",{attrs:{fluid:""}},[i("constrain",{attrs:{sm:""}},[i("h1",[t._v(t._s(t.item.title))]),t._v(" "),i("fluro-content-render",{attrs:{fields:t.definedFields},model:{value:t.item.data,callback:function(e){t.$set(t.item,"data",e)},expression:"item.data"}})],1)],1)],1)};n._withStripped=!0;i(20);var o=i(793),d=i(282),r={props:{config:{type:Object,required:!0},item:{type:Object,required:!0}},components:{FluroContentRender:d.default},mixins:[o.a],methods:{},computed:{data:function(){return this.item.data||{}},definedFields:function(){return this.definition?this.definition.fields:null}},data:function(){return{}}},s=i(0),a=Object(s.a)(r,n,[],!1,null,"aea0d8a4",null);a.options.__file="src/components/content/view/panels/tag.vue";e.default=a.exports},793:function(t,e,i){"use strict";var n=i(282),o=i(100),d=i(41);e.a={props:{config:{type:Object,required:!0}},data:function(){return{loading:!1}},mixins:[d.a],components:{FluroContentRender:n.default,FluroContentRenderField:o.default},computed:{itemID:function(){return this.$fluro.utils.getStringID(this.item)},definition:function(){return this.config&&this.config.definition?this.config.definition:null},data:function(){return this.item.data||{}},fields:function(){return this.definition&&this.definition.fields&&this.definition.fields.length?this.definition.fields:[]}},methods:{}}}}]);