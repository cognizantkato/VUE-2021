<template>
  <div class="active-item-container">
    <base-item-details>
      <template v-slot:header>{{ item.name }}</template>
      <div class="summary">
        <div class="item-name">{{ item.name }}</div>
        <div class="item-details">
          <div class="item-description">{{ item.description }}</div>
          <div class="item-price">Price: {{ item.price }} PHP</div>
        </div>
      </div>
    </base-item-details>
  </div>
</template>

<script lang="ts">
import { MenuItem } from '@/interfaces/MenuItem';
import { defineComponent, Prop } from 'vue'

const ActiveItem = defineComponent({
  props: {
    item: { required: true } as Prop<MenuItem>
  }
});

export default ActiveItem
</script>

<style scoped>
.active-item-container {
  margin: auto;
  border-top: 20px solid #FD5E00;
  padding-top: 25px;
}

.active-item-container .summary {
  display: flex;
  align-items: center;
}

.active-item-container .item-name {
  margin: 10px;
  background-color: yellow;
  padding: 10px;
  font-weight: 600;
}

.active-item-container .item-details .item-description {
  font-style: italic;
}
</style>