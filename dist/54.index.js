(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1058:function(e,t,o){"use strict";var a=o(898);o.n(a).a},1059:function(e,t,o){(e.exports=o(3)(!1)).push([e.i,"table[data-v-3f520c55]{width:100%;border-collapse:collapse}table thead th[data-v-3f520c55]{background:#eee;font-size:10px;padding:4px}.input[data-v-3f520c55]{background:#fff;border-radius:2px;border:1px solid rgba(0,0,0,0.1);padding:3px;height:30px;line-height:30px;display:block;width:100%}.option td[data-v-3f520c55]{padding:4px;border-bottom:1px solid rgba(0,0,0,0.05)}.option td input[data-v-3f520c55]{width:100%;display:block}.option .handle[data-v-3f520c55]{width:10px}.option .handle svg[data-v-3f520c55]{opacity:0}.option:hover .handle svg[data-v-3f520c55]{opacity:0.5}\n",""])},1076:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("fluro-panel",[o("table",[o("thead",[o("tr",[o("th"),e._v(" "),o("th",[e._v("Name")]),e._v(" "),o("th",[e._v("Value")]),e._v(" "),o("th")])]),e._v(" "),o("draggable",{staticClass:"options-manager-items",attrs:{element:"tbody",handle:".handle"},on:{sort:e.sorted},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},e._l(e.model,(function(t){return o("tr",{key:t.name,staticClass:"option"},[o("td",{staticClass:"handle"},[o("fluro-icon",{attrs:{icon:"arrows"}})],1),e._v(" "),o("td",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"option.name"}],attrs:{placeholder:"Name"},domProps:{value:t.name},on:{input:function(o){o.target.composing||e.$set(t,"name",o.target.value)}}})]),e._v(" "),o("td",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"option.value"}],attrs:{placeholder:"Value"},domProps:{value:t.value},on:{input:function(o){o.target.composing||e.$set(t,"value",o.target.value)}}})]),e._v(" "),o("td",[o("v-btn",{staticClass:"ma-0",attrs:{icon:"",small:""},on:{click:function(o){return e.remove(t)}}},[o("fluro-icon",{attrs:{icon:"trash-alt"}})],1)],1)])})),0)],1),e._v(" "),o("fluro-panel-title",[o("form",{on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.addOption(t)}}},[o("v-layout",[o("v-flex",{attrs:{xs6:""}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.proposed.name,expression:"proposed.name"}],ref:"name",staticClass:"input",attrs:{placeholder:"Name"},domProps:{value:e.proposed.name},on:{input:function(t){t.target.composing||e.$set(e.proposed,"name",t.target.value)}}})]),e._v(" "),o("v-spacer"),e._v(" "),o("v-flex",{attrs:{xs6:""}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.proposed.value,expression:"proposed.value"}],staticClass:"input",attrs:{placeholder:"Value"},domProps:{value:e.proposed.value},on:{input:function(t){t.target.composing||e.$set(e.proposed,"value",t.target.value)}}})]),e._v(" "),o("v-spacer"),e._v(" "),o("v-flex",{attrs:{shrink:""}},[o("v-btn",{staticClass:"ma-0",attrs:{small:"",color:"primary",type:"submit"}},[e._v("\n                        Add\n                    ")])],1)],1)],1)])],1)};a._withStripped=!0;o(17),o(51),o(28);var n={components:{draggable:function(){return Promise.resolve().then(o.t.bind(null,797,7))}},props:{value:{type:Array}},data:function(){return{proposed:{name:"",value:""},model:this.value}},created:function(){this.value||this.$set(this,"model",[]),this.$emit("input",this.model)},watch:{value:function(e){this.model=e},"proposed.name":function(e){this.proposed.value=e}},methods:{sorted:function(){this.$emit("input",this.model)},remove:function(e){this.model.splice(this.model.indexOf(e),1)},addOption:function(){console.log("Add copy");var e=this,t=JSON.parse(JSON.stringify(e.proposed));_.some(e.model,(function(t){return t.value==e.proposed.value}))||(e.model.push(t),e.proposed={name:"",value:""},e.$refs.name.focus())}},computed:{}},s=(o(1058),o(0)),i=Object(s.a)(n,a,[],!1,null,"3f520c55",null);i.options.__file="src/components/fields/FluroOptionsManager.vue";t.default=i.exports},898:function(e,t,o){var a=o(1059);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,o(4).default)("71374dc4",a,!1,{})}}]);