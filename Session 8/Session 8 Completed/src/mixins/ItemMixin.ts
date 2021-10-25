import { MenuItem } from '@/interfaces/MenuItem';
import { getItems } from '@/services/ItemService';
import { defineComponent } from 'vue';

const ItemMixin = defineComponent({
  data() {
    return {
      items: [] as MenuItem[]
    }
  },
  computed: {
    itemCount(): number {
      return this.items.length;
    }
  },
  created() {
    getItems().then(r => {
      this.items = r
    });
  }
});

export default ItemMixin;