<script setup lang="ts">
import { defineProps } from 'vue';
import { CardData } from '../../domain/models/cardData';
import Card from './Card.vue';

defineProps<{
  cardList: Array<CardData>;
  onAdd: (data: CardData) => void
}>()

</script>

<template>
  <header>
    <h1>The Mixed Burger</h1>
  </header>
  <main>
    <section id="menu">
      <div class="item-card-container">
        <Card v-for="data in cardList" :key="data.id" v-bind:data="data" v-on:add="onAdd" />
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
  max-width: 800px;
  margin: 0 auto;
}

.burger {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 1rem;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.burger h3 {
  margin-top: 0;
}

.price {
  color: #e74c3c;
  font-weight: bold;
}

.item-card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  /* Adjust the gap as needed */
}
</style>
