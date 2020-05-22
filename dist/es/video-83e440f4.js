<<<<<<< HEAD:dist/es/video-83e440f4.js
import { bd as __vue_normalize__, be as __vue_create_injector__ } from './index-85d711d5.js';
=======
import { bd as __vue_normalize__ } from './index-a26484f6.js';
>>>>>>> a45046e8aeac137a1588be86b3c5378be67755b1:dist/es/video-1690bf36.js
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
<<<<<<< HEAD:dist/es/video-83e440f4.js
import { F as FluroContentViewMixin } from './FluroContentViewMixin-ed53ae90.js';
import { F as FluroDefinedList } from './FluroDefinedList-575f2fc9.js';
=======
import { F as FluroContentViewMixin } from './FluroContentViewMixin-c92e5600.js';
import { F as FluroDefinedList } from './FluroDefinedList-55e00cd3.js';
>>>>>>> a45046e8aeac137a1588be86b3c5378be67755b1:dist/es/video-1690bf36.js

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
    FluroDefinedList
  },
  mixins: [FluroContentViewMixin],
  methods: {
    quickOpen(item) {
      console.log('Open', item);
      this.$actions.open([item]);
    }

  },
  computed: {
    linkURL() {
      return this.$fluro.asset.getUrl(this.item, {
        format: this.item.extension,
        filename: this.item.filename
      });
    },

    downloadURL() {
      return this.$fluro.asset.downloadUrl(this.item);
    }

  },

  data() {
    return {};
  },

  created() {
    console.log('THIS RENDERER', this);
  }

};

/* script */
const __vue_script__ = script;
/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('flex-column',[_c('flex-column-body',[_c('constrain',{attrs:{"sm":""}},[_c('v-container',{attrs:{"py-0":""}},[_c('fluro-video',{attrs:{"item":_vm.item}})],1),_vm._v(" "),(_vm.item.assetType == 'upload')?_c('v-layout',[_c('v-flex',[_c('v-btn',{attrs:{"large":"","block":"","color":"#eee","href":_vm.linkURL,"target":"_blank"}},[_vm._v("\n                        Link\n                        "),_c('fluro-icon',{attrs:{"right":"","icon":"link"}})],1)],1),_vm._v(" "),_c('v-flex',[_c('v-btn',{attrs:{"large":"","block":"","color":"#eee","href":_vm.downloadURL,"target":"_blank"}},[_vm._v("\n                        Download\n                        "),_c('fluro-icon',{attrs:{"right":"","icon":"cloud-download"}})],1)],1)],1):_vm._e(),_vm._v(" "),(_vm.item.body && _vm.item.body.length)?[_c('div',{domProps:{"innerHTML":_vm._s(_vm.item.body)}})]:_vm._e(),_vm._v(" "),(_vm.fields && _vm.fields.length)?[_c('fluro-content-render',{attrs:{"fields":_vm.fields},model:{value:(_vm.item.data),callback:function ($$v) {_vm.$set(_vm.item, "data", $$v);},expression:"item.data"}})]:_vm._e()],2)],1)],1)};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = "data-v-931ec9fa";
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
<<<<<<< HEAD:dist/es/video-83e440f4.js
//# sourceMappingURL=video-83e440f4.js.map
=======
//# sourceMappingURL=video-1690bf36.js.map
>>>>>>> a45046e8aeac137a1588be86b3c5378be67755b1:dist/es/video-1690bf36.js
