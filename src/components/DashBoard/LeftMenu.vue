<template>
  <div
    class="menu"
    :style="{ width: menuWidth, color: color, background: background }"
  >
    <div class="Left-item">
      <a
        class="Left-link"
        href="/"
        data-hotkey="g d"
        aria-label="Homepage"
        data-ga-click="Left, go to dashboard, icon:logo"
      >
        <img
          style="height: 32px;"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzIgMzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9DQo8L3N0eWxlPg0KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxMy4xMDMzIiB5MT0iOC4zMjE2IiB4Mj0iMTYuNjY1OCIgeTI9IjIxLjU3MTYiPg0KCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiM4REVCRkYiLz4NCgk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojNkNBQ0ZGIi8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTI5LjEsMTAuN2MtMC4zLTEuMy0xLjYtMS4yLTIuNC0xLjljLTAuMi0wLjEtMC4xLTAuNC0wLjItMC42Yy0wLjItMC41LTAuNi0wLjgtMS0wLjhjLTAuMywwLTAuNSwwLjEtMC43LDAuNA0KCWMtMC40LDAuNywwLjksMS0xLjUsMC42Yy00LjMtMC42LTguNy0wLjQtMTMtMC41Yy01LTAuMi04LjMsMy4zLTgsOC4yYzAuMiwyLjMsMCw0LjQtMS4xLDYuNWMtMC45LDItMC41LDIuNiwwLjUsMi43DQoJYzEuMiwwLjIsNC4zLDAuNiwzLjktMC43Yy0wLjItMC42LTEuNi0wLjEtMS43LTAuOGMtMC4yLTEuMSwxLjYtMS41LDIuMi0yLjRjMC40LTAuNSwyLjUsMS41LDIuNSwyLjZjMCwwLjMsMC40LDEsMC42LDENCgljMSwwLjIsMiwwLjEsMywwYzAuMiwwLDAuNS0wLjQsMC41LTAuNmMwLTAuMy0wLjQtMC41LTAuNi0wLjZjLTAuNC0wLjItMC40LTIuNSwwLjMtMy4zYzAuNS0wLjYsMS43LTEuMSwyLjktMC44DQoJYzEuMSwwLjMsMi4xLDAuNywyLDEuOGMtMC4xLDAuNi0xLjcsMi0xLjYsMi42YzAsMC4zLDEuNCwwLDEuNy0wLjFjMC41LTAuMSwwLjgtMC41LDEuNC0xLjJjMC45LDIuMywyLjQsMi43LDMuNSwyLjUNCgljMCwwLDEuNCwwLDEuNy0wLjRjMC4zLTAuMywwLTAuNy0wLjMtMC44Yy0xLjItMC4zLTEuNy0xLTEuNy0yLjFjMC0xLjYsMC0zLjEsMC00LjZjMC0xLjksMS4xLTMsMy0zYzEuNCwwLDIuOSwwLDQuMywwDQoJYzEsMCwxLjMtMC44LDEuNS0xLjRjMC4xLTAuMy0wLjQtMC44LTAuNy0xLjJDMjkuOSwxMS43LDI5LjIsMTEuMSwyOS4xLDEwLjd6Ii8+DQo8L3N2Zz4NCg=="
        />
      </a>
    </div>
    <div class="Left-Router" v-if="!widthState">
      <Tooltip content="主页" placement="right">
        <Icon
          class="Left-Router-item"
          type="ios-home"
          color="#fff"
          size="22"
          @click="onRouterPush('home')"
        />
      </Tooltip>
      <Tooltip content="Kite" placement="right">
        <Icon
          class="Left-Router-item"
          type="ios-bonfire"
          color="#fff"
          size="22"
          @click="onRouterPush('kite')"
        />
      </Tooltip>
      <Tooltip content="工具" placement="right">
        <Icon
          class="Left-Router-item"
          type="ios-construct"
          color="#fff"
          size="22"
        />
      </Tooltip>
      <Tooltip content="文章" placement="right" :transfer="true">
        <Icon
          class="Left-Router-item"
          type="ios-create"
          color="#fff"
          size="22"
          @click="onRouterPush('editor')"
        />
      </Tooltip>
      <Tooltip content="消息" placement="right" :transfer="true">
        <Icon
          class="Left-Router-item"
          type="logo-snapchat"
          color="#fff"
          size="22"
        />
      </Tooltip>
      <Tooltip content="展开" placement="right" :transfer="true">
        <Icon
          class="Left-Router-item"
          type="ios-egg"
          color="#fff"
          size="22"
          @click="changeWidth(!widthState)"
        />
      </Tooltip>
    </div>
    <div class="Left-Router" v-else>
      <div class="Left-Router-cell" @click="onRouterPush('home')">
        <Icon class="Left-Router-cell-icon" type="ios-home" size="22" />
        <span class="Left-Router-cell-label">主页</span>
      </div>
      <div class="Left-Router-cell" @click="onRouterPush('kite')">
        <Icon class="Left-Router-cell-icon" type="ios-bonfire" size="22" />
        <span class="Left-Router-cell-label">Kite</span>
      </div>
      <div class="Left-Router-cell">
        <Icon class="Left-Router-cell-icon" type="ios-construct" size="22" />
        <span class="Left-Router-cell-label">工具</span>
      </div>
      <div class="Left-Router-cell" @click="onRouterPush('editor')">
        <Icon class="Left-Router-cell-icon" type="ios-create" size="22" />
        <span class="Left-Router-cell-label">文章</span>
      </div>
      <div class="Left-Router-cell" @click="changeWidth(!widthState)">
        <Icon class="Left-Router-cell-icon" type="ios-egg" size="22" />
        <span class="Left-Router-cell-label">收起</span>
      </div>
    </div>
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
    },
    onRouterPush(v) {
      this.$router.push({ path: v });
    }
  }
};
</script>
<style lang="less" scoped>
.menu {
  height: 100%;
  box-shadow: 3px 3px 12px #c0c0c0;
}
.Left-item {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10px auto;
}
.Left-link {
  font-weight: 600;
  color: #fff;
  white-space: nowrap;
}
.v-align-middle {
  vertical-align: middle !important;
}
.Left-Router {
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  &-item {
    margin: 10px auto;
  }
  &-item:hover {
    color: #03a9f4 !important;
  }
  &-cell {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
    color: #fff;
    padding: 10px;
    &-icon {
      padding-left: 10px;
    }
    &-label {
      flex: 1;
      text-align: center;
    }
  }
  &-cell:hover {
    background: #181b1f;
    color: #03a9f4;
  }
}
</style>
