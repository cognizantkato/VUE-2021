<template>
  <div v-for="item in items" :key="item.id">
    {{ item }}
  </div>
  <div>
      <h3> Item Count: {{ itemCount }}</h3>
  </div>
</template>

<script lang="ts">
import ItemMixin from '@/mixins/ItemMixin';
import { defineComponent } from 'vue'

const Orders = defineComponent({
  mixins: [ItemMixin]
});

export default Orders;
</script>
