<template>
  <section class="news-articles more-news">
    <header>
      <h1>More News</h1>
      <div class="pagination">
        <img src="/img/shared/arrow-back.svg" @click="pageBack()" alt="arrow back" />
        <img src="/img/shared/arrow.svg" @click="pageForward()" alt="arrow forward" />
      </div>
    </header>
    <ul>
      <li v-bind:key="article.id" v-for="article in articles" @click="goTo(article.linkUrl)" class="more-news-article">
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
      this.articles = this.content.slice(0, 2);
    },

    pageForward(){
      this.articles = this.content.slice(2, 4);
    },

    pageBack(){
      this.articles = this.content.slice(0, 2);
    },
  },

});
</script>


<style scoped lang="scss">

.news-articles.more-news header{
  display:flex;
  height:4rem;
}

.more-news{
  margin-top: 4rem;
  margin-right: -100px;
}

.more-news header{
  margin: 0 0 2rem 0;
  padding: 0 0 1rem 0;
  border-bottom: 2px solid var(--border-color-alt);

  h1{
    font-size:1.2rem;
    margin: 0;
  }
}

.more-news-article{
  cursor:pointer;
  margin: 2rem 0;

  h2{
    text-transform: uppercase;
    color: var(--primary-brand-color);
    font-size:1rem;
    font-weight:800;
  }

  h3{
    color: var(--font-color);
    font-size:1rem;
    font-weight:800;
    margin-bottom: 0;
  }
  .description {
    color: var(--font-color-alt);
    font-size:1rem;
  }
  .time{
    margin: 0.5em 0;
    color: var(--font-color-alt);
    font-size:1rem;
  }
}


.more-news-article .time{
  display:flex;
  margin-top: 0.5rem;

  img {
    margin-right: 0.5rem;
  }
} 

</style>
