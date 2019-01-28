// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import jQuery from 'jquery'
import VueFire from 'vuefire'
import Vuetify from 'vuetify'

Vue.use(VueFire)
Vue.use(BootstrapVue)
Vue.use(Vuetify)
Vue.config.productionTip = false

jQuery(document).ready(
    new Vue({
        el: '#app',
        router,
        template: '<App/>',
        components: {
            App
        }
    })
)