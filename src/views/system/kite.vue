<template>
  <div>
    <Button @click="onAddKite">onAddKite</Button>
    <Table :columns="kiteColumn" :data="kiteData"></Table>
  </div>
</template>
<script>
import Vue from "vue";
import { log } from "util";
export default {
  data() {
    return {
      kiteColumn: [
        { title: "Id", key: "Id" },
        { title: "KeyName", key: "keyName" },
        { title: "KeyInfo", key: "keyInfo" },
        { title: "创建时间", key: "createTime" },
        { title: "更新时间", key: "updateTime" },
        {
          title: "操作",
          key: "action",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  on: {
                    click: () => {
                      this.onUpdate(params.row);
                    }
                  }
                },
                "更新"
              ),
              h(
                "Button",
                {
                  on: {
                    click: () => {
                      this.onDelete(params.row);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      kiteData: []
    };
  },
  mounted() {
    this.fetchKiteList();
  },
  methods: {
    fetchKiteList() {
      let url = this.$config.restURL + "/kite/list";
      // this.$http({
      //   method: "get",
      //   url: url
      // }).then(res => {
      //   this.kiteData = res;
      // });
      // this.$axios
      //   .get(url)
      //   .then(response => {
      //     var temp = response.data;
      //     console.log(response);
      //     this.kiteData = temp;
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
      let dataForm = {
        // pageIndex: 2,
        // pageSizeNum: 2
      };
      this.$axios
        .post(this.$config.restURL + "/kite/page", JSON.stringify(dataForm))
        .then(response => {
          this.kiteData = response.data.list;
        })
        .catch(err => {
          console.log(err);
        });
    },
    onAddKite() {
      // this.$http({
      //   method: "post",
      //   url: this.$config.restURL + "/kite/add",
      //   data: {
      //     keyName: "queryCmdByKpiIdAndResInstId",
      //     keyInfo: "{aa:4154}"
      //   }
      // })
      //   .then(response => {
      //     console.log(response);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
      let dataForm = {
        keyName: "queryCmdByKpiIdAndResInstId",
        keyInfo: "{aa:4154}"
      };
      // this.$axios
      //   .post(this.$config.restURL + "/kite/add", dataForm, {
      //     transformRequest: [
      //       function(data) {
      //         return JSON.stringify(dataForm);
      //       }
      //     ]
      //   })
      this.$axios
        .post(this.$config.restURL + "/kite/add", JSON.stringify(dataForm))
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });

      this.fetchKiteList();
    },
    onUpdate(v) {
      console.log(v);
      v.keyName = "keyName" + Math.random(10000, 99999);
      this.$axios
        .post(this.$config.restURL + "/kite/update", JSON.stringify(v))
        .then(response => {
          console.log(response);
          this.fetchKiteList();
        })
        .catch(err => {
          console.log(err);
        });
    },
    onDelete(v) {
      this.$axios
        .post(this.$config.restURL + "/kite/delete", JSON.stringify(v))
        .then(response => {
          console.log(response);
          this.fetchKiteList();
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="less" scoped></style>
