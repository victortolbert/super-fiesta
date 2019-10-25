<template>
  <div class="m-4 rounded-xl overflow-hidden modal-card bg-white">
    <section class="modal-card-body has-text-centered">
      <h2 class="script-header">
        {{ lang.header }}
      </h2>
      <p
        class="script-body"
        v-html="lang.p1"
      />
      <br>
      <p
        class="script-body"
        v-html="lang.p2"
      />
      <br>
      <p
        class="script-body"
        v-html="parseLanguage(lang.p3, {event_name: program.event_name})"
      />
      <br>
      <p
        class="script-body"
        v-html="parseLanguage(lang.p4, {event_name: program.event_name,
                                        range_low: program.unit_range_low,
                                        range_high: program.unit_range_high,
                                        unit_max: program.unit_max_charge,
                                        unit_type: program.unit.name})"
      />
      <br>
      <p
        class="script-body"
        v-html="lang.p5"
      />
      <br>
      <p
        class="script-body"
        v-html="parseLanguage(lang.p6, {unit_type: program.unit.name.toUpperCase()})"
      />
      <br>
      <p
        class="script-body"
        v-html="parseLanguage(lang.p7, {unit_type: program.unit.name})"
      />
      <br>
      <p
        class="script-body"
        v-html="parseLanguage(lang.p8, {unit_type: program.unit.name})"
      />
      <br>
      <p
        class="script-body"
        v-html="lang.p9"
      />
      <br>
      <button
        class="px-8 rounded-full button inline-block is-secondary shadow-md font-bold centered close-button"
        @click="close()"
      >
        {{ lang.close }}
      </button>
    </section>
  </div></template>

<script>
export default {
  name: 'PhoneScriptModal',
  props: {
    'program': {
      default: '',
      type: Object,
    },
  },
  computed: {
    lang () {
      return this.$store.state.lang.how_to_get_pledges.phone_script;
    },
  },
  methods: {
    close () {
      this.$emit('close');
      document.getElementById('app').style.filter = 'none';
    },
  },
};
</script>

<style scoped>
    .modal-card{
        border-radius:16px;
    }
    .modal-card-body{
        padding:20px;
    }
    .script-body{
        font-family: Source Sans Pro;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: normal;
        text-align: center;

        color: #4A4A4A;
    }
    .script-header{
        font-family: Source Sans Pro;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: normal;
        text-align: center;

        color: #4A4A4A;

    }
</style>
