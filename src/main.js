// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/**
 * 这个地方，配了按需引入的规则，就不能再写全量引入了
 */
import MyComponents from 'my-component'

Vue.use(MyComponents)

/**
* 只有配了按需引入的规则，按需引入才会生效
*/
// import {
//   // MyButton,
//   MyToast
// } from 'my-component'

// // Vue.use(MyButton)
// Vue.use(MyToast)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
