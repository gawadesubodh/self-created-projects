import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Contact from '@/components/Contact';
import AddMovies from '@/components/AddMovies';
import Movie from '@/components/Movie';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
    path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact,
    },
     {
      path: '/movies/add',
      name: 'AddMovies',
      component: AddMovies,
    },
    {
      path: '/movies/:id', 
      name: 'Movie', 
      component: Movie,
},
  ],
});
