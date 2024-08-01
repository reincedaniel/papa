const routes = [
  {
    path: "/dashboard/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "home",
        component: () =>
          import("src/pages/DashboardPages/HomePage/HomePage.vue"),
      },
    ],
  },
  {
    path: "/auth/",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      {
        path: "signin",
        component: () =>
          import("src/pages/AuthPages/SignInPage/SignInPage.vue"),
      },
      {
        path: "signup",
        component: () =>
          import("src/pages/AuthPages/SignUpPage/SignUpPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
