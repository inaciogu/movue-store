<template>
  <v-container>
    <v-row class="text-center">
      <v-row justify="space-around">
        <v-card align="center" class="ma-5" display="flex"
         justify="center" width="400px" v-for="movie in movies" :key="movie.id">
          <v-img :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`" />
          <v-card-title>{{ movie.title }}</v-card-title>
          <v-col>
            {{ movie.vote_average }}
          </v-col>
          <v-btn width="100%" alignSelf="flex-end" color="primary">Adicionar</v-btn>
        </v-card>
      </v-row>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { GET_MOVIES } from '../services/movies.service';

export default Vue.extend({
  name: 'HomeCards',

  data: () => ({
    movies: [],
  }),
  async mounted() {
    const response = await GET_MOVIES();
    this.movies = response.data.results;
  },
  watch: {
    movies() {
      console.log(this.movies);
    },
  },
});
</script>
