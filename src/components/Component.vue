<template>
  <div :class="classObject" :style="styleObject">
    <!-- @slot Use this slot header -->
    <slot name="header" />
    <slot />
    <!-- @slot Use this slot footer -->
    <slot name="footer" />
  </div>
</template>

<script>
import { text } from './utils';

/**
 * This is an example of creating a reusable grid component and using it with external data.
 * @version 1.0.5
 * @author [Victor](https://github.com/VictorTolbert)
 * @since Version 1.0.1
 */
export default {
  name: 'Grid',
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
  },
  props: {

    /**
     * object/array defaults should be returned from a factory function
     * @version 1.0.5
     * @since Version 1.0.1
     * @see See [Wikipedia](https://en.wikipedia.org/wiki/Web_colors#HTML_color_names) for a list of color names
     * @link See [Wikipedia](https://en.wikipedia.org/wiki/Web_colors#HTML_color_names) for a list of color names
     */
    msg: {
      type: [String, Number],
      default: text,
    },
    /**
     * Model example
     * @model
     */
    value: {
      type: String,
      default: null,
    },
    /**
     * describe data
     * @version 1.0.5
     */
    data: {
      type: Array,
      default: () => ([]),
    },
    /**
     * get columns list
     */
    columns: {
      type: Array,
      default: () => ([]),
    },
    /**
     * filter key
     * @ignore
     */
    filterKey: {
      type: String,
      default: 'example',
    },
  },
  data () {
    var sortOrders = {}
    this.columns.forEach(key => {
      sortOrders[key] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders,
      isActive: true,
      error: null,
      styleObject: {
        color: 'red',
        fontSize: '13px',
      },
    }
  },
  computed: {
    classObject: () => ({
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal',
    }),
    filteredData () {
      var sortKey = this.sortKey
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var order = this.sortOrders[sortKey] || 1
      var data = this.data
      if (filterKey) {
        data = data.filter(row => {
          return Object.keys(row).some(key => {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      if (sortKey) {
        data = data.slice().sort((a, b) => {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return data
    },
  },
  // async mounted () {
  //   await this.$store.dispatch('auth/init')
  // },
  methods: {

    /**
     * Sets the order
     *
     * @public
     * @version 1.0.5
     * @since Version 1.0.1
     * @param {string} key Key to order
     * @returns {string} Test
     */
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1;

      /**
       * Success event.
       *
       * @event success
       * @type {object}
       */
      this.$emit('success', {
        demo: 'example',
      })
    },

    hiddenMethod: function() {

    },
  },
}
</script>
