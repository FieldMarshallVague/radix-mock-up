<template>
  <footer>
    <div class="footer-content">
      <div class="logo">
          <h2>Logo</h2>
      </div>
      <div class="links1">
        <ul>
          <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/discovery">Discovery</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/photos">Photos</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/contact">Contact</router-link></li>
        </ul>
      </div>
      <div class="links2">
        <ul>
          <li class="nav-item"><router-link class="nav-link" to="/">About</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/discovery">Help</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/photos">Terms</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/contact">Guidelines</router-link></li>
        </ul>
      </div>
      <div class="links3">
        <ul>
          <li class="nav-item"><router-link class="nav-link" to="/">Testimonials</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/discovery">Advertise</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/photos">Integrations</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/contact">Careers</router-link></li>
        </ul>
      </div>
      <div class="search">
        <div class="search-box">
          <input type="text" placeholder="Email" />
          <button type="submit"></button>
        </div>
        <span>Stay in touch with us for the freshest products!</span>
      </div>
      <div class="social">
        <a href="#" target="_blank"><img src="/img/icons/instagram.svg" alt="instagram" /></a>
        <a href="#" target="_blank"><img src="/img/icons/twitter.svg" alt="twitter" /></a>
        <a href="#" target="_blank"><img src="/img/icons/facebook.svg" alt="facebook" /></a>
        <a href="#" target="_blank"><img src="/img/icons/web.svg" alt="web" /></a>
      </div>
    </div>    
  </footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({

});
</script>

<style scoped lang="scss">
footer{
  width:100%;
  background-color: var(--footer-background-color);
  color: #fff;
  clear: both;
  position: relative;
}

.footer-content {
  width: 1160px;
  margin: 3rem auto;

  display:grid;  
  align-content: start;
  grid-template-rows: auto;
  grid-template-columns: repeat(12, 1fr [col-start]);
  grid-gap:var(--grid-gap);
  grid-template-areas:
    "logo links1 links2 links3 . . search search search . social social";
    
  @media screen and (max-width: 992px){
    // grid-template-columns: auto;
    // grid-template-rows: 80px 100px 80px;
    // grid-template-areas: 
    //   "hero . ."
    //   "."
    //   ".";
  }
}

a{
  margin:0;
  padding:0;

  &:link{
    color:var(--footer-links-color);
  }
  &:visited{
    color:var(--footer-links-color);
  }
  &:hover{
    color:var(--footer-links-hover-color);
    transition: 0.3s linear;
  }
  &:active{
    color:var(--footer-links-color);
  }
}

.logo {
  grid-area: logo;
  h2 {
    text-transform: uppercase;
    font-size: 1rem;
    font-weight:600;
  }
}

.links1 {
  grid-area: links1;
}

.links2 {
  grid-area: links2;
}

.links3 {
  grid-area: links3;
}

.search {
  grid-area: search;
  text-align: left;

  .search-box{
    display:flex;
    align-content: space-between;
    width:100%;
    padding: 0.5em 1em;
    border-radius: 0.5em;
    background-color: var(--search-box-background-color);
  }

  input[type=text]{
    flex: 1;
    border:0 none;
    font-size:0.8rem;
    background-color: transparent;
    color: var(--footer-links-color);
  }
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--footer-links-color);
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: var(--footer-links-color);
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: var(--footer-links-color);
  }

  button{
    background: url(/img/icons/send.svg);
    background-size: 16px 14px;
    background-repeat: no-repeat;
    background-position: left;
    width: 20px;
    height: 20px;
    border: 0 none;
    position: relative;
    align-self:flex-end;

    &:hover{
      filter: invert(47%) sepia(54%) saturate(672%) hue-rotate(303deg) brightness(109%) contrast(96%);
      transition: 0.1s linear;
    }
  }

  span {
    font-size:0.7rem;
    line-height:2rem;
    align-self:flex-start;
    color: var(--footer-links-color);
  }
}

.social {
  grid-area: social;
  display:flex;
  flex-direction: row;
  align-items:flex-start;

  a {
    flex:1;

    &:hover img{
      filter: invert(47%) sepia(54%) saturate(672%) hue-rotate(303deg) brightness(109%) contrast(96%);
      transition: 0.1s linear;
    }
  }

  

  img{
    width:20px;
    height:20px;
  }
}
</style>


