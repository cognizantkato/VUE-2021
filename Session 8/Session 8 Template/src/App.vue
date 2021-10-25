<template>
  <base-header></base-header>
  <div id="content">
    <button @click="selectedComponent = 'app-menu'">Menu</button>
    <button @click="selectedComponent = 'app-orders'">Orders</button>

    <keep-alive>
      <component :is="selectedComponent" />
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Menu from './components/items/Menu.vue';
import Orders from './components/orders/Orders.vue';
import { MenuItem as Item } from './interfaces/MenuItem';

const App = defineComponent({
  name: 'App',
  components: {
    appMenu: Menu,
    appOrders: Orders
  },
  data() {
    return {
      selectedComponent: 'app-menu',
      menuTitle: 'Current Menu',
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
        {
          id: 3,
          name: 'Black Pepper Burger',
          description: `it's black, it's peppery, but it's not racist`,
          price: 73
        }
      ] as Item[],
      activeItem: {
        id: 2,
        name: 'Chicken Time',
        description: 'Burger but made w/ chicken',
        price: 39.00
      } as Item
    }
  },
  methods: {
    setItemActive(id: number) {
      this.activeItem = this.items.find(i => i.id === id) as Item;
    }
  }
});

export default App;
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Helvetica', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#content {
  width: 80%;
  margin: auto;
}

.base-header {
  background-color: #FD5E00;
  color: white;
  padding: 20px;
}
</style>
