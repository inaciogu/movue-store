import { ICartItem, IMovie } from '@/@types';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [] as IMovie[],
    cart: [] as ICartItem[],
    totalPrice: 0,
    drawer: false,
  },
  getters: {
    drawer: (state) => state.drawer,
    totalPrice: (state) => {
      const finalPrice = state.cart.reduce((acc, current) => (
        acc + (current.price * current.quantity)
      ), 0);
      return finalPrice;
    },
    totalQuantity: (state) => {
      const totalQuantity = state.cart.reduce((acc, current) => (
        acc + current.quantity
      ), 0);
      return totalQuantity;
    },
  },
  mutations: {
    getMovies(state, payload) {
      state.movies = payload.map((movie: IMovie) => ({
        ...movie,
        price: 79.99,
      }));
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
  },
  modules: {
  },
});
