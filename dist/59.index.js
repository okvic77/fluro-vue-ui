(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{773:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("flex-column-body",[n("v-container",{attrs:{fluid:""}},[n("constrain",{attrs:{sm:""}},[t.fields?n("v-container",[n("fluro-content-render",{attrs:{fields:t.fields},model:{value:t.item.data,callback:function(e){t.$set(t.item,"data",e)},expression:"item.data"}})],1):t._e(),t._v(" "),t._l(t.grouped,(function(e){return n("v-container",{staticClass:"pin-group"},[n("h4",[t._v(t._s(e.title))]),t._v(" "),n("fluro-card",t._l(e.items,(function(e){return n("fluro-list-item",{key:e._id,attrs:{bordered:!0,item:e},nativeOn:{click:function(n){return t.clicked(e)}}})})),1)],1)}))],2)],1)],1)};i._withStripped=!0;n(30),n(11),n(20);var r=n(793),o=n(282),u={props:{config:{type:Object,required:!0},item:{type:Object,required:!0}},components:{FluroContentRender:o.default},mixins:[r.a],methods:{},computed:{grouped:function(){var t=this;return _.chain(t.item.items).orderBy((function(t){return t.title})).reduce((function(e,n){var i=n.definition||n._type,r=e[i];return r||(r=e[i]={title:t.$fluro.types.readable(i,!0),items:[]}),r.items.push(n),e}),{}).values().orderBy((function(t){return t.title})).value()},data:function(){return this.item.data||{}}},data:function(){return{}}},s=n(0),a=Object(s.a)(u,i,[],!1,null,"140b603a",null);a.options.__file="src/components/content/view/panels/collection.vue";e.default=a.exports},793:function(t,e,n){"use strict";var i=n(282),r=n(100),o=n(41);e.a={props:{config:{type:Object,required:!0}},data:function(){return{loading:!1}},mixins:[o.a],components:{FluroContentRender:i.default,FluroContentRenderField:r.default},computed:{itemID:function(){return this.$fluro.utils.getStringID(this.item)},definition:function(){return this.config&&this.config.definition?this.config.definition:null},data:function(){return this.item.data||{}},fields:function(){return this.definition&&this.definition.fields&&this.definition.fields.length?this.definition.fields:[]}},methods:{}}}}]);