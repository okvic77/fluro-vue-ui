<<<<<<< HEAD:dist/es/collection-98445350.js
import { aE as FluroCodeEditor, bd as __vue_normalize__, be as __vue_create_injector__ } from './index-85d711d5.js';
=======
import { aE as FluroCodeEditor, bd as __vue_normalize__ } from './index-a26484f6.js';
>>>>>>> a45046e8aeac137a1588be86b3c5378be67755b1:dist/es/collection-3646255f.js
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
<<<<<<< HEAD:dist/es/collection-98445350.js
import { F as FluroContentEditMixin } from './FluroContentEditMixin-189fa42a.js';
=======
import { F as FluroContentEditMixin } from './FluroContentEditMixin-f94812ea.js';
>>>>>>> a45046e8aeac137a1588be86b3c5378be67755b1:dist/es/collection-3646255f.js

//

var script = {
  components: {
    FluroEditor: FluroCodeEditor
  },

  created() {},

  mixins: [FluroContentEditMixin],
  computed: {
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
      addField('weight', {
        title: 'Weight',
        minimum: 0,
        maximum: 1,
        type: 'integer',
        placeholder: ''
      });
      addField('items', {
        title: 'Items',
        minimum: 0,
        maximum: 0,
        type: 'reference' // params: {
        //     restrictType: 'ticket',
        // },

      }); ///////////////////////////////////

      function addField(key, details) {
        details.key = key;
        array.push(details);
      }

      return array;
    }

  },
  methods: {},

  data() {
    return {};
  }

};

/* script */
const __vue_script__ = script;
/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('flex-column',[(_vm.loading)?[_c('fluro-page-preloader',{attrs:{"contain":""}})]:[_c('tabset',{attrs:{"justified":true,"vertical":true}},[_c('tab',{attrs:{"heading":"Details"}},[_c('flex-column-body',{staticStyle:{"background":"#fafafa"}},[_c('v-container',{attrs:{"fluid":""}},[_c('constrain',{attrs:{"sm":""}},[_c('fluro-content-form-field',{attrs:{"form-fields":_vm.formFields,"outline":_vm.showOutline,"options":_vm.options,"field":_vm.fieldHash.title},on:{"input":_vm.update},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v;},expression:"model"}}),_vm._v(" "),_c('fluro-content-form-field',{attrs:{"form-fields":_vm.formFields,"outline":_vm.showOutline,"options":_vm.options,"field":_vm.fieldHash.firstLine},on:{"input":_vm.update},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v;},expression:"model"}}),_vm._v(" "),_c('fluro-content-form-field',{attrs:{"form-fields":_vm.formFields,"outline":_vm.showOutline,"options":_vm.options,"field":_vm.fieldHash.weight},on:{"input":_vm.update},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v;},expression:"model"}}),_vm._v(" "),_c('fluro-content-form-field',{attrs:{"form-fields":_vm.formFields,"outline":_vm.showOutline,"options":_vm.options,"field":_vm.fieldHash.items},on:{"input":_vm.update},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v;},expression:"model"}}),_vm._v(" "),_c('fluro-privacy-select',{model:{value:(_vm.model.privacy),callback:function ($$v) {_vm.$set(_vm.model, "privacy", $$v);},expression:"model.privacy"}})],1)],1)],1)],1),_vm._v(" "),(_vm.definition && _vm.definition.fields && _vm.definition.fields.length)?_c('tab',{attrs:{"heading":((_vm.definition.title) + " Information")}},[_c('fluro-content-form',{attrs:{"options":_vm.options,"fields":_vm.definition.fields},model:{value:(_vm.model.data),callback:function ($$v) {_vm.$set(_vm.model, "data", $$v);},expression:"model.data"}})],1):_vm._e()],1)]],2)};
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

export default __vue_component__;
<<<<<<< HEAD:dist/es/collection-98445350.js
//# sourceMappingURL=collection-98445350.js.map
=======
//# sourceMappingURL=collection-3646255f.js.map
>>>>>>> a45046e8aeac137a1588be86b3c5378be67755b1:dist/es/collection-3646255f.js
