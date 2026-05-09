<template>
  <div class="cart-card">
    <div class="inner-cart-card">
      <div class="left-card">
        <p>NAME</p>
        <div class="image">IMG</div>
      </div>
      <div class="right-card">
        <p>PRICE</p>
        <div class="qty">
          <button>-</button>
          {{ 1 }}
          <button>+</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.inner-cart-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  margin-bottom: 10px;
  padding: 12px 5px;
  width: 100%;
  box-sizing: border-box;
}
.image {
  background-color: aqua;
  height: 80px;
  width: 80px;
}
</style>
