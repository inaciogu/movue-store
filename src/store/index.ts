import { IMovie } from '@/@types';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [] as IMovie[],
    cart: [] as IMovie[],
    drawer: false,
  },
  getters: {
    drawer: (state) => state.drawer,
  },
  mutations: {
    getMovies(state, payload) {
      state.movies = payload.map((movie: IMovie) => ({
        ...movie,
        price: 79.99,
      }));
    },
    searchMovies(state, payload) {
      state.movies = payload;
    },
    addToCart(state, payload) {
      state.cart = [...state.cart, payload];
    },
    clearCart(state) {
      state.cart = [];
    },
    removeItem(state, payload) {
      state.cart = state.cart.filter((item) => item.id !== payload);
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
  },
  modules: {
  },
});
