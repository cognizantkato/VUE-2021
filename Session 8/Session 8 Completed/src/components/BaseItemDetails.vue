<template>
  <div class="item-header">
    <h3><slot name="header"></slot></h3>
  </div>
  <slot></slot>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const BaseItemDetails = defineComponent({})

export default BaseItemDetails;
</script>

<style scoped>
.item-header {
  background-color: #FD5E00;
  padding: 10px;
  font-size: 15px;
  color: white;
  width: 200px;
}
</style>