<<<<<<< HEAD:dist/es/query-6c2e7235.js
import { p as FluroTable, R as RealmDotCell, t as TitleCell, D as DefinitionCell, bd as __vue_normalize__, be as __vue_create_injector__ } from './index-85d711d5.js';
=======
import { p as FluroTable, R as RealmDotCell, t as TitleCell, D as DefinitionCell, bd as __vue_normalize__ } from './index-a26484f6.js';
>>>>>>> a45046e8aeac137a1588be86b3c5378be67755b1:dist/es/query-fdbd0173.js
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
<<<<<<< HEAD:dist/es/query-6c2e7235.js
import { F as FluroContentViewMixin } from './FluroContentViewMixin-ed53ae90.js';
=======
import { F as FluroContentViewMixin } from './FluroContentViewMixin-c92e5600.js';
>>>>>>> a45046e8aeac137a1588be86b3c5378be67755b1:dist/es/query-fdbd0173.js

//

var script = {
  props: {
    config: {
      type: Object,
      required: true
    },
    item: {
      type: Object,
      required: true
    }
  },
  components: {
    FluroTable,
    RealmDotCell,
    TitleCell,
    DefinitionCell
  },
  mixins: [FluroContentViewMixin],
  methods: {},
  asyncComputed: {
    results: {
      default: [],

      get() {
        var self = this;
        self.loading = true;
        return new Promise(function (resolve, reject) {
          self.$fluro.content.query(self.item, {}).then(function (result) {
            resolve(result);
            self.loading = false;
          }).catch(reject);
        });
      }

    }
  },
  computed: {
    data() {
      return this.item.data || {};
    },

    fields() {
      // var array = [];
      // array.push({
      //     title: 'Linked Contacts',
      //     key: 'contacts',
      //     type: 'reference',
      //     minimum: 0,
      //     maximum: 0,
      // })
      return array;
    },

    definedFields() {
      return this.config.definition ? this.config.definition.fields || [] : [];
    },

    columns() {
      if (!this.item.columns.length) {
        return [{
          title: '',
          shrink: true,
          align: "center",
          key: 'realms',
          renderer: RealmDotCell
        }, {
          title: 'Title',
          key: 'title',
          renderer: TitleCell,
          additionalFields: ['firstLine']
        }, {
          title: "Type",
          renderer: DefinitionCell,
          shrink: true
        }, {
          title: "Created",
          key: 'created',
          type: 'date',
          shrink: true
        }, {
          title: "Updated",
          key: 'updated',
          type: 'date',
          shrink: true
        }];
      }

      return this.item.columns;
    }

  },

  data() {
    return {
      loading: true
    };
  },

  created() {
    console.log('THIS RENDERER', this);
  }

};

/* script */
const __vue_script__ = script;
/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('flex-column',[(_vm.loading)?[_c('fluro-page-preloader',{attrs:{"contain":""}})]:[_c('tabset',{attrs:{"justified":true,"vertical":true}},[_c('tab',{attrs:{"heading":"Results"}},[_c('fluro-table',{attrs:{"showFooter":true,"trackingKey":"_id","pageSize":100,"items":_vm.results,"columns":_vm.columns}})],1),_vm._v(" "),(_vm.definedFields.length)?_c('tab',{attrs:{"heading":((_vm.definition.title) + " Details")}},[_c('flex-column-body',{staticStyle:{"background":"#fafafa"}},[_c('v-container',{attrs:{"fluid":""}},[_c('constrain',{attrs:{"sm":""}},[_c('h3',{attrs:{"margin":""}},[_vm._v(_vm._s(_vm.definition.title)+" Details")]),_vm._v(" "),_c('fluro-content-render',{attrs:{"fields":_vm.definedFields},model:{value:(_vm.item.data),callback:function ($$v) {_vm.$set(_vm.item, "data", $$v);},expression:"item.data"}})],1)],1)],1)],1):_vm._e()],1)]],2)};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = "data-v-33d04bc1";
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
<<<<<<< HEAD:dist/es/query-6c2e7235.js
//# sourceMappingURL=query-6c2e7235.js.map
=======
//# sourceMappingURL=query-fdbd0173.js.map
>>>>>>> a45046e8aeac137a1588be86b3c5378be67755b1:dist/es/query-fdbd0173.js
