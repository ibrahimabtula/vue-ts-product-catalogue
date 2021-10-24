<script lang="ts">
import ProductList from "./components/ProductList.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    "product-list": ProductList,
  }
});
</script>

<template>
  <product-list/>
</template>

