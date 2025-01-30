<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { CardData } from '../../../../domain/models/cardData';
import { OrderType } from '../../../../domain/models/orderType';
import CardContainer from '../../../../presentation/components/CardContainer.vue';
import { MakeOrderAdapter } from '../../cache/orderAdapterFactory';
import { MakeBeveragesQuery } from '../../usecases/BeveragesFactory';

const orderAdapter = MakeOrderAdapter();
const onAdd = (data: CardData) => orderAdapter.add(OrderType.BEVERAGES, data);

const state: { cards: Array<CardData> } = reactive({
  cards: []
})

onMounted(async () => {
  try {
    const response = await MakeBeveragesQuery().get();
    state.cards = response.map(beverage => ({...beverage, image: [beverage.image]}));
  } catch (error) {
    console.error('Error fetching beverages:', error);
  }
});
</script>

<template>
   <h2>Our Beverages</h2>
  <CardContainer v-bind:card-list="state.cards" v-on:add="onAdd" />
</template>

<style scoped></style>
