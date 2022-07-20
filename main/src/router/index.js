import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/components/Base.vue"),
  },
  {
    path: "/app1/:app1Regexp(.*)*",
    component: () => import("@/components/App1.vue")
  },
  {
    path: "/app2/:app2Regexp(.*)*",
    component: () => import("@/components/App2.vue")
  },
  {
    /*
    * 匹配所有路由
    * 详情请见官方文档：
    * https://router.vuejs.org/guide/essentials/dynamic-matching.html#catch-all-404-not-found-route
    */
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("@/components/NotFound.vue"),
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})