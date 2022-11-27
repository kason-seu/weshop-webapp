import { createApp } from 'vue'

import App from './App.vue'
import ElementPlus from 'element-plus'
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'

import router from './router/index.js'
import 'amfe-flexible'

const app = createApp(App)
app.use(ElementPlus)
//axios.defaults.baseURL = 'http://localhost:8081'
app.config.globalProperties.$http=axios
app.use(router)
app.mount('#app')
