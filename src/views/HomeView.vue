<template>
  <home-cards />
</template>

<script lang="ts">
import Vue from 'vue';
import HomeCards from '../components/HomeCards.vue';

export default Vue.extend({
  name: 'HomePage',

  components: {
    HomeCards,
  },
});
</script>
