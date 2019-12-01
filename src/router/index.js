import Vue from "vue";
import Router from "vue-router";
import { routers } from "./defines";

Vue.use(Router);

const RouterConfig = {
    mode: "history",
    base: process.env.BASE_URL,
    routes: routers
};

const router = new Router(RouterConfig);

export default router;