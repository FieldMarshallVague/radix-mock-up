<template>
  <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
  </div>
</template>


<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Navbar",
  props: {
  }
});
</script>

<style scoped lang="scss">

</style>