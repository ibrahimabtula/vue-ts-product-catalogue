<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ICurrency } from "@/models/interfaces/currency";

export default defineComponent({
  props: {
    currency: {
      required: true,
      type: Object as PropType<ICurrency>,
    },
    price: {
      required: true,
      type: Number,
    },
  },
});
</script>

<template>
  <span>{{ currency.prefix }}{{ price }}{{ currency.suffix }}</span>
</template>
