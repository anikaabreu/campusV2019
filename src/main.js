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
import 'vuetify/src/stylus/app.styl'
import Vuex from 'vuex'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'


Vue.use(VueFire)
Vue.use(BootstrapVue)
Vue.use(Vuetify, {
    iconfont: 'mdi'
})
Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
    state: {
        login: false
    }
})
jQuery(document).ready(
    new Vue({
        el: '#app',
        store: store,
        router,
        template: '<App/>',
        components: {
            App

        },
    })

)