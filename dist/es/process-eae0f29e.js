<<<<<<< HEAD:dist/es/process-02014dc1.js
import { ac as FluroContentView, ah as FluroTaskList, bf as _, bi as _objectSpread2, bd as __vue_normalize__, be as __vue_create_injector__ } from './index-85d711d5.js';
=======
import { ac as FluroContentView, ah as FluroTaskList, be as _, bh as _objectSpread2, bd as __vue_normalize__ } from './index-a26484f6.js';
>>>>>>> a45046e8aeac137a1588be86b3c5378be67755b1:dist/es/process-eae0f29e.js
import 'vue';
import 'vuedraggable';
import 'vue-color';
import 'signature_pad';
import 'fluro';
import { mapFields } from 'vuex-map-fields';
import 'async';
import 'tippy.js';
import 'tiptap';
import 'tiptap-commands';
import 'tiptap-extensions';
<<<<<<< HEAD:dist/es/process-02014dc1.js
import { F as FluroContentEditMixin } from './FluroContentEditMixin-189fa42a.js';
=======
import { F as FluroContentEditMixin } from './FluroContentEditMixin-f94812ea.js';
>>>>>>> a45046e8aeac137a1588be86b3c5378be67755b1:dist/es/process-eae0f29e.js

var script = {
  props: {// 'fields': {
    //     type: Array,
    //     default () {
    //         var array = [];
    //         ///////////////////////////////////
    //         function addField(key, details) {
    //             details.key = key;
    //             array.push(details)
    //             // // Vue.set(self.fields, key, details);
    //             // if (details.enabled === false) {
    //             // } else {
    //             //     details.enabled = true;
    //             // }
    //             // var defaultValue = self.getDefaultValue(key, details);
    //             // Vue.set(self.model, key, defaultValue);
    //         }
    //         //Update fields to use the default fields we set above
    //         return array;
    //     }
    // }
  },

  created() {
    if (!this.model.data) {
      this.model.data = {};
    }
  },

  mixins: [FluroContentEditMixin],
  components: {
    FluroContentView,
    FluroTaskList // FluroAvatarUpdate,
    // FluroContentForm,
    // FluroRealmSelect,
    // FluroContentFormField,
    // FluroAcademicSelect,

  },
  methods: {
    removeTaskList(index) {
      var self = this;
      var lists = self.model.taskLists;
      self.$delete(lists, index);
      self.$set(self.model, 'taskLists', lists.slice()); // self.model.taskLists = self.model.taskLists.splice(index, 1);

      self.dispatchUpdate();
    },

    addTaskList() {
      var self = this;

      if (!self.model.taskLists) {
        self.$set(self.model, 'taskLists', []);
      }

      var newList = {
        autofocus: true,
        tasks: [// {
          //     name: 'New Task',
          //     description: '',
          //     required: true,
          //     guid: self.$fluro.utils.guid(),
          // }
        ]
      }; /////////////////////////////////////////////
      /////////////////////////////////////////////

      var currentState = self.currentState;
      var proposedTitle;

      if (currentState && currentState.title) {
        proposedTitle = `${currentState.title} tasks`;
        newList.state = currentState.key;
      } //Check if there is already a task list with this title


      var existingList = _.find(self.model.taskLists, {
        title: proposedTitle
      }); //If there is no title or there is already a task list for this state


      if (!proposedTitle || !proposedTitle.length || existingList) {
        proposedTitle = `${self.user.firstName}'s tasks`;
      } //Check if there is already a task list with this title


      var existingList = _.find(self.model.taskLists, {
        title: proposedTitle
      }); /////////////////////////////////////////////


      if (existingList) {
        proposedTitle = 'Additional Tasks'; // console.log('Already exists', proposedTitle);
        // return;
      } //Use our proposed title


      newList.title = proposedTitle; /////////////////////////////////////////////
      /////////////////////////////////////////////

      self.model.taskLists.push(newList); // console.log('SELF MODEL', self.model)
      // self.update(self.model)

      self.dispatchUpdate();
    },

    resend(form) {
      var self = this;
      var cardID = self.$fluro.utils.getStringID(self.model);
      var formID = self.$fluro.utils.getStringID(form.form);
      self.$set(self.resending, formID, true);
      return self.$fluro.api.put(`/process/resend/${cardID}/${formID}`).then(function (res) {
        self.$fluro.notify('Form was resent');
        self.$set(self.resending, formID, false);
      }).catch(function (err) {
        self.$fluro.error(err);
        self.$set(self.resending, formID, false);
      }); // this.resending[]
      // this.$set(form, 'resending', true);
    },

    dispatchUpdate(newModel) {
      this.update(this.model);
    }

  },
  asyncComputed: {// devices: {
    //     default: [],
    //     get() {
    //         var self = this;
    //         if (self.context != 'edit' || !self.itemID) {
    //             return Promise.resolve([]);
    //         }
    //         //////////////////////////////////////
    //         return new Promise(function(resolve, reject) {
    //             self.$fluro.api.get(`/contact/${self.itemID}/devices`)
    //                 .then(function(res) {
    //                     resolve(_.map(res.data, function(device) {
    //                         device.pinging = false;
    //                         return device;
    //                     }));
    //                 })
    //                 .catch(function(err) {
    //                     reject(err);
    //                 })
    //         })
    //     }
    // },
  },
  computed: _objectSpread2({}, mapFields('fluro', ['application', //The Fluro application and all of it's permissions and data
  'user' //The authenticated user if they log in
  ]), {
    fieldsOutput() {
      var self = this;
      var array = []; ///////////////////////////////////

      addField('title', {
        title: 'Title',
        minimum: 1,
        maximum: 1,
        type: 'string',
        placeholder: ''
      }); ///////////////////////////////////

      addField('contacts', {
        title: 'Key Contacts',
        minimum: 0,
        maximum: 0,
        type: 'reference',
        params: {
          restrictType: 'contact'
        }
      }); ///////////////////////////////////

      addField('dueDate', {
        title: 'Due Date',
        minimum: 0,
        maximum: 1,
        type: 'date',
        directive: 'datetime-select',
        params: {}
      });
      addField('state', {
        title: 'Current State',
        minimum: 0,
        maximum: 1,
        type: 'string',
        directive: 'select',
        options: _.map(self.states, function (state) {
          return {
            name: state.title,
            value: state.key
          };
        })
      }); ///////////////////////////////////

      addField('assignedTo', {
        title: 'Assigned To',
        minimum: 0,
        maximum: 0,
        type: 'reference',
        params: {
          restrictType: 'contact'
        }
      }); ///////////////////////////////////

      function addField(key, details) {
        details.key = key;
        array.push(details);
      } // console.log('DO THE OUTPUT!!!');


      return array;
    },

    referenceItemField() {
      var self = this;

      var processTypes = _.chain(this.definition).get('data.processTypes').map(function (type) {
        return {
          name: self.$fluro.types.readable(type),
          value: type
        };
      }).value();

      return {
        key: 'item',
        title: 'Referenced Item',
        description: 'Select an item to add to this process',
        minimum: 0,
        maximum: 1,
        type: 'reference' // params:{
        //     restrictType
        // }

      };
    },

    currentStateName() {
      return this.model.state;
    },

    currentState() {
      return _.find(this.states, {
        key: this.currentStateName
      });
    },

    reference() {
      return this.model.item;
    },

    title() {
      if (this.model) {
        if (this.model.title && this.model.title.length) {
          return this.model.title;
        }

        if (this.model.item && this.model.item.title) {
          return this.model.item.title;
        }
      }

      return 'New Card';
    },

    states() {
      return _.get(this.definition, 'data.states'); // this.definition && this.definition.data ? this.definition.data.states : []
    },

    awaitingForms() {
      var self = this;
      return _.filter(self.model.forms, function (entry) {
        return !entry.interaction;
      });
    },

    receivedForms() {
      var self = this;
      return _.filter(self.model.forms, function (entry) {
        return entry.interaction;
      });
    },

    showOutline() {
      return false; //true; //false;//true;//false;//true;
    }

  }),

  data() {
    return {
      resending: {}
    };
  }

};

