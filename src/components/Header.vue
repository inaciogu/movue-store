<template>
  <v-app-bar app color="primary" dark elevation="5">
    <div class="d-flex align-center justify-space-between" style="width: 100%">
      <div class="d-flex align-center">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-app-bar-title>Movue store</v-app-bar-title>
      </div>
      <div class="w-100">
        <v-text-field
          v-model="search"
          hide-details
          outlined
          label="pesquisar"
          append-icon="mdi-magnify"
          @click:append="searchMovie"
          single-line
        ></v-text-field>
      </div>
      <div class="px-2">
        <v-badge content="2" color="success">
          <v-icon @click.stop="openDrawer">mdi-cart-outline</v-icon>
        </v-badge>
      </div>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import { SEARCH_MOVIE } from '../services/movies.service';

export default Vue.extend({
  name: 'HeaderApp',

  data: () => ({
    search: '',
  }),
  computed: {
    ...mapState(['drawer']),
  },
  methods: {
    async searchMovie() {
      const response = await SEARCH_MOVIE(this.search);
      const { results } = response.data;

      this.$store.dispatch('searchMovies', results);
    },
    openDrawer() {
      this.$store.dispatch('toggleDrawer', !this.drawer);
    },
  },
});
</script>
