<<<<<<< HEAD:dist/es/AddressManager-c7abdcef.js
import { aI as FluroContentForm, aJ as FluroContentFormField, bd as __vue_normalize__, be as __vue_create_injector__ } from './index-85d711d5.js';
=======
import { aI as FluroContentForm, aJ as FluroContentFormField, bd as __vue_normalize__ } from './index-a26484f6.js';
>>>>>>> a45046e8aeac137a1588be86b3c5378be67755b1:dist/es/AddressManager-66627382.js

//
var script = {
  props: {
    value: {
      type: Object,
      default: function () {
        return {};
      }
    }
  },
  components: {
    FluroContentForm,
    FluroContentFormField
  },

  data() {
    return {
      model: this.value,
      proposed: {}
    };
  },

  watch: {
    value(v) {
      if (this.model != v) {
        this.model = v;
      }
    },

    model(v) {
      console.log('update address');
      this.$emit('input', v);
    }

  },
  methods: {},
  computed: {
    fields() {
      var array = []; ///////////////////////////////////

      addField('addressLine1', {
        title: 'Address Line 1',
        minimum: 0,
        maximum: 1,
        type: 'string'
      });
      addField('addressLine2', {
        title: 'Address Line 2',
        minimum: 0,
        maximum: 1,
        type: 'string'
      });
      addField('suburb', {
        title: 'Suburb',
        minimum: 0,
        maximum: 1,
        type: 'string'
      });
      addField('state', {
        title: 'State',
        minimum: 0,
        maximum: 1,
        type: 'string'
      });
      addField('postalCode', {
        title: 'Postal Code',
        minimum: 0,
        maximum: 1,
        type: 'string'
      });
      addField('country', {
        title: 'Country',
        minimum: 0,
        maximum: 1,
        type: 'string',
        directive: 'countryselect'
      }); ///////////////////////////////////

      function addField(key, details) {
        details.key = key;
        array.push(details);
      }

      return array;
    }

  }
};

/* script */
const __vue_script__ = script;
/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.model)?_c('v-container',{attrs:{"fluid":"","grid-list-lg":""}},[_c('fluro-content-form',{attrs:{"fields":_vm.fields},scopedSlots:_vm._u([{key:"form",fn:function(ref){
var formFields = ref.formFields;
var fieldHash = ref.fieldHash;
var model = ref.model;
var update = ref.update;
var options = ref.options;
return [_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":"","sm12":""}},[_c('fluro-content-form-field',{attrs:{"form-fields":formFields,"options":options,"field":fieldHash.addressLine1},on:{"input":update},model:{value:(model),callback:function ($$v) {model=$$v;},expression:"model"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","sm12":""}},[_c('fluro-content-form-field',{attrs:{"form-fields":formFields,"options":options,"field":fieldHash.addressLine2},on:{"input":update},model:{value:(model),callback:function ($$v) {model=$$v;},expression:"model"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","sm6":"","md3":""}},[_c('fluro-content-form-field',{attrs:{"form-fields":formFields,"options":options,"field":fieldHash.suburb},on:{"input":update},model:{value:(model),callback:function ($$v) {model=$$v;},expression:"model"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","sm6":"","md3":""}},[_c('fluro-content-form-field',{attrs:{"form-fields":formFields,"options":options,"field":fieldHash.state},on:{"input":update},model:{value:(model),callback:function ($$v) {model=$$v;},expression:"model"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","sm6":"","md3":""}},[_c('fluro-content-form-field',{attrs:{"form-fields":formFields,"options":options,"field":fieldHash.postalCode},on:{"input":update},model:{value:(model),callback:function ($$v) {model=$$v;},expression:"model"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","sm6":"","md3":""}},[_c('fluro-content-form-field',{attrs:{"form-fields":formFields,"options":options,"field":fieldHash.country},on:{"input":update},model:{value:(model),callback:function ($$v) {model=$$v;},expression:"model"}})],1)],1)]}}],null,false,3582871058),model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v;},expression:"model"}})],1):_vm._e()};
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

export { __vue_component__ as A };
<<<<<<< HEAD:dist/es/AddressManager-c7abdcef.js
//# sourceMappingURL=AddressManager-c7abdcef.js.map
=======
//# sourceMappingURL=AddressManager-66627382.js.map
>>>>>>> a45046e8aeac137a1588be86b3c5378be67755b1:dist/es/AddressManager-66627382.js
