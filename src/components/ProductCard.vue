<template>
  <div class="product-card">
    <div class="inner-card">
      <img
        class="image"
        :src="
          (product.imageUrl ?? '/assets/product-placeholder.png') +
          '?v=' +
          product.id +
          '-1'
        "
        :alt="product.name"
      />
      <p>{{ product.name }}</p>
      <p>${{ product.price }}</p>
      <button class="buy-button">Buy</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.product-card {
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 320px;
}
.inner-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  line-height: 0;
}
.image {
  width: 100%;
  height: 220px;
  object-fit: cover;
}
.buy-button {
  margin-top: auto;
}
</style>
