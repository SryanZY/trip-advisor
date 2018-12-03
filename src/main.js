import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import './common/stylus/index.styl'
import RouterFunction from './router/router'

Vue.use(VueRouter)

const router = RouterFunction()

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
