import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import vue3GoogleLogin from 'vue3-google-login'
import router from './router'
import './index.css'
import App from './App.vue'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(vue3GoogleLogin, {
  clientId: '645806552188-2fg3ddm95qft6ca3cpqd6934evp7jbce.apps.googleusercontent.com'
})
app.mount('#app')
