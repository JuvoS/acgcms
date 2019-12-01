<template>
  <div class="acg">
    <div class="acg-content">
      <router-view></router-view>
    </div>
    <div class="acg-footer">
      <MenuCell></MenuCell>
    </div>
  </div>
</template>

<script>
import { appRouter } from "../router/defines";
export default {
  components: {
    MenuCell: () => import("../components/MenuCell")
  },
  data() {
    return {
      menus: appRouter.children,
      menuTitle: "ACG"
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
    }
  }
};
</script>
<style lang="less" scoped>
.acg {
  position: relative;
  height: 100%;
  width: 100%;
  background: #efefef;

  &-content {
    height: 100vh;
    padding: 16px;
    overflow: hidden;
    overflow-y: auto;
  }
  &-footer {
    height: 50px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    background: #ffffff;
    box-shadow: 3px 3px 12px #c0c0c0;
  }
}
</style>