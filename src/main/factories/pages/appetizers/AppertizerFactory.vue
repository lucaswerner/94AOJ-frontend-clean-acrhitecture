<script setup lang="ts">
import CardContainer from '../../../../presentation/components/CardContainer.vue';
import { CardData } from '../../../../domain/models/cardData';
import { onMounted, reactive } from 'vue';
import { MakeOrderAdapter } from '../../cache/orderAdapterFactory';
import { OrderType } from '../../../../domain/models/orderType';
import { MakeAppetizersQuery } from '../../usecases/AppetizersFactory';

const orderAdapter = MakeOrderAdapter();
const onAdd = (data: CardData) => orderAdapter.add(OrderType.APPETIZERS, data);
const state: { cards: Array<CardData> } = reactive({
  cards: []
})

onMounted(async () => {
  try {
    const response = await MakeAppetizersQuery().get();
    state.cards = response.map(appetizer => ({ ...appetizer, image: [appetizer.image], value: appetizer.values.small }));
  } catch (error) {
    console.error('Error fetching appetizers:', error);
  }
});
</script>

<template>
  <h2>Our Appetizers</h2>
  <CardContainer v-bind:card-list="state.cards" v-on:add="onAdd" />
</template>

<style scoped>
</style>
