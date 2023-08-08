import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import './assets/main.css'

import 'animate.css/animate.compat.css';

createApp(App)
    .use(vuetify)
    .mount('#app')
