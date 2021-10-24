<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IMobileProduct } from "@/models/interfaces/productMobile";

export default defineComponent({
  props: {
    product: {
      required: true,
      type: Object as PropType<IMobileProduct>,
    },
  },
});
</script>

<template>
  <p><strong>CPU:</strong>{{ product.cpu }}</p>
  <p><strong>RAM:</strong>{{ product.ram }}GB</p>
  <p><strong>Storage:</strong>{{ product.storage }}GB</p>
  <p><strong>Battery:</strong>{{ product.battery }}MAh</p>
</template>
