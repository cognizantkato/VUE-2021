<template>
  <div class="item-container">
    <!-- <div class="item-header">
      <h3>{{ name }}</h3>
    </div> -->
    <base-item-details>
      <template v-slot:header>
        <h3>{{ name }}</h3>
      </template>
      <div class="item-details">
        <p>Price: {{ price }} PHP</p>
        <button @click="setItem(id)">Select</button>
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
    price: { required: true } as Prop<number>,
  },
  // emits: {
  //   setActive: (id: number) => {
  //     return id != null;
  //   }
  // },
  // methods: {
  //   setAsActive() {
  //     this.$emit('setActive', this.id as number);
  //   }
  // }
  inject: ["setItem"],
});

export default MenuItem;
</script>
