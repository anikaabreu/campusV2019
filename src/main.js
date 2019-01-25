// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import jQuery from 'jquery'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

jQuery(document).ready(
    new Vue({
        el: '#app',
        router,
        template: '<App/>',
        components: {
            App
        },
        created: function() {
            // window.PDK.init({
            //     appId: 5011742029283009316,
            //     cookie: true
            // })
            console.log('created')
        }
    })
)