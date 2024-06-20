import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {Quasar,Dialog} from 'quasar'

import App from './App.vue'
import router from './router'

import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'


const app = createApp(App)

app.use(router)
app.use(Quasar,{
    plugins:{Dialog},
})
app.use(createPinia())


app.mount('#app')
