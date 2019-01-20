// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import InvoiceForm from './InvoiceForm'
import InvoiceFooter from './InvoiceFooter'
import InvoiceHeader from './InvoiceHeader'

Vue.config.productionTip = false
Vue.component('InvoiceForm', InvoiceForm)
Vue.component('InvoiceFooter', InvoiceFooter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, InvoiceForm, InvoiceHeader, InvoiceFooter },
  template: '<App/>'
})
