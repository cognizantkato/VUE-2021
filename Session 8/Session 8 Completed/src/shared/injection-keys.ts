import { MenuItem } from './../interfaces/MenuItem';
import { InjectionKey } from 'vue';

export const ItemsKey: InjectionKey<MenuItem[]> = Symbol('items-key');
export const SetItemActiveKey: InjectionKey<(id: number) => void> = Symbol('setItemActive');