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
import Vue2Filters from 'vue2-filters'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'


Vue.use(VueFire)
Vue.use(BootstrapVue)
Vue.use(Vuetify, {
    iconfont: 'mdi'
})
Vue.use(Vue2Filters)

Vue.config.productionTip = false

jQuery(document).ready(
    new Vue({
        el: '#app',
        router,
        template: '<App/>',
        components: {
            App
        },
        mixins: [Vue2Filters.mixin]
    })
)