<template>
  <div class="item-container">
    <base-item-details>
      <template v-slot:header>{{ name }}</template>
      <div class="item-details">
        <p>Price: {{ price }} PHP </p>
        <button @click="selectItem(id)">Select</button>
      </div>
    </base-item-details>
  </div>
</template>

<script lang="ts">
import { defineComponent, Prop } from "vue";

const MenuItem = defineComponent({
  props: {
    id: Number,
    name: { type: String },
    price: { required: true } as Prop<number>
  },
  inject: ['selectItem']
});

export default MenuItem;
</script>

<style scoped>
.item-container {
  margin: 15px;
}

.item-container .item-details {
  padding: 5px 10px;
}

.item-container .item-details button {
  margin-top: 10px;
  background-color: yellow;
  border: none;
  padding: 10px;
  font-weight: 700;
  cursor: pointer;
}

.item-container .item-details button:hover {
  background-color: #c4c400;
}
</style>