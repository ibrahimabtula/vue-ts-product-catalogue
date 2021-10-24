<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IFashionProduct } from "@/models/interfaces/productFashion";

export default defineComponent({
  props: {
    product: {
      required: true,
      type: Object as PropType<IFashionProduct>,
    },
  },
});
</script>

<template>
  <p><strong>Color:</strong>{{ product.color }}</p>
  <p><strong>Size:</strong>{{ product.size }}</p>
</template>
