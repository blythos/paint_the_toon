import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home';
import FullDetails from '@/views/FullDetails';
import Favourites from '@/views/Favourites'; 


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/fulldetails',
      name: 'fulldetails',
      component: FullDetails
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: Favourites
    }
  ]
})

export default router;
