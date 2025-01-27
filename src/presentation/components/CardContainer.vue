<script setup lang="ts">
import { defineProps } from 'vue';
import { CardData } from '../../domain/models/cardData';
import { OrderType } from '../../domain/models/orderType';
import { OrderAdapter } from '../../main/adapters';
import Card from './Card.vue';

const props = defineProps<{
    items: Array<CardData>
}>()

function onAdd(cardData: CardData) {
    console.log('onAdd', cardData);
}

function onRemove(cardData: CardData) {
    console.log('onRemove', cardData);
}

let count = 0;

const orderAdapter = new OrderAdapter();
console.log('order', orderAdapter.get());

orderAdapter.add(OrderType.HAMBURGERS, props.items[0]);

console.log('order', orderAdapter.get());

</script>

<template>
    <v-row>
        <v-col v-for="(item, i) in items" :key="i" cols="12" md="4">
            <Card v-bind:data="item" v-bind:count="count" v-on:add="onAdd" v-on:remove="onRemove" />
        </v-col>
    </v-row>
</template>