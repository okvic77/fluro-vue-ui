(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{788:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"timeline-entry border-top"},[e("fluro-realm-bar",{attrs:{realm:this.realms}}),this._v(" "),e("pre",[this._v(this._s(this.item))]),this._v(" "),this._v(" --\x3e\n")],1)};n._withStripped=!0;var s={props:{item:{type:Object,required:!0}},components:{FluroRealmBar:()=>Promise.resolve().then(i.bind(null,22))},computed:{links(){switch(this.type){case"assignment":return _.chain(this.item.entries).map((function(t){return _.get(t,"roster.event")})).compact().uniqBy((function(t){return t._id})).value()}},type(){return this.item.type},realms(){return _.chain(this.item.entries).map("realms").flatten().uniq().compact().value()},title(){switch(this.item.type){case"assignment":return"Rostered as "+_.chain(this.item.entries).map((function(t){return t.title})).compact().uniq().value().join(", ")}},icon(){switch(this.item.type){case"assignment":return"calendar";default:return this.$fluro.types.icon(this.item.type)}}}},r=i(0),a=Object(r.a)(s,n,[],!1,null,null,null);a.options.__file="src/components/content/contact/timeline/cards/GroupedCard.vue";e.default=a.exports}}]);