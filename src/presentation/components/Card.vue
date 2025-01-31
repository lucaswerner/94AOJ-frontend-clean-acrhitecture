<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { CardData } from '../../domain/models/cardData';

const props = defineProps<{
    data: CardData,
    onAdd: (data: CardData) => void
}>()

const imageError = ref<boolean[]>(props.data.image.map(() => false));

function handleImageError(index: number) {
    imageError.value[index] = true;
}

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
                            <v-img v-if="!imageError[index]" class="image-overlay" height="300" max-width="500" :src="image" @error="handleImageError(index)"></v-img>
                            <v-img v-else class="image-overlay" height="300" max-width="500" src="src/assets/no-image-available.jpg"></v-img>
                        </v-carousel-item>
                    </v-carousel>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-card-title>{{ data.title }}</v-card-title>
                    <v-card-text class="description">{{ data.description }}</v-card-text>
                </v-col>
            </v-row>
            <v-card-actions>
                <div class="price-wrapper">
                    <label class="currency">R$</label>
                    <span class="price">{{ formatNumber(data.value) }}</span>
                </div>

                <div class="option-wrapper">
                    <v-btn icon="mdi-cart" @click="onAdd(data)"></v-btn>
                </div>
            </v-card-actions>
        </v-card>
    </v-hover>
</template>

<style scoped>
.description {
    min-height: 100px;
    max-height: 100px;
}

.image-row {
    max-height: 180px;
    overflow: hidden;
}

.image-overlay {
    max-width: 100%;
    height: initial !important;
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
