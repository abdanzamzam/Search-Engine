<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

import { mapState } from "vuex";

export default {
  name: "App",
  components: { Navbar },
  computed: {
    ...mapState(["lastKeyword"]),
  },
};
</script>

<style></style>
