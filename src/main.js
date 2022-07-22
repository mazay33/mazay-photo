import { createApp } from 'vue'
import App from './App.vue'
import routers from './routes'
import store from './store/index'

import './assets/scss/main.scss'
import 'aos/dist/aos.css'

const app = createApp(App)
app.use(routers)

app.use(store)

app.mount('#app')


