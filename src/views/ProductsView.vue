<template>
  <section class="products">
    <div class="products-grid">
      <ProductCard
        v-for="product in productStore.products"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import { useProductStore } from "@/stores/productStore";

export default {
  components: {
    ProductCard,
  },

  setup() {
    const productStore = useProductStore();

    return {
      productStore,
    };
  },

  async mounted() {
    await this.productStore.fetchProducts();
  },
};
</script>

<style scoped>
.products {
  width: 100%;
  flex: 1;
  align-items: stretch;
  display: flex;
}
.products-grid {
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: start;
  padding: 24px;
  grid-template-columns: repeat(auto-fit, 220px);
  grid-template-rows: repeat(auto-fit, 320px);
  gap: 24px;
}
</style>
