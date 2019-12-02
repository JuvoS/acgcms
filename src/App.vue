<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  mounted() {
    console.log(this.$route.path, this.$route.params);
  }
};
</script>

<style lang="less">
html,
body {
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  position: relative;
}
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
::-webkit-scrollbar-track {
  background-color: none;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #555;
}
</style>

