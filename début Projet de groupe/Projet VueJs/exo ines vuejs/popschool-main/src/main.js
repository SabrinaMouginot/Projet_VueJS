import Vue from 'vue' //sans ça , ça ne fonctionne pas
import App from './App.vue'
//main.js intialise tout
//l'index structure la page
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app') // pour monter le projet sur app où il y a id app
//rien toucher dans cette partie
