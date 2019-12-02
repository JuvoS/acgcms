<template>
  <div>
    <Table :columns="userColumn" :data="userData"></Table>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  data() {
    return {
      userColumn: [
        { title: "Id", key: "Id" },
        { title: "号码", key: "userTel" },
        { title: "Token", key: "token" },
        { title: "创建时间", key: "createTime" },
        { title: "更新时间", key: "updateTime" }
      ],
      userData: []
    };
  },
  mounted() {
    this.fetchUserList();
  },
  methods: {
    fetchUserList() {
      let url = this.$config.restURL + "/user/list";
      console.log("url ->", url);
      Vue.http({
        method: "get",
        url: url
      })
        .then(response => {
          console.log(response.data);
          this.userData = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="less" scoped>
</style>