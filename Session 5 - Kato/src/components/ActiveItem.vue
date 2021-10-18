<template>
  <div class="active-item-container">
      <div class="item-header">{{item.name}}</div>
      <div class="summary">
          <div class="item-name">
              {{item.name}}
          </div>
          <div class="item-details">
              <div class="item-description">{{item.description}}</div>
              <div class="item-price">{{item.price}}</div>
          </div>
      </div>
  </div>
</template>

<script lang="ts">
    import { MenuItem } from '@/interfaces/MenuItem';
    import {defineComponent, Prop} from 'vue';

    const ActiveItem = defineComponent({
        props: {
            item: { required: true } as Prop<MenuItem>
        }
    });

    export default ActiveItem;
</script>
