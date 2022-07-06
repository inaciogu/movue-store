<template>
  <v-app>
    <header-app />
    <v-navigation-drawer temporary v-model="drawer">oi</v-navigation-drawer>
    <v-main>
      <router-view/>
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
    }),
    drawer: {
      get() {
        return this.$store.getters.drawer;
      },
      set(newValue) {
        return this.$store.dispatch('toggleDrawer', newValue);
      },
    },
  },
});
</script>
