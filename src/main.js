import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import './assets/main.css'

import 'animate.css';



createApp(App)
    .use(vuetify)
    .mount('#app')
