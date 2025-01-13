import { createApp } from "vue"
import App from "./main/app/App.vue"
import router from "./main/router/router"
import vuetify from "./plugins/vuetify"

import '@mdi/font/css/materialdesignicons.css'

createApp(App).use(router).use(vuetify).mount("#app")