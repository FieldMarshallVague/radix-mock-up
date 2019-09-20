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
      <!-- <MoreNewsArticle v-bind:key="article.id" v-for="article in content" /> -->
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
import NewsArticle from "@/components/NewsArticle";
// import MoreNewsArticle from "@/components/MoreNewsArticle";

export default Vue.extend({
  props: { content: { 
      type: Array as () => NewsArticle[]
    } 
  },

  data(){
    return {
      articles: this.content
    }
  },

  components: {
    // MoreNewsArticle
  },

  methods:{
    goTo(url: string){
      console.log(`going to url: ${url}`);
    },
    pageForward(){

    },
    pageBack(){

    }
  }  
});
</script>


<style scoped lang="scss">

</style>
