import axios from "axios";

class http {
  //   static HYZ_HTTP_RESPONSE_MSG = "$hyz_http_response_msg";
  //   static HYZ_TOKEN_CHANGED = "$hyz_token_changed";
  constructor(Vue, opts) {
    this.Vue = Vue;
    this.instance = axios.create();

    if (opts) {
      Object.keys(opts).forEach(key => {
        this.instance.defaults[key] = opts[key];
      });
    }
    // this.token = Math.random(10000, 99999);
    // this.token = this.Vue.ls.get("TOKEN");
    // this.Vue.bus.$on(http.HYZ_TOKEN_CHANGED, v => this.onTokenChanged(v));
    this.configRequest();
    this.configResponse();
  }

  onTokenChanged(v) {
    this.token = v;
    this.configRequest();
  }

  configRequest() {
    if (this.requestInterceptor) {
      this.instance.interceptors.request.eject(this.requestInterceptor);
    }
    this.requestInterceptor = this.instance.interceptors.request.use(
      config => {
        // if (!config.noToken) {
        //   config.headers["Authorization"] = "Bearer " + this.token;
        // }

        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
  }

  configResponse() {
    this.instance.interceptors.response.use(
      response => {
        return response.data;
      },
      error => {
        return Promise.reject(error);
      }
    );
  }

  get() {
    return this.instance;
  }
}

export default http;
