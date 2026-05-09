<template>
  <div class="product-card">
    <div class="inner-card">
      <div class="image">
        <p>Image</p>
      </div>
      <p>Item Name</p>
      <p>Item Price</p>
      <button class="buy-button">Buy</button>
    </div>
  </div>
</template>
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
  background-color: aquamarine;
  width: 100%;
  height: 220px;
}
.buy-button {
  margin-top: auto;
}
</style>
