import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import routers from './routes'
import store from './store/index'

import 'animate.css'
import './assets/scss/main.scss'

const app = createApp(App)

app.use(routers)

app.use(store)

app.use(MotionPlugin)


app.mount('#app')

