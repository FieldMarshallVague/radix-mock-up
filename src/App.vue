<template>
  <div id="app">
    <Navbar />
    <div class="router-view-container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "@/components/Navbar.vue"; // @ is an alias to /src
import Footer from "@/components/Footer.vue"; 

export default Vue.extend({
  name: "home",
  components: {
    Navbar,
    Footer
  }
});
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 100%;
}

.router-view-container {  
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

</style>
