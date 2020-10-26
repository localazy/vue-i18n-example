import Vue from 'vue'
import App from './App.vue'
import VueI18n from "vue-i18n";
import en from "../src/assets/locales/en.json";
import de from "../src/assets/locales/de.json";


const messages = {
    en,
    de
}

Vue.use(VueI18n);
const i18n = new VueI18n({
    locale: 'de',
    messages
})


Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
