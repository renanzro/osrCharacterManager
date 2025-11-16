import { createApp } from 'vue';
import App from './App.vue';
import router from './plugins/router';
import i18n from './plugins/i18n';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark'
  }
});

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.use(i18n);
app.mount('#app');
