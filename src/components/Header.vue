<template>
  <v-app-bar app color="primary" dark elevation="5">
    <div class="d-flex align-center justify-space-between" style="width: 100%">
      <router-link to="/">
        <v-app-bar-title class="white--text">Movue store</v-app-bar-title>
      </router-link>
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
      <div class="px-2 d-flex align-center">
        <div>
          <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
            <v-icon>{{
              $vuetify.theme.dark
                ? "mdi-lightbulb-on-outline"
                : "mdi-weather-night"
            }}</v-icon>
          </v-btn>
        </div>
        <v-badge :content="totalQuantity" color="success">
          <v-icon @click.stop="openDrawer">mdi-cart-outline</v-icon>
        </v-badge>
      </div>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapState } from 'vuex';
import { SEARCH_MOVIE } from '../services/movies.service';

export default Vue.extend({
  name: 'HeaderApp',

  data: () => ({
    search: '',
  }),
  computed: {
    ...mapState(['drawer']),
    ...mapState(['cart']),
    ...mapGetters({
      totalQuantity: 'totalQuantity',
    }),
    totalQuantity: {
      get() {
        return this.$store.getters.totalQuantity;
      },
    },
  },
  methods: {
    async searchMovie() {
      const response = await SEARCH_MOVIE(this.search);
      const { results } = response.data;

      this.$store.dispatch('getMovies', results);
    },
    openDrawer() {
      this.$store.commit('toggleDrawer', !this.drawer);
    },
    backToHome() {
      this.$router.push('/');
    },
  },
});
</script>
