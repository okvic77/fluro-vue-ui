(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{501:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("flex-column-body",[i("v-container",{attrs:{fluid:""}},[i("constrain",{attrs:{sm:""}},[t.fields?i("v-container",[i("fluro-content-render",{attrs:{fields:t.fields},model:{value:t.item.data,callback:function(e){t.$set(t.item,"data",e)},expression:"item.data"}})],1):t._e(),t._v(" "),t._l(t.grouped,(function(e){return i("v-container",{staticClass:"pin-group"},[i("h4",[t._v(t._s(e.title))]),t._v(" "),i("fluro-card",t._l(e.items,(function(e){return i("fluro-list-item",{attrs:{bordered:!0,item:e},nativeOn:{click:function(i){return t.clicked(e)}}})})),1)],1)}))],2)],1)],1)};n._withStripped=!0;i(7);var r=i(514),o=i(167),s={props:{config:{type:Object,required:!0},item:{type:Object,required:!0}},components:{FluroContentRender:o.default},mixins:[r.a],methods:{},computed:{grouped(){var t=this;return _.chain(t.item.items).orderBy((function(t){return t.title})).reduce((function(e,i){var n=i.definition||i._type,r=e[n];return r||(r=e[n]={title:t.$fluro.types.readable(n,!0),items:[]}),r.items.push(i),e}),{}).values().orderBy((function(t){return t.title})).value()},data(){return this.item.data||{}}},data:()=>({})},a=i(0),u=Object(a.a)(s,n,[],!1,null,"140b603a",null);u.options.__file="src/components/content/view/panels/collection.vue";e.default=u.exports},514:function(t,e,i){"use strict";var n=i(167),r=i(33),o=i(12);e.a={props:{config:{type:Object,required:!0}},data:()=>({loading:!1}),mixins:[o.a],components:{FluroContentRender:n.default,FluroContentRenderField:r.default},computed:{itemID(){return this.$fluro.utils.getStringID(this.item)},definition(){return this.config&&this.config.definition?this.config.definition:null},data(){return this.item.data||{}},fields(){return this.definition&&this.definition.fields&&this.definition.fields.length?this.definition.fields:[]}},methods:{}}}}]);