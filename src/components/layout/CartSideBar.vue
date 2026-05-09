<template>
  <div class="cart-sidebar">
    <h1>Cart</h1>
    <CartCard />
    <CartCard />
    <CartCard />
  </div>
</template>
<script>
import CartCard from "../CartCard.vue";
export default {
  components: {
    CartCard,
  },
};
</script>
<style scoped>
.cart-sidebar {
  right: 0;
  width: 320px;
  min-height: calc(100vh - 128px);
  background-color: white;
  border-left: 1px solid #ddd;
  padding: 16px;
  display: flex;
  flex-direction: column;
}
</style>
