<template>
  <div class="menu-title">{{ menuTitle }}</div>
  <menu-item-list :items="items" @setActive="setItemActive($event)" />
</template>

<script lang="ts">
import { MenuItem } from '@/interfaces/MenuItem';
import { defineComponent, Prop } from 'vue'
import MenuItemList from './MenuItemList.vue';

const MenuItemListLayout = defineComponent({
  components: {
    menuItemList: MenuItemList
  },
  props: {
    items: { required: true } as Prop<MenuItem>
  },
  emits: {
    setActive: (id: number) => {
      return id != null;
    }
  },
  methods: {
    setItemActive(id: number) {
      this.$emit('setActive', id as number);
    }
  },
  data() {
    return {
      menuTitle: 'Current Menu'
    }
  }
});

export default MenuItemListLayout;
</script>
