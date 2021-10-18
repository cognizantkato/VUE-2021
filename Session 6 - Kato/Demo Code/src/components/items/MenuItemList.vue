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
import ItemMixin from '@/mixins/ItemMixin';
import { defineComponent } from 'vue'
import MenuItem from './MenuItem.vue';

const MenuItemList = defineComponent({
  components: {
    menuItem: MenuItem
  },
  mixins: [ItemMixin]
});

export default MenuItemList;
</script>

<style scoped>
.menu-items {
  display: flex;
}
</style>