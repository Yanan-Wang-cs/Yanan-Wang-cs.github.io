<template>
  <TopHeader />
  <router-view />
  <el-backtop :right="100" :bottom="100" />
</template>

<script lang="ts">
import TopHeader from "@/components/TopHeader.vue";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  components: {
    TopHeader,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Noto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
