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
        <v-navigation-drawer app>
            <v-list>
                <v-list-item-group>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Home</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Combos</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Burgers</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Porções</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Bebidas</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Sobremesas</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>                                                                                
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>