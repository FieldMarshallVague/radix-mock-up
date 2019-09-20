<template>
  <li class="more-news-article">
    <h2>{{ article.category }}</h2>
    <h3>{{ article.title }}</h3>
    <div class="description">
      {{ article.description }} 
    </div>
    <div class="time">
      <img src="/img/shared/clock.svg" alt="clock icon" />
      <span>1m ago</span>
    </div>
  </li>
</template>

<script lang="ts">
import Vue from "vue";
import NewsArticle from "@/components/NewsArticle";

export default Vue.extend({
  props: { content: { 
      type: Object as () => NewsArticle
    } 
  },

  methods:{
    goTo(url: string){
      console.log(`going to url: ${url}`);
    }
  }  
});
</script>

<style scoped lang="scss">

</style>


