// const buttonEl = document.querySelector('button');
// const orderInput = document.querySelector('input');
// const orderItemList = document.querySelector('ul');

// function addOrder() {
//   const order = orderInput.value;
//   const orderItem = document.createElement('li');
//   orderItem.textContent = order;
//   orderItemList.appendChild(orderItem);
//   orderInput.value = '';
// }

// buttonEl.addEventListener('click', addOrder);

const app = Vue.createApp({
  data() {
    return {
      appTitle: "Orders Application",
      orders: [],
      order: "",
      disabledAdd: true,
    };
  },
  methods: {
    addOrder() {
      this.orders.push(this.order);
      this.order = "";
    },
  },
  watch: {
    order(value) {
      if (value != "") {
        this.disabledAdd = false;
      } else {
        this.disabledAdd = true;
      }
    },
  },
  computed: {
    disabledAddButton() {
      return this.order == "";
    },
  },
});

app.mount("#app");
