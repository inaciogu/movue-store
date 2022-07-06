<template>
  <v-app>
    <header-app />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HeaderApp from './components/Header.vue';

export default Vue.extend({
  name: 'App',
  components: {
    HeaderApp,
  },

  data: () => ({
    //
  }),
});
</script>
