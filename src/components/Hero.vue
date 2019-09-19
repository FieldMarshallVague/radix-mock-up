<template>
  <div class="hero">
    <h1>{{ content.title }}</h1>
    <h2>{{ content.subTitle}}</h2>
    <div class="description">
      {{ content.description }} 
      <button @click="goTo(content.linkUrl)">Learn more</button>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HeroContent from "@/components/HeroContent";

export default Vue.extend({
  props: { content: { 
      type: Object as () => HeroContent 
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
