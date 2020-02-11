import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta:{
      title: 'Vacation Rentals, Homes, Experiences and Places - Bongalo'
    },
  },
  {
    path: '/about', 
    component: About,
  },
  {
    path: '/blog', 
    component: Blog,
  },
  {
    path: '/details',
    name: 'details',
    component: () => import(/* webpackChunkName: "detiails" */ '../views/ApartmentDetails.vue')
  }

  
]

const router = new VueRouter({
  routes,
  mode:'history',
})

export default router
