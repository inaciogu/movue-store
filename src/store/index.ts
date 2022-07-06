import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    cart: [],
    drawer: false,
  },
  getters: {
    drawer: (state) => state.drawer,
  },
  mutations: {
    getMovies(state, payload) {
      state.movies = payload;
    },
    searchMovies(state, payload) {
      state.movies = payload;
    },
    toggleDrawer(state, payload) {
      state.drawer = payload;
    },
  },
  actions: {
    getMovies(context, payload) {
      context.commit('getMovies', payload);
    },
    searchMovies(context, payload) {
      context.commit('searchMovies', payload);
    },
    toggleDrawer(context, payload) {
      context.commit('toggleDrawer', payload);
    },
  },
  modules: {
  },
});
