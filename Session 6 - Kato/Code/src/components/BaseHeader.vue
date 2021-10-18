<template>
  <div class="base-header">
    <h2>{{ headerValue }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const BaseHeader = defineComponent({
  data() {
    return {
      headerValue: 'Minute Burger Machine'
    }
  }
})

export default BaseHeader;
</script>
