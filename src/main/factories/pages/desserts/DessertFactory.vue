<script setup lang="ts">
import CardContainer from '../../../../presentation/components/CardContainer.vue';
import { MakeOrderAdapter } from '../../cache/orderAdapterFactory';
import { CardData } from '../../../../domain/models/cardData';
import { OrderType } from '../../../../domain/models/orderType';
import { onMounted, reactive } from 'vue';
import { MakeDessertsQuery } from '../../usecases/DessertsFactory';

const orderAdapter = MakeOrderAdapter();
const onAdd = (data: CardData) => orderAdapter.add(OrderType.DESSERTS, data);

const state: { cards: Array<CardData> } = reactive({
  cards: []
})

onMounted(async () => {
  try {
    const response = await MakeDessertsQuery().get();
    state.cards = response.map(dessert => ({ ...dessert, image: [dessert.image]}));
  } catch (error) {
    console.error('Error fetching desserts:', error);
  }
});
</script>

<template>
  <h2>Our Desserts</h2>
  <CardContainer v-bind:card-list="state.cards" v-on:add="onAdd" />
</template>

<style scoped>
</style>
