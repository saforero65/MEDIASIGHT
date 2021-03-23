import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Firebase from 'firebase'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import store from "./store";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

let app = null
Firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
    }
})