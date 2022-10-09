import {createApp} from 'vue'
import App from './App.vue'
import {MotionPlugin} from '@vueuse/motion'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import VueScrollTo from 'vue-scrollto';

createApp(App)
.use(MotionPlugin)
.use(VueScrollTo, {
    container: "body",
    duration: 300,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})
.mount('#app')
