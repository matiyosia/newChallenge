import App from './App.vue'
// Composables
import { createApp } from 'vue'
import { registerPlugins } from './plugins'
import { store } from './store/store'

const app = createApp(App)

app.use(store)
registerPlugins(app)

app.mount('#app')
