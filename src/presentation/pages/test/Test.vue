<script setup lang="ts">
import { CardData } from '../../components/Card.vue';
import CardContainer from '../../components/CardContainer.vue';

const items: Array<CardData> = [
    {
        id: 1,
        image: "https://files.menudino.com/cardapios/37486/232.jpg",
        title: "PUDIM DOS DEUSES",
        description: "Um delicioso Pudim dos deuses 130gr.",
        value: 14
    },
    {
        id: 2,
        image: "https://files.menudino.com/cardapios/37486/156.jpg",
        title: "SWEET FRIES",
        description: "Batatas sequinhas de 7mm cobertas com um delicioso creme de avelã e paçoca... Você vai se surpreender!",
        value: 22
    },
    {
        id: 3,
        image: "https://files.menudino.com/cardapios/37486/127.jpg",
        title: "SWEET BURGER",
        description: "Mini pão brioche bem fofinho, creme de avelã cremoso e pedaços de morango fresquinhos. Finalizado com leite ninho.",
        value: 14
    }
];
</script>

<template>
    <CardContainer v-bind:items="items" />
</template>

<style scoped></style>