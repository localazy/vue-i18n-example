import Vue from 'vue'
import App from './App.vue'
import VueI18n from "vue-i18n";
import en from "../translations/en.json";
import de from "../translations/de.json";


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
