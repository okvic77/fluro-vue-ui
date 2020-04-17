(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{772:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("flex-column",[e.loading?[i("fluro-page-preloader",{attrs:{contain:""}})]:[i("tabset",{attrs:{justified:!0,vertical:!0}},[i("tab",{attrs:{heading:"Details"}},[i("flex-column-body",{staticStyle:{background:"#fafafa"}},[i("v-container",{attrs:{fluid:""}},[i("constrain",{attrs:{sm:""}},[i("fluro-content-form-field",{attrs:{"form-fields":e.formFields,outline:e.showOutline,options:e.options,field:e.fieldHash.title},on:{input:e.update},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}}),e._v(" "),e.model._id?[i("div",{staticClass:"media-preview"},[i("div",{staticClass:"media-preview-wrap"},[i("fluro-image",{attrs:{longpress:!0,height:450,"image-height":450,contain:"",item:e.model,cacheKey:e.imageCacheKey,spinner:!0}})],1)]),e._v(" "),e.replace?[i("asset-replace-upload",{on:{input:e.assetReplaced},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})]:[i("v-layout",[i("v-flex",[i("v-input",{staticClass:"no-flex",attrs:{label:e.model.filename}},[i("div",[i("v-btn",{staticClass:"ma-0",on:{click:function(t){e.replace=!0}}},[e._v("\n                                                        Replace with a new file\n                                                        "),i("fluro-icon",{attrs:{right:"",library:"fas",icon:"cloud-upload"}})],1)],1)])],1),e._v(" "),i("v-flex",[e.model.colors&&e.model.colors.length?i("v-input",{staticClass:"no-flex",attrs:{label:"Main Colors"}},[i("div",e._l(e.model.colors,(function(e){return i("div",{directives:[{name:"tippy",rawName:"v-tippy"}],staticClass:"color-swatch",style:{backgroundColor:e},attrs:{content:e}})})),0)]):e._e()],1)],1)]]:[i("asset-replace-upload",{on:{file:e.fileSelected},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],e._v(" "),e.definition&&e.definition.fields&&e.definition.fields.length?[i("fluro-content-form",{attrs:{options:e.options,fields:e.definition.fields},model:{value:e.model.data,callback:function(t){e.$set(e.model,"data",t)},expression:"model.data"}})]:e._e(),e._v(" "),e.hideBody||e.fullBody?e._e():[i("v-input",{staticClass:"no-flex",attrs:{label:"Body / Caption"}},[i("fluro-editor",{attrs:{options:e.editorOptions,placeholder:"Type your text in here"},model:{value:e.model.body,callback:function(t){e.$set(e.model,"body",t)},expression:"model.body"}})],1)],e._v(" "),i("fluro-privacy-select",{model:{value:e.model.privacy,callback:function(t){e.$set(e.model,"privacy",t)},expression:"model.privacy"}})],2)],1)],1)],1),e._v(" "),e.hasMeta?i("tab",{attrs:{heading:"Advanced / Metadata"}},[i("flex-column-body",{staticStyle:{background:"#fafafa"}},[i("v-container",{attrs:{fluid:""}},[i("constrain",{attrs:{sm:""}},[e.model.data.iptc?i("fluro-panel",[i("fluro-panel-title",[i("h5",[e._v("IPTC Data")])]),e._v(" "),i("fluro-panel-body",[i("json-view",{attrs:{deep:3,data:e.model.data.iptc}})],1)],1):e._e(),e._v(" "),e.model.data.exif?i("fluro-panel",[i("fluro-panel-title",[i("h5",[e._v("EXIF Data")])]),e._v(" "),i("fluro-panel-body",[i("json-view",{attrs:{deep:3,data:e.model.data.exif}})],1)],1):e._e()],1)],1)],1)],1):e._e()],1)]],2)};n._withStripped=!0;var o=i(145),a=i(798),l=i(810),s=(i(25),{components:{FluroEditor:o.default},created:function(){this.$set(this.model,"assetType","upload")},mixins:[a.a,l.a],computed:{hasMeta:function(){if(this.model.data)return this.model.data.iptc||this.model.data.exif},fieldsOutput:function(){var e,t=[];return(e={title:"Title",minimum:0,maximum:1,type:"string",placeholder:"Defaults to filename if left empty"}).key="title",t.push(e),t},fullBody:function(){return this.definition&&this.definition.data&&this.definition.data.fullBody},hideBody:function(){return this.definition&&this.definition.data&&this.definition.data.hideBody},titleLabel:function(){return"Title"},bodyLabel:function(){return"Body"}},methods:{assetReplaced:function(e){this.imageCacheKey=Math.random(),this.replace=!1}},data:function(){return{imageCacheKey:0,replace:!1,editorOptions:{}}}}),r=(i(990),i(992),i(0)),d=Object(r.a)(s,n,[],!1,null,"6a28692a",null);d.options.__file="src/components/content/edit/panels/image.vue";t.default=d.exports},798:function(e,t,i){"use strict";var n=i(35);t.a={props:{config:{type:Object,required:!0},context:{type:String,default:"new"}},data:function(){return{loading:!1}},mounted:function(){this.$set(this.model,"_type",this.config.type.definitionName)},extends:n.default,components:{FluroContentForm:n.default,FluroContentFormField:function(){return Promise.resolve().then(i.bind(null,47))},FluroPrivacySelect:function(){return i.e(55).then(i.bind(null,799))}},computed:{type:function(){return this.config.type},typeName:function(){return this.type?this.type.definitionName:""},itemID:function(){return this.model._id},definition:function(){return this.config.definition},definedFields:function(){return this.definition&&this.definition.fields&&this.definition.fields.length?this.definition.fields:[]},readableContentType:function(){return this.$fluro.types.readable(this.config.definition?this.config.definition.definitionName:this.config.type.definitionName)},fullBody:function(){return this.definition&&this.definition.data&&this.definition.data.fullBody},hideBody:function(){return this.definition&&this.definition.data&&this.definition.data.hideBody},titleLabel:function(){return"Title"},bodyLabel:function(){return"Body"}},methods:{}}},801:function(e,t,i){var n=i(806);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,i(4).default)("3d095c3c",n,!1,{})},805:function(e,t,i){"use strict";var n=i(801);i.n(n).a},806:function(e,t,i){(e.exports=i(3)(!1)).push([e.i,".file-drop{display:block;position:relative;border:1px dashed rgba(0,0,0,0.2);background:rgba(0,0,0,0.05);padding:10px;border-radius:10px;text-align:center;min-height:60px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:0.8;font-style:italic;color:rgba(0,0,0,0.5);margin-bottom:5px}.file-drop:hover,.file-drop:focus,.file-drop:active{background:#fff}.file-drop input{display:block;left:0;right:0;bottom:0;top:0;opacity:0;width:100%;height:100%;position:absolute;cursor:pointer}.file-items{margin-bottom:15px}.file-items .file-item{position:relative;padding:5px 5px 5px 15px;border:1px solid rgba(0,0,0,0.2);border-bottom:none;background:#fff;font-size:0.9em}.file-items .file-item:first-child{border-radius:5px 5px 0 0}.file-items .file-item:last-child{border-bottom:1px solid rgba(0,0,0,0.2);border-radius:0 0 5px 5px}\n",""])},810:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-input",{staticClass:"no-flex",attrs:{label:e.label}},[e.files.length?i("div",{staticClass:"file-items"},e._l(e.files,(function(t){return i("div",{staticClass:"file-item"},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{grow:""}},[i("strong",[e._v(e._s(t.name))]),e._v(" "),i("div",{staticClass:"small"},["progress"==t.state?i("span",[e._v("Uploaded "+e._s(t.progress)+"% of ")]):e._e(),i("span",{staticClass:"muted"},[e._v(e._s(e._f("filesize")(t.size)))])])]),e._v(" "),i("v-flex",{attrs:{shrink:""}},["error"==t.state?[i("v-btn",{attrs:{icon:""}},[i("fluro-icon",{attrs:{icon:"exclamation"}})],1)]:"complete"==t.state?[i("v-hover",{scopedSlots:e._u([{key:"default",fn:function(n){var o=n.hover;return i("v-btn",{attrs:{icon:""},on:{click:function(i){return e.removeFile(t)}}},[i("fluro-icon",o?{attrs:{icon:"times"}}:{attrs:{icon:"check"}})],1)}}],null,!0)})]:"uploading"==t.state?[i("v-hover",{scopedSlots:e._u([{key:"default",fn:function(n){var o=n.hover;return i("v-btn",{attrs:{icon:""},on:{click:function(i){return e.removeFile(t)}}},[o?e._e():i("v-progress-circular",{attrs:{value:t.progress}}),e._v(" "),o?i("fluro-icon",{attrs:{icon:"times"}}):e._e()],1)}}],null,!0)})]:[i("v-btn",{attrs:{icon:""},on:{click:function(i){return e.removeFile(t)}}},[i("fluro-icon",{attrs:{icon:"times"}})],1)]],2)],1)],1)})),0):e._e(),e._v(" "),e.files.length?e._e():i("label",{staticClass:"file-drop"},[i("input",{ref:"file",attrs:{type:"file",accept:e.acceptedFileTypes},on:{change:function(t){return e.fileSelected(t.target)}}}),e._v("\n        "+e._s(e.description)+"\n    ")])])};n._withStripped=!0;i(32),i(17),i(13),i(28);var o={props:{value:{type:Object,required:!0}},data:function(){return{files:[]}},computed:{acceptedFileTypes:function(){switch(this.value._type){case"image":return" image/*";case"video":return" video/*";case"audio":return" audio/*"}},description:function(){return this.value._id?"Click to select or drop a new ".concat(this.type," file"):"Click or drop to upload a new ".concat(this.type," file")},label:function(){return this.value._id?"Replace with file":"Select ".concat(this.value._type||""," File")},type:function(){return this.value._type||""}},methods:{removeFile:function(e){e.cancelToken&&e.cancelToken.cancel("Operation canceled by the user."),this.files.splice(this.files.indexOf(e),1),this.$emit("file",null)},fileSelected:function(e){console.log("FILE SELECTED",e);var t=e.files;if(t.length){var i=_.map(t,(function(e){return{file:e,data:{},name:e.name,size:e.size}}));this.files=_.chain(this.files.concat(i)).compact().uniqBy((function(e){return e.name})).value(),this.files=this.files.slice(0,1),this.$emit("file",this.files[0]),this.$refs.file.value=null,this.value._id&&this.upload()}},upload:function(){var e=this,t=this.files[0];switch(t.state){case"complete":case"uploading":return}t.state="uploading";var i=new FormData,n={};e.value&&e.value._id&&(n._id=e.value._id),i.append("json",JSON.stringify(n)),i.append("file",t.file,t.name),e.$forceUpdate();var o=i,a={headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(i){var n=Math.floor(100*i.loaded/i.total);t.progress=n,t.bytesLoaded=i.loaded,t.bytesTotal=i.total,e.bytesLoaded=_.reduce(e.files,(function(e,t){return"complete"==t.state?e+=t.size||t.bytesTotal||0:e+=t.bytesLoaded||0,e}),0),e.$forceUpdate()}},l=e.$fluro.api.CancelToken.source();return a.cancelToken=l.token,t.cancelToken=l,a.headers={"Content-Type":void 0},this.$fluro.api.post("/file/upload",o,a).then((function(i){t.state="complete",t.result=i.data,t.cancelToken=null,e.$emit("input",i.data)})).catch((function(i){t.state="error",t.cancelToken=null,e.$fluro.error(i)}))}}},a=(i(805),i(0)),l=Object(a.a)(o,n,[],!1,null,null,null);l.options.__file="src/components/content/edit/components/AssetReplaceUpload.vue";var s=l.exports;t.a={data:function(){return{file:null}},methods:{fileSelected:function(e){console.log("file selected inside asset form!"),this.file=e,this.$emit("file",e)}},components:{AssetReplaceUpload:s},computed:{uploadSave:function(){return!this.itemID&&"upload"==this.item.assetType}}}},864:function(e,t,i){var n=i(991);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,i(4).default)("875fc9a6",n,!1,{})},865:function(e,t,i){var n=i(993);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,i(4).default)("87fe50fc",n,!1,{})},990:function(e,t,i){"use strict";var n=i(864);i.n(n).a},991:function(e,t,i){(e.exports=i(3)(!1)).push([e.i,".media-preview{background:#eee;display:block;min-height:350px;margin-bottom:15px;border:1px solid rgba(0,0,0,0.1);border-radius:5px;overflow:hidden}.media-preview .media-preview-wrap{max-width:750px;margin:auto}\n",""])},992:function(e,t,i){"use strict";var n=i(865);i.n(n).a},993:function(e,t,i){(e.exports=i(3)(!1)).push([e.i,".color-swatch[data-v-6a28692a]{width:36px;height:36px;border-radius:3px;margin:0 1px 1px 0;display:inline-block}\n",""])}}]);