import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/discovery",
      name: "discovery",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "discovery" */ "./views/discovery.vue")
    },
    {
      path: "/photos",
      name: "photos",
      component: () => import(/* webpackChunkName: "photos" */ "./views/photos.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import(/* webpackChunkName: "contact" */ "./views/contact.vue")
    }
  ]
});
