import '@babel/polyfill'
import 'mutationobserver-shim'
// import './plugins/bootstrap-vue'
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'


window.$ = window.jQuery = require('jquery');

const app = createApp(App).use(router)
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios).mount('#App')
