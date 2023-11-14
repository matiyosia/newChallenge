import { registerPlugins } from '@/plugins'
import { store } from './store/store'

// Components
import App from './App.vue'
import './assets/sass/index.scss'
// Composables
import { createApp } from 'vue'

const app = createApp(App)

app.use(store)
registerPlugins(app)

app.mount('#app')
