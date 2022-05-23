<template>
  <div class="main">
    <About />
    <Areas />
    <Locations />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    About: () => import("../components/AboutSection.vue"),
    Areas: () => import("../components/PracticeAreas.vue"),
    Locations: () => import("../components/Locations.vue"),
  },
};
</script>

<style lang="scss" scoped>
.main {
  color: red($color: #000000);
}
</style>
