<template>
  <div class="m-4 rounded-xl overflow-hidden">
    <div class="card bg-blue">
      <div
        v-if="isSending"
        class="card-content py-16 sm:px-32 text-white text-center"
      >
        <SendEnvelope />
        <p class="font-bold text-xl">
          Email sent to:
        </p>
        <p class="font-semibold">
          3 Contact(s)
        </p>
      </div>
      <div
        v-else
        class="card-content text-white text-center"
      >
        <SendEnvelope />
        <p class="font-medium text-lg">
          You’re about to email Previous Sponsors
        </p>
      </div>
      <div
        v-if="!isSending"
        class="card-footer border-t-0"
      >
        <div class="card-footer-item">
          <button
            class="w-24 sm:w-32 button inline-block mb-4 mx-2 is-danger is-rounded shadow font-bold"
            @click="close"
          >
            Cancel
          </button>
          <button
            class="w-24 sm:w-32 button inline-block mb-4 mx-2 is-secondary is-rounded is-inverted shadow font-bold"
            @click="sendEmail"
          >
            Send
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'EmailPreviousSponsorsModal',
  data () {
    return {
      isSending: false,
    };
  },
  methods: {
    sendEmail () {
      this.isSending = true;
      setTimeout(() => {
        this.close();
      }, 3000);
    },
    close () {
      this.$emit('close');
      document.getElementById('app').style.filter = 'none';
    },
  },
};
</script>
