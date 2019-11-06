<template>
  <div class="antialiased flex items-center justify-center h-screen p-8 sm:p-16 bg-gray-200 text-white sm:text-blue-800 sm:border sm:shadow-lg">
    <CorporateMatchThanks class="sm:bg-white sm:p-8 rounded-lg" />
    <AppMenu />
    <pre>{{ info }}</pre>
  </div>
</template>

<script>
import CorporateMatchThanks from '@/components/patterns/CorporateMatchThanks'
import AppMenu from '@/components/AppMenu'

export default {
  name: 'Home',
  components: {
    CorporateMatchThanks,
    AppMenu,
  },
  data () {
    return {
      info: null,
    }
  },
  mounted() {
    this.fetchUsers('https://jsonplaceholder.typicode.com/users')
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
  },
  methods: {
    async fetchUsers (url) {
      let res = await fetch(url);
      let data = await res.json();
      console.log(data.map(user => user.username))
    },
  },
}
</script>
