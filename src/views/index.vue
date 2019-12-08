<template>
  <div class="acg">
    <LeftMenu @on-change="onLeftChange"></LeftMenu>
    <div class="acg-content">
      <HeadMenu @on-change="onHeadChange"> </HeadMenu>
      <div
        class="acg-content-wrapper"
        :style="{
          width: leftState ? 'calc(100vW - 260px)' : 'calc(100vW - 60px)'
        }"
      >
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    LeftMenu: () => import("@/components/DashBoard/LeftMenu"),
    HeadMenu: () => import("@/components/DashBoard/HeadMenu")
  },
  data() {
    return {
      // menus: appRouter.children,
      menuTitle: "ACG",
      leftState: false
    };
  },
  computed: {},
  mounted() {},
  methods: {
    onMenuChanged(type) {
      if (type === "logout") {
        this.$store.dispatch("logout");
      } else {
        this.$router.push({ path: type });
        let title = _.find(this.menus, { path: type });
        this.menuTitle = title.name;
      }
    },
    onLeftChange(state) {
      this.leftState = state;
    },
    onHeadChange(state) {}
  }
};
</script>
<style lang="less" scoped>
.acg {
  position: relative;
  height: 100%;
  width: 100%;
  background: #efefef;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  &-content {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    &-wrapper {
      flex: 1;
      overflow: hidden;
      overflow-y: auto;
      padding: 16px;
    }
  }
}
</style>
