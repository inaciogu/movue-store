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
            style="height: 50%; width: 100%"
          >
            <v-card-title>{{ movie.title }}</v-card-title>
            <v-card-subtitle>
              {{ movie.vote_average.toFixed(1) }}
            </v-card-subtitle>
            <v-card-subtitle>
              {{ formatter(movie.price) }}
            </v-card-subtitle>
            <v-btn style="width: 100%" @click="addToCart(movie)" color="primary"
              >Adicionar</v-btn
            >
          </div>
        </v-card>
      </v-col>
    </div>
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
