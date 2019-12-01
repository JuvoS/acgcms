<template>
  <div class="basic-pane">
    <slot name="menu-item"></slot>
    <a
      v-for="(item,key) in menuChildArr"
      :key="key"
      :class="{'basic-item':true,'basic-active':item.checked}"
      @click="onCheckedMenu(item.path)"
    >
      <Icon size="24" :type="item.icon" />
      <span>{{item.name}}</span>
    </a>
  </div>
</template>
<script>
export default {
  props: {
    initarr: {
      type: Array,
      default: []
    }
  },
  components: {},
  data() {
    return {
      //   initarr: [
      //     { id: "sf1321dfs", label: "weefs" },
      //     { id: "df231vss", label: "fsfq" },
      //     { id: "fs23123", label: "bghds" }
      //   ],
      menuChildArr: []
    };
  },
  watch: {},
  mounted() {
    if (this.initarr.length < 1) return;
    this.menuChildArr = this.initarr;
    this.onCheckedMenu(this.menuChildArr[0].path);
  },
  methods: {
    menuFormat(arr, checked) {
      arr.forEach(ele => {
        ele.checked = false;
        if (checked == ele.path) ele.checked = true;
      });
      return arr;
    },
    onCheckedMenu(val) {
      let arr = this.menuFormat(this.menuChildArr, val);
      this.menuChildArr = [];
      this.menuChildArr = arr;

      this.$emit("on-checked-menu", val);
    }
  },
  beforeDestroy() {}
};
</script>
<style lang='less' scoped>
.basic-pane {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: #ffffff;
}
.basic-item {
  margin: 10px;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.basic-active {
  color: #ff0000;
}
</style>