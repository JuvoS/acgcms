<template>
  <div class="editor">
    <div class="editor-tools">
      <div class="editor-tools-bar">
        <Icon type="ios-list-box" />
      </div>
      <div class="editor-tools-btn">
        <Button @click="onSaveArticle" type="primary">保存</Button>
      </div>
    </div>

    <div class="editor-settings">
      <span>KeyName</span
      ><Input
        v-model="articleKey"
        placeholder="Enter articleKey"
        style="width: 300px"
      />
    </div>

    <mavon-editor
      v-model="articleModel"
      style=" z-index: 1"
      @save="onSaveArticle"
    />
    <!-- <mavon-editor 
     v-model = 'editorContent'
     :ishljs="true"
      :codeStyle="code_style"
     ref=md @imgAdd="$imgAdd" @imgDel="$imgDel"
      /> -->
  </div>
</template>
<script>
import Vue from "vue";
export default {
  data() {
    return {
      baseApi: "article",
      articleObj: {},
      articleModel: "",
      articleKey: "baseMD"
    };
  },
  watch: {
    articleObj(v) {
      this.articleModel = v.keyInfo;
    }
  },
  mounted() {
    this.fetchArticle();
  },
  methods: {
    fetchArticle() {
      this.$axios
        .get(
          this.$config.restURL +
            "/" +
            this.baseApi +
            "/key?" +
            "keyName=" +
            this.articleKey
        )
        .then(response => {
          console.log("### Juvos |  ->", response);
          this.articleObj = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    onSaveArticle() {
      let dataForm = {
        keyName: this.articleKey,
        keyInfo: this.articleModel
      };

      console.log("### Juvos | save ->", dataForm);
      var saveType = "add";
      if (this.articleObj.Id) {
        dataForm.Id = this.articleObj.Id;
        saveType = "update";
      }

      this.$axios
        .post(
          this.$config.restURL + "/" + this.baseApi + "/" + saveType,
          JSON.stringify(dataForm)
        )
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="less" scoped>
.editor {
  width: 100%;

  &-tools {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px 0px;
    background: #fff;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 4px;
    &-bar {
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      &-item {
        margin-left: 5px;
      }
    }
    &-btn {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      &-item {
        margin-right: 5px;
      }
    }
  }
  &-settings {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px 0px;
    background: #fff;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 4px;
  }
}
</style>
