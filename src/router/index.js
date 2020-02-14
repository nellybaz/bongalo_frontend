import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


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
    name:"about",
    component: () =>  import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/blog', 
    name:"blog",
    component: () =>  import(/* webpackChunkName: "blog" */ '../views/Blog.vue'),
  },
  {
    path: '/details',
    name: 'details',
    component: () => import(/* webpackChunkName: "detiails" */ '../views/ApartmentDetails.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "detiails" */ '../views/Search.vue')
  }

  
]

const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
