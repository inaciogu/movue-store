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
            <v-list-item-content>
              <div class="d-flex justify-space-between">
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
                <v-btn icon @click="removeItem(item.id)">
                  <v-icon>mdi-delete-outline</v-icon>
                </v-btn>
              </div>
            </v-list-item-content>
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
