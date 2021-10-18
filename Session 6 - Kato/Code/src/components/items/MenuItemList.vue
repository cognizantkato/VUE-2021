<template>
  <div class="menu-items">
    <menu-item v-for="item in items" :key="item.id"
      :id="item.id"
      :name="item.name"
      :price="item.price"
      @setActive="setItemActive($event)">
    </menu-item>
  </div>
</template>

<script lang="ts">
// import { MenuItem as Item } from '@/interfaces/MenuItem';
import { defineComponent } from 'vue'
import MenuItem from './MenuItem.vue';
import ItemMixin from '@/mixins/ItemMixin';

const MenuItemList = defineComponent({
  components: {
    menuItem: MenuItem
  },
  // props: {
  //   items: { required: true } as Prop<Item>
  // },
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
  // inject:['items']
  mixins: [ItemMixin]
});

export default MenuItemList;
</script>
