<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { IProduct } from "../models/interfaces/product";
import Price from "@/components/Price.vue";
import ProductMobileDetails from "@/components/ProductMobileDetails.vue";
import ProductFashionDetails from "@/components/ProductFashionDetails.vue";
import ProductSoftwareDetails from "@/components/ProductSoftwareDetails.vue";

export default defineComponent({
  components: {
    Price,
    ProductMobileDetails,
    ProductFashionDetails,
    ProductSoftwareDetails
  },
  props: {
    product: {
      required: true,
      type: Object as PropType<IProduct>,
    },
  },
  setup(props) {
    const component = ref({
      is: `product-${props.product.category.code}-details`,
      product: props.product,
    });
    return {
      component,
    };
  },
});
</script>

<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="product.imgPath" alt="Image" />
      </figure>
    </div>
    <div class="card-content">
      <div>
        <div class="product-details">
          <p><strong>Name:</strong>{{ product.name }}</p>
          <p>
            <strong>Price:</strong><price :currency="product.currency" :price="product.price" />
          </p>
          <component :is="component.is" :product="product" />
        </div>
        <div class="content">
          <p><strong>Description:</strong></p>
          {{ product.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0.5em 1em -0.125em hsl(0deg 0% 4% / 10%), 0 0 0 1px hsl(0deg 0% 4% / 2%);
  color: #4a4a4a;
  max-width: 100%;
  position: relative;

  .card-content {
    padding: 1.5rem;
    padding-bottom: 3rem;
    .product-details {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
      grid-auto-rows: 1fr;
      align-items: center;
      grid-gap: 0.5rem;
      padding: 0.5rem;
      :deep(p) {
        height: 100%;
        background-color: #dbdbdb;
        height: 1rem;
      }
    }
  }
  .card-image {
    display: flex;
    justify-content: center;
    img {
      flex: 1;
      width: 100%;
      height: auto;
      max-height: 36rem;
    }
  }
}
</style>
