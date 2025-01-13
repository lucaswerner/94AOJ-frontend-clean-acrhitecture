<template>
    <v-app>

        <v-app-bar :elevation="24" rounded>
            <template v-slot:prepend>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </template>

            <v-app-bar-title>Application Bar</v-app-bar-title>
        </v-app-bar>

        <router-view />
    </v-app>
</template>