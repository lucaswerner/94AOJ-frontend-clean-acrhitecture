<script setup lang="ts">
import { cardDataList } from '../../../../data/burgerData';
import { CardData } from '../../../../domain/models/cardData';
import { OrderType } from '../../../../domain/models/orderType';
import CardContainer from '../../../../presentation/components/CardContainer.vue';
import { MakeOrderAdapter } from '../../cache/orderAdapterFactory';

const orderAdapter = MakeOrderAdapter();
const onAdd = (data: CardData) => orderAdapter.set(OrderType.HAMBURGERS, data);
</script>

<template>
  <CardContainer v-bind:card-list="cardDataList" v-on:add="onAdd" />
</template>

<style scoped></style>
