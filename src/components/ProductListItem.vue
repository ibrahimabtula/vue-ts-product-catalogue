<script lang="ts">
import { defineComponent, ref, PropType } from "vue";
import { IProduct } from "../models/interfaces/product";
import Price from "@/components/Price.vue";

export default defineComponent({
  components: {
    Price,
  },
  props: {
    product: {
      required: true,
      type: Object as PropType<IProduct>,
    },
  },
  setup(props) {
    return {};
  },
});
</script>

<template>
  <div class="box">
    <div class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img :src="product.imgPath" alt="Image" />
        </figure>
      </div>
      <div class="media-content">
        <p><strong>Name:</strong> {{ product.name }}</p>
        <p>
          <strong>Price:</strong>
          <price :currency="product.currency" :price="product.price" />
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box {
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);
  color: #4a4a4a;
  display: block;
  cursor: pointer;
  height: 100%;

  .media {
    align-items: flex-start;
    display: flex;
    text-align: inherit;
    align-items: center;
    padding: 1rem;

    .media-left {
      margin-right: 1rem;
      flex-basis: auto;
      flex-grow: 0;
      flex-shrink: 0;

      img {
        max-width: 7rem;
      }
    }

    .media-content {
      flex-basis: auto;
      flex-grow: 1;
      flex-shrink: 1;
    }
  }
}

@media screen and (max-width: 450px) {
  .box .media {
    display: flex;
    flex-direction: column;
  }
}
</style>
