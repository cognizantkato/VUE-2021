<template>
  <div class="item-container">
    <div class="item-header">
      <h3>{{ name }}</h3>
    </div>
    <div class="item-details">
      <p>Price: {{ price }}</p>
      <button @click="setAsActive">Select</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Prop } from "vue";

const MenuItem = defineComponent({
  props: {
    id: Number,
    name: { type: String },
    price: { required: true } as Prop<number>,
  },
  emits: {
    "set-As-Active": (id: number) => {
      return id != null;
    },
  },
  methods: {
    setAsActive() {
      this.$emit("set-As-Active", this.id as number);
    },
  },
});

export default MenuItem;
</script>
