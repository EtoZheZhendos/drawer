const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "index",
        name: "IndexPage",
        component: () => import("src/pages/IndexPage.vue"),
      },
      {
        path: "test",
        name: "TestPage",
        component: () => import("src/pages/TestPage.vue"),
      },
      {
        path: "menu/:id",
        name: "MenuPage",
        component: () => import("src/pages/MenuPage.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
