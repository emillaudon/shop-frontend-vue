<template>
  <section>
    <Topbar />
    <NavBar />
    <RouterView />
  </section>
</template>

<script>
import NavBar from "@/components/layout/NavBar.vue";
import Topbar from "@/components/layout/TopBar.vue";
import { RouterView } from "vue-router";

export default {
  components: {
    Topbar,
    NavBar,
    RouterView,
  },
};
</script>
