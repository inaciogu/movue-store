<template>
  <v-container>
    <div class="d-flex justify-center flex-wrap align-center">
      <v-col class="d-flex justify-center" v-for="movie in movies" :key="movie.id">
        <v-card
          align="center"
          class="d-flex flex-column align-center"
          width="300px"
          height="450px"
        >
          <v-img
            :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`"
          />
          <v-card-title>{{ movie.title }}</v-card-title>
          <v-col>
            {{ movie.vote_average.toFixed(1) }}
          </v-col>
          <v-btn @click="addToCart(movie)" width="100%" color="primary"
            >Adicionar</v-btn
          >
        </v-card>
      </v-col>
    </div>
  </v-container>
</template>

<script lang="ts">
import { IMovie } from '@/@types';
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'HomeCards',

  computed: {
    ...mapState(['movies']),
    ...mapState(['cart']),
  },

  methods: {
    addToCart(movie: IMovie) {
      this.$store.commit('addToCart', movie);
    },
  },
  watch: {
    cart() {
      console.log(this.$store.state.cart);
    },
  },
});
</script>
