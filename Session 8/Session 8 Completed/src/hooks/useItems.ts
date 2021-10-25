import { MenuItem } from "@/interfaces/MenuItem";
import { getItems } from "@/services/ItemService";
import { computed, ref } from "vue";

const useItems = (emptyListDisplayString: string) => {
  const items = ref<MenuItem[]>([]);

  const itemCount = computed((): number | string => {
    return items.value.length > 0 ? 
          items.value.length : emptyListDisplayString;
  })

  const anotherSetOfItems = ref<MenuItem[]>([]);
  const pushToItems = (value: MenuItem) => {
    anotherSetOfItems.value.push(value);
  }

  getItems().then(r => {
    items.value = r
  })

  return {
    items,
    itemCount,
    anotherSetOfItems,
    pushToItems
  }
}

export default useItems;