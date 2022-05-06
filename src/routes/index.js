import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/home/index.vue';
import Gallary from '@/views/gallary/index.vue';
import NProgress from 'nprogress'

const routes = [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/gallary",
      name: "gallary",
      component: Gallary,
    },
    {
      path: "/roadmap",
      name: "roadmap",
      component: Home,
    },
    {
      path: "/team",
      name: "team",
      component: Home,
    },
    {
      path: "/provenance",
      name: "provenance",
      component: Home,
    },
    {
      path: "/members",
      name: "members",
      component: Home,
    },
];
  
const router = createRouter({ history: createWebHistory(), routes });

NProgress.inc(0.2);
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: true });

router.beforeEach((to, from, next) => {
  NProgress.start();
  document.documentElement.scrollTop = 0;
  next();
 });

router.afterEach(() => {
    NProgress.done();
});

 export default router;