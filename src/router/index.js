import Vue from 'vue'
import Router from 'vue-router'
import immovables from '@/components/page/immovables.vue'
import overallSituation from '@/components/page/overall-situation'
import publicEnergySave from '@/components/page/public-energy-save'
import partyBuildingManage from '@/components/page/party-building-manage'
import governmentCar from '@/components/page/government-car'
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: '/government',
  routes: [{
    path: '/',
    name: '/',
    redirect: '/overall-situation'
  },
  {
    path: '/immovables',
    name: 'immovables',
    component: immovables
  },
  {
    path: '/overall-situation',
    name: 'overallSituation',
    component: overallSituation
  },
  {
    path: '/public-energy-save',
    name: 'publicEnergySave',
    component: publicEnergySave
  },
  {
    path: '/party-building-manage',
    name: 'partyBuildingManage',
    component: partyBuildingManage
  },
  {
    path: '/government-car',
    name: 'governmentCar',
    component: governmentCar
  }
  ]
})
