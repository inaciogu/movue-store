<template>
  <v-container>
    <div class="d-flex justify-center flex-wrap align-center">
      <v-col
        class="d-flex justify-center"
        v-for="movie in movies"
        :key="movie.id"
      >
        <v-card
          align="center"
          class="d-flex flex-column align-center"
          width="300px"
          height="450px"
        >
          <v-img
            max-height="300"
            :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`"
          />
          <div
            class="d-flex flex-column align-center justify-space-between"
            style="height: 50%; width: 100%"
          >
            <v-card-title>{{ movie.title }}</v-card-title>
            <v-card-subtitle>
              {{ movie.vote_average.toFixed(1) }}
            </v-card-subtitle>
            <v-card-subtitle>
              {{ formatter(movie.price) }}
            </v-card-subtitle>
            <v-btn style="width: 100%" @click="addToCart(movie)" color="primary">Adicionar</v-btn>
          </div>
        </v-card>
      </v-col>
    </div>
  </v-container>
</template>

<script lang="ts">
import { IMovie } from '@/@types';
import Vue from 'vue';
import { mapState } from 'vuex';

const { format } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export default Vue.extend({
  name: 'HomeCards',

  data: () => ({
    formatter: format,
  }),

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
    movies() {
      console.log(this.$store.state.movies);
    },
  },
});
</script>
