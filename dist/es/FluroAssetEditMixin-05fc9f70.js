<<<<<<< HEAD:dist/es/FluroAssetEditMixin-50409a3b.js
import { bf as _, bd as __vue_normalize__, be as __vue_create_injector__ } from './index-85d711d5.js';
=======
import { be as _, bd as __vue_normalize__ } from './index-a26484f6.js';
>>>>>>> a45046e8aeac137a1588be86b3c5378be67755b1:dist/es/FluroAssetEditMixin-05fc9f70.js

//
var script = {
  props: {
    value: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      files: []
    };
  },

  computed: {
    acceptedFileTypes() {
      switch (this.value._type) {
        case 'image':
          return ' image/*';

        case 'video':
          return ' video/*';

        case 'audio':
          return ' audio/*';
      }
    },

    description() {
      if (this.value._id) {
        return `Click to select or drop a new ${this.type} file`;
      } else {
        return `Click or drop to upload a new ${this.type} file`;
      }
    },

    label() {
      if (this.value._id) {
        return `Replace with file`;
      } else {
        return `Select ${this.value._type || ''} File`;
      }
    },

    type() {
      return this.value._type || '';
    }

  },
  methods: {
    removeFile(file) {
      var self = this; //If the file is halfway through uploading

      if (file.cancelToken) {
        //Cancel the file
        file.cancelToken.cancel('Operation canceled by the user.');
      } //////////////////////////////////
      //Remove it from the list


      self.files.splice(self.files.indexOf(file), 1);
      self.$emit('file', null); // self.mapFilesToValues();
    },

    fileSelected(field) {
      console.log('FILE SELECTED', field);
      var self = this;
      var list = field.files;
      if (!list.length) return; /////////////////////////////////////////
      //Update our files list

      var newFiles = _.map(list, function (file) {
        return {
          file,
          data: {},
          name: file.name,
          size: file.size
        };
      }); //Update the files


      self.files = _.chain(self.files.concat(newFiles)).compact().uniqBy(function (file) {
        return file.name;
      }).value(); //Only allow a single file

      self.files = self.files.slice(0, 1);
      self.$emit('file', self.files[0]); //Clear out the files

      self.$refs.file.value = null;

      if (self.value._id) {
        self.upload();
      }
    },

    upload() {
      var self = this;
      var file = this.files[0];

      switch (file.state) {
        case 'complete':
        case 'uploading':
          //Stop here if it's already in uploading or complete
          return;
      } /////////////////////////////////////////////
      //Change the state to uploading


      file.state = 'uploading'; //Create a new form object

      var formData = new FormData();
      var jsonData = {};

      if (self.value && self.value._id) {
        jsonData._id = self.value._id;
      }

      formData.append('json', JSON.stringify(jsonData));
      formData.append('file', file.file, file.name); /////////////////////////////////////////////

      self.$forceUpdate();
      var body = formData;
      var config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          let percentCompleted = Math.floor(progressEvent.loaded * 100 / progressEvent.total); // do whatever you like with the percentage complete
          // maybe dispatch an action that will update a progress bar or something

          file.progress = percentCompleted;
          file.bytesLoaded = progressEvent.loaded;
          file.bytesTotal = progressEvent.total; ///////////////////////////////////////////////////
          //Update the bytes loaded from all the files in the array

          self.bytesLoaded = _.reduce(self.files, function (set, file) {
            if (file.state == 'complete') {
              set += file.size || file.bytesTotal || 0;
            } else {
              set += file.bytesLoaded || 0;
            }

            return set;
          }, 0); ///////////////////////////////////////////////////

          self.$forceUpdate();
        }
      }; ///////////////////////////////////////////////////

      const CancelToken = self.$fluro.api.CancelToken;
      const source = CancelToken.source();
      config.cancelToken = source.token;
      file.cancelToken = source; //Set headers to undefined content type

      config.headers = {
        'Content-Type': undefined
      }; ///////////////////////////////////////////////////
      // console.log('Uploading to ', self.field.params)

      return this.$fluro.api.post(`/file/upload`, body, config).then(function (res) {
        //console.log('UPLOAD RESPONSE', res);
        file.state = 'complete';
        file.result = res.data;
        file.cancelToken = null;
        self.$emit('input', res.data);
      }).catch(function (err) {
        //console.log('UPLOAD Error', err);
        file.state = 'error';
        file.cancelToken = null;
        self.$fluro.error(err);
      });
    }

  }
};

