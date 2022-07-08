<template>
  <v-container>
    <v-main class="d-flex justify-center flex-wrap align-center">
      <v-row class="d-flex justify-space-around">
        <v-card
          v-for="movie in movies"
          :key="movie.id"
          align="center"
          class="d-flex flex-column align-center my-4"
          width="360px"
          height="500px"
        >
          <v-img
            class="d-flex align-end"
            max-height="300"
            :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`"
          >
            <v-chip
              style="width: fit-content"
              color="secondary"
              class="d-flex justify-center align-center my-1"
            >
              {{
                `${movie.release_date.split("-")[2]} de ${
                  months[movie.release_date.split("-")[1]]
                } de ${movie.release_date.split("-")[0]} `
              }}
            </v-chip>
          </v-img>
          <div
            class="d-flex flex-column align-center justify-space-between"
            style="width: 100%; height: 50%"
          >
            <v-card-title>{{ movie.title }}</v-card-title>
            <div class="d-flex align-center">
              <v-icon color="yellow darken-3">mdi-star</v-icon>
              <v-card-subtitle>
                {{ movie.vote_average.toFixed(1) }}
              </v-card-subtitle>
            </div>
            <v-card-subtitle>
              {{ formatter(movie.price) }}
            </v-card-subtitle>
            <v-btn
              style="width: 100%"
              @click="addToCart(movie)"
              color="primary"
              >Adicionar</v-btn
            >
          </div>
        </v-card>
      </v-row>
    </v-main>
  </v-container>
</template>

<style scoped>
.v-responsive__content {
  flex: 1;
}
</style>

<script lang="ts">
import { IMovie } from '@/@types';
import Vue from 'vue';
import { format as dateFormat } from 'date-fns';
import { mapState } from 'vuex';

const { format } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

const months = {
  '01': 'janeiro',
  '02': 'fevereiro',
  '03': 'março',
  '04': 'abril',
  '05': 'maio',
  '06': 'junho',
  '07': 'julho',
  '08': 'agosto',
  '09': 'setembro',
  10: 'outubro',
  11: 'novembro',
  12: 'dezembro',
};

export default Vue.extend({
  name: 'HomeCards',

  data: () => ({
    formatter: format,
    dateFormatter: dateFormat,
    months,
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
});
</script>
