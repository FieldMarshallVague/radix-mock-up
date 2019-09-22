<template>
  <div class="hero-image">
    <picture>
      <source :srcset="`/img/large-desktop/${ content.imageName }.png`" media="(min-width: 1200px)">
      <source :srcset="`/img/desktop/${ content.imageName }.png`" media="(min-width: 992px)">
      <source :srcset="`/img/tablet/${ content.imageName }.png`" media="(min-width: 768px)">
      <img :srcset="`/img/mobile/${ content.imageName }.png`" :alt="`${ content.imageAltText }`">
    </picture>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NewsArticle from "@/models/NewsArticle";

export default Vue.extend({
  props: { content: { 
      type: Object as () => NewsArticle 
    } 
  },  
});
</script>

<style scoped lang="scss">

.hero-image {
  max-width: 100%;
  position: relative;
  height: 600px;
}

.hero-image picture img {
  height: 600px;
  object-fit: cover;
  position: absolute;
  right: 0;
}

@media screen and (max-width: 1439px){
  .hero-image{
    height: 400px;
    min-width: 100vw;
    // border: 1px solid red;
    position: absolute;
    left: 0;
  }

  .hero-image picture img {
    height: 400px;
    width: 100%;
  }
}

</style>
