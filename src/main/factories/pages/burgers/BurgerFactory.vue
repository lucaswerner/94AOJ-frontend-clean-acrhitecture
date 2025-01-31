<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { CardData } from '../../../../domain/models/cardData';
import { OrderType } from '../../../../domain/models/orderType';
import CardContainer from '../../../../presentation/components/CardContainer.vue';
import { MakeOrderAdapter } from '../../cache/orderAdapterFactory';
import { MakeHamburgersQuery } from '../../usecases/HamburgersFactory';

const orderAdapter = MakeOrderAdapter();
const onAdd = (data: CardData) => orderAdapter.add(OrderType.HAMBURGERS, data);

const state: { cards: Array<CardData> } = reactive({
  cards: []
})

onMounted(async () => {
  try {
    const response = await MakeHamburgersQuery().get();
    state.cards = response.map(burger => ({ ...burger, value: burger.values.combo }));
  } catch (error) {
    console.error('Error fetching burgers:', error);
  }
});
</script>

<template>
  <h2>Our Burgers</h2>
  <CardContainer v-bind:card-list="state.cards" v-on:add="onAdd" />
</template>

<style scoped></style>
