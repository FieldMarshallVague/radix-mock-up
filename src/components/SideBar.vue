<template>
  <section class="side-bar">
    <ul>
      <li :key="article.id" v-for="(article, index) in articles" @click="goTo(article.linkUrl)" :class="`trending-article item-${index}`">
        <picture>
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

    getArticles(){
      // this.articles.concat(this.content);
      this.articles = this.content.slice(0, 5);
    },

    pageForward(){
      this.articles = this.content.slice(5, 10);
    },

    pageBack(){
      this.articles = this.content.slice(0, 5);
    },
  },

});
</script>

<style scoped lang="scss">
.trending{
  
}
header{
  display:flex;
  height:6rem;
}
h1{
  flex: 0 1 70%;
  font-size:1.6rem;
  text-transform: uppercase;
  font-weight:800;
  line-height: 6rem;
}
.pagination{
  flex: 0 1 30%;
  justify-content: flex-end;
  align-items: center;

  img{
    width:15px;
    height:15px;

    &:nth-child(1){
      opacity: 0.5;
      margin-right:2em;
    }
  }
}

ul {
  
  display:grid;  
  align-content: start;
  grid-template-rows: auto;
  grid-template-columns: repeat(12, 1fr [col-start]);
  grid-gap: var(--grid-gap);
  grid-template-areas: 
    "item-1 item-1 item-1 item-1 item-2 item-2 item-2 item-2 item-3 item-3 item-3 item-3";

  /* todo: make this dynamic */
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
    border-radius: 1rem;
    // border: 1px dashed red;
    height:350px;
    overflow: hidden;
  }
  
}

ul li picture{
  
  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
}

.snippet{
  padding: 2rem;

  h3 {
    color: var(--font-color);
  }

  span{
    color: var(--font-color-alt);
  }
}

.time{
  display:flex;

  img {
    margin-right: 0.5rem;
  }
} 

</style>


