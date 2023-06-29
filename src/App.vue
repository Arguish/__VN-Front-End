<template>
  <div id="app">
    <AdminNav />

    <router-view />
  </div>
</template>

<script>
import AdminNav from "./components/AdminNav.vue";

export default {
  name: "App",
  components: {
    AdminNav,
  },
};
</script>

<style lang="css">
#nav {
  font-size: 20px;
}
</style>
