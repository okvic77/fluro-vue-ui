(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{613:function(e,t,a){var n=a(774);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a(3).default)("8a714eb4",n,!1,{})},773:function(e,t,a){"use strict";var n=a(613);a.n(n).a},774:function(e,t,a){(e.exports=a(2)(!1)).push([e.i,".expression-field-select[data-v-cc01bc10]{width:400px;height:100%;max-height:50vh;background:#fff}.expression-field-select .example[data-v-cc01bc10]{font-size:12px;margin-bottom:5px}.expression-field-select .example .example-code[data-v-cc01bc10]{font-weight:bold;background:rgba(0,0,255,0.3);color:#000;display:inline-block;padding:3px;border-radius:3px}.expression-field-select .example .example-description[data-v-cc01bc10]{font-size:0.8em}.expression-field-select .accordion .accordion-panel[data-v-cc01bc10]{margin:0}.expression-field-select .accordion .accordion-panel .accordion-panel-title[data-v-cc01bc10]{padding:5px;font-weight:600;font-weight:500;background:#eee}.expression-field-select .accordion .accordion-panel.expanded .accordion-panel-title[data-v-cc01bc10]{background:#fff}.expression-field-select .accordion .accordion-panel .accordion-panel-content[data-v-cc01bc10]{background:#fff;padding:5px}\n",""])},790:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("flex-column",{staticClass:"expression-field-select"},[a("flex-column-body",[a("div",{staticClass:"accordion"},e._l(e.fields,(function(t){return a("div",{staticClass:"accordion-panel",class:{expanded:t==e.selected}},[a("div",{staticClass:"accordion-panel-title",on:{click:function(a){return e.toggle(t)}}},[a("v-layout",[a("v-flex",[e._v("\n                            "+e._s(t.absoluteTitle)+"\n                        ")]),e._v(" "),a("v-flex",{attrs:{shrink:""}},[a("fluro-icon",{attrs:{icon:t==e.selected?"angle-up":"angle-down"}})],1)],1)],1),e._v(" "),t==e.selected?a("div",{staticClass:"accordion-panel-content"},e._l(t.examples,(function(n){return a("div",{staticClass:"example",on:{click:function(a){return e.selectExample(n,t)}}},[a("div",{staticClass:"example-code"},[e._v(e._s(n.path))]),e._v(" "),a("div",{staticClass:"example-description"},[e._v(e._s(n.description))])])})),0):e._e()])})),0)])],1)};function i(e){if(e)return{title:e.title,path:e.path,guid:e.guid||"nope"}}n._withStripped=!0;var s={props:{value:{type:Array},context:{type:Object}},data(){return{contextField:this.context,model:this.value,fields:[],selected:null}},watch:{value(e){this.model=e},contextField:"map",model:"map"},created(){this.map()},computed:{currentTrail(){var e=this.contextField;if(e)return i(_.find(this.trails,{guid:e.guid}))},trails(){return _.map(this.fields,i)}},methods:{selectExample(e,t){this.$emit("click",e,t)},toggle(e){this.selected=e},map(){this.contextField&&(this.fields=function(e,t){var a=[];(function t(n,i,s){_.each(n,(function(n){var c={title:n.title,key:n.key,type:n.type,guid:n.guid};c.trail=i.slice(),c.titles=s.slice(),c.context=e==n,c.absoluteTitle=c.titles.concat([n.title]).join(" > "),c.parentTitle=_.last(s),c.parentTrail=i.slice().join("."),c.path=c.trail.concat([n.key]).join("."),c.isArray=1!=n.maximum,n.allowedValues&&n.allowedValues.length?c.options=_.map(n.allowedValues,(function(e){return{name:e,value:e}})):c.options=n.options||[],a.push(c),(n.asObject||"embedded"==n.directive)&&(1==n.maximum?(i.push(n.key),s.push(n.title)):(i.push(n.key+"[0]"),s.push(n.title))),n.fields&&n.fields.length&&t(n.fields,i,s),(n.asObject||"embedded"==n.directive)&&(i.pop(),s.pop())}))})(t,[],[]),!1;var n=_.find(a,{guid:e.guid}),i=n?n.parentTrail:"";return _.chain(a).map((function(e){var t,a;e.contextualPath=i.length?e.path.replace(i,"model"):e.path,e.contextualPath==e.path&&(e.contextualPath="data."+e.path),e.examples=[];var n=e.options?e.options.slice(0,5):[];switch(e.type){case"group":if(!e.asObject)return;break;case"void":return;case"number":t=a=18;break;case"integer":t=a=12;break;case"decimal":case"float":t=a=3.56;break;case"boolean":t=a="true";break;case"email":t=a="example@fluro.io";break;case"url":t=a="https://www.fluro.io";break;case"date":t="Date",a=Date.now();break;case"string":e.isArray?n&&n.length?(t=`[${_.map(n,(function(e){return`'${e}'`})).join(", ")}]`,a=_.map(n,"value")):t=(a=["Michael","Susan","Jerry"]).join(", "):n&&n.length?(t=_.first(n).name,a=`'${_.first(n).value}'`):t=a="'Michael'";break;case"reference":t=a=e.isArray?["Object","Object","Object"]:{}}var s=[],c=e.contextualPath,l=c.lastIndexOf("[0]"),r=-1!=l,o=c.slice(0,l),u=-1==l?0:l,p=c.slice(u+"[0]".length+1);if(e.isArray){switch(e.type){case"reference":case"group":break;case"number":case"integer":case"decimal":case"float":n.length?_.each(n,(function(t){s.push({path:`${e.contextualPath}.includes(${t.value})`,description:`Returns if '${t.name}' has been selected as a value`})})):_.each(a,(function(t){s.push({path:`${e.contextualPath}.includes(${t})`,description:`Returns if '${e.path}' has been selected as a value`})}));break;default:n.length?_.each(n,(function(t){s.push({path:`${e.contextualPath}.includes('${t.value}')`,description:`Returns if '${t.name}' has been selected`})})):_.each(a,(function(t){s.push({path:`${e.contextualPath}.includes('${t}')`,description:`Returns if '${e.path}' has been selected`})}))}s.push({path:e.contextualPath+".length",description:`Returns the number of '${e.title}' values that have been input`}),s.push({path:e.contextualPath+".length > 1",description:`Returns true if more than 1 '${e.title}' value has been input`}),s.push({path:e.contextualPath+".length < 4",description:`Returns true if less than 4 '${e.title}' values have been input`})}else if(n.length)switch(e.type){case"reference":case"group":break;case"number":case"integer":case"decimal":case"float":_.each(n,(function(t){s.push({path:`${e.contextualPath} == ${t.value}`,description:`Returns if '${t.name}' has been selected`})}));break;default:_.each(n,(function(t){s.push({path:`${e.contextualPath} == '${t.value}'`,description:`Returns if '${t.name}' has been selected`})}))}else s.push({path:""+e.contextualPath,description:`Returns the value of '${e.title}'`});if(r)if(e.isArray)n.length?_.each(n,(function(t){s.push({path:`matchInArray(${e.contextualPath}, '${p}', '${t.value}', 'in').length`,description:`Returns the total number of '${e.parentTitle}' where '${e.title}' includes'${t.name}'`})})):s.push({path:`matchInArray(data.${o}, '${p}', '${a}', 'in').length`,description:`Returns the total number of '${e.parentTitle}' where '${e.title}' includes'${t}'`});else if(n.length)_.each(n,(function(t){s.push({path:`matchInArray(${o}, '${p}', '${t.value}').length`,description:`Returns the total number of '${e.parentTitle}' where ${e.title} is equal to '${t.name}'`})}));else switch(e.type){case"number":case"float":case"decimal":case"integer":s.push({path:`matchInArray(${o}, '${p}', ${a}).length`,description:`Returns the total number of '${e.parentTitle}' where ${e.title} is equal to ${t}`}),s.push({path:`matchInArray(${o}, '${p}', ${a}, '>=').length`,description:`Returns the total number of '${e.parentTitle}' where ${e.title} is greater than or equal to ${t}`}),s.push({path:`matchInArray(${o}, '${p}', ${a}, '<').length`,description:`Returns the total number of '${e.parentTitle}' where ${e.title} is less than ${t}`});break;case"boolean":break;default:s.push({path:`matchInArray(${o}, '${p}', ${a}).length`,description:`Returns the total number of '${e.parentTitle}' where ${e.title} is equal to ${t}`})}return e.examples=s,e})).compact().value()}(this.contextField,this.model))}}},c=(a(773),a(0)),l=Object(c.a)(s,n,[],!1,null,"cc01bc10",null);l.options.__file="src/components/fields/ExpressionFieldSelect.vue";t.default=l.exports}}]);