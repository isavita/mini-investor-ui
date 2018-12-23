import Vue from 'vue'
import Router from 'vue-router'
import CampaignsPage from './views/CampaignsPage.vue'
import NewInvestmentPage from './views/NewInvestmentPage.vue'
import SuccessfulInvestmentPage from './views/SuccessfulInvestmentPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'campaigns-page',
      component: CampaignsPage
    },
    {
      path: '/investments/new',
      name: 'NewInvestmentPage',
      component: NewInvestmentPage,
      props: true
    },
    {
      path: '/investments/:id',
      name: 'SuccessfulInvestmentPage',
      component: SuccessfulInvestmentPage,
      props: true,
    }
  ]
})
