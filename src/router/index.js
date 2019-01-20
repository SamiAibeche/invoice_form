import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/components/Default'
import InvoiceForm from '@/components/InvoiceForm'
import InvoiceFooter from '@/components/InvoiceFooter'
import InvoiceHeader from '@/components/InvoiceHeader'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Default',
      components: {
        default: Default,
        InvoiceFooter: InvoiceFooter,
        InvoiceHeader: InvoiceHeader
      }
    },
    {
      path: '/invoice',
      name: 'invoice-form',
      components: {
        default: InvoiceForm,
        InvoiceFooter: InvoiceFooter,
        InvoiceHeader: InvoiceHeader
      }
    }
  ]
})
