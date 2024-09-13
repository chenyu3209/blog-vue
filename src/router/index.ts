import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import BlogView from "@/views/BlogView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/post/:id",
      name: "BlogPost",
      component: BlogView,
      props: true,
    },
  ],
  // Scroll to the top after refreshing
  // scrollBehavior(to, from, savedPosition) {
  //   return { left: 0, top: 0 };
  // },
});

export default router;
