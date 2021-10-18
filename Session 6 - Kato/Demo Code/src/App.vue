<template>
  <base-header></base-header>
  <div id="content">
    <button @click="selectedComponent = 'app-menu'">Menu</button>
    <button @click="selectedComponent = 'app-order'">Order</button>

    <!-- <app-menu v-if="selectedComponent === 'app-menu'"/>
    <app-order v-else /> -->
    <keep-alive>
      <component :is="selectedComponent" />
    </keep-alive>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Menu from './components/items/Menu.vue';
import Orders from './components/orders/Orders.vue';

const App = defineComponent({
  name: 'App',
  components: {
    appMenu: Menu,
    appOrder: Orders
  },
  data(){
    return {
      selectedComponent: 'app-menu'
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

button {
  margin-top: 10px;
  background-color: yellow;
  border: none;
  padding: 10px;
  font-weight: 700;
  cursor: pointer;
}
</style>
