// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import vueMethodsPromise from 'vue-methods-promise'

import Loading from './components/loading'
Vue.use(Loading)
Vue.use(vueMethodsPromise, {
  hookName: '$promise', // Component default hook name
  promise: (mp) => { // Promise callback
    mp
      .catch(function (err) {
        console.log(mp)
      })
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
