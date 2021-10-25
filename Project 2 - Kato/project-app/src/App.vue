<template>
  <div class="main">
    <stage-combat />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StageCombat from "./components/stage-combat/StageCombat.vue";

export default defineComponent({
  name: "App",
  components: {
    stageCombat: StageCombat,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.main {
  font-family: "Common Pixel", sans-serif;
}
</style>
