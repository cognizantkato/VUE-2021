import { MenuItem } from "@/interfaces/MenuItem";
import { InjectionKey, Ref } from "vue";

export const ItemsKey: InjectionKey<Ref<MenuItem[]>> = Symbol('items-key');
export const SetItemActiveKey: InjectionKey<(id: number) => void> = Symbol('setItemActive');