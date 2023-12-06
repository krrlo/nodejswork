<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./layouts/Header.vue";
import Footer from "./layouts/footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
