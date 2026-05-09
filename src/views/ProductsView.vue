<template>
  <section class="products">
    <div class="products-grid">
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
    </div>
  </section>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  components: {
    ProductCard,
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
