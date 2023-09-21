<template>
  <h1>Universities Search</h1>
  <ul v-if="universities">
    <li v-for="university in universities">
      <NuxtLink :to="`/universities/${university.name}`">{{university.name}}</NuxtLink>
    </li>
  </ul>
</template>
<script>

export default {
  data() {
    return {
      universities: null,
    }
  },
  methods: {
    async getArtists() {
      await new Promise(r => setTimeout(r, 5000));
      const { data } = await useFetch('http://universities.hipolabs.com/search?country=United+Kingdom')
      console.log(data)
      return data
    }
  },
  async created() {
    this.universities = await this.getArtists()
  },
}
</script>