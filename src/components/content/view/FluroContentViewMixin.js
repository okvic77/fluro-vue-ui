import FluroContentRender from 'src/components/FluroContentRender.vue';
import FluroContentRenderField from 'src/components/FluroContentRenderField.vue';
import Layout from '../../../mixins/Layout';




export default {
    props: {
        config: {
            type: Object,
            required: true,
        },

    },
    data() {
        return {
            loading: false,
        }
    },
    mixins: [Layout],
    // extends: FluroContentRender,
    components: {
        FluroContentRender,
        FluroContentRenderField,
    },
    computed: {
        itemID() {
            return this.$fluro.utils.getStringID(this.item);
        },
        definition() {
            return this.config && this.config.definition ? this.config.definition : null
        },
        data() {
            return this.item.data || {}
        },
        fields() {

            if (this.definition && this.definition.fields && this.definition.fields.length) {


                return this.definition.fields;
            }

            return [];
        }
        // itemID() {
        //     return this.model._id;
        // },
    },

    //     definition() {
    //         return this.config.definition;
    //     },
    // },
    methods: {

    }
}