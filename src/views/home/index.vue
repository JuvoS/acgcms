<template>
  <div>
    <h1>推荐</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$store.state.count);
    this.$store.dispatch("startPlay", 5);
    console.log(this.$store.state.count);
  }
};
</script>

<style></style>
