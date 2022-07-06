<template>
  <home-cards />
</template>

<script lang="ts">
import { GET_MOVIES } from '@/services/movies.service';
import Vue from 'vue';
import HomeCards from '../components/HomeCards.vue';

export default Vue.extend({
  name: 'HomePage',

  components: {
    HomeCards,
  },
  async mounted() {
    const response = await GET_MOVIES();
    const { results } = response.data;

    this.$store.dispatch('getMovies', results);
  },
});
</script>
