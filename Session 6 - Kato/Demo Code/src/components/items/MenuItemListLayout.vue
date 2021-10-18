<template>
  <div class="menu-title">{{ menuTitle }}</div>
  <menu-item-list />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MenuItemList from './MenuItemList.vue';

const MenuItemListLayout = defineComponent({
  components: {
    menuItemList: MenuItemList
  },
  data() {
    return {
      menuTitle: 'Current Menu'
    }
  }
});

export default MenuItemListLayout;
</script>

<style scoped>
.menu-title {
  background-color: yellow;
  font-size: 20px;
  padding: 15px;
}
</style>
