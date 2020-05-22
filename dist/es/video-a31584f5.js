<<<<<<< HEAD:dist/es/video-a31584f5.js
import { aE as FluroCodeEditor, bf as _, bd as __vue_normalize__, be as __vue_create_injector__ } from './index-85d711d5.js';
=======
import { aE as FluroCodeEditor, be as _, bd as __vue_normalize__ } from './index-a26484f6.js';
>>>>>>> a45046e8aeac137a1588be86b3c5378be67755b1:dist/es/video-9f6e7e9f.js
import 'vue';
import 'vuedraggable';
import 'vue-color';
import 'signature_pad';
import 'fluro';
import 'vuex-map-fields';
import 'async';
import 'tippy.js';
import 'tiptap';
import 'tiptap-commands';
import 'tiptap-extensions';
<<<<<<< HEAD:dist/es/video-a31584f5.js
import { F as FluroContentEditMixin } from './FluroContentEditMixin-189fa42a.js';
import { F as FluroAssetEditMixin } from './FluroAssetEditMixin-50409a3b.js';
=======
import { F as FluroContentEditMixin } from './FluroContentEditMixin-f94812ea.js';
import { F as FluroAssetEditMixin } from './FluroAssetEditMixin-05fc9f70.js';
>>>>>>> a45046e8aeac137a1588be86b3c5378be67755b1:dist/es/video-9f6e7e9f.js

//

var script = {
  components: {
    FluroEditor: FluroCodeEditor,
    FluroCodeEditor
  },

  created() {
    var self = this;

    if (!self.model) {
      self.$set(self, 'model', {
        external: {
          'youtube': undefined,
          'vimeo': undefined,
          'embed': undefined
        }
      });
    } else {
      if (!self.model.external) {
        self.$set(self.model, 'external', {
          'youtube': undefined,
          'vimeo': undefined,
          'embed': undefined
        });
      }
    }
  },

  mixins: [FluroContentEditMixin, FluroAssetEditMixin],
  computed: {
    showVideo() {
      var self = this;

      switch (self.assetType) {
        case 'vimeo':
        case 'youtube':
        case 'embed':
          return !!self.model.external[self.assetType];

        case 'upload':
          return !!self.model._id;
      }
    },

    externalFields() {
      var self = this;
      var array = [];
      array.push({
        title: 'Youtube URL',
        key: 'youtube',
        type: 'string',
        minimum: 1,
        maximum: 1,
        expressions: {
          hide() {
            return self.assetType != 'youtube';
          }

        }
      });
      array.push({
        title: 'Vimeo URL',
        key: 'vimeo',
        type: 'string',
        minimum: 1,
        maximum: 1,
        expressions: {
          hide() {
            return self.assetType != 'vimeo';
          }

        }
      });
      array.push({
        title: 'Embed Code',
        key: 'embed',
        type: 'string',
        directive: 'code',
        params: {
          syntax: 'html'
        },
        minimum: 0,
        maximum: 1,
        expressions: {
          hide() {
            return self.assetType != 'embed';
          }

        }
      });
      return array;
    },

    fieldsOutput() {
      var array = []; ///////////////////////////////////

      addField('title', {
        title: 'Title',
        minimum: 1,
        maximum: 1,
        type: 'string'
      });
      addField('firstLine', {
        title: 'Short Description',
        minimum: 0,
        maximum: 1,
        type: 'string',
        placeholder: 'Optional short description describing the collection'
      });
      addField('assetType', {
        title: 'Asset Type',
        minimum: 1,
        maximum: 1,
        type: 'string',
        directive: 'select',
        options: [{
          name: 'YouTube',
          value: 'youtube'
        }, {
          name: 'Vimeo',
          value: 'vimeo'
        }, {
          name: 'Amazon S3',
          value: 's3'
        }, {
          name: 'Embed',
          value: 'embed'
        }, {
          name: 'Upload / Hosted',
          value: 'upload'
        }] // params: {
        //     restrictType: 'ticket',
        // },

      });
      addField('youtube', {
        title: 'YouTube URL',
        minimum: 0,
        maximum: 1,
        type: 'string'
      });
      addField('vimeo', {
        title: 'Vimeo URL',
        minimum: 0,
        maximum: 1,
        type: 'string'
      });
      addField('embed', {
        title: 'Video Embed Code',
        description: 'Paste your video embed code above',
        minimum: 0,
        maximum: 1,
        type: 'string',
        directive: 'code'
      }); ///////////////////////////////////

      function addField(key, details) {
        details.key = key;
        array.push(details);
      }

      return array;
    },

    assetType() {
      var self = this;

      var assetType = _.get(self.model, 'assetType');

      return assetType;
    },

    soundCloudURL() {
      var self = this;
      return _.get(self.model, 'external.soundcloud');
    },

    youtubeURL() {
      var self = this;

      var url = _.get(self.model, 'external.youtube');

      if (!url) {
        return 'hey';
      }

      url = url.split('?');
      var query = url[url.length - 1];
      console.log(url, query);
      return 'hello';
    }

  },
  methods: {
    assetReplaced(model) {
      this.cacheKey = Math.random();
      this.replace = false;
    }

  },
  methods: {
    assetReplaced(model) {
      this.videoCacheKey = Math.random();
      this.replace = false;
    }

  },

  data() {
    return {
      videoCacheKey: 0,
      replace: false,
      editorOptions: {}
    };
  }

};

