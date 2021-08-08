import '@babel/polyfill'
import 'mutationobserver-shim'
// import './plugins/bootstrap-vue'
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


createApp(App).mount('#App')
