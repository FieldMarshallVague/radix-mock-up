<template>
  <section class="happening-now">
    <header>
      <h1>Happening Now</h1>
      <div class="pagination">
        <img src="/img/shared/arrow-back.svg" @click="pageBack()" alt="arrow back" />
        <img src="/img/shared/arrow.svg" @click="pageForward()" alt="arrow forward" />
      </div>
    </header>
    <div class="articles">
      <ul class="main">
        <li :key="article.id" v-for="(article, index) in mainArticles" @click="goTo(article.linkUrl)" :class="`trending-article item-${index}`">
          <picture>
            <source :srcset="`/img/large-desktop/${ article.imageName }.png`" media="(min-width: 1200px)">
            <source :srcset="`/img/desktop/${ article.imageName }.png`" media="(min-width: 992px)">
            <source :srcset="`/img/tablet/${ article.imageName }.png`" media="(min-width: 768px)">
            <img :srcset="`/img/mobile/${ article.imageName }.png`" :alt="`${ article.imageAltText }`">
          </picture>
          <div class="snippet">
            <h2>{{ article.category }}</h2>
            <h3>{{ article.title }}</h3>
            <span>{{ article.description }}</span>
            <div class="time">
              <img src="/img/shared/clock.svg" alt="clock icon" />
              <span>1m ago</span>
            </div>
          </div>
        </li>
      </ul>
      <ul class="side-bar">
        <li :key="article.id" v-for="(article, index) in sideArticles" @click="goTo(article.linkUrl)" :class="`trending-article item-${index}`">
          <picture>
            <source :srcset="`/img/tablet/${ article.imageName }.png`" media="(min-width: 768px)">
            <img :srcset="`/img/mobile/${ article.imageName }.png`" :alt="`${ article.imageAltText }`">
          </picture>
          <div class="snippet">
            <h3>{{ article.title }}</h3>
            <div class="time">
              <img src="/img/shared/clock.svg" alt="clock icon" />
              <span>1m ago</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
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
      mainArticles : [] as NewsArticle[],
      sideArticles : [] as NewsArticle[],
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
      this.mainArticles = this.content.slice(0, 2);
      this.sideArticles = this.content.slice(2, 5);
    },

    pageForward(){
      this.mainArticles = this.content.slice(5, 7);
      this.sideArticles = this.content.slice(7, 10);
    },

    pageBack(){
      this.mainArticles = this.content.slice(0, 2);
      this.sideArticles = this.content.slice(2, 5);
    },
  },

});
</script>



<style scoped lang="scss">
.happening-now{
  
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

.articles {
  
  display:grid;  
  align-content: start;
  grid-template-rows: auto;
  grid-template-columns: repeat(12,  [col-start] 1fr [col-end]);
  grid-gap: var(--grid-gap);
    
}

ul li {
  border-radius: 0.5rem;
  overflow: hidden;
}

ul.main{
  grid-column-start: col-start 1;
  grid-column-end: col-start 9;    
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  li{
    position: relative;
  }
}

ul.main li .snippet{
  position: absolute;
  z-index: 999;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

ul.side-bar{
  grid-column-start: col-start 9;
  grid-column-end: col-end 12;
}

ul.main li picture img, ul.side-bar li picture img{
  height: 430px;
}

ul.main li picture{
  
  img {
    width: 100%;
    height: 430px;
    object-fit: cover;
  }
}
ul.side-bar li picture{
  
  img {
    width: 100%;
    height: 210px;
    object-fit: cover;
  }
}

.snippet{
  padding: 2rem;

  h3 {
    font-size: 1rem;
    font-weight: 800;
    color: var(--font-color);
  }

  span{
    color: var(--font-color-alt);
  }
}

.side-bar .snippet{
  padding: 2rem 0;
}

.time{
  display:flex;

  img {
    margin-right: 0.5rem;
  }
} 

</style>


