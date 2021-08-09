import { createWebHistory, createRouter } from "vue-router";
import homeContent from "../components/homeContent.vue";
import notFound from "../components/notFound.vue";
import userTable from "../components/userContent.vue";
import mathTax from "../components/mathTax.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: homeContent,
    
  },
  {
    path: "/about",
    name: "About Us",
    component: notFound
  },
  {
    path: "/:catchAll(.*)",
    name: "Page Not Found",
    component: notFound,
  },
  {
    path: "/userlist/:id",
    name: "User List",
    component: userTable,
  },
  {
    path: "/mathtax",
    name: " Math Tax",
    component: mathTax,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;