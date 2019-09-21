<template>
  <footer>
    <div class="footer-content">
      <div class="">
          <h2>LOGO</h2>
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
        <input type="text" placeholder="Email" />
        <span>Stay in touch with us for the freshest products!</span>
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
  background-color: #A6ADB4;
  color: #fff;
  clear: both;
  position: relative;
  height: 200px;
  margin-top: -200px;
}

.footer-content {
  width: 800px;
  margin-left:auto;
  margin-right:auto;

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

ul li {
  list-style-type: none;

}

.logo {
  border: 1px solid red;
  grid-area: logo;
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

  input[type=text]{
    width:100%;
    border:2px solid var(--footer-border-color)
  }
}

.social {
  grid-area: social;
}
</style>


