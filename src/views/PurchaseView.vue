<template>
  <purchase-form />
</template>

<script lang="ts">
import Vue from 'vue';
import PurchaseForm from '../components/PurchaseForm.vue';

export default Vue.extend({
  name: 'PurchasePage',

  components: {
    PurchaseForm,
  },
});
</script>
