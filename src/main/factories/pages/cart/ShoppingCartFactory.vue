<script setup lang="ts">
import ShoppingCart from '../../../../presentation/components/ShoppingCart.vue';
import { cardDataList } from '../../../../data/shoppingCartData';
</script>

<template>
  <header>
    <h1>The Mixed Burger</h1>
  </header>
  <main>
    <section id="menu">
      <h2>Shopping Cart</h2>
      <div>
        <ShoppingCart v-for="cardData in cardDataList" :key="cardData.data.id" v-bind="cardData" />
      </div>
      <div>
        <h1 class="total-right">
          Total: R$ 2323,23
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
