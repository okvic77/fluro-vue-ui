(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1061:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"timeline-entry",on:{click:function(e){return t.$fluro.global.view(t.item.mailout,!0)}}},[i("v-layout",[i("v-flex",{attrs:{shrink:""}},[i("v-container",{attrs:{"pa-2":""}},[i("div",{staticClass:"timeline-icon"},[i("fluro-icon",{attrs:{icon:"envelope"}})],1)])],1),t._v(" "),i("v-flex",[i("v-container",{attrs:{"pa-2":""}},[i("strong",[t._v(t._s(t.item.mailout.subject||t.item.mailout.title))]),t._v(" "),i("div",{staticClass:"summary"},[t._v(t._s(t.summary))])])],1)],1)],1)};n._withStripped=!0;var r={props:{item:{type:Object,required:!0}},computed:{summary:function(){switch(this.item.state){case"sent":return"Sent to ".concat(this.item.email," - ").concat(this.$filters.formatDate(this.item.date,"h:mma"));case"click":return"Clicked";case"open":return"Read / Opened";case"error":return"Error sending to ".concat(this.item.email)}}}},a=(i(908),i(0)),s=Object(a.a)(r,n,[],!1,null,"142fb482",null);s.options.__file="src/components/content/contact/timeline/cards/MailoutCard.vue";e.default=s.exports},812:function(t,e,i){var n=i(909);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(3).default)("331e8926",n,!1,{})},908:function(t,e,i){"use strict";var n=i(812);i.n(n).a},909:function(t,e,i){(t.exports=i(2)(!1)).push([t.i,".timeline-entry[data-v-142fb482]{cursor:pointer}\n",""])}}]);