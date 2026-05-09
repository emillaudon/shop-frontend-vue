<template>
  <div class="navbar">
    <div class="inner-navbar">
      <p>Search bar</p>
      <nav class="center-navbar">
        <RouterLink to="/" class="nav-button">All Products</RouterLink>
        <RouterLink to="/orders" class="nav-button">My Orders</RouterLink>
      </nav>
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
