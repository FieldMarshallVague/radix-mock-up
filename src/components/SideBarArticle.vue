<template>
  <div @click="gotTo(content.linkUrl)" class="side-bar-article">
    <picture>
      <source srcset="/img/large-desktop/{{ content.imageName }}.png" media="(min-width: 1200px)">
      <source srcset="/img/desktop/{{ content.imageName }}.png" media="(min-width: 992px)">
      <source srcset="/img/tablet/{{ content.imageName }}.png" media="(min-width: 768px)">
      <img srcset="/img/mobile/{{ content.imageName }}.png" alt="{{ content.imageAltText }}">
    </picture>
    <h3>{{ article.title }}</h3>
    <div class="time">
      <img src="/img/shared/clock.svg" alt="clock icon" />
      <span>1m ago</span>
    </div>
  </div>
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


