// import './assets/main.css'

import './sass/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './vuex/store.js'

const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')
