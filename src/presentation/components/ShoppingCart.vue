<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { ShoppingCartData } from '../../domain/models/shoppingCartData';

const props = defineProps<{
    data: ShoppingCartData,
    onAdd: (data: ShoppingCartData) => void,
    onSubtractOne: (data: ShoppingCartData) => void,
    onRemove: (data: ShoppingCartData) => void
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
        <v-card class="card" variant="tonal" v-bind="props">
            <v-row class="image-row">
                <v-col>
                    <v-carousel :show-arrows="false" hide-delimiters cycle>
                        <v-carousel-item v-for="(image, index) in data.image" :key="index">
                            <v-img v-if="!imageError[index]" max-width="500" :src="image"
                                @error="handleImageError(index)"></v-img>
                            <v-img v-else class="image-overlay" max-width="500"
                                src="src/assets/no-image-available.jpg"></v-img>
                        </v-carousel-item>
                    </v-carousel>
                </v-col>
                <v-col>
                    <v-row>
                        <v-card-title class="title">
                            <span>{{ data.title }}</span>
                            <span><v-btn variant="text" icon="mdi-delete" @click="onRemove(data)"></v-btn></span>
                        </v-card-title>
                    </v-row>
                    <v-row>
                        <v-card-text class="description">{{ data.description }}</v-card-text>
                    </v-row>
                    <v-row>
                        <v-card-actions>
                            <v-col>
                                <div class="option-wrapper d-flex justify-start">
                                    <v-btn icon="mdi-minus-circle" @click="onSubtractOne(data)"></v-btn>
                                </div>
                            </v-col>
                            <v-col>
                                <span>{{ data.count }}</span>
                            </v-col>
                            <v-col>
                                <div class="option-wrapper d-flex justify-start">
                                    <v-btn icon="mdi-plus-circle" @click="onAdd(data)"></v-btn>
                                </div>
                            </v-col>
                            <v-col>
                                <div class="price-wrapper">
                                    <label class="currency price">R$</label>
                                    <span class="price">{{ formatNumber(data.value) }}</span>
                                </div>
                            </v-col>
                        </v-card-actions>
                    </v-row>
                </v-col>
            </v-row>
        </v-card>
    </v-hover>
</template>

<style scoped>
.title {
    padding-top: 25px;
    padding-bottom: 0px;
    font-size: 25px;
    font-family: Roboto, sans-serif;
    margin-right: 5px;
}

.card {
    margin-top: 10px;
    margin-bottom: 10px;
}

.description {
    min-height: 125px;
    max-height: 40px;
    font-size: 15px;
}

.image-row {
    min-height: 250;
    max-height: 300px;
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

.v-card-title.title {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
</style>
