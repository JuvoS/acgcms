// import jsSHA from "jssha";
// import qs from "qs";
// import Vue from "vue";

// const app = {
//   state: {
//     token: "",
//     user: {}
//   },
//   mutations: {
//     SET_TOKEN: (state, payload) => (state.token = payload),
//     SET_USER: (state, payload) => (state.user = payload)
//   },
//   actions: {
//     fetchToken({ commit, dispatch }, payload) {
//       const shaObj = new jsSHA("SHA-1", "TEXT");
//       shaObj.update(payload.password);
//       const para = {
//         ...payload,
//         password: shaObj.getHash("HEX"),
//         scope: "ui",
//         grant_type: "password",
//         client_id: "browser"
//       };

//       Vue.http({
//         method: "post",
//         url: "uaa/oauth/token",
//         data: qs.stringify(para),
//         showFailMsg: true
//       })
//         .then(response => {
//           Vue.ls.set("TOKEN", response.access_token);
//           Vue.bus.$emit("$hyz_token_changed", response.access_token);
//           commit("SET_TOKEN", response.access_token);

//           dispatch("fetchAccount");

//           //如果失效时间小于1天, 那么就调一次refreshtoken
//           //保持token有效期。
//           if (response.expires_in < 60 * 60 * 24) {
//             const refeshPara = {
//               ...para,
//               grant_type: "refresh_token"
//             };
//             Vue.$http({
//               method: "post",
//               url: "uaa/oauth/token",
//               data: qs.stringify(refeshPara),
//               showSpin: false
//             }).then(response => {
//               Vue.ls.set("TOKEN", response.access_token);
//               Vue.bus.$emit("$hyz_token_changed", response.access_token);
//               commit("SET_TOKEN", response.access_token);
//             });
//           }
//         })
//         .catch(err => {
//           Vue.bus.$emit("$set_login_loding_false");
//         });
//     },

//     fetchAccount({ commit, dispatch }) {
//       Vue.http({
//         method: "get",
//         url: "account/v1/user/current",
//         showSpin: false,
//         showFailMsg: true,
//         headers: {
//           Authorization: "Bearer " + Vue.ls.get("TOKEN")
//         }
//       })
//         .then(response => {
//           Vue.bus.$emit("$set_login_loding_false");
//           Vue.bus.$emit("$login_success", response);
//           commit("SET_USER", response);
//         })
//         .catch(() => {
//           Vue.bus.$emit("$set_login_loding_false");
//           Vue.bus.$emit("$login_failure");
//         });
//     },

//     logout() {
//       Vue.bus.$emit("$login_failure");
//     }
//   }
// };

// export default app;
