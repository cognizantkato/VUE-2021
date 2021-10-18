<template>
  <div class="menu-content">
    <div class="menu">
      <menu-item-list-layout :items="items" @setActive="setItemActive" />
    </div>
    <active-item :item="activeItem" />
  </div>
  <div class="current-orders"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MenuItem as Item } from "@/interfaces/MenuItem";
import ActiveItem from "./ActiveItem.vue";
import MenuItemListLayout from "./MenuItemListLayout.vue";

const Menu = defineComponent({
  components: {
    activeItem: ActiveItem,
    menuItemListLayout: MenuItemListLayout,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Cheese Burger",
          description: "Burger w/ Cheese on top!",
          price: 46.0,
        },
        {
          id: 2,
          name: "Chicken Time",
          description: "Burger but made w/ chicken",
          price: 39.0,
        },
        {
          id: 3,
          name: "Black Pepper Burger",
          description: `it's black, it's peppery, but it's not racist`,
          price: 73,
        },
      ] as Item[],
      activeItem: {
        id: 2,
        name: "Chicken Time",
        description: "Burger but made w/ chicken",
        price: 39.0,
      } as Item,
    };
  },
  methods: {
    setItemActive(id: number) {
      this.activeItem = this.items.find((i) => i.id === id) as Item;
    },
  },
  provide(){ 
    return {
      items: this.items,
      setItem: this.setItemActive
    }
  },
});

export default Menu;
</script>

<style>
.menu {
  margin: 20px auto;
}

.menu .menu-title {
  background-color: yellow;
  font-size: 20px;
  padding: 15px;
}

.menu-items {
  display: flex;
}

.item-container {
  margin: 15px;
}

.item-container .item-header {
  background-color: #fd5e00;
  padding: 10px;
  font-size: 15px;
  color: white;
  width: 200px;
}

.item-container .item-details {
  padding: 5px 10px;
}

.item-container .item-details button {
  margin-top: 10px;
  background-color: yellow;
  border: none;
  padding: 10px;
  font-weight: 700;
  cursor: pointer;
}

.item-container .item-details button:hover {
  background-color: #c4c400;
}

.active-item-container {
  margin: auto;
  border-top: 20px solid #fd5e00;
  padding-top: 25px;
}

.active-item-container .item-header {
  background-color: #fd5e00;
  padding: 10px;
  font-size: 15px;
  color: white;
  width: 200px;
}

.active-item-container .summary {
  display: flex;
  align-items: center;
}

.active-item-container .item-name {
  margin: 10px;
  background-color: yellow;
  padding: 10px;
  font-weight: 600;
}

.active-item-container .item-details .item-description {
  font-style: italic;
}
</style>
