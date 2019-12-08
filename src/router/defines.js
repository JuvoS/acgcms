export const appRouter = {
  path: "/",
  name: "root",
  component: () => import("../views"),
  redirect: "/home",
  children: [
    {
      path: "home",
      icon: "ios-home",
      name: "推荐",
      component: () => import("../views/home/")
    },
    {
      path: "system",
      icon: "md-person",
      name: "资源",
      component: () => import("../views/system/")
    },
    {
      path: "kite",
      icon: "md-person",
      name: "kite",
      component: () => import("../views/system/kite")
    },
    {
      path: "editor",
      icon: "md-create",
      name: "editor",
      component: () => import("../views/editor")
    }
  ]
};

export const commonRouters = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login")
  },
  {
    path: "/403",
    name: "403",
    props: {
      type: "403"
    },
    component: () => import("../views/error")
  },
  {
    path: "/404",
    name: "404",
    props: {
      type: "404"
    },
    component: () => import("../views/error/404")
  },
  {
    path: "/500",
    name: "500",
    props: {
      type: "500"
    },
    component: () => import("../views/error")
  },
  {
    path: "/*",
    name: "error-404",
    redirect: "/404"
  }
];

export const routers = [appRouter, ...commonRouters];
