<template>
  <section class="news-articles trending articles">
    <header>
      <h1>Trending</h1>
      <div class="pagination">
        <img src="/img/shared/arrow-back.svg" @click="pageBack()" alt="arrow back" />
        <img src="/img/shared/arrow.svg" @click="pageForward()" alt="arrow forward" />
      </div>
    </header>
    <ul>
      <li :key="article.id" v-for="(article, index) in articles" @click="goTo(article.linkUrl)" :class="`trending-article item-${index}`">
        <picture>
          <!-- <source :srcset="`/img/large-desktop/${ article.imageName }.png`" media="(min-width: 1200px)"> -->
          <!-- <source :srcset="`/img/desktop/${ article.imageName }.png`" media="(min-width: 992px)"> -->
          <source :srcset="`/img/tablet/${ article.imageName }.png`" media="(min-width: 768px)">
          <img :srcset="`/img/mobile/${ article.imageName }.png`" :alt="`${ article.imageAltText }`">
        </picture>
        <div class="snippet">
          <h3>{{ article.title }}</h3>
          <span>{{ article.description }}</span>
          <div class="time">
            <img src="/img/shared/clock.svg" alt="clock icon" />
            <span>1m ago</span>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import NewsArticle from "@/models/NewsArticle";

export default Vue.extend({
  props: { content: { 
      type: Array as () => NewsArticle[]
    } 
  },

  data(){
    return {
      articles : [] as NewsArticle[],
    }
  },

  created(){
    this.getArticles();
  },

  methods:{
    goTo(url: string){
      console.log(`going to url: ${url}`);
    },

    getArticles(){
      // this.articles.concat(this.content);
      this.articles = this.content.slice(0, 3);
    },

    pageForward(){
      this.articles = this.content.slice(3, 6);
    },

    pageBack(){
      this.articles = this.content.slice(0, 3);
    },
  },

});
</script>

<style scoped lang="scss">

.trending ul {
  
  display:grid;  
  align-content: start;
  grid-template-rows: auto;
  grid-template-columns: repeat(12, 1fr [col-start]);
  grid-gap: var(--grid-gap);
  grid-template-areas: 
    "item-1 item-1 item-1 item-1 item-2 item-2 item-2 item-2 item-3 item-3 item-3 item-3";

  /* todo: make this dynamic - prob. should  have gone with list to start with */
  li:nth-child(1){
    grid-area: item-1;
  }
  
  li:nth-child(2){
    grid-area: item-2;
  }
  
  li:nth-child(3){
    grid-area: item-3;
  }

  li {
    border-radius: 0.5rem;
    height:350px;
    overflow: hidden;
  }
  
}

@media screen and (max-width:1439px){
  .trending ul{
    grid-template-columns: repeat(8,  [col-start] 1fr  [col-end]);
    grid-gap: var(--grid-gap);
    grid-template-areas: 
      "item-1 item-1 item-1 item-1 item-2 item-2 item-2 item-2";
  }

  .item-2{
    display:none;
  }
}

@media screen and (max-width:767px){
  .trending ul{
    grid-template-columns: repeat(4,  [col-start] 1fr  [col-end]);
    grid-gap: var(--grid-gap);
    grid-template-areas: 
      "item-1 item-1 item-1 item-1"
      "item-2 item-2 item-2 item-2";
  }

  .item-2{
    display:none;
  }
}

.trending ul li picture{
  
  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
}

.snippet{
  padding: 2rem;

  h3 {
    font-size: 1rem;
    font-weight: 800;
    color: var(--font-color);
    transition: all calc(var(--hover-transition-speed) * var(--slow-transition-multiplier)) ease-in-out;
  }

  span{
    color: var(--font-color-alt);
    transition: all calc(var(--hover-transition-speed) * var(--slow-transition-multiplier)) ease-in-out;
  }
}

.time{
  display:flex;
  margin-top: 1em;

  img {
    margin-right: 0.5rem;
  }
} 

.trending-article{
  cursor:pointer;
}
</style>


