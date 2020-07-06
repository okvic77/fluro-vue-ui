import { bl as __vue_normalize__, bm as __vue_create_injector__ } from './index-38fe1775.js';
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
import 'moment';
import { F as FluroContentEditMixin } from './FluroContentEditMixin-7ad72b82.js';

//

var script = {
  mixins: [FluroContentEditMixin],
  components: {},
  methods: {
    authenticate() {
      var self = this;
      var moduleName = self.model.module;

      if (!self.model._id) {
        return self.$fluro.error({
          message: 'Please save before authenticating'
        });
      }

      switch (moduleName) {
        case 'youtube':
          if (process.browser) {
            window.location.href = `${self.$fluro.apiURL}/integrate/${moduleName}/${self.model._id}/oauth`;
          }

          break;
      }
    },

    modelUpdated() {
      this.update(this.model);
    }

  },

  created() {
  },

  asyncComputed: {},
  computed: {
    showOutline() {
      return false; //true; //false;//true;//false;//true;
    },

    moduleOptions() {
      var array = [];
      array.push({
        title: 'Stripe',
        value: 'stripe'
      }, {
        title: 'Youtube API',
        value: 'youtube'
      }, {
        title: 'Facebook API',
        value: 'facebook'
      } // {
      //     title:'Facebook API',
      //     value:'facebook',
      // },
      );
      return array;
    },

    fieldsOutput() {
      var self = this;
      var array = []; ///////////////////////////////////

      addField('title', {
        title: 'Title',
        minimum: 1,
        maximum: 1,
        type: 'string'
      }); // ///////////////////////////////////

      addField('module', {
        title: 'Module',
        minimum: 1,
        maximum: 1,
        type: 'string',
        directive: 'select',
        options: self.moduleOptions
      });

      function addField(key, details) {
        details.key = key;
        array.push(details);
      }

      return array;
    }

  },

  data() {
    return {};
  }

};

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('flex-column',[(_vm.loading)?[_c('fluro-page-preloader',{attrs:{"contain":""}})]:_c('tabset',{attrs:{"justified":true,"vertical":true}},[_c('tab',[_c('flex-column-body',{staticStyle:{"background":"#fafafa"}},[_c('v-container',[_c('constrain',{attrs:{"sm":""}},[_c('div',{staticClass:"grid-list-xl"},[_c('fluro-content-form-field',{attrs:{"form-fields":_vm.formFields,"outline":_vm.showOutline,"options":_vm.options,"field":_vm.fieldHash.title},on:{"input":_vm.update},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v;},expression:"model"}}),_vm._v(" "),_c('fluro-content-form-field',{attrs:{"form-fields":_vm.formFields,"outline":_vm.showOutline,"options":_vm.options,"field":_vm.fieldHash.module},on:{"input":_vm.update},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v;},expression:"model"}}),_vm._v(" "),(_vm.definition && _vm.definition.fields && _vm.definition.fields.length)?_c('div',[_c('fluro-content-form',{attrs:{"options":_vm.options,"fields":_vm.definition.fields},model:{value:(_vm.model.data),callback:function ($$v) {_vm.$set(_vm.model, "data", $$v);},expression:"model.data"}})],1):_vm._e(),_vm._v(" "),(_vm.model._id)?[_c('v-btn',{staticClass:"ma-0",attrs:{"large":"","color":"primary"},on:{"click":function($event){return _vm.authenticate()}}},[_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAuthenticate with Youtube\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"),_c('fluro-icon',{attrs:{"icon":"youtube","library":"fab","right":""}})],1)]:void 0],2)])],1)],1)],1)],1)],2)};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-17073c9c_0", { source: ".border-top[data-v-17073c9c]{border-top:1px solid rgba(0,0,0,.05)}.border-right[data-v-17073c9c]{border-right:1px solid rgba(0,0,0,.05)}.border-bottom[data-v-17073c9c]{border-bottom:1px solid rgba(0,0,0,.05)}.border-left[data-v-17073c9c]{border-left:1px solid rgba(0,0,0,.05)}.hint[data-v-17073c9c]{font-size:10px;opacity:.5;color:inherit;display:block}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-17073c9c";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
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
    __vue_create_injector__,
    undefined,
    undefined
  );

export default __vue_component__;
//# sourceMappingURL=integration-348f2b82.js.map
