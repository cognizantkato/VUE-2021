<template>
  <div class="base-header">
    <h2>{{ headerValue }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

const BaseHeader = defineComponent({
  // data() {
  //   return {
  //     headerValue: 'Minute Burger Machine'
  //   }
  // }
  setup() {
    const headerValue = ref<string>('Minute Burger Machine')

    return {
      headerValue
    }
  }
})

export default BaseHeader;
</script>
