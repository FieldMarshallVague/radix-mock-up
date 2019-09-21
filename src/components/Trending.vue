<template>
  <section class="trending">
    <header>
      <h1>Trending</h1>
      <div class="pagination">
        <img src="/img/shared/arrow-back.svg" @click="pageBack()" alt="arrow back" />
        <img src="/img/shared/arrow.svg" @click="pageForward()" alt="arrow forward" />
      </div>
    </header>
    <ul>
      <li v-bind:key="article.id" v-for="article in articles" @click="goTo(article.linkUrl)" class="trending-article"> 
        <picture>
          <!-- <source :srcset="`/img/large-desktop/${ article.imageName }.png`" media="(min-width: 1200px)"> -->
          <!-- <source :srcset="`/img/desktop/${ article.imageName }.png`" media="(min-width: 992px)"> -->
          <source :srcset="`/img/tablet/${ article.imageName }.png`" media="(min-width: 768px)">
          <img :srcset="`/img/mobile/${ article.imageName }.png`" :alt="`${ article.imageAltText }`">
        </picture>
        <h3>{{ article.title }}</h3>
        <span>{{ article.description }}</span>
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
.trending{
  
}
header{
  display:flex;
}
h1{
  flex: 0 1 70%;
  font-size:1.6rem;
  text-transform: uppercase;
  font-weight:800;
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
  display:flex;
  justify-content: space-between;

  li{
    flex-grow:1;
  }
  
}

ul li picture img {
  max-width: 100%;
}

</style>


