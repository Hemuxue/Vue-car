import Vue from 'vue'
import Router from 'vue-router'
import Login from 'pages/login/login.vue'
import Statistics from 'pages/statistics/statistics'
import Person_reg from 'pages/Person/person_register'
import Person_search from 'pages/Person/person_search'
import Person_updata from 'pages/Person/person_updata'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'login',
      path: '/',
      component: Login
    },{
      name:'Sta',
      path:'/sta',
      component: Statistics
    },{
      name:'person_reg',
      path:'/person_reg',
      component: Person_reg
    },{
      name:'person_search',
      path:'/person_search',
      component:Person_search
    },{
      name:'person_updata',
      path:'/person_updata',
      component:Person_updata
    }

  ]
})
