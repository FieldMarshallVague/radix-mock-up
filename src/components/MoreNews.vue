<template>
  <section class="more-news">
    <header>
      <h1>More News</h1>
      <div class="pagination">
        <img src="/img/shared/arrow-back.svg" @click="pageBack()" alt="arrow back" />
        <img src="/img/shared/arrow.svg" @click="pageForward()" alt="arrow forward" />
      </div>
    </header>
    <ul>
      <li v-bind:key="article.id" v-for="article in articles" class="more-news-article">
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

</style>
