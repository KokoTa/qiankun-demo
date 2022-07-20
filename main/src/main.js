import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/config/qiankun'

createApp(App).use(ElementPlus).use(router).mount('#app')
