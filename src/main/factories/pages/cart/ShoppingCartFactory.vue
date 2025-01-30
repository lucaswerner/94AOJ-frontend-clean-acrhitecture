<script setup lang="ts">
import ShoppingCart from '../../../../presentation/components/ShoppingCart.vue';
// import { cardDataList } from '../../../../data/shoppingCartData';
// import { MakeOrderAdapter } from '../../cache/orderAdapterFactory';
// import { Order } from '../../../../domain/models/order';
import { reactive } from 'vue';
import { MakeShoppingCartDecorator } from '../../decorators/shoppingCartDecoratorFactory';
import { ShoppingCartData } from '../../../../domain/models/shoppingCartData';

const shoppingCartDecorator = MakeShoppingCartDecorator();

const state: { cartItems: Array<ShoppingCartData> } = reactive({
  cartItems: shoppingCartDecorator.getShoppingCartItems()
})

console.log(shoppingCartDecorator.getShoppingCartItems());

const addItem = (data: ShoppingCartData): void => {
  shoppingCartDecorator.add(data);
  state.cartItems = shoppingCartDecorator.getShoppingCartItems();
}

const onSubtractOne = (data: ShoppingCartData): void => {
  shoppingCartDecorator.subtractOne(data);
  state.cartItems = shoppingCartDecorator.getShoppingCartItems();
}

const onRemove = (data: ShoppingCartData): void => {
  shoppingCartDecorator.remove(data);
  state.cartItems = shoppingCartDecorator.getShoppingCartItems();
}

const sumAllValues = (items: Array<ShoppingCartData>): string => {
  return items.reduce((acc, { value, count }) => {
    acc += (value * count);
    return acc;
  }, 0)
    .toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

</script>

<template>
  <header>
    <h1>The Mixed Burger</h1>
  </header>
  <main>
    <section id="menu">
      <h2>Shopping Cart</h2>
      <div>
        <ShoppingCart v-for="cardData in state.cartItems" :key="cardData.id" v-bind:data="cardData"
          v-bind:on-add="() => addItem(cardData)" v-bind:on-subtract-one="() => onSubtractOne(cardData)"
          v-bind:on-remove="() => onRemove(cardData)" />
      </div>
      <div>
        <h1 class="total-right">
          Total: R$ {{ sumAllValues(state.cartItems) }}
        </h1>
      </div>
    </section>
  </main>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f8f8;
}

header {
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
}

main {
  padding: 2rem;
}

#menu {
  max-width: 1000px;
  margin: 0 auto;
}

.total-right {
  text-align: right;
}
</style>
