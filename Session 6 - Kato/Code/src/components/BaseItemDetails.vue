<template>
  <div class="item-header">
    <slot name="header"></slot>
  </div>
  <slot></slot>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const BaseItemDetails = defineComponent({});

export default BaseItemDetails;
</script>

<style scoped>
.item-header {
  background-color: #fd5e00;
  padding: 10px;
  font-size: 15px;
  color: white;
  width: 200px;
}
</style>
