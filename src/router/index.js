import { createWebHistory, createRouter } from "vue-router";
import homeContent from "../components/homeContent.vue";
// import Navbar from "../components/navbar.vue";
// import footer from "../components/footer.vue";
import notFound from "../components/notFound.vue";
import table from "../components/table.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: homeContent
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
    path: "/userlist",
    name: "User List",
    component: table
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;