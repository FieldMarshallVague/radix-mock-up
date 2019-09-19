<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Hero v-bind:content="heroContent" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Hero from "@/components/Hero.vue"; // @ is an alias to /src
import HeroContent from "@/components/HeroContent";

const heroContent: HeroContent = {
   title: "World News",
   subTitle: "Amazing places in America to visit",
   description: "For some reason — this country, this city, this neighborhood, this particular street —  is the place you are living a majority of your life in.",
   linkUrl: "https://www.example/com"
}

export default Vue.extend({
  name: "home",
  components: {
    Hero
  },
  data() {
    return {
      heroContent: heroContent
    }
  }
});
</script>
