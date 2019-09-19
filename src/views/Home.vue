<template>
  <div class="home">
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


<style scoped lang="scss">

.home{
  width: 800px;
  margin-left:auto;
  margin-right:auto;

  display:grid;  
  align-content: start;
  grid-template-rows: auto;
  grid-template-columns: repeat(12, 1fr [col-start]);
  grid-gap:30px;  
  // grid-template-areas: "hero hero hero hero hero hero hero hero hero hero . .";
  
  @media screen and (max-width: 992px){
    // grid-template-columns: auto;
    // grid-template-rows: 80px 100px 80px;
    // grid-template-areas: 
    //   "hero . ."
    //   "."
    //   ".";
  }
}

.hero {
  border: 1px solid red;
  grid-area: hero;
  grid-column-start: col-start 1;
  grid-column-end: col-start 10;
}

.more-news {
  grid-area: more-news;
}

.trending {
  grid-area: trending;
}

.happening-now {
  grid-area: happening-now;
}


</style>

