<template>
  <div>
    <div class="row">
      <div class="container">
          <div class="left">
        <slot name="enemyDetails"></slot></div>
      </div>
      <div class="container">
        <slot name="enemy"></slot>
      </div>
    </div>
    <div class="row">
      <div class="container">
        <slot name="player"></slot>
      </div>
      <div class="container">
          <div class="right"> 
        <slot name="playerDetails"></slot></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const BaseStage = defineComponent({});

export default BaseStage;
</script>

<style scoped>
.row {
    margin-top: 50px;
}
.container {
  display: inline-block;
  width: 50%;
  position: relative;
}
.left {
    float:left;
    width:100%;
}
.right {
    float:right;
    width:100%;
}
</style>
