import { createApp } from 'vue'
import App from './App.vue'
import '../public/style.css'
import router from './router'

// VueSweetalert2
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const app = createApp(App).use(router);
app.use(VueSweetalert2);
app.mount('#app')
