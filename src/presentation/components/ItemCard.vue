<script setup lang="ts">
import { defineProps } from 'vue'

type ItemData = {
    id: number,
    image: string,
    title: string,
    description: string
    value: number
}

defineProps<{
    data: ItemData,
    onAdd: (data: ItemData) => void,
    onRemove: (data: ItemData) => void
    count: number
}>()

function formatNumber(numberValue: number = 0) {
    return numberValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
</script>

<template>
    <v-hover v-slot="{ isHovering, props }">
        <v-card variant="tonal" v-bind="props">
            <v-row class="image-row">
                <v-col>
                    <v-carousel :show-arrows="false" hide-delimiters cycle>
                        <v-carousel-item v-for="(image, index) in data.image" :key="index">
                            <v-img :src="image" class="image-overlay"></v-img>
                        </v-carousel-item>
                    </v-carousel>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-card-title>{{ data.title }}</v-card-title>
                    <v-card-text>{{ data.description }}</v-card-text>
                </v-col>
            </v-row>
            <v-card-actions>
                <div class="price-wrapper">
                    <label class="currency">R$</label>
                    <span class="price">{{ formatNumber(data.value) }}</span>
                </div>

                <div class="option-wrapper">
                    <v-btn icon="mdi-minus-circle" @click="onRemove(data)"></v-btn>
                </div>
            </v-card-actions>
        </v-card>
    </v-hover>
</template>

<style scoped>
.image-row {
    max-height: 180px;
    overflow: hidden;
}

.image-overlay {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
}

.v-card-actions {
    display: flex;
    justify-content: space-between;
}

.price-wrapper .currency {
    font-size: 15px;
    font-family: Roboto, sans-serif;
    margin-right: 5px;
}

.price-wrapper .price {
    font-size: 20px;
    font-weight: 800;
}

.option-wrapper .count {
    padding: 0 15px;
}
</style>