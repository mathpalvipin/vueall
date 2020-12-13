import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';
import card from './components/card.vue';


const app = createApp(App);

app.component('base-badge', BaseBadge);
app.component('card-base', card);


app.mount('#app');
