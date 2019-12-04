<template>
  <div class="menu" :style="menuSty">
    <div v-show="!heightState">{{menuTitle}}</div>
    <Icon type="ios-albums" :class="{fixBtn:heightState}" @click="changeWidth(!heightState)" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuTitle: "ACG",
      menuSty: {
        height: "50px",
        background: "#fff"
      },
      heightState: false
    };
  },
  computed: {},
  mounted() {},
  methods: {
    changeWidth(state) {
      let height = "50px";
      if (state) height = "0";
      this.heightState = state;
      this.menuSty.height = height;
    }
  }
};
</script>
<style lang="less" scoped>
.menu {
  width: 100%;
  box-shadow: 3px 3px 12px #c0c0c0;
}
.fixBtn {
  position: fixed;
  z-index: 10;
  right: 20px;
  top: 20px;
  background: #fff;
  box-shadow: 3px 3px 12px #c0c0c0;
  height: 20px;
  width: 20px;
  border-radius: 50px;
}
</style>