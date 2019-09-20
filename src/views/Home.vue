<template>
  <div class="home">
    <Hero v-bind:content="heroContent" />
    <MoreNews v-bind:content="moreNewsContent" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Hero from "@/components/Hero.vue"; // @ is an alias to /src
import MoreNews from "@/components/MoreNews.vue"; 
import HeroContent from "@/models/HeroContent";
import NewsArticle from '@/models/NewsArticle';

import heroContent from '@/data/hero-content';
import moreNewsContent from '@/data/more-news-content';



export default Vue.extend({
  name: "home",
  components: {
    Hero,
    MoreNews
  },
  data() {
    return {
      heroContent: heroContent,
      moreNewsContent: moreNewsContent
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
  grid-gap:10px;  
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
  grid-column-start: col-start 10;
  grid-column-end: col-start 12;
}

.trending {
  grid-area: trending;
}

.happening-now {
  grid-area: happening-now;
}


</style>

