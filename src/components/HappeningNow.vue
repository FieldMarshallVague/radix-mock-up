<template>
  <section class="news-articles happening-now">
    <header>
      <h1>Happening Now</h1>
      <div class="pagination">
        <img src="/img/shared/arrow-back.svg" @click="pageBack()" alt="arrow back" />
        <img src="/img/shared/arrow.svg" @click="pageForward()" alt="arrow forward" />
      </div>
    </header>
    <div class="articles">
      <ul class="main">
        <li :key="article.id" v-for="(article, index) in mainArticles" @click="goTo(article.linkUrl)" :class="`happening-now-article item-${index}`">
          <picture>
            <source :srcset="`/img/large-desktop/${ article.imageName }.png`" media="(min-width: 1200px)">
            <source :srcset="`/img/desktop/${ article.imageName }.png`" media="(min-width: 992px)">
            <source :srcset="`/img/tablet/${ article.imageName }.png`" media="(min-width: 768px)">
            <img :srcset="`/img/mobile/${ article.imageName }.png`" :alt="`${ article.imageAltText }`">
          </picture>
          <div class="snippet">
            <h2>{{ article.category }}</h2>
            <div class="details">
              <h3>{{ article.title }}</h3>
              <span>{{ article.description }}</span>
              <div class="time">
                <img src="/img/shared/clock.svg" alt="clock icon" />
                <span>1m ago</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <ul class="side-bar">
        <li :key="article.id" v-for="(article, index) in sideArticles" @click="goTo(article.linkUrl)" :class="`happening-now-article item-${index}`">
          <picture>
            <source :srcset="`/img/tablet/${ article.imageName }.png`" media="(min-width: 768px)">
            <img :srcset="`/img/mobile/${ article.imageName }.png`" :alt="`${ article.imageAltText }`">
          </picture>
          <div class="snippet">
            <h3>{{ article.title }}</h3>
            <div class="time">
              <img src="/img/shared/clock.svg" alt="clock icon" />
              <span>1m ago by <a href="#">{{ article.author }}</a></span>
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

section.happening-now{
  margin-bottom:5rem;
}

.articles {
  
  display:grid;  
  align-content: start;
  grid-template-rows: auto;
  grid-template-columns: repeat(12,  [col-start] 1fr [col-end]);
  grid-gap: var(--grid-gap);
    
}

.articles ul li {
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
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

ul.main li .snippet {
  position: absolute;
  z-index: 999;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  color: var(--font-color-image);

  h2 {
    font-size: 1.6rem;
    font-weight: 800;
    color: var(--font-color-image);
  }
  h3 {
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--font-color-image);
  }

  span{
    font-size: 1rem;
    color: var(--font-color-image);
  }
}

ul.side-bar{
  grid-column-start: col-start 9;
  grid-column-end: col-end 12;
}

ul.main li picture img, ul.side-bar li picture img{
  border-radius: 0.5rem;
  height: 430px;
  width: 100%;
  object-fit: cover;
}

ul.main li picture img {
  height: 430px;
}

ul.side-bar li picture img {
  height: 210px;
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
  padding: 1rem 0 2rem 0;
}

.side-bar .snippet a {
  text-decoration: underline;
  &:link{ color: var(--font-color-alt); }
  &:visited{ color: var(--font-color-alt); }
  &:hover{ 
    color: var(--primary-brand-color); 
    transition: var(--hover-transition-speed);
  }
  &:active{ color: var(--font-color-alt); }
}

.happening-now-article .time{
  display:flex;
  margin-top: 2em;

  img {
    margin-right: 0.5rem;
  }
} 

.side-bar .happening-now-article .time{
  margin-top: 1em;
} 

@media screen and (max-width:1439px){
  .articles{
    max-width: 608px;

    grid-template-columns: repeat(8, [col-start] 1fr [col-end]);
    grid-gap: 0 var(--grid-gap);
  }
  
  ul.main {
    grid-column-start: col-start 1;
    grid-column-end: col-end 8;
    margin-bottom: 0;

    li{
      margin-bottom: var(--grid-gap);
    }
  }
  
  ul.side-bar {
    grid-column-start: col-start 1;
    grid-column-end: col-end 8;

    display:grid;
    align-content: start;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-gap: var(--grid-gap);
    grid-template-areas: "left right";

    li.item-0 {
      grid-area: left;
    }
    
    li.item-1 {
      grid-area: right;
    }
    
    .item-2{
      display:none;
    }
  }

}

@media screen and (max-width:767px){
  
  ul.side-bar {

    border-top:2px solid var(--border-color-alt);
    padding-top:3em;
    margin-top:1em;

    grid-column-start: col-start 1;
    grid-column-end: col-end 8;

    display:flex;
    flex-direction:column;

    li.item-0 {
      
    }
    
    li.item-1 {
      
    }
    
    .item-2{
      display:none;
    }
  }
}

</style>


