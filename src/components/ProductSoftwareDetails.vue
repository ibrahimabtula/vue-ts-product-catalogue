<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ISoftwareProduct } from "@/models/interfaces/productSoftware";

export default defineComponent({
  props: {
    product: {
      required: true,
      type: Object as PropType<ISoftwareProduct>,
    },
  },
});
</script>

<template>
  <p><strong>Version:</strong>{{ product.version }}</p>
  <p><strong>License:</strong>{{ product.license }}</p>
  <p><strong>Author:</strong>{{ product.author }}</p>
</template>