/* script */
const __vue_script__ = script;
/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('flex-column',[(_vm.loading)?[_c('fluro-page-preloader',{attrs:{"contain":""}})]:[_c('tabset',{attrs:{"justified":true,"vertical":true}},[_c('tab',{attrs:{"heading":"Details"}},[_c('flex-column-body',{staticStyle:{"background":"#fafafa"}},[_c('v-container',{attrs:{"fluid":""}},[_c('constrain',{attrs:{"sm":""}},[_c('fluro-content-form-field',{attrs:{"form-fields":_vm.formFields,"outline":_vm.showOutline,"options":_vm.options,"field":_vm.fieldHash.title},on:{"input":_vm.update},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v;},expression:"model"}}),_vm._v(" "),(!_vm.model._id || _vm.assetType != 'upload')?[_c('fluro-content-form-field',{attrs:{"form-fields":_vm.formFields,"outline":_vm.showOutline,"options":_vm.options,"field":_vm.fieldHash.assetType},on:{"input":_vm.update},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v;},expression:"model"}})]:_vm._e(),_vm._v(" "),(_vm.assetType == 'upload')?[(_vm.model._id)?[(_vm.replace)?[_c('asset-replace-upload',{on:{"input":_vm.assetReplaced},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v;},expression:"model"}})]:[_c('v-input',{staticClass:"no-flex",attrs:{"label":_vm.model.filename}},[_c('div',[_c('v-btn',{staticClass:"ma-0",on:{"click":function($event){_vm.replace = true;}}},[_vm._v("\n                                                    Replace with a new file\n                                                    "),_c('fluro-icon',{attrs:{"right":"","library":"fas","icon":"cloud-upload"}})],1)],1)])]]:[_c('asset-replace-upload',{on:{"file":_vm.fileSelected},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v;},expression:"model"}})]]:[_c('fluro-content-form',{attrs:{"fields":_vm.externalFields},model:{value:(_vm.model.external),callback:function ($$v) {_vm.$set(_vm.model, "external", $$v);},expression:"model.external"}})],_vm._v(" "),(_vm.showVideo)?_c('v-container',{attrs:{"px-0":"","pt-0":""}},[_c('fluro-video',{attrs:{"cacheKey":_vm.videoCacheKey,"item":_vm.model}})],1):_vm._e(),_vm._v(" "),(!_vm.hideBody && !_vm.fullBody)?[_c('v-input',{staticClass:"no-flex",attrs:{"label":"Body / Caption"}},[_c('fluro-editor',{attrs:{"options":_vm.editorOptions,"placeholder":"Type your text in here"},model:{value:(_vm.model.body),callback:function ($$v) {_vm.$set(_vm.model, "body", $$v);},expression:"model.body"}})],1)]:_vm._e(),_vm._v(" "),(_vm.definition && _vm.definition.fields && _vm.definition.fields.length)?[_c('fluro-content-form',{attrs:{"options":_vm.options,"fields":_vm.definition.fields},model:{value:(_vm.model.data),callback:function ($$v) {_vm.$set(_vm.model, "data", $$v);},expression:"model.data"}})]:_vm._e(),_vm._v(" "),_c('fluro-privacy-select',{model:{value:(_vm.model.privacy),callback:function ($$v) {_vm.$set(_vm.model, "privacy", $$v);},expression:"model.privacy"}})],2)],1)],1)],1)],1)]],2)};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = "data-v-78e32f66";
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

export default __vue_component__;
<<<<<<< HEAD:dist/es/video-a31584f5.js
//# sourceMappingURL=video-a31584f5.js.map
=======
//# sourceMappingURL=video-9f6e7e9f.js.map
>>>>>>> a45046e8aeac137a1588be86b3c5378be67755b1:dist/es/video-9f6e7e9f.js
