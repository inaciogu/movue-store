import { ICartItem, IMovie } from '@/@types';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [] as IMovie[],
    cart: [] as ICartItem[],
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
      const movieAlreadyOnCart = state.cart.find((movie) => movie.id === payload.id);

      if (movieAlreadyOnCart) {
        movieAlreadyOnCart.quantity += 1;
      } else {
        state.cart = [...state.cart, {
          ...payload,
          quantity: 1,
        }];
      }
    },
    clearCart(state) {
      state.cart = [];
    },
    removeItem(state, payload) {
      const foundMovie = state.cart.find((movie) => movie.id === payload);

      if (foundMovie) {
        if (foundMovie.quantity > 1) {
          foundMovie.quantity -= 1;
        } else {
          state.cart = state.cart.filter((item) => item.id !== payload);
        }
      }
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
