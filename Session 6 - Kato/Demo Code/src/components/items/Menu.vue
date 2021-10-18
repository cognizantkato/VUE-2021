<template>
  <div class="menu-content">
    <div class="menu">
      <menu-item-list-layout />
    </div>
    <active-item :item="activeItem" />
  </div>
  <div class="current-orders">

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { MenuItem as Item } from '@/interfaces/MenuItem';
import ActiveItem from './ActiveItem.vue';
import MenuItemListLayout from './MenuItemListLayout.vue';
import { getItems } from '@/services/ItemService';

const Menu = defineComponent({
  components: {
    activeItem: ActiveItem,
    menuItemListLayout: MenuItemListLayout
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'Cheese Burger',
          description: 'Burger w/ Cheese on top!',
          price: 46.00
        },
        {
          id: 2,
          name: 'Chicken Time',
          description: 'Burger but made w/ chicken',
          price: 39.00
        },
      ] as Item[],
      activeItem: {
        id: 2,
        name: 'Chicken Time',
        description: 'Burger but made w/ chicken',
        price: 39.00
      } as Item
    }
  },
  provide() {
    return {
      items: this.items,
      selectItem: this.setItemActive
    }
  },
  methods: {
    setItemActive(id: number) {
      this.activeItem = this.items.find(i => i.id === id) as Item;
    }
  },
  mounted() {
    getItems().then(r => {
      this.items = r;
    });
  }
})

export default Menu;
</script>

<style scoped>

.menu {
  margin: 20px auto;
}
</style>