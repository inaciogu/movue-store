import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    cart: [],
  },
  getters: {
  },
  mutations: {
    getMovies(state, payload) {
      state.movies = payload;
    },
    searchMovies(state, payload) {
      state.movies = payload;
    },
  },
  actions: {
    getMovies(context, payload) {
      context.commit('getMovies', payload);
    },
    searchMovies(context, payload) {
      context.commit('searchMovies', payload);
    },
  },
  modules: {
  },
});
