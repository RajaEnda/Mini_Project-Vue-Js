import Vue from "vue";
import VueRouter from "vue-router";
import Default from "@/layouts/Default.vue";
import Home from "@/views/Home.vue";
import listNews from "@/views/listNews.vue";
import detailBerita from "@/views/detailBerita.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Default,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "/list",
        name: "list",
        component: listNews,
      },
      {
        path: "/detail/:id",
        name: "detail",
        component: detailBerita,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

export default router;