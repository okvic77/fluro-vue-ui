(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{771:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("flex-column",[e.loading?[n("fluro-page-preloader",{attrs:{contain:""}})]:n("tabset",{attrs:{justified:!0,vertical:!0}},[n("tab",{attrs:{heading:e.readableTypeName+" Info"}},[e._t("default",[n("flex-column-body",{staticStyle:{background:"#fafafa"}},[n("v-container",{staticClass:"grid-list-xl"},[n("constrain",{attrs:{sm:""}},[n("h3",{attrs:{margin:""}},[e._v("Event Details")]),e._v(" "),n("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.title},on:{input:e.update},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}}),e._v(" "),n("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.firstLine},on:{input:e.update},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}}),e._v(" "),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",sm4:""}},[n("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.startDate},model:{value:e.dateModel,callback:function(t){e.dateModel=t},expression:"dateModel"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm4:""}},[n("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.endDate},model:{value:e.dateModel,callback:function(t){e.dateModel=t},expression:"dateModel"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm4:""}},[n("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.timezone},on:{input:e.update},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1)],1),e._v(" "),n("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.mainImage},on:{input:e.update},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}}),e._v(" "),n("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.body},on:{input:e.update},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}}),e._v(" "),e.definition&&e.definition.fields&&e.definition.fields.length?n("fluro-panel",[n("fluro-panel-title",[n("strong",[e._v(e._s(e.definition.title)+" Information")])]),e._v(" "),n("fluro-panel-body",[n("fluro-content-form",{attrs:{options:e.options,fields:e.definition.fields},model:{value:e.model.data,callback:function(t){e.$set(e.model,"data",t)},expression:"model.data"}})],1)],1):e._e(),e._v(" "),n("fluro-content-form-field",{attrs:{"override-label":e.definition&&e.definition.definitionName&&"service"==e.definition.definitionName?"Service Time / Event Track":"Event Track","form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.track},on:{input:e.update},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1)],1)],1)])],2),e._v(" "),e.model.rostered?n("tab",{attrs:{heading:"Team Members"}},[n("flex-column-body",{staticStyle:{background:"#fafafa"}},[n("v-container",[n("constrain",{attrs:{sm:""}},[n("v-layout",{attrs:{"align-center":""}},[n("v-flex",[n("h3",[e._v("Team Members")])]),e._v(" "),n("v-flex",{attrs:{shrink:""}},[n("v-btn",{attrs:{color:"primary",to:{name:"events.multi",query:{ids:[e.model._id]}}}},[e._v("\n                                    Open in Multi Planner\n                                    "),n("fluro-icon",{attrs:{right:"",icon:"game-board"}})],1)],1)],1),e._v(" "),e._l(e.model.rostered,(function(t){return n("fluro-panel",[n("fluro-panel-title",[n("v-layout",{attrs:{"align-center":""}},[n("v-flex",[n("strong",[e._v(e._s(t.title))])]),e._v(" "),e.canEditRoster(t)?n("v-flex",{attrs:{shrink:""}},[n("v-btn",{directives:[{name:"tippy",rawName:"v-tippy"}],staticClass:"ma-0",attrs:{icon:"",content:"Actions"},on:{click:function(n){return e.$actions.open([t])}}},[n("fluro-icon",{attrs:{icon:"ellipsis-h"}})],1)],1):e._e()],1)],1),e._v(" "),n("fluro-panel-body",[n("v-layout",{attrs:{row:"",wrap:""}},e._l(t.slots,(function(t){return t.assignments&&t.assignments.length?n("v-flex",{attrs:{xs6:"",sm4:"",md3:""}},[n("v-container",{staticClass:"mb-2 pa-2"},[n("h5",[e._v(e._s(t.title))]),e._v(" "),e._l(t.assignments,(function(t){return n("div",{staticClass:"assignment-item",class:t.confirmationStatus,on:{click:function(n){return e.$actions.open([t])}}},[n("v-layout",[n("v-flex",[e._v("\n                                                        "+e._s(t.contact&&t.contact.title?t.contact.title:t.contactName)+"\n                                                    ")]),e._v(" "),n("v-flex",{attrs:{shrink:""}},[n("fluro-icon",{attrs:{right:"",icon:e.confirmationIcon(t)}})],1)],1)],1)}))],2)],1):e._e()})),1)],1)],1)})),e._v(" "),e._l(e.rosterTypes,(function(t){return n("v-btn",{staticClass:"btn-ghost",attrs:{block:""},on:{click:function(n){return e.createRoster(t)}}},[e._v("\n                            Add "+e._s(t.title)+"\n                        ")])}))],2)],1)],1)],1):e._e(),e._v(" "),n("tab",{attrs:{heading:"Livestream Settings"}},[n("flex-column-body",{staticStyle:{background:"#fafafa"}},[n("v-container",[n("constrain",{attrs:{sm:""}},[n("h3",{attrs:{margin:""}},[e._v("Livestream Settings")]),e._v(" "),n("fluro-content-form-field",{attrs:{"form-fields":e.formFields,options:e.options,field:e.fieldHash.streamEnabled},on:{input:e.update},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}}),e._v(" "),e.model.streamEnabled?[n("fluro-content-form",{attrs:{options:e.options,fields:e.streamFields},scopedSlots:e._u([{key:"form",fn:function(t){var a=t.formFields,o=t.fieldHash,i=t.model,s=t.update,r=t.options;return[n("v-container",{attrs:{"pa-0":"","grid-list-xl":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-input",{staticClass:"no-flex"},[n("v-label",[e._v("Stream Starts")]),e._v(" "),n("p",{staticClass:"help-block"},[e._v("How many minutes earlier should the stream be available?")]),e._v(" "),n("fluro-content-form-field",{attrs:{"form-fields":a,options:r,field:o.streamStartOffset},on:{input:s},model:{value:i,callback:function(e){i=e},expression:"model"}}),e._v(" "),n("p",{staticClass:"lead"},[e._v("\n                                                        "+e._s(e._f("formatDate")(e.streamStartDate,"h:mma dddd D MMM",i.timezone))+"\n                                                    ")])],1)],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-input",{staticClass:"no-flex"},[n("v-label",[e._v("Stream Ends")]),e._v(" "),n("p",{staticClass:"help-block"},[e._v("How many minutes after this event's end time should the stream be available?")]),e._v(" "),n("fluro-content-form-field",{attrs:{"form-fields":a,options:r,field:o.streamEndOffset},on:{input:s},model:{value:i,callback:function(e){i=e},expression:"model"}}),e._v(" "),n("p",{staticClass:"lead"},[e._v("\n                                                        "+e._s(e._f("formatDate")(e.streamEndDate,"h:mma dddd D MMM",i.timezone))+"\n                                                    ")])],1)],1)],1)],1)]}}],null,!1,2462663922),model:{value:e.model.streamData,callback:function(t){e.$set(e.model,"streamData",t)},expression:"model.streamData"}}),e._v(" "),e.model._id&&e.liveUrl?n("v-btn",{attrs:{target:"_blank",href:e.liveUrl,block:"",large:"",color:"primary"}},[e._v("\n                                Watch on Fluro Live\n                            ")]):e._e(),e._v(" "),n("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.streamIntegrations},on:{input:e.update},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}}),e._v(" "),n("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.streamContent},on:{input:e.update},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}}),e._v(" "),n("fluro-panel",[n("fluro-panel-body",[n("v-input",{staticClass:"no-flex",attrs:{label:"RTMP Upstream URL"}},[n("div",{directives:[{name:"tippy",rawName:"v-tippy"}],attrs:{content:"Click to copy to clipboard"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.copyToClipboard("rtmpUrl")}}},[n("v-layout",{attrs:{"align-center":""}},[n("v-flex",{staticClass:"copystring"},[e._v(e._s(e.rtmpUrl))])],1),e._v(" "),n("input",{ref:"rtmpUrl",attrs:{type:"hidden"},domProps:{value:e.rtmpUrl}})],1)]),e._v(" "),n("v-input",{staticClass:"no-flex",attrs:{label:"RTMP Stream Key"}},[n("div",{directives:[{name:"tippy",rawName:"v-tippy"}],attrs:{content:"Click to copy to clipboard"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.copyToClipboard("streamKey")}}},[n("v-layout",{attrs:{"align-center":""}},[n("v-flex",{staticClass:"copystring"},[e._v(e._s(e.streamKey))])],1),e._v(" "),n("input",{ref:"streamKey",attrs:{type:"hidden"},domProps:{value:e.streamKey}})],1)]),e._v(" "),n("v-input",{staticClass:"no-flex",attrs:{label:"Fluro Live URL"}},[n("div",{directives:[{name:"tippy",rawName:"v-tippy"}],attrs:{content:"Click to copy to clipboard"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.copyToClipboard("liveUrl")}}},[n("v-layout",{attrs:{"align-center":""}},[n("v-flex",{staticClass:"copystring"},[e._v(e._s(e.liveUrl))])],1),e._v(" "),n("input",{ref:"liveUrl",attrs:{type:"hidden"},domProps:{value:e.liveUrl}})],1)]),e._v(" "),n("v-input",{staticClass:"no-flex",attrs:{label:"Video Stream URL"}},[n("div",{directives:[{name:"tippy",rawName:"v-tippy"}],attrs:{content:"Click to copy to clipboard"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.copyToClipboard("streamUrl")}}},[n("v-layout",{attrs:{"align-center":""}},[n("v-flex",{staticClass:"copystring"},[e._v(e._s(e.streamUrl))])],1),e._v(" "),n("input",{ref:"streamUrl",attrs:{type:"hidden"},domProps:{value:e.streamUrl}})],1)])],1)],1)]:e._e()],2)],1)],1)],1),e._v(" "),e.model._id?n("tab",{attrs:{heading:e.plans.length+" Plan"+(1==e.plans.length?"":"s")}},[n("flex-column-body",{staticStyle:{background:"#fafafa"}},[n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{"align-center":""}},[n("v-flex",[n("h3",[e._v(e._s(e.plans.length)+" Plan"+e._s(1==e.plans.length?"":"s"))])]),e._v(" "),n("v-flex",{attrs:{shrink:""}},[e.$fluro.access.can("create","plan")?n("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.createPlan()}}},[n("span",[e._v("Add Plan")]),e._v(" "),n("fluro-icon",{attrs:{icon:"plus",right:""}})],1):e._e()],1)],1),e._v(" "),n("fluro-panel",[n("tabset",{attrs:{justified:!0}},e._l(e.plans,(function(t,a){return n("tab",{attrs:{heading:t.title}},[n("fluro-content-view",{attrs:{id:e.plans[a],embedded:!0,type:"plan"}})],1)})),1)],1)],1)],1)],1):e._e(),e._v(" "),n("tab",{attrs:{heading:"Location & Rooms"}},[n("flex-column-body",{staticStyle:{background:"#fafafa"}},[n("v-container",{attrs:{fluid:"","pa-0":""}},[n("location-view-map-component",{staticStyle:{width:"100%","min-height":"300px",height:"50vh"},attrs:{name:"locationMap",positions:e.model.locations}}),e._v(" "),n("constrain",{staticClass:"mt-4",attrs:{sm:""}},[n("location-selector",{attrs:{allLocations:e.locations,locationsPath:"locations",roomsPath:"rooms"},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1)],1)],1)],1),e._v(" "),n("tab",{attrs:{heading:"Media & Resources"}},[n("flex-column-body",{staticStyle:{background:"#fafafa"}},[n("v-container",[n("constrain",{attrs:{sm:""}},[n("h3",{attrs:{margin:""}},[e._v("Media & Resources")]),e._v(" "),n("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.mainImage},on:{input:e.update},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}}),e._v(" "),n("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.images},on:{input:e.update},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}}),e._v(" "),n("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.videos},on:{input:e.update},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}}),e._v(" "),n("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.assets},on:{input:e.update},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}}),e._v(" "),n("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.externalLinks},on:{input:e.update},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}}),e._v(" "),n("fluro-panel",[n("fluro-panel-title",[n("strong",[e._v("Social Media")])]),e._v(" "),n("fluro-panel-body",[n("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.socialImages},on:{input:e.update},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}}),e._v(" "),n("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.socialBody},on:{input:e.update},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1)],1)],1)],1)],1)],1),e._v(" "),n("tab",{attrs:{heading:"Guests / Ticketing"}},[n("flex-column-body",{staticStyle:{background:"#fafafa"}},[n("v-container",[n("h3",{attrs:{margin:""}},[e._v("Registrations & Ticketing")]),e._v(" "),n("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.forms},on:{input:e.update},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}}),e._v(" "),n("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.expectTeams},on:{input:e.update},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}}),e._v(" "),n("guest-list",{attrs:{event:e.model}})],1)],1)],1),e._v(" "),n("tab",{attrs:{heading:"Messaging"}},[e._t("default",[n("flex-column-body",{staticStyle:{background:"#fafafa"}},[n("v-container",[n("constrain",{attrs:{lg:""}},[n("h3",{attrs:{margin:""}},[e._v("Automated Messages")]),e._v(" "),n("messaging-event-manager",{attrs:{config:e.config,startDate:e.model.startDate,endDate:e.model.endDate},model:{value:e.model.messages,callback:function(t){e.$set(e.model,"messages",t)},expression:"model.messages"}})],1)],1)],1)])],2),e._v(" "),n("tab",{attrs:{heading:"Checkin Settings"}},[n("flex-column-body",{staticStyle:{background:"#fafafa"}},[n("v-container",[n("constrain",{attrs:{sm:""}},[n("h3",{attrs:{margin:""}},[e._v("Checkin Settings")]),e._v(" "),n("fluro-content-form",{attrs:{options:e.options,fields:e.checkinFields},scopedSlots:e._u([{key:"form",fn:function(t){var a=t.formFields,o=t.fieldHash,i=t.model,s=t.update,r=t.options;return[n("v-container",{attrs:{"pa-0":"","grid-list-xl":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-input",{staticClass:"no-flex"},[n("v-label",[e._v("Checkin Opens")]),e._v(" "),n("p",{staticClass:"help-block"},[e._v("How many minutes earlier can users checkin")]),e._v(" "),n("fluro-content-form-field",{attrs:{"form-fields":a,options:r,field:o.checkinStartOffset},on:{input:s},model:{value:i,callback:function(e){i=e},expression:"model"}}),e._v(" "),n("p",{staticClass:"help-block"},[e._v("No checkins before")]),e._v(" "),n("p",{staticClass:"lead"},[e._v("\n                                                    "+e._s(e._f("formatDate")(e.checkinStartDate,"h:mma dddd D MMM",i.timezone))+"\n                                                    ")])],1)],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-input",{staticClass:"no-flex"},[n("v-label",[e._v("Checkin Closes")]),e._v(" "),n("p",{staticClass:"help-block"},[e._v("How many minutes after this event's end time can a user still check in?")]),e._v(" "),n("fluro-content-form-field",{attrs:{"form-fields":a,options:r,field:o.checkinEndOffset},on:{input:s},model:{value:i,callback:function(e){i=e},expression:"model"}}),e._v(" "),n("p",{staticClass:"help-block"},[e._v("No checkins after")]),e._v(" "),n("p",{staticClass:"lead"},[e._v("\n                                                    "+e._s(e._f("formatDate")(e.checkinEndDate,"h:mma dddd D MMM",i.timezone))+"\n                                                    ")])],1)],1)],1)],1)]}}]),model:{value:e.model.checkinData,callback:function(t){e.$set(e.model,"checkinData",t)},expression:"model.checkinData"}})],1)],1)],1)],1)],1)],2)};a._withStripped=!0;n(32),n(21);var o=n(907),i=n(903),s=n(910),r=n(798),l=n(904),c=n(339),d=(n(25),{components:{GuestList:l.a,FluroContentView:c.a,MessagingEventManager:o.a,LocationSelector:s.a,LocationViewMapComponent:i.a},props:{},mixins:[r.a],methods:{copyToClipboard:function(e){var t=this.$refs[e];t.setAttribute("type","text"),t.select();try{document.execCommand("copy");this.$fluro.notify("Invite Code Copied to clipboard")}catch(e){}t.setAttribute("type","hidden"),window.getSelection().removeAllRanges()},closePlan:function(){},planUpdated:function(e){console.log("changed the plan!",e)},createPlan:function(){var e=this,t=e.model;e.$fluro.global.select("plan",{title:"Select a template",minimum:1,maximum:1},!0).then((function(n){if(n&&n.length){var a=e.$fluro.utils.getStringID(n[0]);return e.processing=!0,e.$fluro.content.get(a).then((function(n){var a=n;a.realms=t.realms,a.event=t,a.startDate=t.startDate,a.status="active",delete a._id,e.$fluro.global.create("plan",{template:a,copy:!0},!0).then((function(t){e.processing=!1}),(function(t){e.processing=!1}))}))}}))},createRoster:function(e){var t={title:e.title,event:this.model,definition:e.definitionName,realms:this.model.realms.slice()};this.$fluro.global.create(e.definitionName,{template:t},!0).then((function(e){console.log("Result")})).catch((function(e){}))},confirmationIcon:function(e){switch(e.confirmationStatus){case"confirmed":return"check";case"denied":return"times";case"unknown":return"clock";case"proposed":return"question-circle"}},canEditRoster:function(e){return this.$fluro.access.canEditItem(e)}},watch:{"dateModel.startDate":function(e){var t=new Date(e);this.model.startDate=t,this.update(this.model);var n=!!this.dateModel.endDate&&new Date(this.dateModel.endDate);n&&n<t&&(this.dateModel.endDate=new Date(t))},"dateModel.endDate":function(e){var t=new Date(e);this.model.endDate=t,this.update(this.model);var n=!!this.dateModel.startDate&&new Date(this.dateModel.startDate);n&&n>t&&(this.dateModel.startDate=new Date(t))}},created:function(){this.model.data?(this.dateModel.startDate=new Date(this.model.startDate),this.dateModel.endDate=new Date(this.model.endDate)):this.$set(this.model,"data",{}),this.model.checkinData||this.$set(this.model,"checkinData",{checkinStartOffset:90,checkinEndOffset:90}),this.model.streamData||this.$set(this.model,"streamData",{streamStartOffset:30,streamEndOffset:30}),this.model.messages||this.$set(this.model,"messages",[]),this.model.locations||this.$set(this.model,"locations",[]),this.model.rooms||this.$set(this.model,"rooms",[])},asyncComputed:{rosterTypes:{default:[],get:function(){var e=this;return new Promise((function(t,n){return e.$fluro.types.subTypes("roster").then((function(n){var a=_.filter(n,(function(t){if(!e.existingRosterTypes[t.definitionName])return e.$fluro.access.can("create",t.definitionName,"roster")}));t(a)})).catch(n)}))}},locations:{default:[],get:function(){var e=this;return new Promise((function(t,n){e.$fluro.api.get("/content/location?allDefinitions=true").then((function(e){t(e.data)})).catch((function(e){n(e)}))}))}}},computed:{fieldsOutput:function(){var e=[];n("title",{title:"Event Title",minimum:1,maximum:1,type:"string",placeholder:"Event title"}),n("firstLine",{title:"Subtitle",minimum:0,maximum:1,type:"string",placeholder:"Eg. A great event for the whole family. Featuring Special Guest...",description:"A short one line description about this event"}),n("streamEnabled",{title:"Stream Enabled",description:"Enable live streaming for this event",minimum:0,maximum:1,type:"boolean"}),n("streamContent",{title:"Pre-recorded Video",description:"Select or create a video to stream for this event",minimum:0,maximum:1,type:"reference",params:{restrictType:"video"},defaultValues:[!0]}),n("streamIntegrations",{title:"Stream Integrations",description:"Broadcast to multiple endpoints",minimum:0,maximum:0,type:"reference",params:{restrictType:"integration"},defaultValues:[!0]});var t=new Date;function n(t,n){n.key=t,e.push(n)}return n("startDate",{title:"Start Date",minimum:1,maximum:1,type:"date",directive:"datetimepicker",defaultValues:[t]}),n("endDate",{title:"End Date",minimum:0,maximum:1,type:"date",directive:"datetimepicker",defaultValues:[t]}),n("timezone",{title:"Event Timezone",minimum:0,maximum:1,type:"string",directive:"timezone-select",description:"Set a local timezone for this event"}),n("mainImage",{title:"Main Promotional Image",description:"Select a main promotional image for this event",minimum:0,maximum:1,type:"reference",directive:"reference-select",params:{restrictType:"image"}}),n("track",{title:"Event Track",description:"The event track for this event",minimum:0,maximum:1,type:"reference",directive:"reference-select",params:{restrictType:"eventtrack"}}),n("body",{title:"Body",minimum:0,maximum:1,type:"string",directive:"wysiwyg",placeholder:"",description:""}),n("images",{title:"Additional Images",description:"Additional promotional images for this event",minimum:0,maximum:0,type:"reference",directive:"reference-select",params:{restrictType:"image"}}),n("videos",{title:"Videos",description:"Additional video content for this event",minimum:0,maximum:0,type:"reference",directive:"reference-select",params:{restrictType:"video"}}),n("assets",{title:"Files and Resources",description:"Additional downloadable assets and resources for this event",minimum:0,maximum:0,type:"reference",directive:"reference-select",params:{restrictType:"asset"}}),n("externalLinks",{title:"External Link",minimum:0,maximum:0,askCount:0,type:"group",asObject:!0,sameLine:!0,fields:[{type:"group",sameLine:!0,fields:[{title:"Title",key:"title",type:"string",minimum:1,maximum:1},{title:"URL",key:"url",type:"url",minimum:1,maximum:1,placeholder:"https://"}]}]}),n("socialImages",{title:"Social Media Artwork",description:"Add images and artwork that can be shared from pulse and slipstream to promote this event",minimum:0,maximum:0,type:"reference",directive:"reference-select",params:{restrictType:"image"}}),n("socialBody",{title:"Social Media Blurb",description:"Add a social blurb and hashtags to use when sharing/promoting this event",minimum:0,maximum:1,type:"string",directive:"textarea"}),n("forms",{title:"Registration Forms",description:"Manage registration forms that can be used to register for this event",minimum:0,maximum:0,type:"reference",directive:"reference-select",params:{restrictType:"form"}}),n("expectTeams",{title:"Expect Groups",description:"Select groups to expect as attendees. This will expect all active members of these groups as attending at the time of event start",minimum:0,maximum:0,type:"reference",directive:"reference-select",params:{restrictType:"team"}}),e},eventID:function(){return this.$fluro.utils.getStringID(this.model)},accountID:function(){return this.$fluro.utils.getStringID(this.model.account)},rtmpUrl:function(){return this.streamKey?"rtmp://rtmp.fluro.io/live/":"Please save this event to generate your RTMP URL"},liveUrl:function(){return this.streamKey?"https://fluro.live/event/".concat(this.accountID,"/").concat(this.eventID):"Please save this event to generate your fluro live url"},streamUrl:function(){return this.streamKey?"https://rtmp.fluro.io/live/".concat(this.accountID,".").concat(this.eventID,"/index.m3u8"):"Please save this event to generate your fluro live url"},streamKey:function(){if(this.eventID&&this.accountID)return"".concat(this.accountID,".").concat(this.eventID)},readableTypeName:function(){return this.definition?this.$fluro.types.readable(this.definition.title):"Event"},plans:function(){return this.model.plans||[]},existingRosterTypes:function(){return _.reduce(this.model.rostered,(function(e,t){return e[t.definition]=!0,e}),{})},coverImage:function(){return this.$fluro.asset.coverImage(this.model._id,"event",{w:150})},checkinStartOffset:function(){var e=this.model.checkinData.checkinStartOffset;return null==e||isNaN(e)?90:parseInt(e)},checkinStartDate:function(){return this.$fluro.date.moment(this.model.startDate).subtract(this.checkinStartOffset,"minutes").toDate()},checkinEndOffset:function(){var e=this.model.checkinData.checkinEndOffset;return null==e||isNaN(e)?90:parseInt(e)},checkinEndDate:function(){return this.$fluro.date.moment(this.model.startDate).add(this.checkinEndOffset,"minutes").toDate()},checkinFields:function(){return[{title:"Checkin Opens",description:"How many minutes earlier can users checkin",key:"checkinStartOffset",placeholder:"Defaults to 90 mins before event start",minimum:0,maximum:1,type:"integer"},{title:"Checkin Closes",description:"How many minutes after this event's end time can a user still checkin",key:"checkinEndOffset",placeholder:"Defaults to 90 mins after event ends",minimum:0,maximum:1,type:"integer"}]},streamStartOffset:function(){var e=this.model.streamData.streamStartOffset;return null==e||isNaN(e)?90:parseInt(e)},streamStartDate:function(){return this.$fluro.date.moment(this.model.startDate).subtract(this.streamStartOffset,"minutes").toDate()},streamEndOffset:function(){var e=this.model.streamData.streamEndOffset;return null==e||isNaN(e)?90:parseInt(e)},streamEndDate:function(){return this.$fluro.date.moment(this.model.endDate||this.model.startDate).add(this.streamEndOffset,"minutes").toDate()},streamFields:function(){return[{title:"Stream Opens",description:"How many minutes earlier can users stream",key:"streamStartOffset",placeholder:"Defaults to 30 mins before event start",minimum:0,maximum:1,type:"integer"},{title:"Stream Closes",description:"How many minutes after this event's end time can a user still stream",key:"streamEndOffset",placeholder:"Defaults to 30 mins after event ends",minimum:0,maximum:1,type:"integer"}]},showOutline:function(){return!1}},data:function(){var e=JSON.parse(JSON.stringify(this.value));return{dateModel:{startDate:e.startDate?new Date(e.startDate):null,endDate:e.endDate?new Date(e.endDate):null}}}}),m=(n(974),n(0)),u=Object(m.a)(d,a,[],!1,null,"bf410a2e",null);u.options.__file="src/components/content/edit/panels/event.vue";t.default=u.exports},807:function(e,t,n){var a=n(850);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(4).default)("4f567465",a,!1,{})},849:function(e,t,n){"use strict";var a=n(807);n.n(a).a},850:function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".google-map[data-v-4ac1d514]{width:100%;height:100%;background:gray}\n",""])},852:function(e,t,n){var a=n(975);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(4).default)("6357a6ba",a,!1,{})},903:function(e,t,n){"use strict";var a=function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"map",staticClass:"google-map"})};a._withStripped=!0;n(21),n(13),n(25);var o=n(2),i=n.n(o),s=n(906),r={name:"google-map",props:{positions:{type:Array,default:[]}},data:function(){return{map:null,bounds:null,loading:!0,markers:null,markerCluster:null,geocoder:null,contentStringModel:[!1,!1]}},created:function(){window.openEditModal=this.openEditModal,window.openViewModal=this.openViewModal},mounted:function(){this.initMaps()},computed:{floatPositions:function(){return i.a.chain(this.positions).filter((function(e){if(parseFloat(e.latitude)&&parseFloat(e.longitude))return!0;if(e.addressLine1){console.log("FETCHING GEOCODE");var t=[e.addressLine1,e.addressLine2,e.suburb,e.state,e.postalCode,e.country];return geocodeAddress(t.join(" "))}return!1})).map((function(e){return{_id:e._id,title:e.title,_type:e._type,addressLine1:e.addressLine1,addressLine2:e.addressLine2,suburb:e.suburb,state:e.state,postalCode:e.postalCode,country:e.country,latitude:parseFloat(e.latitude),longitude:parseFloat(e.longitude)}})).value()}},methods:{initMaps:function(){var e=this;e.$fluro.utils.injectScript("https://maps.googleapis.com/maps/api/js?key=".concat(e.$fluro.global.googleMapsAPIKey)).then((function(t){var n=e.$refs.map;if(n){var a;e.bounds=new google.maps.LatLngBounds,e.geocoder=new google.maps.Geocoder,a=e.floatPositions.length?new google.maps.LatLng(e.floatPositions[0].latitude,e.floatPositions[0].longitude):new google.maps.LatLng(-37.8150634,144.9616192);var o={zoom:15,mapTypeId:google.maps.MapTypeId.ROADMAP,disableDefaultUI:!1,maxZoom:18,scrollwheel:!1,draggable:!0,center:a};e.map=new google.maps.Map(n,o),e.initMarkers()}}))},initMarkers:function(){var e=this;e.markers=i.a.map(e.floatPositions,(function(t){var n=new google.maps.LatLng(t.latitude,t.longitude);e.bounds.extend(n);var a=new google.maps.Marker({position:n,map:e.map}),o=e.createContentString(t),i=new google.maps.InfoWindow({content:o});return a.addListener("click",(function(){i.open(e.map,a)})),a})),e.markerCluster=new s.a(e.map,e.markers,{maxZoom:20,imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"}),e.map.fitBounds(e.bounds),e.map.panToBounds(e.bounds)},markersUpdated:function(){var e=this;e.markers&&(google.maps.event.clearListeners(e.map,"click"),e.markers=null,e.markerCluster.clearMarkers(),e.markers=i.a.map(e.floatPositions,(function(t){var n=new google.maps.LatLng(t.latitude,t.longitude);e.bounds.extend(n);var a=new google.maps.Marker({position:n,map:e.map}),o=e.createContentString(t),i=new google.maps.InfoWindow({content:o});return a.addListener("click",(function(){i.open(e.map,a)})),a})),e.markerCluster=new s.a(e.map,e.markers,{maxZoom:20,imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"}),e.map.fitBounds(e.bounds),e.map.panToBounds(e.bounds))},geocodeAddress:function(e){return this.geocoder.geocode({address:e},(function(e,t){return"OK"==t&&e[0].geometry.location}))},openViewModal:function(e){this.$fluro.global.view(e,!0)},openEditModal:function(e){this.$fluro.global.edit(e,!0)},createContentString:function(e){var t,n="<div>";return"family"==e._type?(n+="<h5>"+i.a.startCase(e.title)+" Household</h5>",t=e.address):(n+="<h5>"+e.title+"</h5>",t=e),n+="<p>",t.addressLine1&&(n+=t.addressLine1+"<br/>"),t.addressLine2&&(n+=t.addressLine2+"<br/>"),t.suburb&&(n+=t.suburb+"<br/>"),t.state&&(n+=t.state+"<br/>"),t.postalCode&&(n+=t.postalCode+"<br/>"),t.country&&(n+=t.country+"<br/>"),n+="</p><button type='button' onClick='openViewModal(`"+e._id+"`)' class='v-btn v-btn--flat theme--light'><div class='v-btn__content'>View</div></button><button type='button' onClick='openEditModal(`"+e._id+"`)' class='v-btn v-btn--flat theme--light'><div class='v-btn__content'>Edit</div></button></div>"}},watch:{floatPositions:function(e){return this.markersUpdated()}}},l=(n(849),n(0)),c=Object(l.a)(r,a,[],!1,null,"4ac1d514",null);c.options.__file="src/components/content/event/LocationViewMapComponent.vue";t.a=c.exports},904:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.loading?n("fluro-page-preloader",{attrs:{contain:""}}):e._e(),e._v(" "),n("fluro-panel",[n("fluro-panel-title",[n("h5",[e._v("Guest List")])]),e._v(" "),n("fluro-panel-body",{staticClass:"border-bottom"},[n("v-layout",[n("v-flex",[n("search-input",{model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1)],1),e._v(" "),n("tabset",{attrs:{justified:!0}},e._l(e.segments,(function(t){return n("tab",{attrs:{heading:t.contacts.length+" "+t.title}},[e.segments.length<=1?n("v-container",{staticClass:"border-bottom",attrs:{pa2:""}},[n("h3",{attrs:{margin:""}},[e._v(e._s(t.contacts.length)+" "+e._s(t.title))])]):e._e(),e._v(" "),n("fluro-table",{staticStyle:{"max-height":"50vh"},attrs:{trackingKey:"_id",defaultSort:"firstName",pageSize:35,items:t.contacts,columns:e.columns}})],1)})),1)],1)],1)};a._withStripped=!0;n(13),n(32),n(11),n(84),n(85),n(21);var o=n(150),i=n(152),s=n(98),r={components:{SearchInput:o.a,AvatarCell:i.a,FluroTable:s.a},props:{event:{type:[Object,String]}},watch:{search:_.debounce((function(e){this.debouncedSearch=e}),300)},data:function(){return{search:"",debouncedSearch:"",loading:!0,columns:[{title:"",key:"_id",renderer:i.a,align:"center"},{title:"First Name",key:"firstName"},{title:"Last Name",key:"lastName"},{title:"Age",key:"age"},{title:"Gender",key:"gender"}]}},computed:{filtered:function(){var e=this,t=e.guests;return e.debouncedSearch&&e.debouncedSearch.length&&(t=_.filter(t,(function(t){return _.includes(t.searchString,e.debouncedSearch)}))),t},segments:function(){return _.chain(this.filtered).reduce((function(e,t){return t.attendance.guestExpected&&e.expected.contacts.push(t),t.attendance.guestConfirmed&&e.confirmed.contacts.push(t),t.attendance.guestDeclined&&e.declined.contacts.push(t),t.attendance.ticket&&e.ticket.contacts.push(t),t.attendance.checkin?e.checkin.contacts.push(t):e.absent.contacts.push(t),e}),{expected:{title:"Expected",contacts:[]},confirmed:{title:"RSVP Yes",contacts:[]},declined:{title:"RSVP No",contacts:[]},ticket:{title:"Tickets",contacts:[]},checkin:{title:"Checked In",contacts:[]},absent:{title:"Not Checked In",contacts:[]}}).values().filter((function(e){return e.contacts.length})).value()},eventID:function(){return this.$fluro.utils.getStringID(this.event)}},asyncComputed:{guests:{default:[],get:function(){var e=this;return e.loading=!0,new Promise((function(t,n){return e.$fluro.api.get("/event/".concat(e.eventID,"/guestlist")).then((function(n){var a=_.map(n.data,(function(e){return e.searchString=String("".concat(e.title," ").concat(e.firstName," ").concat(e.lastName," ").concat(e.preferredName," ").concat(e.lastName," ").concat(e.age," ").concat(e.gender)).toLowerCase(),e}));t(a),e.loading=!1})).catch((function(t){n(t),e.loading=!1}))}))}}}},l=n(0),c=Object(l.a)(r,a,[],!1,null,null,null);c.options.__file="src/components/content/event/GuestList.vue";t.a=c.exports},974:function(e,t,n){"use strict";var a=n(852);n.n(a).a},975:function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".event-cover-image[data-v-bf410a2e]{border-radius:5px;width:90%;padding-bottom:70%;background-repeat:no-repeat;background-position:center;background-size:cover;display:block;margin:5%}.hint[data-v-bf410a2e]{font-size:10px;opacity:0.5;color:inherit;display:block}.copystring[data-v-bf410a2e]{width:100%;overflow:auto;display:block;background:#eee;border-radius:3px;opacity:0.5;padding:10px;line-height:20px}.copystring[data-v-bf410a2e]:hover{opacity:1}.assignment-item[data-v-bf410a2e]{font-size:12px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;border-radius:100px;margin-bottom:2px;padding:2px 10px;font-weight:500;background-color:rgba(0,0,0,0.05)}.assignment-item.confirmed[data-v-bf410a2e]{color:green;background-color:rgba(0,128,0,0.05)}.assignment-item.denied[data-v-bf410a2e]{color:red;background-color:rgba(255,0,0,0.05)}.assignment-item.unknown[data-v-bf410a2e]{color:#555}.assignment-item.proposed[data-v-bf410a2e]{background-color:rgba(0,0,255,0.1);color:#009}.btn-ghost[data-v-bf410a2e]{border:1px dashed #555;color:#555;opacity:0.5}.btn-ghost[data-v-bf410a2e]:hover{opacity:1}.bordered[data-v-bf410a2e]{border:1px solid rgba(0,0,0,0.1);box-shadow:0 2px 4px rgba(0,0,0,0.1)}.bordered[data-v-bf410a2e] .tabset-menu{background:#eee}\n",""])}}]);