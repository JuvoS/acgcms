import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import config from "./config/";
import iView from "iview";
import "iview/dist/styles/iview.css";
import store from "./store";
// import Http from "./config/http";
import axios from "axios";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";

Vue.use(mavonEditor);
Vue.use(iView);
Vue.config.productionTip = false;
// Vue.prototype.$http = new Http(Vue, config.http || {}).get();

Vue.prototype.$axios = axios;
Vue.prototype.$config = config;
window._ = require("lodash");

new Vue({
  router,
  store,
  render: h => h(App),
  created: function() {}
}).$mount("#app");
