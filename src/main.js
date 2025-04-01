import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createStore } from 'vuex';
import auth from './store/auth';

const store = createStore({
  modules: {
    auth,
  },
});

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');