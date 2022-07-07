<template>
  <v-app>
    <header-app />
    <v-navigation-drawer bottom width="400" fixed temporary v-model="drawer">
      <v-card>
        <div class="d-flex justify-space-between">
          <v-card-title> Meu Carrinho </v-card-title>
          <v-card-actions>
            <v-btn outlined @click="clearCart">Esvaziar carrinho</v-btn>
          </v-card-actions>
        </div>
        <v-list>
          <v-list-item :key="item.id" v-for="item in cart">
            <v-list-item-group
              style="width: 100%"
              class="d-flex justify-space-between align-center"
            >
              <v-list-item-title style="max-width: 50%; bread-word: wrap">
                {{ item.title }}
              </v-list-item-title>
              {{ item.quantity }}
              <v-btn icon @click="removeItem(item.id)">
                <v-icon>mdi-delete-outline</v-icon>
              </v-btn>
            </v-list-item-group>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import HeaderApp from './components/Header.vue';

export default Vue.extend({
  name: 'App',
  components: {
    HeaderApp,
  },

  data: () => ({
    //
  }),
  computed: {
    ...mapGetters({
      drawerFromStore: 'drawer',
      storedCart: 'cart',
    }),
    cart: {
      get() {
        return this.$store.state.cart;
      },
    },
    drawer: {
      get() {
        return this.$store.getters.drawer;
      },
      set(newValue) {
        return this.$store.commit('toggleDrawer', newValue);
      },
    },
  },
  methods: {
    clearCart() {
      this.$store.commit('clearCart');
    },
    removeItem(id: number) {
      this.$store.commit('removeItem', id);
    },
  },
});
</script>
