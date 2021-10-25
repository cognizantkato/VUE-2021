<template>
  <div class="menu-items">
    <menu-item v-for="item in items" :key="item.id"
      :id="item.id"
      :name="item.name"
      :price="item.price">
    </menu-item>
  </div>
</template>

<script lang="ts">
import { ItemsKey } from '../../constants/injection-keys';
import { defineComponent, inject } from 'vue'
import MenuItem from './MenuItem.vue';

const MenuItemList = defineComponent({
  components: {
    menuItem: MenuItem
  },
  setup() {
    const items = inject(ItemsKey);

    return {
      items
    }
  }
});

export default MenuItemList;
</script>

<style scoped>
.menu-items {
  display: flex;
}
</style>