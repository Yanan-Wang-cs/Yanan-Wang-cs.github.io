import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/experience",
    name: "experience",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "experience" */ "@/views/ExperienceView.vue"),
  },
  {
    path: "/projects",
    name: "projects",
    component: () =>
      import(/* webpackChunkName: "projects" */ "@/views/ProjectsView.vue"),
  },
  {
    path: "/publications",
    name: "publications",
    component: () =>
      import(
        /* webpackChunkName: "publications" */ "@/views/PublicationsView.vue"
      ),
  },
  {
    path: "/education",
    name: "education",
    component: () =>
      import(
        /* webpackChunkName: "publications" */ "@/views/EducationView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
