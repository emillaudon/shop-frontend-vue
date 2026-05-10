<template>
  <section>
    <TopBar />
    <NavBar />
    <div class="main-area">
      <RouterView />
      <CartSideBar />
    </div>
  </section>
</template>

<script>
import CartSideBar from "@/components/layout/CartSideBar.vue";
import NavBar from "@/components/layout/NavBar.vue";
import TopBar from "@/components/layout/TopBar.vue";
import { RouterView } from "vue-router";

export default {
  components: {
    TopBar,
    NavBar,
    RouterView,
    CartSideBar,
  },
};
</script>
<style scoped>
.main-area {
  display: flex;
  align-items: flex-start;
  min-height: calc(100vh - 128px);
}
</style>