/* script */
const __vue_script__ = script;
/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-input',{staticClass:"no-flex",attrs:{"label":_vm.label}},[(_vm.files.length)?_c('div',{staticClass:"file-items"},_vm._l((_vm.files),function(file){return _c('div',{staticClass:"file-item"},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"grow":""}},[_c('strong',[_vm._v(_vm._s(file.name))]),_vm._v(" "),_c('div',{staticClass:"small"},[(file.state == 'progress')?_c('span',[_vm._v("Uploaded "+_vm._s(file.progress)+"% of ")]):_vm._e(),_c('span',{staticClass:"muted"},[_vm._v(_vm._s(_vm._f("filesize")(file.size)))])])]),_vm._v(" "),_c('v-flex',{attrs:{"shrink":""}},[(file.state == 'error')?[_c('v-btn',{attrs:{"icon":""}},[_c('fluro-icon',{attrs:{"icon":"exclamation"}})],1)]:(file.state == 'complete')?[_c('v-hover',{scopedSlots:_vm._u([{key:"default",fn:function(ref){
var hover = ref.hover;
return _c('v-btn',{attrs:{"icon":""},on:{"click":function($event){return _vm.removeFile(file)}}},[(hover)?_c('fluro-icon',{attrs:{"icon":"times"}}):_c('fluro-icon',{attrs:{"icon":"check"}})],1)}}],null,true)})]:(file.state == 'uploading')?[_c('v-hover',{scopedSlots:_vm._u([{key:"default",fn:function(ref){
var hover = ref.hover;
return _c('v-btn',{attrs:{"icon":""},on:{"click":function($event){return _vm.removeFile(file)}}},[(!hover)?_c('v-progress-circular',{attrs:{"value":file.progress}}):_vm._e(),_vm._v(" "),(hover)?_c('fluro-icon',{attrs:{"icon":"times"}}):_vm._e()],1)}}],null,true)})]:[_c('v-btn',{attrs:{"icon":""},on:{"click":function($event){return _vm.removeFile(file)}}},[_c('fluro-icon',{attrs:{"icon":"times"}})],1)]],2)],1)],1)}),0):_vm._e(),_vm._v(" "),(!_vm.files.length)?_c('label',{staticClass:"file-drop"},[_c('input',{ref:"file",attrs:{"type":"file","accept":_vm.acceptedFileTypes},on:{"change":function($event){return _vm.fileSelected($event.target)}}}),_vm._v("\n        "+_vm._s(_vm.description)+"\n    ")]):_vm._e()])};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

var FluroAssetEditMixin = {
  data() {
    return {
      file: null
    };
  },

  methods: {
    fileSelected(file) {
      var self = this;
      console.log('file selected inside asset form!');
      self.file = file;
      self.$emit('file', file);
    }

  },
  components: {
    AssetReplaceUpload: __vue_component__
  },
  computed: {
    uploadSave() {
      return !this.itemID && this.item.assetType == 'upload';
    }

  }
};

export { FluroAssetEditMixin as F };
<<<<<<< HEAD:dist/es/FluroAssetEditMixin-50409a3b.js
//# sourceMappingURL=FluroAssetEditMixin-50409a3b.js.map
=======
//# sourceMappingURL=FluroAssetEditMixin-05fc9f70.js.map
>>>>>>> a45046e8aeac137a1588be86b3c5378be67755b1:dist/es/FluroAssetEditMixin-05fc9f70.js
