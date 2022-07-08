<template>
  <v-app>
    <header-app />
    <sidebar-cart />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HeaderApp from './components/Header.vue';
import SidebarCart from './components/SidebarCart.vue';

export default Vue.extend({
  name: 'App',
  components: {
    HeaderApp,
    SidebarCart,
  },

  data: () => ({
    //
  }),
});
</script>