/* script */
const __vue_script__ = script;
/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('flex-column',[(_vm.loading)?[_c('fluro-page-preloader',{attrs:{"contain":""}})]:_c('tabset',{attrs:{"justified":true},scopedSlots:_vm._u([{key:"menuprefix",fn:function(){return [(_vm.context == 'edit' && _vm.$vuetify.breakpoint.mdAndUp)?void 0:_vm._e()]},proxy:true}])},[_vm._v(" "),_c('tab',{attrs:{"heading":"Card Details"}},[_c('flex-row',[_c('v-flex',{staticClass:"main",attrs:{"xs12":"","sm8":""}},[_c('flex-column-body',{staticStyle:{"background":"#fafafa"}},[_c('v-container',[_c('constrain',{attrs:{"sm":""}},[(_vm.reference)?[_c('fluro-panel',[_c('fluro-panel-body',{staticStyle:{"padding":"0"}},[_c('flex-column-body',{staticStyle:{"max-height":"50vh"}},[_c('fluro-content-view',{attrs:{"id":_vm.reference,"embedded":true,"definition":_vm.reference.definition,"type":_vm.reference._type}})],1)],1)],1)]:(_vm.definition && _vm.definition.fields && _vm.definition.fields.length)?[_c('fluro-content-form-field',{attrs:{"form-fields":_vm.formFields,"outline":_vm.showOutline,"options":_vm.options,"field":_vm.fieldHash.title},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v;},expression:"model"}}),_vm._v(" "),_c('fluro-content-form',{attrs:{"options":_vm.options,"fields":_vm.definition.fields},model:{value:(_vm.model.data),callback:function ($$v) {_vm.$set(_vm.model, "data", $$v);},expression:"model.data"}})]:[_c('h3',{attrs:{"margin":""}},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('fluro-content-form-field',{attrs:{"form-fields":_vm.formFields,"outline":_vm.showOutline,"options":_vm.options,"field":_vm.referenceItemField},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v;},expression:"model"}})],_vm._v(" "),(_vm.model.forms && _vm.model.forms.length)?[(_vm.receivedForms && _vm.receivedForms.length)?_c('v-input',{staticClass:"no-flex"},[_c('v-label',[_vm._v("Received "+_vm._s(_vm.receivedForms.length)+" Form Responses")]),_vm._v(" "),_c('p',{staticClass:"help-block"},[_vm._v("These forms have not yet been submitted")]),_vm._v(" "),_c('list-group',_vm._l((_vm.receivedForms),function(form,index){return _c('list-group-item',{key:index},[_c('strong',[_c('fluro-icon',{attrs:{"type":"form"}}),_vm._v(" "+_vm._s(form.form.title)+"\n                                                ")],1),_vm._v(" "),_c('div',{staticClass:"sm"},[_c('span',{staticClass:"status-label active"},[_c('fluro-icon',{attrs:{"icon":"check"}}),_vm._v(" Received ")],1),_vm._v(" "+_vm._s(_vm._f("formatDate")(form.received,'h:mma ddd MMM YYYY'))+" "),_c('span',{staticClass:"muted"},[_vm._v(_vm._s(_vm._f("timeago")(form.received)))])])])}),1)],1):_vm._e(),_vm._v(" "),(_vm.awaitingForms && _vm.awaitingForms.length)?_c('v-input',{staticClass:"no-flex"},[_c('v-label',[_vm._v("Awaiting "+_vm._s(_vm.awaitingForms.length)+" Form Responses")]),_vm._v(" "),_c('p',{staticClass:"help-block"},[_vm._v("These forms have not yet been submitted")]),_vm._v(" "),_c('list-group',_vm._l((_vm.awaitingForms),function(form){return _c('list-group-item',{scopedSlots:_vm._u([{key:"right",fn:function(){return [_c('v-btn',{attrs:{"small":"","color":"primary","loading":_vm.resending[form.form._id]},on:{"click":function($event){return _vm.resend(form)}}},[_vm._v("\n                                                        Resend\n                                                        "),_c('fluro-icon',{attrs:{"right":"","icon":"paper-plane"}})],1)]},proxy:true}],null,true)},[_c('strong',[_c('fluro-icon',{attrs:{"type":"form"}}),_vm._v(" "+_vm._s(form.form.title)+"\n                                                ")],1),_vm._v(" "),_c('div',{staticClass:"sm"},[_vm._v("\n                                                    Sent "+_vm._s(_vm._f("timeago")(form.sent))+" - "),_c('span',{staticClass:"status-label draft"},[_c('fluro-icon',{attrs:{"icon":"clock"}}),_vm._v(" Awaiting form response")],1)])])}),1)],1):_vm._e()]:_vm._e(),_vm._v(" "),[_vm._l((_vm.model.taskLists),function(list,index){return _c('fluro-task-list',{attrs:{"card":_vm.model,"state":_vm.model.state,"definition":_vm.definition},on:{"remove":function($event){return _vm.removeTaskList(index)},"input":_vm.dispatchUpdate},model:{value:(_vm.model.taskLists[index]),callback:function ($$v) {_vm.$set(_vm.model.taskLists, index, $$v);},expression:"model.taskLists[index]"}})}),_vm._v(" "),_c('span',{staticClass:"horizontal-rule"}),_vm._v(" "),_c('v-btn',{staticClass:"ml-0",on:{"click":function($event){return _vm.addTaskList()}}},[_vm._v("\n                                        Add Task List\n                                        "),_c('fluro-icon',{attrs:{"right":"","icon":"plus"}})],1)]],2)],1)],1)],1),_vm._v(" "),_c('v-flex',{staticClass:"sidebar",attrs:{"xs12":"","sm4":""}},[_c('flex-column-body',[_c('v-container',[_c('fluro-content-form-field',{attrs:{"form-fields":_vm.formFields,"outline":_vm.showOutline,"options":_vm.options,"field":_vm.fieldHash.dueDate},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v;},expression:"model"}}),_vm._v(" "),_c('fluro-content-form-field',{attrs:{"form-fields":_vm.formFields,"outline":_vm.showOutline,"options":_vm.options,"field":_vm.fieldHash.state},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v;},expression:"model"}}),_vm._v(" "),_c('v-input',{staticClass:"no-flex"},[_c('v-label',[_vm._v("Key Contacts")]),_vm._v(" "),_c('p',{staticClass:"help-block"},[_vm._v("This card does not reference a contact, Here you can specify who should be sent Automated SMS and Mailouts as this card progresses")]),_vm._v(" "),_c('fluro-content-form-field',{attrs:{"form-fields":_vm.formFields,"showLabel":false,"outline":_vm.showOutline,"options":_vm.options,"field":_vm.fieldHash.contacts},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v;},expression:"model"}})],1),_vm._v(" "),_c('v-input',{staticClass:"no-flex"},[_c('v-label',[_vm._v("Assigned To")]),_vm._v(" "),_c('p',{staticClass:"help-block"},[_vm._v("Assign who is in charge of this card")]),_vm._v(" "),_c('fluro-content-form-field',{attrs:{"form-fields":_vm.formFields,"showLabel":false,"outline":_vm.showOutline,"options":_vm.options,"field":_vm.fieldHash.assignedTo},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v;},expression:"model"}})],1)],1)],1)],1)],1)],1)],1)],2)};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = "data-v-7aa263ce";
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
<<<<<<< HEAD:dist/es/process-02014dc1.js
//# sourceMappingURL=process-02014dc1.js.map
=======
//# sourceMappingURL=process-eae0f29e.js.map
>>>>>>> a45046e8aeac137a1588be86b3c5378be67755b1:dist/es/process-eae0f29e.js
