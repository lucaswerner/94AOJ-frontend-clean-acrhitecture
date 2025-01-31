<script setup lang="ts">
import { useRouter } from 'vue-router';
import { MakeShoppingCartDecorator } from '../factories/decorators/shoppingCartDecoratorFactory';

const router = useRouter();

const redirectToCart = () => {
    router.push({ name: 'ShoppingCart' });
}

const shoppingCartDecorator = MakeShoppingCartDecorator();

</script>

<template>
    <v-app>
        <v-navigation-drawer app>
            <v-list>
                <v-list-item-group>
                    <v-list-item @click="$router.push('/home')">
                        <v-list-item-content>
                            <v-list-item-title>Home</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item @click="$router.push('/burgers')">
                        <v-list-item-content>
                            <v-list-item-title>Burgers</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item @click="$router.push('/appetizers')">
                        <v-list-item-content>
                            <v-list-item-title>Porções</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item @click="$router.push('/beverages')">
                        <v-list-item-content>
                            <v-list-item-title>Bebidas</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item @click="$router.push('/desserts')">
                        <v-list-item-content>
                            <v-list-item-title>Sobremesas</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <v-main class="router-wrapper">
            <router-view />
            <v-btn class="shop-cart-btn" stacked @click="redirectToCart()">
                <!-- <v-badge color="red" v-bind:content="shoppingCartDecorator.getShoppingCartItems().length"> -->
                    <v-icon>mdi-cart</v-icon>
                <!-- </v-badge> -->
            </v-btn>
        </v-main>
    </v-app>
</template>

<style scoped>
.router-wrapper {
    position: relative;
}

.shop-cart-btn {
    position: absolute;
    top: 5em;
    right: 2em;
}
</style>