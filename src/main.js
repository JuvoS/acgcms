import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App.vue";
import router from "./router";
import config from "./config/";
import iView from "iview";
import "iview/dist/styles/iview.css";
import store from "./store";

Vue.use(iView);
Vue.use(VueResource);
Vue.config.productionTip = false;
Vue.prototype.$config = config;
window._ = require("lodash");

new Vue({
  router,
  store,
  render: h => h(App),
  created: function() {}
}).$mount("#app");
