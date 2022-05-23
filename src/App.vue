<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import("./components/Header.vue"),
    Footer: () => import("./components/Footer.vue"),
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  &::-webkit-scrollbar-thumb {
    background-color: #e9e9e9;
    border-radius: 2.5px;
  }
  &::-webkit-scrollbar {
    height: 6px;
    width: 6px;
  }
}
</style>
