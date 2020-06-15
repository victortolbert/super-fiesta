<template>
  <div class="business-leaderboard card-content py-4 px-8">
    <p
      class="text-sm md:text-lg lg:text-xl mb-8"
    >
      {{ business_leaderboard_heading_1 }}<b>{{ lang.business_leaderboard_heading_2 }}</b>{{ lang.business_leaderboard_heading_3 }}
    </p>

    <table class="table is-fullwidth mb-8">
      <tbody v-if="hasSponsors">
        <tr
          v-for="(sponsor, index) in sponsorsToShow"
          :key="sponsor.id"
        >
          <td>
            <h3 class="text-sm md:text-lg lg:text-xl">
              {{ index + 1 }}. {{ sponsor.business_name }}
            </h3>
            <h4
              v-if="sponsor.comment && sponsor.show_comment == 1"
              class="text-xs md:text-base lg:text-lg"
            >
              {{ sponsor.comment }}
            </h4>
          </td>
          <td class="text-right">
            {{ sponsor.amount }}
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td>
            <h3 class="text-sm md:text-lg lg:text-xl">
              1. Top Business Pledge
            </h3>
            <h4 class="text-xs md:text-base lg:text-lg">
              Your Note Goes Here!
            </h4>
          </td>
          <td class="text-right">
            $0
          </td>
        </tr>
      </tbody>
    </table>

    <div class="text-center">
      <button
        class="button is-white has-text-secondary has-text-weight-bold"
        @click.prevent="toggle"
      >
        {{ showAll ? 'View Less' : 'View More' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BusinessLeaderboard',
  status: 'prototype',
  release: '1.0.0',
  props: {
    program: {
      type: Object,
      default: null,
    },
  },
  data () {
    return {
      showAll: false,
      sponsors: [],
    };
  },
  computed: {
    lang () {
      return this.$store.state.lang;
    },
    business_leaderboard_heading_1 () {
      return this.parseLanguage(
        this.lang.business_leaderboard_heading_1,
        {
          event_name: this.program.name,
        },
      );
    },
    hasSponsors () {
      return this.sponsors.length > 0;
    },
    sponsorsToShow () {
      return this.showAll ? this.sponsors : this.sponsors.slice(0, 5);
    },
  },
  created () {
    axios.get(`/v3/api/business-leaderboard-pledges/${this.program.id}`)
      .then(response => {
        this.sponsors = response.data;
      }).catch(error => {
        console.error(error);
      });
  },
  methods: {
    toggle () {
      this.showAll = !this.showAll;
    },
  },
};
</script>

<style scoped>
.table tbody tr:last-child td {
    border-bottom-width: 1px;
}
</style>
