<script setup lang="ts">
import ItemCard from '/src/presentation/components/ItemCard.vue'

const cardDataExample = {
    data: {
        id: 1,
        image: "https://files.menudino.com/cardapios/37486/222.jpg",
        title: "DARK",
        description: "Um delicioso smash 100gr, blue cheese, cebola crispy, melado de cana e maionese especial. Tudo isso dentro de um pão Australiano.",
        value: 40
    },
    onAdd: (data: object) => { console.log('Add', data) },
    onRemove: (data: object) => { console.log('Remove', data) },
    count: 0
};

</script>

<template>
    <v-app>

        <v-app-bar :elevation="24" rounded>
            <template v-slot:prepend>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </template>

            <v-app-bar-title>Application Bar</v-app-bar-title>
        </v-app-bar>

        <router-view />

        <ItemCard v-bind="cardDataExample" />
    </v-app>
</template>