(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1066:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timeline-entry border-top",on:{click:function(e){return t.$fluro.global.edit(t.item,!0)}}},[n("fluro-realm-bar",{attrs:{realm:t.item.realms}}),t._v(" "),n("v-layout",[n("v-flex",{attrs:{shrink:""}},[n("v-container",{attrs:{"pa-2":""}},[n("div",{staticClass:"timeline-icon"},[n("fluro-icon",{attrs:{library:"fas",icon:t.rosterIcon}})],1)])],1),t._v(" "),n("v-flex",[n("v-container",{attrs:{"pa-2":""}},[n("strong",[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"summary",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.$fluro.global.edit(t.event,!0)}}},[n("strong",[t._v(t._s(t.event.title))]),t._v(" - "+t._s(t.datestring))])])],1)],1)],1)};i._withStripped=!0;var r={props:{item:{type:Object,required:!0}},components:{FluroRealmBar:function(){return Promise.resolve().then(n.bind(null,80))}},computed:{rosterIcon:function(){switch(this.item.confirmationStatus){case"unknown":return"question";case"confirmed":return"check";case"declined":return"times"}},summary:function(){return"".concat(this.event.title," - ").concat(this.datestring)},datestring:function(){return this.$fluro.date.readableEventDate(this.event)},roster:function(){return this.item.roster},event:function(){return this.roster.event},position:function(){return this.item.title},title:function(){switch(this.item.confirmationStatus){case"unknown":return"Rostered as ".concat(this.position);case"declined":return"Marked unavailable for ".concat(this.position);case"confirmed":return"Confirmed as ".concat(this.position)}}}},o=(n(918),n(0)),s=Object(o.a)(r,i,[],!1,null,null,null);s.options.__file="src/components/content/contact/timeline/cards/RosterCard.vue";e.default=s.exports},817:function(t,e,n){var i=n(919);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(3).default)("5fbf85fe",i,!1,{})},918:function(t,e,n){"use strict";var i=n(817);n.n(i).a},919:function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".checkin-timeline-entry{padding:10px;font-style:italic;font-size:0.8em}\n",""])}}]);