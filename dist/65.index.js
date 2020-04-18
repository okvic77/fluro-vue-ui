(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{623:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loading?n("fluro-page-preloader",{attrs:{contain:""}}):t._l(t.teamGroups,(function(e){return n("v-input",{staticClass:"no-flex"},[n("v-label",[t._v(t._s(e.title))]),t._v(" "),n("list-group",[t._l(e.teams,(function(e){return[n("list-group-item",{attrs:{item:e,firstLine:t._f("comma")(e.positions)},scopedSlots:t._u([{key:"right",fn:function(){return[n("v-menu",{attrs:{left:!0,fixed:!0,transition:"slide-y-transition","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(a){var o=a.on;return[n("v-btn",t._g({staticClass:"ma-0",attrs:{icon:"",small:"",flat:""}},o),[t.actionIndexes[e._id]?n("fluro-icon",{attrs:{icon:"times"}}):n("fluro-icon",{attrs:{icon:"ellipsis-h"}})],1)]}}],null,!0),model:{value:t.actionIndexes[e._id],callback:function(n){t.$set(t.actionIndexes,e._id,n)},expression:"actionIndexes[team._id]"}},[t._v(" "),n("v-list",{attrs:{dense:""}},[n("v-list-tile",{on:{click:function(n){return t.$actions.open([e])}}},[n("v-list-tile-content",[t._v("Actions")])],1),t._v(" "),t.canLeave(e)?n("v-list-tile",{on:{click:function(n){return t.leave(e)}}},[n("v-list-tile-content",[t._v("Remove "+t._s(t.model.firstName)+" from group")])],1):t._e()],1)],1)]},proxy:!0}],null,!0)})]}))],2),t._v(" "),t.canAdd(e.key)?[n("v-btn",{staticClass:"ml-0",attrs:{small:"",color:"primary"},on:{click:function(n){return t.select(e.key)}}},[t._v("\n                    Add "+t._s(e.title)+"\n                    "),n("fluro-icon",{attrs:{right:"",icon:"plus"}})],1)]:t._e()],2)}))],2)};a._withStripped=!0;var o=n(46),i=n(47),s=n(26),r=n(48),l=n(7),c=n.n(l),u={props:{value:{type:Object,required:!0}},data(){return{actionIndexes:{},model:this.value,loading:!0,newGroups:[],teams:[]}},created(){console.log("RELOAD TEAMS"),this.reloadTeams()},methods:{canLeave(t){var e=t.definition;return this.$fluro.access.can("leave",e,"team")||this.$fluro.access.canEditItem(t)},canAdd(t){var e=this.$fluro.access.can("join",t,"team"),n=this.$fluro.access.can("edit",t,"team");return e||n},leave(t){var e=this,n=e.$fluro.utils.getStringID(t);e.loading=!0;e.$batch.run({operation:"remove from team",ids:[e.contactID],teams:[n]}).then((function(t){var a=_.findIndex(e.teams,{_id:n});e.teams.splice(a,1),e.loading=!1})).catch((function(t){console.log("TEAMS ERR",t),e.reloadTeams()}))},select(t){var e=this,n=new(c.a.extend(r.a))({propsData:{minimum:0,maximum:0}});e.$fluro.modal({component:s.a,options:{allDefinitions:!1,selector:n,type:t,minimum:0,maximum:0}}).then((function(t){if(t&&t.length){e.loading=!0;var n=e.$fluro.utils.arrayIDs(t);e.$batch.run({operation:"add to team",ids:[e.contactID],teams:n}).then((function(t){console.log("TEAMS ADDED",t),e.reloadTeams()})).catch((function(t){console.log("TEAMS ERR",t),e.reloadTeams()}))}}))},reloadTeams(){var t=this;t.loading=!0,t.$fluro.api.get(`/contact/${t.contactID}/teams`).then((function(e){t.teams=e.data,t.loading=!1})).catch((function(e){t.loading=!1}))}},components:{ListGroup:o.a,ListGroupItem:i.a,FluroContentSelectModal:s.a},computed:{contactID(){return this.$fluro.utils.getStringID(this.model)},teamGroups(){var t=this,e=_.reduce(t.teamDefinitions,(function(t,e){return t[e.definitionName]={title:e.plural,teams:[],key:e.definitionName},t}),{team:{title:"Groups and Teams",teams:[],key:"team"}});return _.chain(t.teams).reduce((function(e,n){var a=n.definition||"team",o=e[a];return o||(o=e[a]={title:t.$fluro.types.readable(a,!0),teams:[]}),o.teams.push(n),e}),e).values().orderBy((function(t){return t.teams.length})).reverse().value()}},asyncComputed:{teamDefinitions:{default:[],get(){return this.$fluro.types.subTypes("team")}}}},m=n(0),d=Object(m.a)(u,a,[],!1,null,null,null);d.options.__file="src/components/content/edit/components/ContactGroupManager.vue";e.default=d.exports}}]);