<template>
  <div class="business-leaderboard card-content py-4 px-8">
    <p class="text-sm md:text-lg lg:text-xl mb-8">
      Share the pledge link with businesses so they can pledge and earn a spot at the top of the leaderboard to promote their business.
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
import data from '../../../public/v3/api/business-leaderboard-pledges.json';

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
  data() {
    return {
      showAll: false,
      // sponsors: [],
    }
  },
  computed: {
    hasSponsors() {
      return this.sponsors.length > 0
    },
    sponsorsToShow() {
      return this.showAll ? this.sponsors : this.sponsors.slice(0, 5)
    },
  },
  created() {
    // let url = `/v3/api/business-leaderboard-pledges/${this.program.id}`
    let url = `http://localhost:8080/v3/api/business-leaderboard-pledges.json`
    // this.$axios.get(url)
    //   .then((response) => {
    //     console.log(response.data)
    //     this.sponsors = response.data
    //   }).catch((error) => {
    //     // eslint-disable-next-line
    //     console.error(error)
    //   })
    this.sponsors = data;
  },
  methods: {
    toggle() {
      this.showAll = !this.showAll
    },
  },
}
</script>

<style scoped>
.table tbody tr:last-child td {
    border-bottom-width: 1px;
}
</style>
