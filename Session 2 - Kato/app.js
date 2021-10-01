const app = Vue.createApp({
    data() {
        return {
            orderHeader: 'My Orders',
            orders: [
                { name: 'Burger', count: 1},
                { name: 'Coke', count: 1}
            ],
            order:'',
            disabledAddButton: true
        }
    },
    methods: {
        addOrder() {
            this.orders.push({name: this.order, count:1});
        },
        increment(name) { 
            const order = this.orders.find(o => o.name === name);
            order.count++;
        },
        decrement(name) { 
            const order = this.orders.find(o => o.name === name);
            order.count--;
            if (order.count <= 0) {
                this.orders = this.orders.filter(o => o.name !== name);
            }
        }
    },
    computed: {
        disabledAdd() { 
            return this.order === '';
        },
        outputTotalOrders() { 
            return this.orders.map(o => o.count).reduce((a,b) => a+b, 0);
        }
    },
    watch: {
        order(value) { 
            if (value !== '') 
                this.disabledAddButton = false;
            else 
                this.disabledAddButton = true;
        }
    }

});

app.mount('#my-orders');