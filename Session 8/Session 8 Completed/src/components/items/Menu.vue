<template>
  <div class="menu-content">
    <div class="menu">
      <p>Number of Items: {{ itemCount }}</p>
      <menu-item-list-layout />
    </div>
    <active-item :item="activeItem" />
  </div>
  <div class="current-orders">

  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from 'vue'
import { MenuItem as Item } from '@/interfaces/MenuItem';
import ActiveItem from './ActiveItem.vue';
import MenuItemListLayout from './MenuItemListLayout.vue';
import { ItemsKey, SetItemActiveKey } from '../../constants/injection-keys';
import useItems from '../../hooks/useItems';

const Menu = defineComponent({
  components: {
    activeItem: ActiveItem,
    menuItemListLayout: MenuItemListLayout
  },
  setup() {
    const { items, itemCount } = useItems('No Items Present');

    const activeItem = ref<Item>({
        id: 2,
        name: 'Chicken Time',
        description: 'Burger but made w/ chicken',
        price: 39.00
      });

    const setItemActive = (id: number) => {
      activeItem.value = items.value.find(i => i.id === id) as Item;
    }
    
    provide(ItemsKey, items);
    provide(SetItemActiveKey, setItemActive);

    return {
      activeItem,
      itemCount
    }
  }
})

export default Menu;
</script>

<style scoped>

.menu {
  margin: 20px auto;
}
</style>