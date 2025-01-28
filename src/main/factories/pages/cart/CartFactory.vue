<template>
    <div class="cart">
        <h2>Your Shopping Cart</h2>
        <ul>
            <li v-for="item in cartItems" :key="item.id">
                {{ item.name }} - {{ item.price }}
                <button @click="removeItem(item.id)">Remove</button>
            </li>
        </ul>
        <div v-if="cartItems.length > 0">
            <p>Total: {{ totalPrice }}</p>
            <button @click="checkout">Checkout</button>
        </div>
        <div v-else>
            <p>Your cart is empty.</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cartItems: []
        };
    },
    computed: {
        totalPrice() {
            return this.cartItems.reduce((total, item) => total + item.price, 0);
        }
    },
    methods: {
        addItem(item) {
            this.cartItems.push(item);
        },
        removeItem(itemId) {
            this.cartItems = this.cartItems.filter(item => item.id !== itemId);
        },
        checkout() {
            // Implement checkout logic here
            alert('Proceeding to checkout');
        }
    }
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f9fa;
}

#app {
  padding: 20px;
}

.cart-container {
  max-width: 800px;
  margin: 0 auto;
  background: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.cart-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}

.cart-item:last-child {
  border-bottom: none;
}

.cart-item img {
  max-width: 100px;
  margin-right: 20px;
}

.cart-item-details {
  flex: 1;
}

.cart-item-price {
  font-size: 1.2em;
  font-weight: bold;
}

.cart-total {
  text-align: right;
  font-size: 1.5em;
  margin-top: 20px;
}
</style>