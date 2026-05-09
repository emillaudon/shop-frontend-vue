<template>
  <div class="navbar">
    <div class="inner-navbar">
      <p>Search bar</p>
      <div class="center-navbar">
        <button>All Products</button>
        <button>My Orders</button>
      </div>
      <button>Cart</button>
    </div>
  </div>
</template>
<script></script>
<style scoped>
.navbar {
  background-color: green;
  height: 64px;
  width: 100%;
  position: sticky;
}

.inner-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.center-navbar {
  display: inline-flex;
  gap: 20px;
  justify-content: center;
}
</style>
