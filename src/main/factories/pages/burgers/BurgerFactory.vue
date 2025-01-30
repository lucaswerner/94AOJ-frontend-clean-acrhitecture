<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { CardData } from '../../../../domain/models/cardData';
import { OrderType } from '../../../../domain/models/orderType';
import CardContainer from '../../../../presentation/components/CardContainer.vue';
import { MakeOrderAdapter } from '../../cache/orderAdapterFactory';
import { MakeHamburgersQuery } from '../../usecases/HamburgersFactory';

const orderAdapter = MakeOrderAdapter();
const onAdd = (data: CardData) => orderAdapter.add(OrderType.HAMBURGERS, data);

const state: { posts: Array<CardData> } = reactive({
  posts: []
})

onMounted(async () => {
  try {
    const response = await MakeHamburgersQuery().get();
    state.posts = response.map(burger => ({ ...burger, value: burger.values.combo }));
  } catch (error) {
    console.error('Error fetching jobs:', error);
  }
});
</script>

<template>
  <CardContainer v-bind:card-list="state.posts" v-on:add="onAdd" />
</template>

<style scoped></style>
