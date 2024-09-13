import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0)
})
app.use(router)

app.mount('#app')
