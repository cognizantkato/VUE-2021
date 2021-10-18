import { MenuItem } from "@/interfaces/MenuItem";

export function getItems(): Promise<MenuItem[]> {
  return new Promise((resolve, reject) => {
    const items = [
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
    ];

    setTimeout(() => {
      resolve(items);
    }, 3000);
  });
}