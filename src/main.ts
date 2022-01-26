import { createApp } from 'vue';
import App from './App.vue';
import './style/global.scss';
import router from "@/router/index";
import Card from "@/components/card.vue";
import "./resize";

const app = createApp(App);
app.use(router);
app.component('s-card', Card);
app.mount('#app')
