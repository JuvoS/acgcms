import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 初始化状态
    count: 0
  },
  mutations: {
    // 处理状态
    increment(state, payload) {
      state.count += payload.step;
    },
    startPlay(state) {
      // console.log("123");
      state.count++;
    }
  },
  actions: {
    // 提交改变后的状态
    increment(context) {
      context.commit("increment");
    },
    startPlay(context) {
      console.log(context);
      context.commit("startPlay");
    }
  }
});

// export default new Vuex.Store({
//   modules: {
//     app,
//     region,
//     resClass,
//     command,
//     kpi,
//   },
//   getters: {
//     initActions: () => ["region/fetch", "resClass/fetch", "command/fetch", "kpi/fetch"]
//   }
// });
