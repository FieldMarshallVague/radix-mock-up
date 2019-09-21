<template>
  <div class="home">
    <Hero v-bind:content="heroContent" />
    <MoreNews v-bind:content="moreNewsContent" />
    <Trending v-bind:content="trendingContent" />
    <HappeningNow v-bind:content="happeningNowContent" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Hero from "@/components/Hero.vue"; // @ is an alias to /src
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
  grid-template-columns: repeat(12, 1fr [col-start]);
  grid-gap: var(--grid-gap);
  grid-template-areas: 
    "hero hero hero hero hero hero hero more-news more-news more-news more-news more-news"
    "trending trending trending trending trending trending trending trending trending trending trending trending"
    "happening-now happening-now happening-now happening-now happening-now happening-now happening-now happening-now happening-now happening-now happening-now happening-now";
  
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

</style>

