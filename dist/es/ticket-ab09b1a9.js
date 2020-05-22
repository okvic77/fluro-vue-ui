<<<<<<< HEAD:dist/es/ticket-e39f6b68.js
import { bd as __vue_normalize__, be as __vue_create_injector__ } from './index-85d711d5.js';
=======
import { bd as __vue_normalize__ } from './index-a26484f6.js';
>>>>>>> a45046e8aeac137a1588be86b3c5378be67755b1:dist/es/ticket-ab09b1a9.js
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
<<<<<<< HEAD:dist/es/ticket-e39f6b68.js
import { F as FluroContentEditMixin } from './FluroContentEditMixin-189fa42a.js';
=======
import { F as FluroContentEditMixin } from './FluroContentEditMixin-f94812ea.js';
>>>>>>> a45046e8aeac137a1588be86b3c5378be67755b1:dist/es/ticket-ab09b1a9.js

//

var script = {
  mixins: [FluroContentEditMixin],
  components: {},
  methods: {
    toggleCollected() {
      console.log('INIT TOGGLE');
      var self = this;

      if (!self.model.collected) {
        console.log('COLLECTED IS FALSY', self.model.collected);
        return self.$set(self.model, 'collected', true);
      } else {
        console.log('COLLECTED IS TRUTHY', self.model.collected);
        return self.$set(self.model, 'collected', false);
      }
    }

  },

  created() {
    var self = this;

    if (!self.model._id) {
      return self.$set(self.model, 'collected', false);
    }
  },

  asyncComputed: {},
  computed: {
    showOutline() {
      return false;
    },

    fieldsOutput() {
      var array = []; ///////////////////////////////////

      addField('title', {
        title: 'Ticket Title',
        minimum: 0,
        maximum: 1,
        type: 'string'
      });
      addField('email', {
        title: 'Primary Email Address',
        minimum: 0,
        maximum: 1,
        type: 'email'
      });
      addField('contact', {
        title: 'Contact',
        description: 'The contact this ticket is linked to',
        minimum: 1,
        maximum: 1,
        type: 'reference',
        params: {
          restrictType: 'contact'
        }
      });
      addField('value', {
        title: 'Value',
        minimum: 0,
        maximum: 1,
        type: 'number'
      });
      addField('event', {
        title: 'Event',
        description: 'The event this ticket is valid for',
        minimum: 0,
        maximum: 1,
        type: 'reference',
        params: {
          restrictType: 'event'
        }
      });
      addField('interaction', {
        title: 'Interaction',
        description: 'The original form submission that was used to create this ticket',
        minimum: 0,
        maximum: 1,
        type: 'reference',
        params: {
          restrictType: 'interaction'
        }
      }); //////////////////////////////////////

      addField('collectedBy', {
        title: 'Collected By',
        description: 'The name of the person that collected the ticket',
        minimum: 0,
        maximum: 1,
        type: 'string'
      });
      addField('collectionDate', {
        title: 'Collection Date',
        description: 'The date this ticket was collected',
        minimum: 0,
        maximum: 1,
        type: 'date',
        directive: 'timedatepicker'
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
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('flex-column',[(_vm.loading)?[_c('fluro-page-preloader',{attrs:{"contain":""}})]:_c('tabset',{attrs:{"justified":true,"vertical":true}},[_c('tab',[_c('flex-column-body',{staticStyle:{"background":"#fafafa"}},[_c('v-container',[_c('constrain',{attrs:{"sm":""}},[_c('v-layout',{attrs:{"column":"","grid-list-xl":""}},[_c('fluro-content-form-field',{attrs:{"form-fields":_vm.formFields,"outline":_vm.showOutline,"options":_vm.options,"field":_vm.fieldHash.title},on:{"input":_vm.update},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v;},expression:"model"}}),_vm._v(" "),_c('fluro-content-form-field',{attrs:{"form-fields":_vm.formFields,"outline":_vm.showOutline,"options":_vm.options,"field":_vm.fieldHash.email},on:{"input":_vm.update},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v;},expression:"model"}}),_vm._v(" "),_c('fluro-content-form-field',{attrs:{"form-fields":_vm.formFields,"outline":_vm.showOutline,"options":_vm.options,"field":_vm.fieldHash.contact},on:{"input":_vm.update},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v;},expression:"model"}}),_vm._v(" "),_c('fluro-content-form-field',{attrs:{"form-fields":_vm.formFields,"outline":_vm.showOutline,"options":_vm.options,"field":_vm.fieldHash.value},on:{"input":_vm.update},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v;},expression:"model"}}),_vm._v(" "),_c('fluro-content-form-field',{attrs:{"form-fields":_vm.formFields,"outline":_vm.showOutline,"options":_vm.options,"field":_vm.fieldHash.event},on:{"input":_vm.update},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v;},expression:"model"}}),_vm._v(" "),_c('fluro-content-form-field',{attrs:{"form-fields":_vm.formFields,"outline":_vm.showOutline,"options":_vm.options,"field":_vm.fieldHash.interaction},on:{"input":_vm.update},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v;},expression:"model"}}),_vm._v(" "),_c('fluro-panel',[_c('fluro-panel-title',[_c('div',{staticClass:"no-border-no-background",on:{"click":function($event){return _vm.toggleCollected()}}},[_c('fluro-toggle-item',{attrs:{"inactive":!_vm.model.collected}},[_vm._v("Ticket has been collected")])],1)]),_vm._v(" "),(_vm.model.collected)?_c('fluro-panel-body',[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs-12":"","sm6":"","px-1":""}},[_c('fluro-content-form-field',{attrs:{"form-fields":_vm.formFields,"outline":_vm.showOutline,"options":_vm.options,"field":_vm.fieldHash.collectedBy},on:{"input":_vm.update},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v;},expression:"model"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs-12":"","sm6":"","px-1":""}},[_c('fluro-content-form-field',{attrs:{"form-fields":_vm.formFields,"outline":_vm.showOutline,"options":_vm.options,"field":_vm.fieldHash.collectionDate},on:{"input":_vm.update},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v;},expression:"model"}})],1)],1)],1):_vm._e()],1)],1)],1)],1)],1)],1)],1)],2)};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = "data-v-edb4786c";
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
<<<<<<< HEAD:dist/es/ticket-e39f6b68.js
//# sourceMappingURL=ticket-e39f6b68.js.map
=======
//# sourceMappingURL=ticket-ab09b1a9.js.map
>>>>>>> a45046e8aeac137a1588be86b3c5378be67755b1:dist/es/ticket-ab09b1a9.js
