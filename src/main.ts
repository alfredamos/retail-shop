import App  from "./App.vue";
import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbootstrap/css/mdb.min.css";
//import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import { VueQueryPlugin } from "@tanstack/vue-query";

 

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router);
app.use(VueQueryPlugin)

app.mount('#app')
