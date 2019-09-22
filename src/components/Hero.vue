<template>
  <div class="hero">
    <div class="hero-content">
      <h2>{{ content.category }}</h2>
      <div class="details">
        <h3>{{ content.title }}</h3>
        <p>{{ content.description }}</p>
        <button @click="goTo(content.linkUrl)">Learn more</button>
      </div>
    </div>
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
  
  methods:{
    goTo(url: string){
      console.log(`going to url: ${url}`);
    }
  }
  
});
</script>


<style scoped lang="scss">

.hero {
  display:flex;
  align-content: center;
  flex-direction: column;

  h2 {
    text-transform: uppercase;
    border-bottom: 2px solid var(--font-color-image);
    font-size: 1.6rem;
    font-weight: 800;
    color: var(--font-color-image);
    padding-bottom: 2rem;
    margin-bottom: 2rem;

  }
}

.hero-content{
  
  margin:auto;
}

.hero-content .details{
  text-align: left;  
  color: var(--font-color-image);

  h3 {
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--font-color-image);
  }

  p{
    font-size: 1rem;
    text-align:left;
    color: var(--font-color-image);
  }

  button{
    text-transform:uppercase;
    background-color: var(--primary-brand-color);
    color: var(--font-color-image);
    font-size:1em;
    font-weight:600;
    border-radius:0.5rem;
    border: 0 none;
    padding: 1rem 2.5rem;
    margin-top:1rem;
  }
}
</style>
