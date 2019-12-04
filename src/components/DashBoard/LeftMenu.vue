<template>
  <div class="menu" :style="{ width: menuWidth,color:color, background: background}">
    {{menuTitle}}
    <Icon type="ios-albums" @click="changeWidth(!widthState)" />
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "#fff"
    },
    background: {
      type: String,
      default: "#2e343b"
    }
  },
  data() {
    return {
      menuTitle: "ACG",
      menuWidth: "60px",
      widthState: false
    };
  },
  watch: {
    widthState(v) {
      this.$emit("on-change", v);
    }
  },
  mounted() {},
  methods: {
    changeWidth(state) {
      let width = "60px";
      if (state) width = "260px";
      this.widthState = state;
      this.menuWidth = width;
    }
  }
};
</script>
<style lang="less" scoped>
.menu {
  height: 100%;
  box-shadow: 3px 3px 12px #c0c0c0;
}
</style>