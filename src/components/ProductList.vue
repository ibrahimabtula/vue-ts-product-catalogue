<script lang="ts">
import { defineComponent, ref, computed, createApp, createRenderer } from "vue";
import { IProduct } from "@/models/interfaces/product";
import { ProductsQuery } from "@/api/products";
import ProductListItem from "@/components/ProductListItem.vue";
import Loader from "@/components/Loader.vue";
import Modal from "@/components/Modal.vue";
import ProductDetails from "@/components/ProductDetails.vue";

export default defineComponent({
  components: {
    ProductListItem,
    ProductDetails,
    Loader,
    Modal
  },
  setup(props, ctx) {
    const root = ref({} as HTMLElement);
    const showModal = ref(false);
    const isLoading = ref(true);
    const isLoadingMore = ref(false);
    const limit = ref(4);
    const total = ref(0);
    const page = ref(0);
    const products = ref([] as IProduct[]);
    const hasMore = computed(() => products.value.length < total.value);

    const productsQuery = new ProductsQuery();
    const loadMore = async () => {
      try {
        isLoadingMore.value = true;
        const result = await productsQuery.list({
          limit: limit.value,
          offset: page.value * limit.value,
        });

        products.value = [...products.value, ...result.data];
        total.value = result.total;
      } finally {
        isLoading.value = false;
        isLoadingMore.value = false;
        page.value++;
      }
    };
    loadMore();

    const openDetails = (product: IProduct) => {
      const modal = createApp(Modal, {
        isActive: true,
        component: ProductDetails,
        props: {
          product,
        },
        onClose: () => {
          console.log("Close");
          modal.unmount();
          root.value.removeChild(wrapper);
        },
      });
      const wrapper = document.createElement("div");
      modal.mount(wrapper);
      root.value.appendChild(wrapper);
    };

    return {
      root,
      isLoading,
      isLoadingMore,
      showModal,
      hasMore,
      products,
      loadMore,
      openDetails,
    };
  },
});
</script>

<template>
  <loader v-if="isLoading" />
  <div v-else ref="root">
    <div class="columns">
      <div v-for="product in products" :key="product.id" class="column">
        <product-list-item :product="product" @click="openDetails(product)" />
      </div>
    </div>
    <p class="load-more" v-if="hasMore">
      <button @click="loadMore" class="button-load-more" :disabled="isLoadingMore">
        <i v-if="isLoadingMore" class="fa fa-spinner fa-spin"></i>
        Load more
      </button>
    </p>
    <!-- <modal :is-active="showModal" @close="showModal=false">
      <product-details />
    </modal> -->
  </div>
</template>

<style scoped lang="scss">
.load-more {
  display: flex;
  justify-content: center;
  .button-load-more {
    // border-radius: 9999px;
    background-color: #fff;
    border-color: #dbdbdb;
    border-width: 1px;
    color: #363636;
    cursor: pointer;
    justify-content: center;
    padding-bottom: calc(0.5em - 1px);
    padding-left: 1em;
    padding-right: 1em;
    padding-top: calc(0.5em - 1px);
    text-align: center;
    white-space: nowrap;
    font-size: 1rem;
    user-select: none;
    appearance: none;
    border-image-source: none;
    border-image-width: 1;
  }
}
.columns {
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  align-items: center;
  grid-gap: 0.5rem;

  .column {
    height: 100%;
    display: block;
  }
}

@media (max-width: 768px) {
  .columns {
    grid-template-columns: repeat(1, minmax(20rem, 1fr));
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .columns {
    grid-template-columns: repeat(2, minmax(20rem, 1fr));
  }
}

@media (min-width: 1024px) and (max-width: 1408px) {
  .columns {
    grid-template-columns: repeat(3, minmax(20rem, 1fr));
  }
}
</style>
