import { createApp } from "vue"
import App from "./main/app/App.vue"
import router from "./main/router/router"
import vuetify from "./plugins/vuetify"

createApp(App).use(router).use(vuetify).mount("#app")