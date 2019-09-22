<template>

  <div>
    <b-navbar toggleable="lg" type="light" variant="">

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <router-link class="nav-link logo-link" to="/">Logo</router-link>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/discovery">Discovery</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/photos">Photos</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/contact">Contact</router-link></li>
        </b-navbar-nav>
      </b-collapse>

      <div class="navatar" @click="toggleNightMode()"><img src="/img/shared/girl.png" alt="user's avatar" /></div>

    </b-navbar>
  </div>
  
</template>


<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Navbar",
  props: {

  },

  methods: {
    toggleNightMode(){
      var body = document.body;
      body.classList.toggle('night');
    }
  }
});
</script>

<style scoped lang="scss">

nav.navbar{
  max-width: 1800px;
  margin: 0 auto;

  @media screen and (max-width:1799px){
    max-width: 1440px;
  }
  @media screen and (max-width:1439px){
    max-width: 768px;
  }
}

nav.navbar.navbar-light a.nav-link.logo-link {
  color: var(--primary-brand-color);
  text-transform: uppercase;
  margin-left: 0;
  margin-right: 0;
  padding: 0.5em 0.5em;
  font-weight:600;
}

ul.navbar-nav li.nav-item a.nav-link {
  text-transform: uppercase;
  margin-left: 1em;
  font-weight:600;

  color: var(--font-color-alt);
  transition: all calc(var(--hover-transition-speed) * var(--slow-transition-multiplier)) ease-in-out;

  &:hover{
    color:var(--nav-links-hover-color);
    transition: 0.2s linear;
  }

  &.router-link-exact-active{
    color: var(--nav-font-color-active);
  }
}

#nav-collapse {
  background-color: var(--background-color);
  transition: all calc(var(--hover-transition-speed) * var(--slow-transition-multiplier)) ease-in-out;

  .navbar-nav {
    margin-right:2em;
  }

  &.collapsing .navbar-nav{
    margin-right:0em;
  }
  &.show .navbar-nav{
    margin-right:0em;
  }
}

nav.navbar.navbar-light {
  button.navbar-toggler {
    order: 0;
  }

  .navbar-brand {
    order: 1;
  }

  #nav-collapse.navbar-collapse {
    order: 2;
  }

  .navatar{
    order: 3;
  }
} 

@media screen and (max-width: 992px){
  nav.navbar.navbar-light {
    button.navbar-toggler {
      order: 0;
    }

    .navbar-brand {
      order: 1;
    }

    #nav-collapse.navbar-collapse {
      order: 3;
    }

    .navatar{
      order: 2;
    }
  } 
}



.navbar-toggler {
  border: 0;
}

body.night .navbar-toggler{
  filter: invert(47%) sepia(54%) saturate(672%) hue-rotate(303deg) brightness(109%) contrast(96%);
  transition: all calc(var(--hover-transition-speed) * var(--slow-transition-multiplier)) ease-in-out;
}

nav.navbar.navbar-light button.navbar-toggler span.navbar-toggler-icon {
  background: url(/img/shared/menu-icon.svg);
  background-size: 16px 14px;
  background-repeat: no-repeat;
  background-position: left;
}


.navatar {
  height: 30px;
  width: 30px;
  margin-left: 0;
  margin-right: 0.5em;

  & > img {
    width:30px;
    height:30px;
  }
}

</style>