<template>
  <section>
    <Topbar />
    <NavBar />
  </section>
</template>

<script>
import NavBar from "@/components/layout/NavBar.vue";
import Topbar from "@/components/layout/TopBar.vue";

export default {
  components: {
    Topbar,
    NavBar,
  },
};
</script>
