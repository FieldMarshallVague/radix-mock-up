<template>
  <div class="home">
    <HeroImage v-bind:content="heroContent" />
    <Hero v-bind:content="heroContent" />
    <MoreNews v-bind:content="moreNewsContent" />
    <Trending v-bind:content="trendingContent" />
    <HappeningNow v-bind:content="happeningNowContent" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Hero from "@/components/Hero.vue"; // @ is an alias to /src
import HeroImage from "@/components/HeroImage.vue";
import MoreNews from "@/components/MoreNews.vue"; 
import Trending from '@/components/Trending.vue';
import HappeningNow from '@/components/HappeningNow.vue';

import HeroContent from "@/models/HeroContent";
import NewsArticle from '@/models/NewsArticle';

import heroContent from '@/data/hero-content';
import moreNewsContent from '@/data/more-news-content';
import trendingContent from '@/data/trending-content';
import happeningNowContent from '@/data/happening-now-content';


export default Vue.extend({
  name: "home",
  components: {
    Hero,
    HeroImage,
    MoreNews,
    Trending,
    HappeningNow,
  },
  data() {
    return {
      heroContent: heroContent,
      moreNewsContent: moreNewsContent,
      trendingContent: trendingContent,
      happeningNowContent: happeningNowContent,
    }
  }
});
</script>


<style scoped lang="scss">

.home{

  width: 1160px;

  margin-left:auto;
  margin-right:auto;

  display:grid;  
  align-content: start;
  grid-template-rows: auto;
  grid-template-columns: repeat(12, [col-start] 1fr [col-end]);
  grid-gap: 0 var(--grid-gap);
  grid-template-areas: 
    "hero hero hero hero hero hero hero hero hero hero more-news more-news"
    "trending trending trending trending trending trending trending trending trending trending trending trending"
    "happening-now happening-now happening-now happening-now happening-now happening-now happening-now happening-now happening-now happening-now happening-now happening-now";
  
}


.hero-image {
  // border: 1px solid red;
  grid-area: hero-start / hero-start / hero-end / 11;
  margin-right: 5rem;
  z-index: 1;
}
.hero {
  // border: 1px solid red;
  grid-area: hero-start / hero-start / hero-end / 8 ;
  z-index: 2;
}

@supports(-ms-high-contrast: none){
  /* todo: fix the ie grid problems  */
}

@supports(-ms-ime-align: auto){
  /* todo: fix the ie Edge grid problems  */
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


.side-bar {
  grid-area: side-bar;
}


@media screen and (max-width:1799px){
  .home{  
    grid-template-areas: 
      "hero hero hero hero hero hero hero hero more-news more-news more-news more-news"
      "trending trending trending trending trending trending trending trending trending trending trending trending"
      "happening-now happening-now happening-now happening-now happening-now happening-now happening-now happening-now happening-now happening-now happening-now happening-now";    
  }
  .hero-image {
    grid-area: hero-start / hero-start / hero-end / 9;
  }
  .hero {
    grid-area: hero-start / hero-start / hero-end / 7;
  }
}

@media screen and (max-width:1439px){
  .home{

    max-width: 608px;

    grid-template-columns: repeat(8, [col-start] 1fr [col-end]);
    grid-gap: 0 var(--grid-gap);
    grid-template-areas: 
      "hero hero hero hero hero hero hero hero"
      "more-news more-news more-news more-news more-news more-news more-news more-news"
      "trending trending trending trending trending trending trending trending"
      "happening-now happening-now happening-now happening-now happening-now happening-now happening-now happening-now";
  }
  .hero-image {
    grid-area: hero-start / hero-start / hero-end / hero-end;
  }
  .hero {
    grid-area: hero-start / hero-start / hero-end / hero-end;
  }
}

@media screen and (max-width:767px){
  .home{
    max-width: 80vw;

    grid-template-columns: repeat(4, [col-start] 1fr [col-end]);
    grid-gap: 0 var(--grid-gap);
    grid-template-areas: 
      "hero hero hero hero"
      "more-news more-news more-news more-news"
      "trending trending trending trending"
      "happening-now happening-now happening-now happening-now";
  }
  .hero-image {
    grid-area: hero-start / hero-start / hero-end / hero-end;
  }
  .hero {
    grid-area: hero-start / hero-start / hero-end / hero-end;
  }
}

</style>