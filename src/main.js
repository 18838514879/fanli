// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import store from './vuex/store'
import VueScroller from 'vue-scroller'
import '../static/js/adaptation.js'
import '../static/js/basil.js'
var $ = require('jquery');
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Toast } from 'mint-ui';

Vue.use(MintUI)
Vue.prototype.$Toast=Toast
Vue.prototype.$ajax = axios
Vue.prototype.$baseurl="http://192.168.1.26:8194"
Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueScroller)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
